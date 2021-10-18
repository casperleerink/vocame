import React from "react";
import Link from "./Link";

interface LedenCTAProps {
  text: string;
  button: {
    text: string;
    url: string;
  };
}

const LedenCTA: React.FC<LedenCTAProps> = ({ text, button }) => {
  return (
    <section className="h-32 w-full bg-salmon text-yellow-100">
      <div className="flex items-center justify-between h-full w-full max-w-screen-2xl px-10">
        <h4 className="text-2xl">{text}</h4>
        <Link
          href={button.url}
          className="bg-yellow-100 text-red-900 px-5 py-2 rounded"
        >
          {button.text}
        </Link>
      </div>
    </section>
  );
};

export default LedenCTA;
