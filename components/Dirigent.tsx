import React from "react";
import Image from "next/image";
import { ImageInt } from "../lib/types";
import BlockContent from "@sanity/block-content-to-react";
interface DirigentProps {
  title: string;
  text: any[];
  image: ImageInt;
}

const Dirigent: React.FC<DirigentProps> = ({ title, text, image }) => {
  return (
    <section className="max-w-screen-2xl w-full px-10 flex items-center pb-10">
      <div className="w-2/3 pr-10">
        <h2 className="text-4xl pb-3">{title}</h2>
        <BlockContent
          blocks={text}
          renderContainerOnSingleChild
          className="py-2 prose"
        />
      </div>
      <div className="relative w-1/3">
        <div className="absolute inset-1 bg-red-900 filter blur" />
        <Image
          src={image.asset.url}
          alt={image.asset.altText ? image.asset.altText : "Dirigent"}
          width={image.asset.metadata.dimensions.width}
          height={image.asset.metadata.dimensions.height}
          className="relative rounded-md"
        />
      </div>
    </section>
  );
};

export default Dirigent;
