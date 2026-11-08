"use client";

import React, { useState } from "react";
import { officialFees } from "@/content/fees";
import { IconShieldCheck } from "@/components/ui/CustomIcons";

export const SafariCostCalculator = () => {
  const [nationality, setNationality] = useState<"indian" | "foreign">("indian");
  const [safariType, setSafariType] = useState<"jeep" | "canter" | "frh">("jeep");
  const [selectedZone, setSelectedZone] = useState("bijrani");
  const [adults, setAdults] = useState(2);
  const [childrenUnder12, setChildrenUnder12] = useState(0);
  const [seniorCitizens, setSeniorCitizens] = useState(0);
  const [students12to18, setStudents12to18] = useState(0);

  // Calculations
  let permitCost = 0;
  let vehicleCost = 0;
  let guideCost = 0;
  let totalConcession = 0;

  if (safariType === "jeep") {
    // 1 jeep permit covers up to 6 people
    const jeepsNeeded = Math.ceil(adults / officialFees.dayJeep.maxPersonsPerJeep) || 1;
    const basePermitRate =
      nationality === "foreign"
        ? officialFees.dayJeep.permitForeigner
        : officialFees.dayJeep.permitIndian;

    permitCost = basePermitRate * jeepsNeeded;

    const zoneVehicleRate =
      officialFees.dayJeep.vehicleChargesByZone[selectedZone]?.typical || 3000;
    vehicleCost = zoneVehicleRate * jeepsNeeded;

    guideCost = officialFees.dayJeep.guideFee * jeepsNeeded;

    if (nationality === "indian") {
      totalConcession =
        seniorCitizens * officialFees.concessions.seniorCitizenDiscountPerPerson +
        students12to18 * officialFees.concessions.studentDiscountPerPerson;
    }
  } else if (safariType === "canter") {
    // Canter seat rate
    const totalPassengers = adults + childrenUnder12;
    const seatRate =
      nationality === "foreign"
        ? officialFees.canter.foreignerSeatPrice
        : officialFees.canter.indianSeatPrice;
    const gstMultiplier = 1 + officialFees.canter.gstPercentage / 100;
    permitCost = Math.round(totalPassengers * seatRate * gstMultiplier);
    vehicleCost = 0; // Included in canter ticket
    guideCost = 0; // Government guide assigned to canter
  } else if (safariType === "frh") {
    // FRH Night Stay: 1 room per 2 adults
    const roomsNeeded = Math.ceil(adults / 2) || 1;
    const baseRoomRate =
      nationality === "foreign"
        ? officialFees.frhNightStay.roomRateForeigner
        : officialFees.frhNightStay.roomRateIndianMin;
    permitCost = baseRoomRate * roomsNeeded;

    const frhVehicle =
      officialFees.frhNightStay.typicalVehicleByFrh[selectedZone] ||
      officialFees.frhNightStay.vehicleDriverChargeMin;
    vehicleCost = frhVehicle * roomsNeeded;
    guideCost = officialFees.frhNightStay.guideFeePerShift * 2 * roomsNeeded; // 2 shifts
  }

  const statutorySubtotal = Math.max(0, permitCost + vehicleCost + guideCost - totalConcession);

  return (
    <div className="bg-cream border border-sal-forest/15 p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-5 border-b border-sal-forest/10 mb-6">
        <div>
          <h3 className="font-serif text-2xl font-bold text-sal-forest">
            CTR Official Fee Calculator (2026–27)
          </h3>
          <p className="text-xs text-sal-forest/70 font-mono mt-0.5">
            {officialFees.disclaimer}
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-mono text-tiger-ochre bg-tiger-ochre/10 px-3 py-1 border border-tiger-ochre/20">
          <IconShieldCheck size={14} />
          <span>Statutory Government Ledger</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Nationality */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-medium text-sal-forest/80 mb-2">
              Traveller Nationality
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setNationality("indian")}
                className={`py-2.5 px-4 text-xs font-medium uppercase tracking-wider border cursor-pointer transition-all ${
                  nationality === "indian"
                    ? "bg-sal-forest text-cream border-sal-forest"
                    : "bg-white text-sal-forest border-sal-forest/20 hover:border-sal-forest/50"
                }`}
              >
                Indian / SAARC / OCI
              </button>
              <button
                type="button"
                onClick={() => setNationality("foreign")}
                className={`py-2.5 px-4 text-xs font-medium uppercase tracking-wider border cursor-pointer transition-all ${
                  nationality === "foreign"
                    ? "bg-sal-forest text-cream border-sal-forest"
                    : "bg-white text-sal-forest border-sal-forest/20 hover:border-sal-forest/50"
                }`}
              >
                Foreign National
              </button>
            </div>
            {nationality === "foreign" && (
              <p className="text-[11px] text-sal-forest/70 mt-1">
                Note: Under CTR rules, if any foreign traveller is on a permit, the whole permit is charged at the foreign rate.
              </p>
            )}
          </div>

          {/* Safari Type */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-medium text-sal-forest/80 mb-2">
              Safari Experience Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => {
                  setSafariType("jeep");
                  setSelectedZone("bijrani");
                }}
                className={`py-2 px-3 text-xs font-medium uppercase tracking-wider border cursor-pointer transition-all ${
                  safariType === "jeep"
                    ? "bg-sal-forest text-cream border-sal-forest"
                    : "bg-white text-sal-forest border-sal-forest/20 hover:border-sal-forest/50"
                }`}
              >
                Day Jeep
              </button>
              <button
                type="button"
                onClick={() => {
                  setSafariType("canter");
                  setSelectedZone("dhikala");
                }}
                className={`py-2 px-3 text-xs font-medium uppercase tracking-wider border cursor-pointer transition-all ${
                  safariType === "canter"
                    ? "bg-sal-forest text-cream border-sal-forest"
                    : "bg-white text-sal-forest border-sal-forest/20 hover:border-sal-forest/50"
                }`}
              >
                Canter (Dhikala)
              </button>
              <button
                type="button"
                onClick={() => {
                  setSafariType("frh");
                  setSelectedZone("dhikala");
                }}
                className={`py-2 px-3 text-xs font-medium uppercase tracking-wider border cursor-pointer transition-all ${
                  safariType === "frh"
                    ? "bg-sal-forest text-cream border-sal-forest"
                    : "bg-white text-sal-forest border-sal-forest/20 hover:border-sal-forest/50"
                }`}
              >
                FRH Night Stay
              </button>
            </div>
          </div>

          {/* Zone Selector */}
          {safariType === "jeep" && (
            <div>
              <label className="block text-xs uppercase tracking-wider font-medium text-sal-forest/80 mb-1.5">
                Target Safari Zone
              </label>
              <select
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="w-full bg-white border border-sal-forest/20 px-3 py-2 text-sm text-sal-forest focus:outline-none focus:border-sal-forest"
              >
                <option value="bijrani">Bijrani Zone (Amdanda Gate • Vehicle ₹2,700)</option>
                <option value="jhirna">Jhirna Zone (Dhela Gate • Year-Round • Vehicle ₹3,000)</option>
                <option value="dhela">Dhela Zone (Dhela Gate • Year-Round • Vehicle ₹3,000)</option>
                <option value="garjiya">Garjiya Zone (Garjiya Gate • Vehicle ₹3,000)</option>
                <option value="durga-devi">Durga Devi Zone (Durgadevi Gate • Vehicle ₹3,000)</option>
                <option value="pakhro">Pakhro Zone (Pakhro Gate / Kotdwar • Vehicle ₹2,800)</option>
                <option value="sonanadi">Sonanadi Zone (Vatanvasa Gate • Vehicle ₹2,800–₹4,500)</option>
              </select>
            </div>
          )}

          {/* Headcount */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-medium text-sal-forest/80 mb-1.5">
                Adults (Age 12+)
              </label>
              <input
                type="number"
                min={1}
                max={24}
                value={adults}
                onChange={(e) => setAdults(parseInt(e.target.value, 10) || 1)}
                className="w-full bg-white border border-sal-forest/20 px-3 py-2 text-sm text-sal-forest"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-medium text-sal-forest/80 mb-1.5">
                Children (Under 12)
              </label>
              <input
                type="number"
                min={0}
                max={12}
                value={childrenUnder12}
                onChange={(e) => setChildrenUnder12(parseInt(e.target.value, 10) || 0)}
                className="w-full bg-white border border-sal-forest/20 px-3 py-2 text-sm text-sal-forest"
              />
            </div>
          </div>

          {/* Discounts (Indian nationals only) */}
          {nationality === "indian" && safariType === "jeep" && (
            <div className="grid grid-cols-2 gap-4 p-3 bg-white/70 border border-sal-forest/10">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-medium text-sal-forest/80 mb-1">
                  Senior Citizens (60+)
                </label>
                <input
                  type="number"
                  min={0}
                  max={adults}
                  value={seniorCitizens}
                  onChange={(e) => setSeniorCitizens(parseInt(e.target.value, 10) || 0)}
                  className="w-full bg-white border border-sal-forest/20 px-2 py-1.5 text-xs text-sal-forest"
                />
                <span className="text-[10px] text-sal-forest/60">₹250 off / person</span>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-medium text-sal-forest/80 mb-1">
                  Students (12–18 yrs)
                </label>
                <input
                  type="number"
                  min={0}
                  max={adults}
                  value={students12to18}
                  onChange={(e) => setStudents12to18(parseInt(e.target.value, 10) || 0)}
                  className="w-full bg-white border border-sal-forest/20 px-2 py-1.5 text-xs text-sal-forest"
                />
                <span className="text-[10px] text-sal-forest/60">₹375 off / student</span>
              </div>
            </div>
          )}
        </div>

        {/* Real-time Ledger Output (5 cols) */}
        <div className="lg:col-span-5 bg-sal-forest text-cream p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-tiger-ochre block mb-1">
              Official Statutory Breakdown
            </span>
            <h4 className="font-serif text-xl font-bold text-cream mb-4">
              Estimated Government Fees
            </h4>

            <div className="space-y-3 text-xs divide-y divide-cream/10">
              <div className="flex items-center justify-between pt-2">
                <span className="text-cream/80">CTR Entry Permit:</span>
                <span className="font-mono font-medium text-cream tabular-nums">
                  ₹{permitCost.toLocaleString("en-IN")}
                </span>
              </div>

              {vehicleCost > 0 && (
                <div className="flex items-center justify-between pt-2">
                  <span className="text-cream/80">Registered Gypsy & Driver:</span>
                  <span className="font-mono font-medium text-cream tabular-nums">
                    ₹{vehicleCost.toLocaleString("en-IN")}
                  </span>
                </div>
              )}

              {guideCost > 0 && (
                <div className="flex items-center justify-between pt-2">
                  <span className="text-cream/80">Authorised Forest Guide:</span>
                  <span className="font-mono font-medium text-cream tabular-nums">
                    ₹{guideCost.toLocaleString("en-IN")}
                  </span>
                </div>
              )}

              {totalConcession > 0 && (
                <div className="flex items-center justify-between pt-2 text-green-300">
                  <span>Eligible Concessions Applied:</span>
                  <span className="font-mono font-medium tabular-nums">
                    -₹{totalConcession.toLocaleString("en-IN")}
                  </span>
                </div>
              )}

              <div className="flex items-baseline justify-between pt-4 text-sm font-semibold">
                <span className="text-cream">Total Statutory Fees:</span>
                <span className="font-mono text-xl text-tiger-ochre tabular-nums">
                  ₹{statutorySubtotal.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-cream/70 mt-4 leading-relaxed">
              * Note: These are exact official CTR fees paid directly to the Corbett Tiger Reserve
              and registered gypsy operators. When you book via My Corbett Trip, our planning & concierge fee
              is quoted transparently alongside this ledger with no hidden surcharges.
            </p>
          </div>

          <a
            href="#lead-planner"
            className="w-full mt-6 py-3 px-4 bg-tiger-ochre text-white text-xs uppercase tracking-wider font-semibold text-center hover:bg-[#b5671f] transition-all block"
          >
            Lock Permits for Your Dates
          </a>
        </div>
      </div>
    </div>
  );
};

