import Hero from './components/Hero.tsx';
import Navbar from './components/Navbar.tsx';
import Pastries from './components/Pastries.tsx';
import Search from './components/Search.tsx';

function App() {
  return (
      <div>
        <Navbar />
        <Hero />
        <Pastries />
        <Search />
      </div>
  );
}

export default App