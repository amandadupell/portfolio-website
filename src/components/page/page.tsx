import React from "react";
import { StyledPage } from "./page.styles";

interface PageProps {
  children: any;
  className?: any;
}

const Page = ({ children, className }: PageProps) => {
  return <StyledPage className={className}>{children}</StyledPage>;
};

export default Page;
