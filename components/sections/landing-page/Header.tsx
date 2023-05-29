import Image from 'next/image';
import Container from '@/components/layouts/Container/Container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// #07071C
const Header: React.FC = () => {
  return (
    <section className='h-screen pt-32 relative'>
      <div className='logo absolute top-8 left-28'>
        <h1 className='text-xl font-black'>GIG.it</h1>
      </div>
      <Container>
        <div className='flex items-center justify-between'>
          <div className='w-2/4'>
            <h1 className='font-black text-4xl mb-3'>
              Effortless Freelance Hiring: Simplify Your Search on our Platform
            </h1>
            <p>
              Connecting freelancers and clients for seamless collaboration and project success.
            </p>
            <form action="" className='mt-4 flex justify-start gap-2'>
              <Input type="text" placeholder='Try Web Design' className='w-3/4' />
              <Button>Search</Button>
            </form>
            <ul className='flex gap-1 mt-4 text-sm'>
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
          <div className='w-2/4 flex justify-end items-center'>
            <Image src="/hero.svg" alt="hero" width={450} height={350} />
          </div>
        </div>
        
      </Container>
    </section>
  );
}
export default Header;