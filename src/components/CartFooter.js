import React from 'react';
import Button from './Button';
import Input from './Input';

const style = {
  discount: {
    background: '#eceeef',
    display: 'flex',
    padding: '8px 12px'
  },
  discountButton: {
    background: '#fff',
    border: '1px solid #eceeef',
    color: '#92be1f',
    fontSize: 12,
    whiteSpace: 'nowrap'
  },
  footer: {
    background: '#f9f9f9',
    overflow: 'hidden',
    padding: 20  
  },
  total: {
    fontSize: 32
  },
  checkout: {
    float: 'right'
  }
};

export default function CartFooter(props) {
  return (
    <footer>
      <div style={style.discount}>
        <Input placeholder="Código promocional" />
        <Button light>aplicar descuento</Button>
      </div>
      <div style={style.footer}>
        <span style={style.total}>0</span>
        <div style={style.checkout}>
          <Button>checkout</Button>
        </div>
      </div>
    </footer>
  );
}