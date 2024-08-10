import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
      <Link href="/" className="font-bold font-cal-sans text-3xl">
        Reneazy{" "}
        <span className="font-calligraphy font-light text-primary">Blog</span>
      </Link>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
