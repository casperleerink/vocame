import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SEO from "./SEO";

interface LayoutProps {
  title: string;
  description: string;
  overImage?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  title,
  description,
  overImage = false,
  children,
}) => {
  return (
    <>
      <SEO title={title} description={description} url="https://vocame.nl/" />
      <Header overImage={overImage} />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
