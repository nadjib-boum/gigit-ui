import Header from "@/components/pages/landing-page/Header"
import Navbar from "@/components/pages/landing-page/Navbar";
import Services from "@/components/pages/landing-page/Services";
import Benefits from "@/components/pages/landing-page/Benefits";
import Testimonials from "@/components/pages/landing-page/Testimonials";
import Banner from "@/components/pages/landing-page/Banner";
import Footer from "@/components/pages/landing-page/Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Header />
      <Services />
      <Benefits />
      <Testimonials />
      <Banner />
      <Footer />
    </div>
  );
}


export default LandingPage;