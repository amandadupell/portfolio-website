import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 100px;

  transition: transform 0.2s ease-in-out;
  &: hover {
    transform: scale(1.25, 1.25);
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 50px 100px;
`;
