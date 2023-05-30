"use client"
import Container from "@/components/layouts/Container";
import RegisterModal from "@/components/modals/RegisterModal";
import LoginModal from "@/components/modals/LoginModal";

const Navbar: React.FC = () => {

  return (
    <nav>
      <Container>
        <div className="flex items-center justify-between py-6">
          <div className=''>
            <h1 className='text-2xl font-black'>GIG.it</h1>
          </div>
          <div className='flex items-center gap-2'>
            <LoginModal />
            <RegisterModal />
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;

// <Button variant='outline' onClick={openLoginModal}>Login</Button>