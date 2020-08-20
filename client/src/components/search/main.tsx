import styled from "styled-components";

interface Props {
  isEmpty: boolean;
}

const Main = styled.div<Props>`
  display: flex;
  justify-content: ${(props): string =>
    props.isEmpty ? "center" : "flex-start"};
  align-items: ${(props): string => (props.isEmpty ? "center" : "flex-start")};
  flex-direction: column;
  padding: 50px 0;
  width: 1200px;
  height: 100%;

  @media (max-width: 768px) {
    & {
      padding: 0 40px;
      width: 100%;
    }
  }
`;

export default Main;
