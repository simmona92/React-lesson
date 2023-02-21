import React from 'react'
import Box from '../Box/Box'
import { v4 as uuidv4 } from 'uuid';

function Boxes() {
    let allBoxes = [
        {
            title: "HTML",
            content: "Lorem ipsum HTML",
            btn: "Button",
        },
        {
            title: "CSS",
            content: "Lorem ipsum CSS",
            btn: "Link",
        },
        {
            title: "JS",
            content: "Lorem ipsum JS",
            btn: "Go somewhere",
        }
    ];
    let boxes = allBoxes.map((box) => {
        return (
            <Box key = {uuidv4()} title={box.title} content={box.content} btn={box.btn} />
        );
    });
    return (
        <div className="container">
            <div className="row">{boxes}</div>
        </div>
    );
}

export default Boxes;