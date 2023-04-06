import styled from "styled-components";

interface StyledProjectImageProps {
  color: string;
}

export const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;

export const StyledCircle = styled.div<StyledProjectImageProps>`
  position: relative;
  top: 0;
  left: 0;
  height: 325px;
  width: 325px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export const StyledImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 325px;
  width: 325px;
  object-fit: cover;
`;