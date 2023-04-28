import React from "react";
import { TextComponent } from "..";
import { TextType } from "../../types/text";
import {
  StyledBox,
  StyledLink,
  StyledFooter,
  Scissors,
  StyledA,
  StyledText,
  ProjectContainer,
  PartyIcon,
} from "./footer.styles";
import ScissorsImage from "../../images/global/scissors.svg";
import PartyImage from "../../images/global/animatedParty.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const email = () => (window.location.href = "mailto:anddupell@gmail.com");

  const handleAnimation = () => {
    document.body.animate(
      {
        background: [
          "#c6fefe",
          "#c9ffc9",
          "#ffffce",
          "#ffcfcf",
          "#cacafc",
          "#c6fefe",
        ],
        easing: "linear",
      },
      { duration: 3000, iterations: 2 }
    );
  };

  return (
    <>
      <Scissors role="presentation" alt="" src={ScissorsImage} />
      <StyledFooter>
        <StyledBox>
          <StyledA onClick={scrollToTop}>
            <TextComponent type={TextType.SUBTITLE} text="back to top" />
          </StyledA>
          <TextComponent type={TextType.SUBHEADER} text="Contact" />
          <StyledLink
            target="_blank"
            to="https://www.linkedin.com/in/amanda-dupell-profile/"
          >
            <StyledText type={TextType.TITLE} text="linkedin" />
          </StyledLink>
          <StyledLink target="_blank" to="https://github.com/amandadupell">
            <StyledText type={TextType.TITLE} text="github" />
          </StyledLink>
          <StyledA onClick={email}>
            <StyledText type={TextType.TITLE} text="email" />
          </StyledA>
          <StyledA onClick={handleAnimation}>
            <PartyIcon role="presentation" alt="" src={PartyImage} />
          </StyledA>
        </StyledBox>
        <ProjectContainer>
          <StyledText type={TextType.TITLE} text="projects" />
          <StyledLink to="/made-to-play">
            <StyledText type={TextType.PARAGRAPH} text="made to play" />
          </StyledLink>
          <StyledLink to="/letterboxd">
            <StyledText type={TextType.PARAGRAPH} text="letterboxd" />
          </StyledLink>
          <StyledLink target="_blank" to="https://amandadupell.surge.sh/">
            <StyledText type={TextType.PARAGRAPH} text="personal portfolio" />
          </StyledLink>
        </ProjectContainer>
      </StyledFooter>
    </>
  );
};

export default Footer;
