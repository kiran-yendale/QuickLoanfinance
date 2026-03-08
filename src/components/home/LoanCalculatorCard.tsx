"use client";
import { useRouter } from "next/navigation";
import useLoanCalculator from "@/hooks/useLoanCalculator";

export default function LoanCalculatorCard() {
const router = useRouter();
  const {
    amount,
    rate,
    tenure,
    setAmount,
    setRate,
    setTenure,
    totalInterest,
    totalPayment,
  } = useLoanCalculator();

  return (

    <div className="max-w-4xl mx-auto -mt-20 md:-mt-24 relative z-20 px-4">

      <div className="bg-gradient-to-r from-blue-900 to-blue-700
      rounded-xl shadow-xl p-5 md:p-6 text-white">

        <div className="grid md:grid-cols-2 gap-6">

          {/* ================= LEFT SIDE ================= */}
          <div className="space-y-4">

            {/* Loan Amount */}
            <div>
              <div className="grid grid-cols-[7fr_3fr] items-center
              bg-white/10 hover:bg-white/20
              border border-white/10
              rounded-lg px-3 py-2 transition-all">

                <span className="text-xs md:text-sm text-white/70">
                  Loan Amount
                </span>

                <div className="flex items-center gap-2 bg-white/15
                px-2 py-1 rounded-md">

                  <span className="text-white/70 text-sm">₹</span>

                  <input
                    type="text"
                    value={amount}
                    onChange={(e)=>setAmount(Number(e.target.value))}
                    className="bg-transparent outline-none w-20
                    text-right font-semibold text-base"
                  />
                </div>
              </div>

              <input
                type="range"
                min="10000"
                max="500000"
                value={amount}
                onChange={(e)=>setAmount(Number(e.target.value))}
                className="w-full mt-2 accent-orange-500"
              />
            </div>

            {/* Interest Rate */}
            <div>
              <div className="grid grid-cols-[7fr_3fr] items-center
              bg-white/10 hover:bg-white/20
              border border-white/10
              rounded-lg px-3 py-2 transition-all">

                <span className="text-xs md:text-sm text-white/70">
                  Interest Rate
                </span>

                <div className="flex items-center gap-2 bg-white/15
                px-2 py-1 rounded-md">

                  <span className="text-white/70 text-sm">%</span>

                  <input
                    type="text"
                    value={rate}
                    onChange={(e)=>setRate(Number(e.target.value))}
                    className="bg-transparent outline-none w-14
                    text-right font-semibold text-base"
                  />

                  <span className="text-[10px] opacity-80">
                    p.a
                  </span>
                </div>
              </div>

              <input
                type="range"
                min="1"
                max="20"
                value={rate}
                onChange={(e)=>setRate(Number(e.target.value))}
                className="w-full mt-2 accent-orange-500"
              />
            </div>

            {/* Loan Tenure */}
            <div>
              <div className="grid grid-cols-[7fr_3fr] items-center
              bg-white/10 hover:bg-white/20
              border border-white/10
              rounded-lg px-3 py-2 transition-all">

                <span className="text-xs md:text-sm text-white/70">
                  Loan Tenure
                </span>

                <div className="flex items-center gap-2 bg-white/15
                px-2 py-1 rounded-md">

                  <span className="text-white/70 text-sm">📅</span>

                  <input
                    type="text"
                    value={tenure}
                    onChange={(e)=>setTenure(Number(e.target.value))}
                    className="bg-transparent outline-none w-14
                    text-right font-semibold text-base"
                  />

                  <span className="text-[10px] opacity-80">
                    months
                  </span>
                </div>
              </div>

              <input
                type="range"
                min="6"
                max="60"
                value={tenure}
                onChange={(e)=>setTenure(Number(e.target.value))}
                className="w-full mt-2 accent-orange-500"
              />
            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="bg-white/10 rounded-lg p-4 space-y-3">

            <div className="flex justify-between text-xs opacity-80">
              <span>Loan Amount</span>
              <span className="font-semibold text-base">
                ₹{amount.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between text-xs opacity-80">
              <span>Interest Rate</span>
              <span>{rate}% per annum</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Total Interest</span>
              <span className="font-bold text-lg">
                ₹{totalInterest.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Total Payment</span>
              <span className="font-bold text-lg">
                ₹{totalPayment.toLocaleString()}
              </span>
            </div>

          </div>

        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-orange-500 hover:bg-orange-600
          transition px-8 py-2 rounded-lg font-semibold text-sm shadow-md" onClick={() => router.push("/apply")}>
            APPLY NOW →
          </button>
        </div>

      </div>

      <p className="text-center text-[15px] text-black mt-4">
        *Representative example: ₹1,00,000 for 24 months at borrowing rate 12% (fixed) p.a. for 24 months 
      </p>
      <p className="text-center text-[15px] text-black">
      total repayment becomes : 124000
      </p>

    </div>
  );
}