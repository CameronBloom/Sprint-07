import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";

const style = { margin: '1rem', padding: '1rem', border: '2px solid black' }

function Home(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log(`redirecting to login`);
    // imperative code (telling code how to do it) (links are declarative)
    navigate("/login")
  }
  if (Math.floor(Math.random() * 2)) {
    // declarative code (preferred)
    return <Navigate to="/login" />
  }
  return (
    <div style={style}>
      <h2>Home Screen</h2>
      Not Jessie? <button onClick={handleClick}>Click Here!</button>
    </div>
  )
  
  
}

export default function App() {
  return (
    <BrowserRouter>
      <h1>Main Heading</h1>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <div style={{...style, backgroundColor: "pink"}}><p>Login Form</p></div> } />
      </Routes>
    </BrowserRouter>
  );
}

