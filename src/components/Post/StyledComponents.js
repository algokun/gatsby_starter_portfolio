import styled from "styled-components";

const ArticleHeader = styled.div`
  padding-top: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 48px;
  line-height: 65px;
  @media (max-width: 500px) {
    font-size: 24px;
    line-height: 33px;
    padding-left: 20px;
    text-align: left;
  }
`;

const ArticleInfo = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-left: 300px;
  margin-right: 300px;

  p {
    margin-left: 10px;
    font-style: italic;
  }

  @media (max-width: 500px) {
    margin-left: 10px;
    margin-right: 10px;
    display: block;
    text-align: left;
    padding-left: 20px;
  }
`;

const BasicFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    justify-content: flex-start;
  }
`;

const ArticleCover = styled.img`
  width: 100%;
  border-radius: 30px 30px 0px 0px;
  @media (max-width: 500px) {
    border-radius: 10px 10px 0px 0px;
  }
`;

const Divider = styled.hr`
  width: 50vw;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Content = styled.div`
  padding: 50px;
  margin: 0px;
  @media (max-width: 500px) {
    padding: 0px 20px;
  }
`;

export {
  ArticleHeader,
  ArticleCover,
  ArticleInfo,
  BasicFlex,
  Divider,
  Content
};
