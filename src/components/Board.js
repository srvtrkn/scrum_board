import React from "react";
function Board(props) {
  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    e.target.appendChild(card);
  };
  const dragOver = e => {
    e.preventDefault();
  };
  return (
    <div className="board" style={{ backgroundColor: props.backgroundColor }}>
      <b className="title">{props.title}</b>
      <div
        id={props.id}
        onDrop={drop}
        onDragOver={dragOver}
        className="content"
      >
        {props.children}
      </div>
    </div>
  );
}
export default Board;
