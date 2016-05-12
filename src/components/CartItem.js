import React from 'react';

const style = {
  root: {
    borderBottom: '1px dashed #d7d8df'
  },
  cell: {
    padding: '16px 12px'
  },
  description: {
    fontSize: 12
  },
  priceCell: {
    textAlign: 'right'
  },
  price: {
    color: '#92be1f',
    whiteSpace: 'nowrap'
  }
};

export default function CartItem(props) {
  return (
    <tr style={style.root}>
      <td style={style.cell}><input type="checkbox" /></td>
      <td style={style.cell}>
        <b>{props.name}</b>
        <p style={style.description}>{props.description}</p>
      </td>
      <td style={{...style.cell, ...style.priceCell}}>
        <span style={style.price}>{props.price}</span>
      </td>
    </tr>
  );
}