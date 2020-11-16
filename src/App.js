import React, { useState } from 'react';
import { Home, About } from './containers';
import './App.css';

function App() {
  const [ isHome, toggleIsHome ] = useState(true);
  return (
    <div className="App">

      <header>
        #myShoppingSite
      </header>
      
      <section>
        <h1>Use Memo Tutorial</h1>
        <p>Using Memo's to Memoize Your Bloody Memos</p>
        { isHome ? <Home /> : <About />}
        <button onClick={() => toggleIsHome(!isHome)}>{ isHome ? "About" : "Home"}</button>
      </section>


      <footer>Some footer information, socials and things.</footer>
    </div>
  );
}

export default App;
