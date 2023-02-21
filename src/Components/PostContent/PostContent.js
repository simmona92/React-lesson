import React from 'react';
import './PostContent.css';

function PostContent() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className='text-success'>Antraštė</h3>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div className="col">
            <h3 className='text-primary'>Antraštė</h3>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostContent;