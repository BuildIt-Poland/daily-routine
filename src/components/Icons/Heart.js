import React from 'react';
import { animated } from 'react-spring';

function Heart(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      viewBox="0 0 17 16"
      role="img"
      aria-labelledby="heart-title"
      {...props}
    >
      <title id="heart-title">LOVE</title>
      <path
        d="M8.5 15.5S.113 10.504.113 4.694a4.194 4.194 0 1 1 8.387 0 4.194 4.194 0 0 1 8.388 0C16.887 10.504 8.5 15.5 8.5 15.5"
        fill="currentColor"
      />
    </svg>
  );
}

export default animated(Heart);
