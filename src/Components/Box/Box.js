import React from 'react';
import './Box.css';

function Box(props) {
  let {title, content, btn} = props;
  return (
    <>
      <div className="col-4 p-3 bg-light border border-secondary">
        <h5>{title}</h5>
        <p>{content}</p>
        <button type="button" className="btn btn-outline-dark">{btn}</button>
      </div>
    </>
  );
}

export default Box;