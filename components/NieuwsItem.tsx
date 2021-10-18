import React from "react";
import Image from "next/image";
interface NieuwsItemProps {
  title: string;
  content: string;
  image?: {
    url: string | StaticImageData;
    alt: string;
  };
}

const NieuwsItem: React.FC<NieuwsItemProps> = ({ title, content, image }) => {
  return (
    <article className="flex">
      <div>
        <h4 className="text-3xl font-semibold pb-5">{title}</h4>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="max-w-3xl"
        />
      </div>
      {image && (
        <div>
          <Image src={image.url} alt={image.alt} placeholder="blur" />
        </div>
      )}
    </article>
  );
};

export default NieuwsItem;
