import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 100px;

  transition: transform 0.2s ease-in-out;
  &: hover {
    transform: scale(1.25, 1.25);
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    margin-top: 50px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 50px;
  max-width: 500px;

  @media screen and (max-width: 1400px) {
    padding: 25px;
  }

  @media screen and (max-width: 1200px) {
    height: 225px;
  }

  @media screen and (max-width: 800px) {
    height: 150px;
  }
`;
