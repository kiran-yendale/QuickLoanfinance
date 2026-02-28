export default function HeroSection() {
  return (
    <section
      className="
        relative w-full 
        h-[300px] sm:h-[360px] md:h-[450px]
        bg-center bg-cover bg-no-repeat
        flex items-center justify-center
      "
      style={{
        backgroundImage: "url('/images/herosectionbanner.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center px-4 text-white">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg">
          Quick and Easy Loans for Your Needs!
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg opacity-90">
          Get instant loans with competitive interest rates and flexible tenures.
        </p>

      </div>
    </section>
  );
}