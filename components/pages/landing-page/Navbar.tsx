"use client"
import Container from "@/components/layouts/Container";
import RegisterModal from "@/components/modals/RegisterModal";
import LoginModal from "@/components/modals/LoginModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/hooks/api/auth/auth.api";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";
import LogoutItem from "@/components/dropdown-items/LogoutItem";
import { User } from 'lucide-react';

const Navbar: React.FC = () => {

  const { isSuccess, isError, data } = useAuth();
  const userData  = data?.userData;

  return (
    <nav>
      <Container>
        <div className="flex items-center justify-between py-6">
          <div>
            <h1 className='text-2xl font-black'>GIG.it</h1>
          </div>
          {
            isSuccess &&
              <>
                <div>
                  <form action="" className="flex items-center gap-2">
                    <Input type="text" placeholder="Search for a service" className="w-[250px] text-sm" />
                    <Button className='text-sm'>Search</Button>
                  </form>
                </div>
                <div className="flex items-center gap-4">
                  <a href="#" className="text-sm">Orders</a>
                  <Button className='text-sm' variant='outline'>Swtich to seller</Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Avatar className="border cursor-pointer">
                        <AvatarImage src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}/${userData?.image}`} alt="avatar" className="" height={32} width={32} />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuGroup>
                        <DropdownMenuItem className='cursor-pointer'>
                          <User className="mr-2 h-4 w-4" />
                          <span>Profile</span>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <LogoutItem />
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                </div>
              </>
          }
          {
            isError && 
              <div className='flex items-center gap-2'>
                <LoginModal />
                <RegisterModal />
              </div>
          }

        </div>
      </Container>
    </nav>
  );
}

export default Navbar;