import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

const style = { margin: "1rem", padding: "1rem", border: "2px solid black" }

function Home(props) {
  return <h2 style={{ ...style, borderColor: "red" }}>Home Screen</h2>
}

function Bikes(props) {
  return (
    <div style={{ ...style, borderColor: "blue" }}>
      <h2>Bikes Screen</h2>
      <nav>
        <Link to="mountain">Mountain Bikes</Link>&nbsp;
        <Link to="urban">Urban Bikes</Link>&nbsp;
        <Link to="">Close</Link>
      </nav>
      <Routes>
        <Route path="mountain/*" element={ <Mountain /> } />
        <Route path="urban/*" element={ <Urban /> } />
      </Routes>
    </div>
  )
}

function Mountain(props) {
  return (
    <div style={{ ...style, borderColor: "green" }}>
      <h3>Mountain Bikes</h3>
    </div>
  )
}

function Urban(props) {
  return (
    <div style={{ ...style, borderColor: "yellow" }}>
      <h3>Urban Bikes</h3>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <h1>Hello</h1>
      <nav>
        <Link to="/">Home</Link>&nbsp;
        <Link to="bikes/">Bikes</Link>
      </nav>
      <Routes>
        <Route path="/" element={ <Home /> } />
        {/* any path that starts with bikes will render the Bikes component */}
        <Route path="bikes/*" element={ <Bikes /> } />
      </Routes>
    </BrowserRouter>
  );
}
