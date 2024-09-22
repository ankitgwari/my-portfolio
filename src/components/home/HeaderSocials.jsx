import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://github.com/ankitgwari"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-github"></i>
      </a>
      <a
        href="https://leetcode.com/u/ankitgwari/"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-solid fa-code"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/ankit-gwari-96394722a/"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
