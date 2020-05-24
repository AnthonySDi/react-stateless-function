import React from 'react';
import styled from '@emotion/styled';

const Condition = ({ temp, condition }) => {
  const Temp = styled.h1`
    font-family: 'fira sans', sans-serif;
    font-size: 2rem;
    font-weight: 200;
  `;
  const Condition = styled.h3`
    font-family: 'Merriweather', sans-serif;
    font-size: 1.2rem;
  `;

  return (
    <>
      <Temp>{temp} ℃</Temp>
      <Condition>{condition}</Condition>
    </>
  );
};

export default Condition;
