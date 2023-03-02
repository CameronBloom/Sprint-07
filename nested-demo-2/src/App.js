import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

const style = { backgroundColor: "pink", margin: "1rem", padding: "1rem", border: "2px solid black" }

function Home(props) {
  return <h2 style={{ ...style, borderColor: "red" }}>Home Screen</h2>
}

function Bikes(props) {
  return (
    <div>
      <h2 style={{ ...style, borderColor: "lightblue" }}>Bikes Bikes Bikes</h2>
      <nav>
        <Link to="mountain">Mountain Bikes</Link>&nbsp;
        <Link to="urban">Urban Bikes</Link>
      </nav>
      <Routes>
        <Route path="mountain/*" element={ <Mountain /> } />
        <Route path="urban/*" element={ <Urban /> } />
      </Routes>
    </div>
  )
}

function Mountain(props) {
  return <h2 style={{ ...style, borderColor: "yellow" }}>Mountain Screen</h2>
}

function Urban(props) {
  return <h2 style={{ ...style, borderColor: "green" }}>Urban Screen</h2>
}

export default function App() {
  return (
    <BrowserRouter>
      <h1>Hello</h1>
      <nav>
        <Link to="/">Home</Link>&nbsp;
        <Link to="bikes">Bikes</Link>
      </nav>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="bikes/*" element={ <Bikes /> } />
      </Routes>
    </BrowserRouter>
  );
}