import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <img src={props.src} className="img-fluid" alt="Nature"></img>
    </>
  );
}

export default Header;