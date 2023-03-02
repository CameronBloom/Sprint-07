import './App.css';
import { BrowserRouter, Link, Routes, Route, useParams } from 'react-router-dom';

const style = { margin: '1rem', padding: '1rem', border: '2px solid black' }

function Home(props) {
  return <div style={{ ...style, borderColor: 'red' }}>The Home Screen</div>
}
function User(props) {
  const { id } = useParams();

  return <div style={{ ...style, borderColor: 'blue' }}>Details about a user { id }</div>
}

export default function App() {
  return (
    <BrowserRouter>
      <h1>Hello</h1>
      <nav>
        <Link to="/">Home</Link>&nbsp;
        <Link to="users/1">User 1</Link>&nbsp;
        <Link to="users/2">User 2</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
