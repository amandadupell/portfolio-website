import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 125px 0;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    margin: 50px 0;
    flex-direction: column;
    padding: 0;
  }
`;
