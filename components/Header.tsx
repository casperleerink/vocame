import React, { useEffect, useState } from "react";
import Link from "./Link";

interface HeaderProps {
  overImage: boolean;
}

const Header: React.FC<HeaderProps> = ({ overImage }) => {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 40;
      scrolled ? setBg(true) : setBg(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 flex justify-between px-10 h-20 items-center transition-all duration-300 ${
        !overImage && !bg ? "text-red-900" : "text-yellow-100"
      } ${
        bg ? "bg-red-900 bg-opacity-40 backdrop-filter backdrop-blur-md" : ""
      }`}
    >
      <Link href="/">
        <h2 className="text-2xl font-semibold">VOCA ME</h2>
      </Link>
      <nav className="flex space-x-10">
        <Link href="/ons-koor" className="hover:text-salmon">
          <span>Ons Koor</span>
        </Link>
        <Link href="/concerten" className="hover:text-salmon">
          <span>Concerten</span>
        </Link>
        <Link href="/meezingen" className="hover:text-salmon">
          <span>Meezingen</span>
        </Link>
        <Link href="/vrienden" className="hover:text-salmon">
          <span>Vrienden</span>
        </Link>
        <Link href="/luister" className="hover:text-salmon">
          <span>Luister</span>
        </Link>
        <Link href="/contact" className="hover:text-salmon">
          <span>Contact</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
