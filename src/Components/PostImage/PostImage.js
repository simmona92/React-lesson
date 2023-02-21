import React from 'react';
import './PostImage.css';

function PostImage(props) {
  return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={props.src} className="Post-image" alt="Nature"></img>
                </div>
                <div className="col">
                    <img src={props.src} className="Post-image" alt="Nature"></img>
                </div>
            </div>
        </div>
  );
}

export default PostImage;