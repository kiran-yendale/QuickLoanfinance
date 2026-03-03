import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="
          relative w-full
          h-[180px] 
          sm:h-[220px] 
          md:h-[280px] 
          lg:h-[340px]
          overflow-hidden
          flex items-center
        "
      >
        <Image
          src="/images/herosectionbanner.png"
          alt="About Quick Loan Finance"
          fill
          priority
          className="object-cover object-right md:object-center"
        />

        <div className="absolute inset-0" />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            About Us
          </h1>

          <div className="mt-2 text-sm sm:text-base flex items-center gap-2">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/80">About Us</span>
          </div>
        </div>
      </section>

      {/* ================= WELCOME SECTION ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[320px] md:h-[380px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/meet1.jpeg"
                alt="Meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900">
              Welcome to Quick Loan Finance
            </h2>

            <h3 className="mt-3 text-lg font-semibold text-blue-600">
              Your Trusted Partner in Financial Solutions
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              At Quick Loan Finance, we are dedicated to helping individuals and 
              businesses achieve their financial goals with ease and efficiency. 
              With years of experience and a customer-focused approach, we provide 
              personalized loan solutions that cater to your unique needs.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-lg shadow text-center">
                <h4 className="text-2xl font-bold text-blue-900">10+</h4>
                <p className="text-sm text-gray-600 mt-1">Years in Business</p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow text-center">
                <h4 className="text-2xl font-bold text-blue-900">50K+</h4>
                <p className="text-sm text-gray-600 mt-1">Satisfied Customers</p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow text-center">
                <h4 className="text-2xl font-bold text-blue-900">₹200 Cr+</h4>
                <p className="text-sm text-gray-600 mt-1">Disbursed Loans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR MISSION ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 uppercase">
              Our Mission
            </h2>

            <div className="flex items-start gap-4 mt-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <span className="text-blue-600 text-xl">🎯</span>
              </div>

              <p className="text-gray-600 leading-relaxed">
                To provide quick and easy access to financial solutions that empower 
                our clients to achieve their goals and improve their quality of life. 
                We aim to be the most trusted and preferred financial partner by offering 
                transparent, secure, and customer-friendly loan services.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[320px] md:h-[380px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/meet2.jpeg"
                alt="Handshake"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
{/* ================= WHY CHOOSE US ================= */}
<section className="bg-gray-50 py-24">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-3xl font-semibold tracking-wide text-gray-900 uppercase">
      Why Choose Us
    </h2>

    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

      {[
        { img: "/images/person1.png", name: "Neeraj Sharma", role: "Branch Manager" },
        { img: "/images/person2.png", name: "Priya Kapoor", role: "Loan Officer" },
        { img: "/images/person3.png", name: "Amit Verma", role: "Sales Executive" },
        { img: "/images/person4.png", name: "Sunita Joshi", role: "Account Officer" },
      ].map((person, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
        >
          {/* Image */}
          <div className="relative w-28 h-28 mx-auto">
            <Image
              src={person.img}
              alt={person.name}
              fill
          className="object-fit object-top rounded-full border-4 border-white shadow-md"      />
          </div>

          {/* Name */}
          <h3 className="mt-6 text-lg font-semibold text-gray-900">
            {person.name}
          </h3>

          {/* Role */}
          <p className="text-sm text-gray-500 mt-1">
            {person.role}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>
    </>
  );
}