import styled from "styled-components";
import { TextComponent } from "..";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;

  @media screen and (max-width: 1000px) {
    margin-top: 25px;
  }
`;

export const StyledTitle = styled(TextComponent)`
  margin-bottom: 20px;

  @media screen and (max-width: 1000px) {
    margin-bottom: 5px;
  }
`;
