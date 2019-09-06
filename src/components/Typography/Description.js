import styled from "styled-components";

const Description = styled.p`
  letter-spacing: 0.05em;
  line-height: ${props => props.height || "33px"};
  font-size: ${props => props.size || "24px"};
  color: #4b4b4b;
`;

export default Description;
