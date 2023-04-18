import styled from "styled-components";
import { Link } from "react-router-dom";
import { $orange } from "../../assets/colors";

export const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  padding-bottom: 50px;
  background-color: ${$orange};
`;

export const StyledBox = styled.div`
  display: flex;
  width: 75%;
  justify-content: flex-end;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  @media screen and (max-width: 800px) {
  }

  &:hover {
    cursor: pointer;
  }
`;
