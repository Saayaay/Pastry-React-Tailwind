import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Pastries from './components/Pastries.tsx';
import Search from './components/Search.tsx';
import Selects from './components/Selects.tsx';

function App() {
  return (
      <div>
        <Navbar />
        <Hero />
        <Pastries />
        <Search />
        <Selects />
      </div>
  );
}

export default App