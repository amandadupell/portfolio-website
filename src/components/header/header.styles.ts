import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarNav = styled.nav`
  height: 100vh;
  display: flex;
  position: fixed;
  top: 100px;
  left: 100px;
  @media screen and (max-width: 800px) {
    top: 15px;
    left: 15px;
  }
`;

export const StyledImage = styled.img``;

export const StyledLink = styled(Link)``;
