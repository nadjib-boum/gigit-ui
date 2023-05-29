import Image from 'next/image';
import Container from "@/components/layouts/Container/Container";
import { Check } from 'lucide-react';

type BenefitProps = {
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ title, description }) => {
  return (
    <li>
      <div className="flex items-center gap-3 mb-2">
        <span className="p-1 rounded-full border border-black bg-gray-100">
          <Check size={16} />
        </span>
        <span className="text-xl font-semibold">{ title }</span>
      </div>
      <p className='text-gray-600 text-sm'>{ description }</p>
    </li>
  );
}

const Benefits: React.FC = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold">The best part? Everything.</h2>
            <ul className="flex flex-col gap-8 mt-8">
              <Benefit  title="Stick to your budget" description="Find the right service for every price point. No hourly rates, just project-based pricing."  />
              <Benefit  title="Get quality work done quickly" description="Hand your project over to a talented freelancer in minutes, get long-lasting results."  />
              <Benefit  title="Pay when you're happy" description="Upfront quotes mean no surprises. Payments only get released when you approve."  />
              <Benefit  title="Count on 24/7 support" description="Our round-the-clock support team is available to help anytime, anywhere."  />
            </ul>
          </div>
          <div className="w-1/2 flex justify-end">
            <Image src="/benefits.svg" width={500} height={400} alt="Benefits" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Benefits;