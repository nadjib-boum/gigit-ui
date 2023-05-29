import Image from 'next/image';
import Container from "@/components/layouts/Container/Container";

type TestimonialProps = {
  text: string;
  person: string;
  role: string;
  avatar: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, person, role, avatar }) => {
  return (
    <div className="border border-gray-200 px-4 py-6">
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
                <blockquote>
                    <p className="text-gray-600 text-base">“{ text }“</p>
                </blockquote>
            </div>
            <div className="col-span-2 flex items-center mt-2">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                    <Image height={82} width={82} className="object-cover w-full h-full" src={`/testimonials/${avatar}`} alt={person} />
                </div>
                <div>
                    <p className="text-gray-800 text-lg font-semibold">{ person }</p>
                    <p className="text-gray-600">{ role }</p>
                </div>
            </div>
        </div>
    </div>
  );
}

const Testimonials: React.FC = () => {
  return (
    <section className="py-20">
      <Container>
        <h1 className="text-4xl font-bold text-center mb-12">Testimonials</h1>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Testimonial avatar='avatar-1.jpg' text="Working on this freelance platform has been a game-changer for my career. I've connected with amazing clients and have been able to showcase my skills on diverse projects." person="Devon Lane" role="President of Sales"  />
          <Testimonial avatar='avatar-2.jpg' text="I've been freelancing for years, and this platform stands out from the rest. It's user-friendly, offers great support, and provides a steady stream of quality clients." person="Devon Lane" role="President of Sales"  />
          <Testimonial avatar='avatar-3.jpg' text="Finding freelance work used to be a struggle, but thanks to this platform, I now have a consistent flow of interesting projects that match my skills and interests." person="Devon Lane" role="President of Sales"  />
          <Testimonial avatar='avatar-4.jpg' text="I love the flexibility and freedom that freelancing brings, and this platform has made it even better. It's helped me build my reputation and expand my network." person="Devon Lane" role="President of Sales"  />
          <Testimonial avatar='avatar-5.jpg' text="As a freelancer, I value prompt payments and fair rates. This platform ensures both, and it has become my go-to place for finding trustworthy clients." person="Devon Lane" role="President of Sales"  />
          <Testimonial avatar='avatar-6.jpg' text="The support team on this platform is top-notch. They are responsive, helpful, and genuinely care about the success of freelancers. It's a refreshing experience." person="Devon Lane" role="President of Sales"  />
          <Testimonial avatar='avatar-1.jpg' text="I was hesitant to start freelancing, but this platform has exceeded my expectations. The interface is intuitive, and the community is supportive and collaborative." person="Devon Lane" role="President of Sales"  />
          <Testimonial avatar='avatar-2.jpg' text="Being part of this freelance platform has opened doors to exciting opportunities. I've been able to work with clients from different countries and build a global portfolio." person="Devon Lane" role="President of Sales"  />
          <Testimonial avatar='avatar-3.jpg' text="This platform takes the stress out of freelancing. It provides a secure platform for client communication, project management, and seamless payments. It's a freelancer's dream." person="Devon Lane" role="President of Sales"  />
        </div>
      </Container>
    </section>
  );
}


export default Testimonials;