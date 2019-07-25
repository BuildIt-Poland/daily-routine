import React from 'react';

function CopyIndicator(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" {...props}>
      <path
        fill="#ccc"
        d="M11 0H6C3.794 0 2 1.794 2 4v8c0 2.206 1.794 4 4 4h5c2.206 0 4-1.794 4-4V4c0-2.206-1.794-4-4-4zm2 12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4a2 2 0 0 1 2-2h5c1.1 0 2 .9 2 2v8z"
      />
      <path fill="#21c230" d="M6.55 13.011L.03 7.173l1.334-1.49 5.03 4.504L15.497.017l1.49 1.334z" />
    </svg>
  );
}

export default CopyIndicator;
