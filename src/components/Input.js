import React from 'react';

const style = {
  border: '1px solid #eceeef',
  height: 44,
  padding: '8px 12px',
  width: '100%'
};

export default function Input(props) {
  return <input style={style} type='text' {...props} />
}