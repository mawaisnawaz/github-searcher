import styled from "styled-components";

interface FlexProps {
  alignItems?: string;
  flexDirection?: string;
  height?: string;
  justifyContent?: string;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props): string =>
    props.flexDirection ? props.flexDirection : "row"};
  height: ${(props): string => (props.height ? props.height : "auto")};
  justify-content: ${(props): string =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  align-items: ${(props): string =>
    props.alignItems ? props.alignItems : "flex-start"};
`;

export default Flex;
