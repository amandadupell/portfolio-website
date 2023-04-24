import styled from "styled-components";

interface StyledProjectImageProps {
  color: string;
}

export const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 250px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    padding-bottom: 20px;
  }
`;

export const StyledCircle = styled.div<StyledProjectImageProps>`
  position: relative;
  height: 225px;
  width: 225px;
  border-radius: 50%;
  background-color: ${({ color }) => color};

  @media screen and (max-width: 1000px) {
    height: 150px;
    width: 150px;
  }
`;

export const StyledImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 250px;
  width: 250px;
  object-fit: cover;

  @media screen and (max-width: 1000px) {
    height: 150px;
    width: 150px;
  }
`;
