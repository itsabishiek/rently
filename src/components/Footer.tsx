import { GitFork, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="bg-slate-900 w-full mt-[20px] p-4 rounded-md flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="" width={35} height={35} />
        <h1 className="text-xl font-extrabold mb-2">
          Rently<span className="text-4xl font-bold text-primary">.</span>
        </h1>
      </Link>

      <p className="text-muted-foreground text-sm">
        &copy; {new Date().getFullYear()} Rently | All rights revered
      </p>

      <div>
        <Link
          href="https://github.com/itsabishiek/rently"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </Link>
      </div>
    </div>
  );
};
export default Footer;
