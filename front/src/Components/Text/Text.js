import React, { useState } from 'react';

function Text(props) {
    let {text, maxLength} = props;
    const [str, setStr] = useState(text.substring(0, maxLength));
    const [link, setLink] = useState(false);
  return (
    <p>{str}<a href='#' onClick={() => {
      link ? setStr(text.substring(0, maxLength)) : setStr(text);
      setLink(!link);
    }} >
      {link ? "...Read less" : "...Read more"}
      </a>
    </p>
  );
}

export default Text;