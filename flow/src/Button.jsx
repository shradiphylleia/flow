import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button({ name, btname, link }) {
  return (
    <div className={name}>
      <Link to={`/${link}`}>{btname}</Link>
    </div>
  );
}

export default Button;
