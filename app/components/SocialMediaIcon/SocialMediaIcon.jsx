import React from "react";
import "./SocialMediaIcon.css";

const SocialMediaIcon = ({ 
  icon, 
  href, 
  onClick,
  size = 40,
  margin = 5,
}) => {
  const style = {
  '--sm-icon-size': `${size}px`,
  '--sm-icon-font-size': `${size * 0.5}px`,
  '--sm-icon-margin': typeof margin === "number" ? `${margin}px` : margin,
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className="social-icon-container"
      style={style}
    >
      {React.cloneElement(icon, { 
        color: "currentColor",
        size: size * 0.5 
      })}
    </a>
  );
};

export default SocialMediaIcon;