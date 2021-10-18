import React from "react";
import NextLink from "next/link";
interface LinkProps {
  href: string;
  children: React.ReactChild | React.ReactChild[];
  className?: string;
}

const Link: React.FC<LinkProps> = ({ children, href, className = "" }) => {
  return (
    <NextLink href={href} passHref>
      <a className={className}>{children}</a>
    </NextLink>
  );
};

export default Link;
