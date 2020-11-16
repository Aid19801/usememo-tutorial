import React, { useRef, useState } from 'react';
import ShoppingBasket from '../../components/shopping-basket';

const MemoizedChild = React.memo(ShoppingBasket);

function Home() {

    const [ myNum, updateMyNum ] = useState(0);
    let arrRef = useRef([1, 2, 3, 4]);

  return (
    <div className="home__container">
        I am the home page
        <p>myNum {myNum}</p>
        <button onClick={() => updateMyNum(myNum + 1)}>Add Number</button>
        <MemoizedChild items={arrRef.current} total={900} />
    </div>
  );
}

export default Home;
