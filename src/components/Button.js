import React from 'react';

const style = {
  rest: {
    background: '#92be1f',
    border: 0,
    borderRadius: 3,
    color: '#fff',
    cursor: 'pointer',
    font: '16px/1.5 sans-serif',
    padding: '8px 16px',
    whiteSpace: 'nowrap'
  },
  light: {
    background: '#fff',
    color: '#92be1f'
  }
};

export default function Button({ light = false, ...props }) {
  const mergedStyle = light ? {...style.rest, ...style.light} : style.rest; 
  return <button
    style={mergedStyle}
    {...props}>
    {props.children}
  </button>;
}