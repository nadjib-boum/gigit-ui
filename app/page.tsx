import Header from "@/components/sections/landing-page/Header"
import Services from "@/components/sections/landing-page/Services";
import Benefits from "@/components/sections/landing-page/Benefits";
import Testimonials from "@/components/sections/landing-page/Testimonials";
import Banner from "@/components/sections/landing-page/Banner";
import Footer from "@/components/sections/landing-page/Footer";

export default function Home() {
  return (
    <div className="landing-page">
      <Header />
      <Services />
      <Benefits />
      <Testimonials />
      <Banner />
      <Footer />
    </div>
  )
}
