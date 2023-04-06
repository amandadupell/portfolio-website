import styled from "styled-components";
import { Link } from "react-router-dom";
import { $orange } from "../../assets/colors";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  position: fixed;
  width: 100%;
`;

export const StyledBox = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
  &:active {
    color: ${$orange};
  }
`;

export const StyledImage = styled.img`
  height: 50px;
  width: 50px;

  @media screen and (max-width: 800px) {
    height: 20px;
    width: 20px;
  }
`;
