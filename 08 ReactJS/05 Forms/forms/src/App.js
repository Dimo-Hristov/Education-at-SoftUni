import './App.css';
import { useState } from 'react'

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value)
  }

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`username: ${username} , password: ${password}`);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" htmlFor="username" name="username" value={username} onChange={usernameChangeHandler} />
        <label htmlFor="password">Password</label>
        <input type="text" htmlFor="password" name="password" value={password} onChange={passwordChangeHandler} />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
