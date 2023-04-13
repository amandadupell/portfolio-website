import styled from "styled-components";

interface StyledCoverImageProps {
  color?: string;
}

export const Container = styled.div<StyledCoverImageProps>`
  display: flex;
  padding: 100px 0;
  width: 100vw;
  height: auto;
  margin-left: 50%;
  transform: translateX(-50%);
  ${({ color }) => (color ? `color: ${color};` : "")}
`;

export const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
`;
