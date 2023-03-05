import './App.css';
import { useState } from 'react';

function App() {

  const [form, setForm] = useState({
    user: "",
    star: "",
    agree: false,
    language: ""
  });

  // callback function takes an event object
  const change = event => {
    const { checked, value, name, type } = event.target;
    // if checkbox type, then use "checked" from event.target, else use "value" from event.target
    const valueToUse = type === "checkbox" ? checked : value;
    setForm({ ...form, [name]: valueToUse});
  }

  return (
    <div className="App">
      <form>
        <label>User&nbsp;
          <input name="user" type="text" value={form.user} onChange={change} />
        </label>

        <label>Star Trek
          <input name="star" type="radio" value="trek" checked={form.start === "check"} onChange={change}  />
        </label>

        <label>Star Wars
          <input name="star" type="radio" value="wars" checked={form.start === "wars"} onChange={change}  />
        </label>

        <label>Give away your data&nbsp;
          <input name="agree" type="checkbox" checked={form.agree} onChange={change} />
        </label>

        <label>Language&nbsp;
          <select name="language" value={form.language} onChange={change} >
            <option value="">--- Select One ---</option>
            <option value="1">JavaScript</option>
            <option value="2">Python</option>
            <option value="3">Java</option>
          </select>
        </label>


      </form>
    </div>
  );
}

export default App;
