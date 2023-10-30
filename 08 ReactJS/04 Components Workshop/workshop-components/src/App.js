import './App.css'
import * as userService from './services/userService'
import Header from "./components/Header";
import Footer from "./components/footer";
import Search from "./components/Search";
import UserList from './components/UserList';



function App() {
  const getUsers = async () => {
    return await userService.getAll();
  }

  return (
    <>
      <Header />

      <main className="main">

        <section className="card users-container>">
          <Search />
          <UserList users={getUsers} />

        </section>

      </main>

      <Footer />
    </>
  );
}

export default App;
