import React from 'react';
import { useState } from 'react';
import './Box.css';

function Box(props) {
  let {title, content, btn} = props;
  const [color, setColor] = useState("btn btn-outline-dark");
  let changeColor = () => {
    setColor("btn btn-outline-primary");
  };
  return (
    <>
      <div className="col-4 p-3 bg-light border border-secondary">
        <h5>{title}</h5>
        <p>{content}</p>
        <button onClick = {changeColor} type="button" className={color}>{btn}</button>
      </div>
    </>
  );
}

export default Box;