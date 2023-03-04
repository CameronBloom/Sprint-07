import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const style = { margin: '1rem', padding: '0.5rem', border: '2px solid black' }
  
  function Home(props) {
    return <h2 style={{ ...style, borderColor: 'red'}}>The Home Screen</h2>
  }
  function Cats(props) {
    return <h2 style={{ ...style, borderColor: 'blue'}}>The Cats Screen</h2>
  }
  function About(props) {
    return <h2 style={{ ...style, borderColor: 'green'}}>The About Screen</h2>
  }

  return (
    <BrowserRouter>
      <h1>Second Demo Project</h1>
      <nav>
        <Link to="/">Home</Link>&nbsp;
        <Link to="cats">Cats</Link>&nbsp;
        <Link to="about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cats" element={<Cats />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
