import Header from "@/components/sections/landing-page/Header"
import Services from "@/components/sections/landing-page/Services";
import Benefits from "@/components/sections/landing-page/Benefits";


export default function Home() {
  return (
    <div className="landing-page">
      <Header />
      <Services />
      <Benefits />
    </div>
  )
}
