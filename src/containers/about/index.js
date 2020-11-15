import React from 'react';
import ShoppingBasket from '../../components/shopping-basket';

const MemoBasket = React.memo(ShoppingBasket);

function About() {
  return (
    <div className="home__container">
        I am the about page
        <MemoBasket items={[1, 2, 3, 4]} total={900} />
    </div>
  );
}

export default About;
