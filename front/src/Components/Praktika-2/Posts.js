import React from 'react';
import { useState } from 'react';

function Posts() {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    let reset = () => {
        setLike(0);
        setDislike(0);
    };
  return (
<div className="container mt-5 mb-5">
    <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
            <div className="card">
                <div className="d-flex justify-content-between p-2 px-3">
                    <div className="d-flex flex-row gap-1 align-items-center">
                        <img src="https://i.imgur.com/UXdKE3o.jpg" width="50" className="rounded-circle"></img>
                        <div className="d-flex flex-column ml-2">
                            <span className="font-weight-bold">Jeanette Sun</span>
                            <small className="text-primary">Collegues</small>
                        </div>
                    </div>
                    <div className="d-flex flex-row mt-1 ellipsis">
                        <small className="mr-2">20 mins</small>
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                </div>
                <img src="https://i.imgur.com/xhzhaGA.jpg" className="img-fluid"></img>
                <div className="p-2">
                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <hr></hr>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row gap-1 d-flex align-items-center">
                            <button onClick = {() => setLike(like + 1)} type="button" className="btn btn-primary btn-sm">Like</button>
                            <button onClick = {() => setDislike(dislike + 1)} type="button" className="btn btn-warning btn-sm">Dislike</button>
                            <button onClick = {reset} type="button" className="btn btn-secondary btn-sm">Reset</button>
                        </div>
                        <div className="d-flex flex-row gap-1 muted-color">
                            <span>{like} likes</span>
                            <span className="ml-2">{dislike} dislikes</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Posts;