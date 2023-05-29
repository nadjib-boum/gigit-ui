import Image from "next/image";
import Container from "@/components/layouts/Container/Container";
import { Button } from "@/components/ui/button";

const Banner: React.FC = () => {
  return (
    <section className="py-12" style={{ background: '#fdb85c' }}>
      <Container>
        <div className="flex items-center">
          <div className="w-1/2">
            <h1 className="text-4xl font-black">Delegate your tasks. Focus on the outcome.</h1>
            <Button className="mt-4">Join Us</Button>
          </div>
          <div className="w-1/2 flex justify-end">
            <Image src={'/banner.png'} height={400} width={500} alt="Banner" />
          </div>
        </div>
      </Container> 
    </section>
  );
}

export default Banner;