import { useCallback } from "react";
import { DropdownMenuItem, DropdownMenuGroup  } from "../ui/dropdown";
import { LogOut } from 'lucide-react';
import { useLogout } from "@/hooks/api/auth/auth.api";

const LogoutItem: React.FC = () => {

  const { mutate: logout } = useLogout ();

  const handleLogout = useCallback(() => {
    logout ()
    window.location.href = '/';
  }, [])


  return (
    <DropdownMenuItem className='cursor-pointer' onClick={handleLogout}>
      <LogOut className="mr-2 h-4 w-4" />
      <span>Logout</span>
    </DropdownMenuItem>
  );
}

export default LogoutItem;