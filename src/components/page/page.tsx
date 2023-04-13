import React from "react";
import { StyledPage } from "./page.styles";

interface PageProps {
  children: any;
}

const Page = ({ children }: PageProps) => {
  return <StyledPage>{children}</StyledPage>;
};

export default Page;
