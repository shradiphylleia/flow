import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button({ name, btname, link, state }) {
  return (
    <div className={name}>
      <Link to={{ pathname: `/${link}`, state }}>{btname}</Link>
    </div>
  );
}

export default Button;
