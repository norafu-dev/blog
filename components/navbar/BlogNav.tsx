import Link from "next/link";

const HomeNav = () => {
  return (
    <nav className="flex items-center justify-between h-12 gap-4 md:gap-8">
      <Link href="/" className="text-xl">
        Home
      </Link>
    </nav>
  );
};

export default HomeNav;
