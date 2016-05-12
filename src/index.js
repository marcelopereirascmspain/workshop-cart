import React from 'react';
import Cart from './components/Cart';
import CartItem from './components/CartItem';

const style = {
  maxWidth: 560,
  margin: '40px auto'
};

export default function App(props) {
  return (
    <section style={style}>
      <Cart>
        <CartItem
          name='Destaca tu anuncio'
          description={`Tu anuncio aparecerá destacado en
          la parrilla y con la etiqueta OFERTA, durante 30 días`}
          price='4.90 €' />
        <CartItem
          name='Subir semanal'
          description={`Subiremos tu anuncio CADA SEMANA
          a partir de mañana a las primeras posiciones,
          durante 60 días`}
          price='4.90 €' />
        <CartItem
          name='Subir diario 7'
          description={`Subiremos tu anuncio CADA DÍA
          a partir de mañana a las primeras posiciones,
          durante 7 días`}
          price='5.90 €' />
        <CartItem
          name='Subir diario 30'
          description={`Subiremos tu anuncio CADA DÍA
          a partir de mañana a las primeras posiciones,
          durante 30 días`}
          price='14.90 €' />
      </Cart>
    </section>
  );
}