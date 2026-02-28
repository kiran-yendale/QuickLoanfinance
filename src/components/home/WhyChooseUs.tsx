import {
  Handshake,
  ShieldCheck,
  CalendarDays,
  Lock
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-100 py-16 md:py-8 text-center">

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-blue-900 tracking-wide">
        WHY CHOOSE US
      </h2>

      {/* Cards Container */}
      <div className="mt-12 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-6xl mx-auto px-4 md:px-6">

        {/* Card 1 */}
        <div className="group bg-white p-6 md:p-8 rounded-2xl shadow-md border border-transparent hover:border-blue-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

          <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full bg-blue-700 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition">
            <Handshake size={22} className="md:w-7 md:h-7" />
          </div>

          <h3 className="mt-4 md:mt-6 font-semibold text-sm md:text-lg text-gray-800">
            Customized Personal Loans
          </h3>

          <p className="mt-2 md:mt-3 text-gray-500 text-xs md:text-sm leading-relaxed">
            Loans tailored to your needs with competitive financial rates and flexible tenure.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group bg-white p-6 md:p-8 rounded-2xl shadow-md border border-transparent hover:border-blue-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

          <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full bg-blue-700 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition">
            <ShieldCheck size={22} className="md:w-7 md:h-7" />
          </div>

          <h3 className="mt-4 md:mt-6 font-semibold text-sm md:text-lg text-gray-800">
            Transparent Processes
          </h3>

          <p className="mt-2 md:mt-3 text-gray-500 text-xs md:text-sm leading-relaxed">
            Clear terms and conditions with no hidden charges. Full transparency in the loan process.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group bg-white p-6 md:p-8 rounded-2xl shadow-md border border-transparent hover:border-blue-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

          <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full bg-blue-700 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition">
            <CalendarDays size={22} className="md:w-7 md:h-7" />
          </div>

          <h3 className="mt-4 md:mt-6 font-semibold text-sm md:text-lg text-gray-800">
            Flexible Repayment Plans
          </h3>

          <p className="mt-2 md:mt-3 text-gray-500 text-xs md:text-sm leading-relaxed">
            Easy repayment options within minutes. You can repay at your own pace.
          </p>
        </div>

        {/* Card 4 */}
        <div className="group bg-white p-6 md:p-8 rounded-2xl shadow-md border border-transparent hover:border-blue-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

          <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full bg-blue-700 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition">
            <Lock size={22} className="md:w-7 md:h-7" />
          </div>

          <h3 className="mt-4 md:mt-6 font-semibold text-sm md:text-lg text-gray-800">
            Secured Data System
          </h3>

          <p className="mt-2 md:mt-3 text-gray-500 text-xs md:text-sm leading-relaxed">
            Your personal data is fully encrypted ensuring a safe and secure application.
          </p>
        </div>

      </div>

    </section>
  );
}