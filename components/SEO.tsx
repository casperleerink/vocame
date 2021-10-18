import React from "react";
import Head from "next/head";
interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const SEO: React.FC<SEOProps> = ({ title, description, url, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta property="og:locale" content="nl_NL" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Voca Me" />
      <meta name="description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default SEO;
