import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { User } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import UserMenu from "./UserMenu";

type NavbarProps = {
  currentUser: User | null;
};

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="flex items-center justify-between w-full py-2 px-6 bg-slate-900 rounded-md">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="" width={35} height={35} />
        <h1 className="text-xl font-extrabold mb-2">
          Rently<span className="text-4xl font-bold text-primary">.</span>
        </h1>
      </Link>

      {currentUser && (
        <div className="flex items-center gap-6">
          <Link href="/create" className="hover:text-primary">
            Rent
          </Link>
          <Link href="/contacted-user">Contacts</Link>
          <Link href="your-properties">My properties</Link>
        </div>
      )}

      <div className="flex items-center gap-2">
        {currentUser ? (
          <UserMenu>
            <Avatar>
              <AvatarImage src={currentUser?.image ?? ""} />
              <AvatarFallback>{currentUser?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
          </UserMenu>
        ) : (
          <>
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>

            <Button className="text-white" asChild>
              <Link href="/signup ">Signup</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
export default Navbar;
