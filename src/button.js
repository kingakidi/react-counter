import React from "react";

const Button = ({ styleText, title, action }) => {
  return (
    <div>
      <button className={styleText} onClick={action}>
        {" "}
        {title}{" "}
      </button>
    </div>
  );
};

export default Button;
