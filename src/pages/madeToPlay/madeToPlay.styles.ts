import styled from "styled-components";

export const SectionOne = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 150px;

  @media screen and (max-width: 1000px) {
    margin-top: 20px;
    flex-direction: column;
    justify-content: center;
  }
`;
