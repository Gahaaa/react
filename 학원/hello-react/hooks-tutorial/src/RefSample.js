import React, { useRef } from 'react';

const RefSample = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const PrintId = () => {
    console.log(id.current);
  };
  return <div>Ref</div>;
};

export default RefSample;
