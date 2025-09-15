'use client';

import React from "react";
import Link from "next/link";
import "./IconOrangeButton.css";

//sample usage
//   With Icon using href
//    <IconOrangeButton text="Start Demo" href="/demo" icon={<FaPlay size={10} />}/>
//   Without Icon using href
//    <IconOrangeButton text="Start Demo" href="/demo"/>
//   With Icon using onClick Function
//    <IconOrangeButton text="Start Demo" onClick={FunctionToCall} icon={<FaPlay size={10} />}/>
//   Without Icon using onClick Function
//    <IconOrangeButton text="Start Demo" onClick={FunctionToCall}/>

const IconOrangeButton = ({ text, href, onClick, icon }) => {
  const buttonClasses = `icon-orange-button`;

  const content = (
    <>
      <span>{text}</span>
      {icon && <span className="icon-orange-button__icon">{icon}</span>}
    </>
  );

  return href ? (
    <Link href={href} className={buttonClasses} aria-label={text}>
      {content}
    </Link>
  ) : (
    <button onClick={onClick} className={buttonClasses} aria-label={text}>
      {content}
    </button>
  );
};

export default IconOrangeButton;