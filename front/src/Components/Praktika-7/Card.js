import React from 'react';
import Cards from './Cards';

function Card(props) {
    let {username, img} = props;
  return (
    <div className="col-lg-4">
        <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={img} ></img>
        <h2>{username}</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
    </div>
  );
}

export default Card;