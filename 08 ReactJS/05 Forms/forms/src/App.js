import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" htmlFor="username" name="username" />
        <label htmlFor="password">Password</label>
        <input type="text" htmlFor="password" name="password" />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
