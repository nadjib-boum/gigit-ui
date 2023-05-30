import Image from 'next/image';
import Container from "@/components/layouts/Container";

type ServiceProps = {
  label: string;
  image: string
}

const Service: React.FC<ServiceProps> = ({ label, image }) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <Image src={`/services/${image}`} width={100} height={100} alt={label} />
      <h2 className='text-lg text-gray-700'>{ label }</h2>
    </div>
  );
}

const Services: React.FC = () => {
  return (
    <section className='py-10 md:py-20'>
      <Container>
        <h2 className="block text-4xl font-bold text-center">Services</h2>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-12 mt-12 md:grid-cols-4 md:grid-rows-2">
          <Service label='Graphic Design' image='graphic-design.png' />
          <Service label='Web Design' image='web-design.png' />
          <Service label='Programming' image='programming.png' />
          <Service label='Digital Marketing' image='digital-marketing.png' />
          <Service label='Music & Audio' image='voice-over.png' />
          <Service label='Writing & Translation' image='translation.png' />
          <Service label='Video & Animation' image='video-editing.png' />
          <Service label='Data Entry' image='data-entry.png' />
        </div>
      </Container>
    </section>
  );
};

export default Services;