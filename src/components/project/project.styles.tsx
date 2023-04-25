import styled from "styled-components";
import { TextComponent } from "..";

export const Container = styled.div`
  display: flex;
  margin: 50px 0;

  transition: transform 0.2s ease-in-out;
  &: hover {
    transform: scale(1.1, 1.1);
  }

  @media screen and (max-width: 1200px) {
    margin: 25px 0;
    flex-direction: column;
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
  max-width: 400px;
  margin-left: 50px;

  @media screen and (max-width: 800px) {
    margin: 0 50px;
    text-align: center;
  }
`;
