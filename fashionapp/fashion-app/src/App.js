import React from 'react';
import NavBar from './components/NavBar.js';
import Favourite from './components/Favourite.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <NavBar />
        </>
      </header>

      <main>
        <Favourite />
      </main>
    </div>
  );
}

export default App;
