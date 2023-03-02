import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
// import { useState, useEffect } from 'react';
const style = { margin: '1rem', padding: '1rem', border: '2px solid black' }

function Home(props) {
  return <div style={{ ...style, borderColor: 'red' }}>The Home Screen</div>
}
function User(props) {
  // const [data, setData] = useState({});
  const { user } = useParams();
  // useEffect(() => {
  //   // fetch details whenever user changes
  //   // save fetched details
  // }, [user])
  return (
    <div style={{ ...style, borderColor: 'blue' }}>Details about user { user }</div>
  )
}
export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home Page</Link>&nbsp;
        {
          [1, 2, 3].map((integer) => {
            return <><Link to={`users/${integer}`}>Details on user {integer}</Link>&nbsp;</>
          })
        }
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/:user" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}