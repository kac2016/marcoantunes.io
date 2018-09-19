import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Obfuscate from "react-obfuscate";
import { FaEnvelopeO, FaTwitter, FaGithub, FaLinkedin } from "react-icons/lib/fa/";
import Helmet from "react-helmet";

export default props => {
  return (
    <div className="c-content-box">
      <Helmet title="Contact me" />

      <HeadlineWithFocus>
        Feel free<span>to reach out</span>
      </HeadlineWithFocus>
      <ul className="c-contact-list">
        <li className="c-contact-list__item">
          <FaEnvelopeO />
          <Obfuscate email="antunesantoniomarco@gmail.com" />
        </li>
        <li className="c-contact-list__item">
          <FaTwitter />
          <a
            href="https://twitter.com/marco_a_antunes"
            target="_blank"
            rel="noopener noreferrer"
          >
            @marco_a_antunes
          </a>
        </li>
        <li className="c-contact-list__item">
          <FaGithub />
          <a
            href="https://github.com/marcoantonioantunes"
            target="_blank"
            rel="noopener noreferrer"
          >
            marcoantonioantunes
          </a>
        </li>
        <li className="c-contact-list__item">
          <FaLinkedin />
          <a
            href="https://www.linkedin.com/in/marcoantonioantunes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            marcoantonioantunes
          </a>
        </li>
      </ul>
      <h2
        className={`
        js-action-button-anchor
        c-content-box__subheadline 
        c-content-box__subheadline--with-button
      `}
      >
        Do not forget
      </h2>
    </div>
  );
};
