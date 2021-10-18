import React from "react";
import Link from "./Link";
import Image from "next/image";
interface HeroProps {
  image: {
    url: string | StaticImageData;
    alt: string;
  };
  title: string;
  subtitle: string;
  button: {
    text: string;
    url: string;
  };
}

const Hero: React.FC<HeroProps> = ({ image, title, subtitle, button }) => {
  return (
    <section className="relative -mt-20 w-full h-screen text-yellow-100">
      <div className="absolute inset-0">
        <Image
          src={image.url}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
          className="object-top"
        />
      </div>
      <div className="absolute inset-0 bg-red-900 bg-opacity-50" />
      <div className="relative flex flex-col justify-center items-center h-full space-y-5">
        <h2 className="text-3xl">{title}</h2>
        <h1 className="text-8xl pb-5">{subtitle}</h1>
        <Link
          href={button.url}
          className="bg-salmon text-yellow-100 text-lg px-5 py-2 rounded"
        >
          {button.text}
        </Link>
      </div>
    </section>
  );
};

export default Hero;
