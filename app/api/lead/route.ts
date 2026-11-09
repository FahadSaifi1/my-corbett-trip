import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import crypto from "crypto";
import { businessConfig } from "@/content/config";

// Zod Schema for validation
const leadSchema = z.object({
  travelMonth: z.string().min(1, "Travel month is required"),
  adults: z.number().int().min(1).max(30),
  children: z.number().int().min(0).max(20),
  interest: z.string().min(1, "Interest is required"),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  mobile: z.string().min(10, "Mobile number must be at least 10 digits"),
  city: z.string().min(2, "City is required"),
  email: z.string().email().optional().or(z.literal("")),
  budgetRange: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, "Consent is required under DPDP Act 2023"),
  sourceSlug: z.string().optional(),
  landingUrl: z.string().optional(),
  referrer: z.string().optional(),
});

function hashSha256(value: string): string {
  return crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

function generateLeadId(): string {
  const now = new Date();
  const yearShort = String(now.getFullYear()).slice(-2);
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const randomFour = Math.floor(1000 + Math.random() * 9000);
  return `MCT-${yearShort}${month}-${randomFour}`;
}

export async function POST(req: NextRequest) {
  try {
    const rawData = await req.json();

    // 1. Zod Validation
    const validationResult = leadSchema.safeParse(rawData);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validationResult.error.flatten().fieldErrors,
          message: "Please complete all required fields accurately.",
        },
        { status: 400 }
      );
    }

    const leadData = validationResult.data;

    // 2. Normalize Indian Phone Number (+91)
    const cleanedDigits = leadData.mobile.replace(/[\s\-()]/g, "").replace(/^(\+91|0)/, "");
    if (!/^[6-9]\d{9}$/.test(cleanedDigits)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid 10-digit Indian mobile number (+91)",
        },
        { status: 400 }
      );
    }
    const normalizedMobile = `+91${cleanedDigits}`;

    // 3. Generate Unique Lead ID
    const leadId = generateLeadId();
    const timestamp = new Date().toISOString();

    console.log(`[LEAD RECEIVED] ${leadId}: ${leadData.fullName} (${normalizedMobile}) - ${leadData.interest}`);

    // 4. Downstream Dispatches (Resilient Execution: Never fail user response if downstream webhook is offline)
    const downstreamLogs: string[] = [];

    // 4a. Resend Email Dispatch (if configured)
    const leadEmailRecipient = process.env.LEAD_NOTIFY_EMAIL || businessConfig.email;
    const resendApiKey = process.env.RESEND_API_KEY;
    const resendFromEmail = process.env.RESEND_FROM_EMAIL || "My Corbett Trip Leads <onboarding@resend.dev>";

    if (resendApiKey && leadEmailRecipient) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: resendFromEmail,
            to: leadEmailRecipient,
            subject: `🐅 New Lead [${leadId}]: ${leadData.fullName} - ${leadData.interest}`,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e5e5; border-radius: 8px;">
                <h2 style="color: #2D4A3E; margin-top: 0;">🐅 New Safari Lead Received</h2>
                <p style="background: #F4EEDB; padding: 8px 12px; border-radius: 4px; font-weight: bold; color: #1F362D;">
                  Booking Ref: ${leadId}
                </p>
                <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Full Name:</td><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #111;">${leadData.fullName}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Mobile:</td><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #2D4A3E;"><a href="tel:${normalizedMobile}" style="color: #2D4A3E; text-decoration: none;">${normalizedMobile}</a> (<a href="https://wa.me/${normalizedMobile.replace('+', '')}?text=${encodeURIComponent('Hello ' + leadData.fullName + ', thank you for inquiring with My Corbett Trip regarding your ' + leadData.interest + ' safari!')}" style="color: #25D366; font-weight: bold;">WhatsApp Chat</a>)</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">City:</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${leadData.city}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Email:</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${leadData.email || "Not provided"}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Safari Interest:</td><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #C8782A;">${leadData.interest}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Travel Month:</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${leadData.travelMonth}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Travellers:</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${leadData.adults} Adults, ${leadData.children} Children</td></tr>
                  ${leadData.budgetRange ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Budget / Resort:</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${leadData.budgetRange}</td></tr>` : ''}
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Source / Campaign:</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${leadData.sourceSlug || "Direct Website"}</td></tr>
                  <tr><td style="padding: 8px 0; color: #666;">Received At:</td><td style="padding: 8px 0;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</td></tr>
                </table>
                <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee; font-size: 12px; color: #888;">
                  My Corbett Trip Lead Notification System &bull; Jim Corbett National Park Official Safari Despatch
                </div>
              </div>
            `,
          }),
        });

        const resendJson = await resendRes.json();
        if (!resendRes.ok) {
          console.error("Resend API returned error:", resendJson);
        } else {
          downstreamLogs.push("Resend email sent successfully");
        }
      } catch (err) {
        console.error("Resend error:", err);
      }
    }

    // 4b. Telegram Alert (if configured)
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      try {
        const text = `🚨 *New Corbett Lead [${leadId}]*\n\n*Name:* ${leadData.fullName}\n*Phone:* ${normalizedMobile}\n*City:* ${leadData.city}\n*Interest:* ${leadData.interest}\n*Travel Window:* ${leadData.travelMonth}\n*Travellers:* ${leadData.adults}A + ${leadData.children}C\n*Source:* ${leadData.sourceSlug || "Direct"}`;
        await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text,
            parse_mode: "Markdown",
          }),
        });
        downstreamLogs.push("Telegram alert dispatched");
      } catch (err) {
        console.error("Telegram error:", err);
      }
    }

    // 4c. Meta Conversions API (CAPI) Lead Event (if configured)
    if (process.env.META_PIXEL_ID && process.env.META_CAPI_TOKEN) {
      try {
        const clientIp = req.headers.get("x-forwarded-for") || "127.0.0.1";
        const userAgent = req.headers.get("user-agent") || "";
        const hashedPhone = hashSha256(cleanedDigits);
        const hashedEmail = leadData.email ? hashSha256(leadData.email) : undefined;

        await fetch(
          `https://graph.facebook.com/v19.0/${process.env.META_PIXEL_ID}/events?access_token=${process.env.META_CAPI_TOKEN}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              data: [
                {
                  event_name: "Lead",
                  event_time: Math.floor(Date.now() / 1000),
                  event_id: leadId,
                  action_source: "website",
                  user_data: {
                    ph: [hashedPhone],
                    em: hashedEmail ? [hashedEmail] : undefined,
                    client_ip_address: clientIp,
                    client_user_agent: userAgent,
                  },
                  custom_data: {
                    content_name: leadData.interest,
                    content_category: leadData.travelMonth,
                  },
                },
              ],
            }),
          }
        );
        downstreamLogs.push("Meta CAPI event dispatched");
      } catch (err) {
        console.error("Meta CAPI error:", err);
      }
    }

    // Construct Direct WhatsApp bridge URL for immediate user connection
    const prefilledText = `Hello My Corbett Trip, I just requested an itinerary on your website (Lead ID: ${leadId}) for ${leadData.interest} in ${leadData.travelMonth}. My name is ${leadData.fullName}.`;
    const whatsappRedirectUrl = `https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(
      prefilledText
    )}`;

    return NextResponse.json({
      success: true,
      leadId,
      message: "Expedition enquiry logged successfully.",
      whatsappRedirectUrl,
      downstreamStatus: downstreamLogs,
    });
  } catch (error) {
    console.error("Critical error in /api/lead:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please contact us directly via WhatsApp.",
      },
      { status: 500 }
    );
  }
}

