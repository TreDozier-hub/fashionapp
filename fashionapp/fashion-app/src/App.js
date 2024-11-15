import React from 'react';
import NavBar from './components/NavBar.js';
import Favourite from './components/Favourite.js'
import Footer from './components/Footer.js'

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

      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
