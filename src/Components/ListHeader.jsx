import React from "react";

export default function ListHeader(props) {
  return (
    <div className="card-header">
      <h1>ToDo List</h1>
      <div className="inputg-field">
        <input type="text" placeholder="Add list items" onChange={props.listEvent} value={props.value}/>
        <button className="btn" onClick={props.addBtnClicked}>+</button>
      </div>
    </div>
  );
}
