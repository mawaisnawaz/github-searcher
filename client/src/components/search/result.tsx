import styled from "styled-components";

export const Result = styled.div`
  width: 1200px;
  margin-top: 25px;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(100vh - 220px);

  @media (max-width: 768px) {
    & {
      width: 100%;
    }
  }
`;

export const ResultGrids = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(auto, auto);
  grid-gap: 15px;

  @media (max-width: 768px) and (min-width: 501px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 500px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
