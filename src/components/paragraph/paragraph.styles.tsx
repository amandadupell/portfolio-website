import styled from "styled-components";
import { TextComponent } from "..";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const StyledTitle = styled(TextComponent)`
  margin-bottom: 20px;
`;
