import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 text-gray-700">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* ================= LEFT : ABOUT ================= */}
        <div>
          <h3 className="text-lg font-semibold text-blue-900 mb-5">
            About Quick Loan Finance
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <span className="text-blue-700">›</span>
              Experiential loan solutions
            </li>
            <li className="flex gap-2">
              <span className="text-blue-700">›</span>
              Customer centric approach
            </li>
            <li className="flex gap-2">
              <span className="text-blue-700">›</span>
              Registered NBFC partner
            </li>
            <li className="flex gap-2">
              <span className="text-blue-700">›</span>
              Enabling growth & financial stability
            </li>
          </ul>
        </div>

        {/* ================= MIDDLE : USEFUL LINKS ================= */}
        <div>
          <h3 className="text-lg font-semibold text-blue-900 mb-5">
            USEFUL LINKS
          </h3>

          <div className="grid grid-cols-2 gap-8 text-sm">

            <ul className="space-y-3">
              <li className="flex gap-2 hover:text-blue-700 cursor-pointer">
                <span>›</span> Home
              </li>
              <li className="flex gap-2 hover:text-blue-700 cursor-pointer">
                <span>›</span> About Us
              </li>
              <li className="flex gap-2 hover:text-blue-700 cursor-pointer">
                <span>›</span> Apply Now
              </li>
              <li className="flex gap-2 hover:text-blue-700 cursor-pointer">
                <span>›</span> Schemes
              </li>
              <li className="flex gap-2 hover:text-blue-700 cursor-pointer">
                <span>›</span> FAQs
              </li>
            </ul>

            <ul className="space-y-3">
              <li className="flex gap-2 hover:text-blue-700 cursor-pointer">
                <span>›</span> Careers
              </li>
              <li className="flex gap-2 hover:text-blue-700 cursor-pointer">
                <span>›</span> FAQs
              </li>
              <li className="flex gap-2 hover:text-blue-700 cursor-pointer">
                <span>›</span> Terms & Conditions
              </li>
              <li className="flex gap-2 hover:text-blue-700 cursor-pointer">
                <span>›</span> Privacy Policy
              </li>
              <li className="flex gap-2 hover:text-blue-700 cursor-pointer">
                <span>›</span> Terms & Conditions
              </li>
            </ul>

          </div>
        </div>

        {/* ================= RIGHT : CONTACT ================= */}
        <div>
          <h3 className="text-lg font-semibold text-blue-900 mb-5">
            CONTACT US
          </h3>

          <p className="font-semibold text-blue-900">
            Quick Loan Finance
          </p>

          <div className="mt-4 space-y-4 text-sm">

            <div className="flex gap-3 items-start">
              <MapPin size={16} className="text-blue-700 mt-1" />
              <span>
                A-61 Inner Circle, Connaught Place,<br />
                New Delhi – 110001
              </span>
            </div>

            <div className="flex gap-3 items-center">
              <Phone size={16} className="text-blue-700" />
              <span>+91 9876543210</span>
            </div>

            <div className="flex gap-3 items-center">
              <Mail size={16} className="text-blue-700" />
              <span>info@quickloanfinance.in</span>
            </div>

          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-900 cursor-pointer">
              <Twitter size={14} />
            </div>
            <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-900 cursor-pointer">
              <Facebook size={14} />
            </div>
            <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-900 cursor-pointer">
              <Instagram size={14} />
            </div>
            <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-900 cursor-pointer">
              <Linkedin size={14} />
            </div>
          </div>

        </div>

      </div>

      {/* ================= BOTTOM DISCLAIMER ================= */}
      <div className="border-t mt-14 pt-6 text-xs text-gray-500 text-center px-6">
        © {new Date().getFullYear()} Quick Loan Finance. All Rights Reserved.
        <br />
        Registered NBFC Partner | RBI Guidelines Compliant | Secure Financial Transactions
      </div>

    </footer>
  );
}