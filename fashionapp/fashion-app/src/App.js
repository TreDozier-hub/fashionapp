import './App.css';
import Newarrivals from './components/Newarrivals.js';
import Payday from './components/Payday.js';
import Newsletter from './components/Newsletter.js';
import NavBar from './components/NavBar.js';
import Favourite from './components/Favourite.js'
import Footer from './components/Footer.js'
import DownloadApp from './components/DownloadApp.js';
import Barremarques from './components/Barremarques.js';
import Explore from './components/Explore.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <NavBar />
        </>
      </header>

      <main>
        <Explore />
        <Barremarques />
        <Newarrivals />
        <Payday />
        <Favourite />
        <DownloadApp />
        <Newsletter />

      </main>

      <footer>
        <Footer />
      </footer>

    </div>
    )
}

export default App;
