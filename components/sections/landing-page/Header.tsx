import Image from 'next/image';
import Container from '@/components/layouts/Container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// #07071C
const Header: React.FC = () => {
  return (
    <section className='h-screen pt-16'>
      <Container>
        <div className='flex flex-col items-center md:flex-row md:justify-between'>
          <div className='flex flex-col gap-3 md:w-1/2'>
            <h1 className='font-black text-3xl mb-3 md:text-4xl'>
              Effortless Freelance Hiring: Simplify Your Search on our Platform
            </h1>
            <p className='mb-8 text-lg'>
              Connecting freelancers and clients for seamless collaboration and project success.
            </p>
            <form action="" className='mt-4 flex flex-col md:flex-row justify-start gap-2'>
              <Input type="text" placeholder='Try Web Design' className='w-full mb-2 md:w-3/4' />
              <Button className='w-full md:w-auto'>Search</Button>
            </form>
            <ul className='hidden md:flex gap-2 mt-5 text-sm'>
              <li>
                <a href="#" className='block px-2 py-1 bg-gray-300 rounded-md'>web design</a>
              </li>
              <li>
                <a href="#" className='block px-2 py-1 bg-gray-300 rounded-md'>wordpress</a>
              </li>
              <li>
                <a href="#" className='block px-2 py-1 bg-gray-300 rounded-md'>graphic design</a>
              </li>
              <li>
                <a href="#" className='block px-2 py-1 bg-gray-300 rounded-md'>Copywriting</a>
              </li>
            </ul>
          </div>
          <div className='hidden justify-end items-center md:flex md:w-1/2 '>
            <Image src="/hero.svg" alt="hero" width={450} height={350} />
          </div>
        </div>
        
      </Container>
    </section>
  );
}
export default Header;