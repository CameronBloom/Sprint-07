import { useState, useEffect } from 'react';
import * as yup from 'yup';
import './App.css';

// yup schema - normally stored in a separate file
const schema = yup.object().shape({
  user: yup.string().required('user is required').min(6, 'user needs to be a minimum of 6 chars'),
  star: yup.string().oneOf(["wars", "trek"], "you must select a star"),
  agree: yup.boolean().oneOf([true], "you must give away all of your data"),
  language: yup.string().oneOf(["1", "2", "3"], "you must choose a language")
})

function App() {

  const [form, setForm] = useState({ user: "", star: "", agree: false, language: "" });
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState({ user: "", star: "", agree: "", language: "" })
  const setFormErrors = (name, value) => {
    
    // asynchronous promise, so use a "then()"!
    yup.reach(schema, name).validate(value)
      .then(() => {
        setErrors({ ...errors, [name]: '' })
      })
      .catch(err => {
        setErrors({ ...errors, [name]: err.errors[0] })
      })
  }

  // callback function takes an event object
  const change = event => {
    const { checked, value, name, type } = event.target;
    // if checkbox type, then use "checked" from event.target, else use "value" from event.target
    const valueToUse = type === "checkbox" ? checked : value;
    setFormErrors(name, valueToUse);
    setForm({ ...form, [name]: valueToUse});
  }

  useEffect(() => {
    // if the schema is valid...
    schema.isValid(form)
      .then(valid => setDisabled(!valid))
      .catch(err => console.error(err))
  }, [form])

  return (
    <div className="App">
      <div style={{ color: "red" }}>
        <div>{errors.user}</div>
        <div>{errors.star}</div>
        <div>{errors.agree}</div>
        <div>{errors.language}</div>
      </div>
      <form>
        <label>User&nbsp;
          <input name="user" type="text" value={form.user} onChange={change} />
        </label>

        <label>Star Trek
          <input name="star" type="radio" value="trek" checked={form.star === "trek"} onChange={change}  />
        </label>

        <label>Star Wars
          <input name="star" type="radio" value="wars" checked={form.star === "wars"} onChange={change}  />
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
        <button disabled={disabled}>Submit</button>
      </form>
    </div>
  );
}

export default App;
