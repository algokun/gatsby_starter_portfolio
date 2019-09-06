import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

const IconGroup = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;

  a {
    color: #616caa;
    font-size: 30px;
    margin-right: 20px;
  }

  svg {
    transition: 0.2s;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export default function SocialIcons() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          socialLinks {
            name
            url
          }
        }
      }
    }
  `);

  return (
    <IconGroup>
      {data.site.siteMetadata.socialLinks.map(({ name, url }, index) => (
        <a href={url} key={index}>
          <Icon name={name} />
        </a>
      ))}
    </IconGroup>
  );
}

const Icon = ({ name }) => {
  switch (name) {
    case "Facebook":
      return <FaFacebook />;
      break;
    case "Github":
      return <FaGithub />;
      break;
    case "Twitter":
      return <FaTwitter />;
      break;
    case "Instagram":
      return <FaInstagram />;
      break;
    case "LinkedIn":
      return <FaLinkedin />;
      break;

    default:
      break;
  }
};
