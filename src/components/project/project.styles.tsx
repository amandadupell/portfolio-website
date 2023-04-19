import styled from "styled-components";
import { TextComponent } from "..";

export const Container = styled.div`
  display: flex;
  margin-top: 100px;

  transition: transform 0.2s ease-in-out;
  &: hover {
    transform: scale(1.1, 1.1);
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    margin-top: 50px;
    align-items: center;
  }
`;

export const StyledText = styled(TextComponent)`
  padding-bottom: 20px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  margin-left: 50px;

  @media screen and (max-width: 800px) {
    margin: 0 50px;
    text-align: center;
  }
`;
