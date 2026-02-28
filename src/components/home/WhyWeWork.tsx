export default function WhyWeWork() {
  return (
    <section className="py-10 md:py-5 bg-white text-center">

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-blue-900 tracking-wide">
        WHY WE WORK?
      </h2>

      <p className="mt-3 md:mt-4 text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
        Simplified loan process to meet your financial needs in just a few clicks
      </p>

      {/* Steps */}
      <div className="mt-12 md:mt-10 flex items-center justify-center gap-8 md:gap-14 flex-wrap">

        {/* STEP 1 */}
        <div className="flex flex-col items-center">

          <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">

            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-blue-200"></div>

            {/* Inner Circle */}
            <div className="w-16 h-16 md:w-24 md:h-24 bg-blue-800 rounded-full flex items-center justify-center shadow-lg">

              <svg
                className="w-6 h-6 md:w-10 md:h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="4" width="18" height="12" rx="2" />
                <path d="M2 20h20" />
              </svg>

            </div>
          </div>

          <h3 className="mt-4 md:mt-6 text-sm md:text-lg font-semibold text-blue-900">
            Apply Online
          </h3>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex items-center">
          <svg
            className="w-32 h-10 text-blue-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 60 24"
          >
            <path d="M2 12h50" />
            <path d="M42 5l10 7-10 7" />
          </svg>
        </div>

        {/* STEP 2 */}
        <div className="flex flex-col items-center">

          <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">

            <div className="absolute inset-0 rounded-full border-4 border-blue-200"></div>

            <div className="w-16 h-16 md:w-24 md:h-24 bg-blue-800 rounded-full flex items-center justify-center shadow-lg">

              <svg
                className="w-6 h-6 md:w-10 md:h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>

            </div>
          </div>

          <h3 className="mt-4 md:mt-6 text-sm md:text-lg font-semibold text-blue-900">
            Instant Approval
          </h3>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex items-center">
          <svg
            className="w-32 h-10 text-blue-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 60 24"
          >
            <path d="M2 12h50" />
            <path d="M42 5l10 7-10 7" />
          </svg>
        </div>

        {/* STEP 3 */}
        <div className="flex flex-col items-center">

          <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">

            <div className="absolute inset-0 rounded-full border-4 border-blue-200"></div>

            <div className="w-16 h-16 md:w-24 md:h-24 bg-blue-800 rounded-full flex items-center justify-center shadow-lg">

              <svg
                className="w-6 h-6 md:w-10 md:h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 10h18" />
                <path d="M5 10v8" />
                <path d="M9 10v8" />
                <path d="M15 10v8" />
                <path d="M19 10v8" />
                <path d="M2 10l10-6 10 6" />
              </svg>

            </div>
          </div>

          <h3 className="mt-4 md:mt-6 text-sm md:text-lg font-semibold text-blue-900">
            Get Funds Disbursed
          </h3>
        </div>

      </div>

    </section>
  );
}