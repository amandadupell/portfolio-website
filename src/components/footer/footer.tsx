import React from "react";
import { TextComponent } from "..";
import { TextType } from "../../types/text";
import { StyledBox, StyledLink, StyledFooter } from "./footer.styles";

const Header = () => {
  return (
    <StyledFooter>
      <StyledLink onClick={() => window.scrollTo(0, 0)} to="/">
        <TextComponent type={TextType.SUBTITLE} text="HOME" />
      </StyledLink>
      <StyledBox></StyledBox>
    </StyledFooter>
  );
};

export default Header;
