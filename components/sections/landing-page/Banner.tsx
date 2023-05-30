import Image from "next/image";
import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/button";

const Banner: React.FC = () => {
  return (
    <section className="py-12" style={{ background: '#fdb85c' }}>
      <Container>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="order-2 text-center md:w-1/2 md:order-1 md:text-left">
            <h1 className="text-3xl md:text-4xl font-black">Delegate your tasks. Focus on the outcome.</h1>
            <Button className="mt-4">Join Us</Button>
          </div>
          <div className="flex justify-end order-1 md:w-1/2 md:order-2">
            <Image src={'/banner.png'} height={400} width={500} alt="Banner" />
          </div>
        </div>
      </Container> 
    </section>
  );
}

export default Banner;