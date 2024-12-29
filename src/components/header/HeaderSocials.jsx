import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" rel="https://www.linkedin.com/in/deepak-kushwaha-6b98a3289/" >
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="https://www.github.com/deepakkushwahax" >
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
