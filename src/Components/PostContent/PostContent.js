import React from 'react';
import './PostContent.css';

function PostContent(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className='text-success'>{props.titleOne}</h3>
            <p>{props.text}</p>
          </div>
          <div className="col">
            <h3 className='text-primary'>{props.titleTwo}</h3>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostContent;