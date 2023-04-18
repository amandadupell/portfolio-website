import React from "react";
import { TextComponent } from "..";
import { TextType } from "../../types/text";
import { StyledBox, StyledLink, StyledFooter, Scissors } from "./footer.styles";
import ScissorsImage from "../../images/global/scissors.svg";

const Header = () => {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <>
      <Scissors alt="Scissors Icon" src={ScissorsImage} />
      <StyledFooter>
        <StyledBox>
          <StyledLink onClick={scrollToTop}>
            <TextComponent type={TextType.SUBTITLE} text="back to top" />
          </StyledLink>
          <TextComponent type={TextType.SUBHEADER} text="Contact" />
        </StyledBox>
      </StyledFooter>
    </>
  );
};

export default Header;
