import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center h-12 gap-4 md:gap-8">
      <Link href="/" className="text-xl">
        Home
      </Link>
      <Link href="/blog" className="text-xl">
        Blog
      </Link>
    </nav>
  );
};

export default Navbar;
