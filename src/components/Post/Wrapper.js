import React from "react";
import styled from "styled-components";

const ArticleWrapper = ({ children }) => (
  <div
    style={{
      position: "absolute",
      top: 120,
      left: 50,
      right: 50,
      padding: 0,
      backgroundColor: "white",
      boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.25)",
      borderRadius: "30px",
      margin: "20px"
    }}
    className="wrapper"
  >
    {children}
  </div>
);

export default ArticleWrapper;
