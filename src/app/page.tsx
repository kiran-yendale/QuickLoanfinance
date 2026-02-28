import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import WhyWeWork from "@/components/home/WhyWeWork";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LoanCalculatorCard from "@/components/home/LoanCalculatorCard";

export default function Home() {
  return (
    <>
    
    
    <Navbar />
    <section className="bg-gray-50 pb-24">
  <HeroSection />
  <LoanCalculatorCard />
</section>
<WhyWeWork />
    <WhyChooseUs />
    <Footer />
    </>
    );
}
