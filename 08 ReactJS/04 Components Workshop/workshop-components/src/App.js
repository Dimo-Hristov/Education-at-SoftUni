import './App.css'
import Header from "./components/Header";
import Footer from "./components/footer";
import Search from "./components/Search";
import UserList from './components/UserList';


function App() {
  return (
    <>
      <Header />

      <main className="main">

        <section className="card users-container>">
          <Search />
          <UserList />

        </section>

      </main>

      <Footer />
    </>
  );
}

export default App;
