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
    if (process.env.RESEND_API_KEY && process.env.LEAD_NOTIFY_EMAIL) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "My Corbett Trip Leads <leads@mycorbetttrip.com>",
            to: process.env.LEAD_NOTIFY_EMAIL,
            subject: `🐅 New Lead [${leadId}]: ${leadData.fullName} - ${leadData.interest}`,
            html: `
              <h2>New Safari Lead Received: ${leadId}</h2>
              <p><strong>Name:</strong> ${leadData.fullName}</p>
              <p><strong>Phone:</strong> ${normalizedMobile}</p>
              <p><strong>City:</strong> ${leadData.city}</p>
              <p><strong>Email:</strong> ${leadData.email || "Not provided"}</p>
              <p><strong>Interest:</strong> ${leadData.interest}</p>
              <p><strong>Travel Month:</strong> ${leadData.travelMonth}</p>
              <p><strong>Party Size:</strong> ${leadData.adults} Adults, ${leadData.children} Children</p>
              <p><strong>Budget Style:</strong> ${leadData.budgetRange}</p>
              <p><strong>Source / Ad:</strong> ${leadData.sourceSlug || "Direct"}</p>
              <p><strong>Received At:</strong> ${timestamp}</p>
            `,
          }),
        });
        downstreamLogs.push("Resend email sent");
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

