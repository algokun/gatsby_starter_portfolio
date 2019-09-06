import styled from "styled-components";

const Heading = styled.h1`
  font-weight: ${props => props.weight || "600"};
  line-height: ${props => props.height || "49px"};
  font-size: ${props => props.size || "36px"};
  letter-spacing: 0.05em;
`;

export default Heading;
