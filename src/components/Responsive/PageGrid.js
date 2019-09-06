import styled from "styled-components";

const PageGrid = styled.div`
  .grid-container {
    display: grid;
    grid-template-columns: ${props => props.columns || "repeat(3, 1fr)"};
    grid-gap: 30px;
    align-items: ${({center}) => center && "center"};
    height: ${({height}) => height};
  }

  .grid-item {
    margin-bottom: 20px;
  }

  @media (max-width: 500px) {
    .grid-container {
      grid-template-columns: repeat(1, 1fr);
      height: 100%;
    }
    ${({ swap }) =>
      swap &&
      `
        .grid-item:nth-of-type(1) {
      order: 2;
    }

    .grid-item:nth-of-type(2) {
      order: 1;
    }
  `}
  }
`;

export default PageGrid;
