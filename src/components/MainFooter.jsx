import React from 'react';
import { Link, graphql } from 'gatsby';

const MainFooter = () => (
  <div className="c-main-footer">
    <p className="c-main-footer__note">
      Built with{" "}
      <a
        href="https://graphql.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        GraphQL
      </a>,{" "}
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        React
      </a>{" "}and{" "}
      <a
        href="https://www.gatsbyjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby.js
      </a>
      . Hosted on{" "}
      <a
        href="https://www.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Netlify
      </a>. The code is open source and available at{" "}
      <a
        href="https://github.com/marcoantonioantunes"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>.
    </p>
  </div>
);

export default MainFooter;
