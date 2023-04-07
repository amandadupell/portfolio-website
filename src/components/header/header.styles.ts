import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  width: 100%;
`;

export const StyledBox = styled.div`
  display: flex;
  width: 75%;
  justify-content: flex-end;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 50px 0 0;

  @media screen and (max-width: 800px) {
    margin: 0 20px 0 0;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const StyledImage = styled.img`
  width: 25%;
  height: 50px;
  width: 50px;

  @media screen and (max-width: 800px) {
    height: 30px;
    width: 30px;
  }
`;
