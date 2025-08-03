import Link from "next/link";

const HomeNav = () => {
  return (
    <nav className="flex items-center">
      <Link href="/" className="text-xl">
        Home
      </Link>
    </nav>
  );
};

export default HomeNav;
