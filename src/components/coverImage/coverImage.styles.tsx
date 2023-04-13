import styled from "styled-components";

interface StyledCoverImageProps {
  color?: string;
}

export const Container = styled.div<StyledCoverImageProps>`
  display: flex;
  width: 100vw;
  height: auto;
  margin-left: 50%;
  transform: translateX(-50%);
  padding-bottom: 100px;
  ${({ color }) => (color ? `color: ${color};` : "")}

  @media screen and (max-width: 1000px) {
    padding-bottom: 20px;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
`;
