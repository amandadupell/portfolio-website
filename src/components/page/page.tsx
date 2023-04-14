import React, { useEffect } from "react";
import { StyledPage } from "./page.styles";

interface PageProps {
  children: any;
  className?: any;
}

const Page = ({ children, className }: PageProps) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return <StyledPage className={className}>{children}</StyledPage>;
};

export default Page;
