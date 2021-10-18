import React from "react";
import Link from "./Link";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-red-900 text-yellow-100 max-w-screen-2xl py-5">
      <div className="flex justify-between px-10 w-full">
        <div className="w-1/4 flex-shrink-0 min-h-full flex flex-col justify-between">
          <Link href="/">
            <h2 className="text-2xl font-semibold">VOCA ME</h2>
          </Link>
          <p className="text-xs">
            Website door{" "}
            <a
              href="https://casperleerink.com/"
              target="_blank"
              className="hover:text-salmon transition-colors"
            >
              Casper Leerink
            </a>
          </p>
        </div>
        <nav className="flex space-x-5 w-1/2 pt-0.5">
          <Link
            href="/ons-koor"
            className="hover:text-salmon transition-colors"
          >
            <span>Ons Koor</span>
          </Link>
          <Link
            href="/concerten"
            className="hover:text-salmon transition-colors"
          >
            <span>Concerten</span>
          </Link>
          <Link
            href="/meezingen"
            className="hover:text-salmon transition-colors"
          >
            <span>Meezingen</span>
          </Link>
          <Link
            href="/vrienden"
            className="hover:text-salmon transition-colors"
          >
            <span>Vrienden</span>
          </Link>
          <Link href="/luister" className="hover:text-salmon transition-colors">
            <span>Luister</span>
          </Link>
        </nav>
        <div className="w-1/4">
          <h3 className="text-2xl pb-3">Contact</h3>
          <p className="text-sm">
            Wil je kaarten bestellen, meezingen met Voca Me, weten wanneer we
            ergens te beluisteren zijn of heb je andere vragen? Neem dan contact
            met ons op via:{" "}
            <a
              href="mailto:bestuur@vocame.nl"
              className="text-salmon transition-all hover:opacity-70"
            >
              bestuur@vocame.nl
            </a>{" "}
            of vul het{" "}
            <a href="/contact" className="hover:text-salmon transition-colors">
              contactformulier
            </a>{" "}
            in.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
