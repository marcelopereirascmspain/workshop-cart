import React from 'react';
import Button from './Button';
import CartItem from './CartItem';
import CartFooter from './CartFooter';

const style = {
  root: {
    background: '#fff',
    border: '1px solid #d7d8df',
    borderRadius: 3
  },
  content: {
    padding: '0 12px'
  },
  table: {
    borderCollapse: 'collapse',
    width: '100%'
  }
};

export default function Cart(props) {
  return (
    <section style={style.root}>
      <div style={style.content}>
        <table style={style.table}>
          <tbody>
            {props.children}
          </tbody>
        </table>
      </div>
      <CartFooter />
    </section>
  );
}