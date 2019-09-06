import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import styled from "styled-components";
import Heading from "../components/Typography/Heading";
import Description from "../components/Typography/Description";
import PageGrid from "../components/Responsive/PageGrid";

const Button = styled.a`
  padding: 5px 20px;
  background: transparent;
  border: 2px solid #616caa;
  border-radius: 5px;
  margin-right: 15px;
  color: #616caa;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    background: #616caa;
    color: #fff;
  }
`;

const Item = styled.span`
  margin-right: 5px;
  color: #616caa;
  font-style: italic;
`;

export default function projects({ data }) {
  return (
    <Layout>
      <PageGrid>
        <div className="grid-container">
          {data &&
            data.allProjectsYaml.edges.map(({ node }) => (
              <div className="grid-item">
                <Img fluid={node.cover.childImageSharp.fluid} />
                <Heading size="24px" height="33px" weight="400">
                  {node.title}
                </Heading>
                📅 {node.date}
                <Description size="18px" height="25px">
                  {node.description}

                  <p>
                    ️️Built with{" "}
                    {node.tags.map(tag => (
                      <Item>{tag}</Item>
                    ))}
                  </p>
                </Description>
                {node.demo ? <Button href={node.demo}>Demo</Button> : null}
                {node.repo ? <Button href={node.repo}>Source</Button> : null}
              </div>
            ))}
        </div>
      </PageGrid>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ProjectsQuery {
    allProjectsYaml(sort: { fields: date, order: DESC }) {
      edges {
        node {
          title
          description
          cover {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          demo
          repo
          date
          tags
        }
      }
    }
  }
`;
