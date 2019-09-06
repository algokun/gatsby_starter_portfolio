import React from "react";
import PageGrid from "../components/Responsive/PageGrid";
import Layout from "../components/Layout";
import PersonImage from "../images/personImage";
import SocialIcons from "../components/SEO/SocialIcons";
import Heading from "../components/Typography/Heading";
import Description from "../components/Typography/Description";
import { graphql } from "gatsby";

export default function index({ data }) {
  const body = data.markdownRemark.rawMarkdownBody;
  const heading = data.markdownRemark.frontmatter.heading;
  return (
    <Layout>
      <PageGrid columns="2fr 1fr" center="true" height="74vh" swap="true">
        <div className="grid-container">
          <div className="grid-item">
            <Heading>{heading}</Heading>
            <Description>{body}</Description>
            <SocialIcons />
          </div>
          <div className="grid-item">
            <PersonImage />
          </div>
        </div>
      </PageGrid>
    </Layout>
  );
}

export const indexQuery = graphql`
  {
    markdownRemark(frontmatter: { page: { eq: "Index" } }) {
      rawMarkdownBody
      frontmatter {
        heading
      }
    }
  }
`;
