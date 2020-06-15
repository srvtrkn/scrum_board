import React from "react";
export default function Header(props) {
  return (
    <div className="header">
      <h2>{props.header}</h2>
      <a href="!#" onClick={props.add}>
        New Card
      </a>
    </div>
  );
}
