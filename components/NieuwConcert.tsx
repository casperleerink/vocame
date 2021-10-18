import React from "react";
import { ImageInt } from "../lib/types";
import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import Link from "./Link";
interface NieuwConcertProps {
  concert: {
    bestelLink: string | null;
    date: string;
    image: ImageInt | null;
    textRaw: any[];
    title: string;
  };
}

const NieuwConcert: React.FC<NieuwConcertProps> = ({ concert }) => {
  const { title, textRaw, image, date, bestelLink } = concert;
  return (
    <section className="flex flex-col md:flex-row justify-between">
      <div>
        <h2 className="text-4xl">{title}</h2>
        <h5 className="opacity-60">{date}</h5>
        <BlockContent
          blocks={textRaw}
          renderContainerOnSingleChild
          className="py-2 prose"
        />
        {bestelLink && (
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={bestelLink}
              className="bg-salmon text-yellow-100 px-5 py-2 rounded"
            >
              Bestel Kaarten
            </a>
          </div>
        )}
      </div>
      <div className="w-1/3">
        {image && (
          <Image
            src={image.asset.url}
            width={image.asset.metadata.dimensions.width}
            height={image.asset.metadata.dimensions.height}
          />
        )}
      </div>
    </section>
  );
};

export default NieuwConcert;
