import { CatalogPage } from "./components/CatalogPage/CatalogPage";
import { CreatePage } from "./components/CreatePage/CreatePage";
import { DetailsPage } from "./components/DetailsPage/DetailsPage";
import { EditPage } from "./components/EditPage/EditPage";
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import { Header } from "./components/Header/Header";
import { HomePage } from "./components/HomePage/HomePage";
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect, useState, } from 'react';
import * as gameService from './services/gameService'
import { authContext } from "./contexts/authContext";
import * as authService from './services/authService'

function App() {
  const navigate = useNavigate();
  const [gamesList, setGamesList] = useState([])
  const [auth, setAuth] = useState({});

  useEffect(() => {
    gameService.getGamesList()
      .then(games => setGamesList(games))
  }, [setGamesList]);

  const onCreateGameSubmit = async (e, data) => {
    e.preventDefault();
    const newGame = await gameService.createGame(data);

    setGamesList(state => ([...state, newGame]))
    navigate('/catalog');
  }



  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
      setAuth(result);

      navigate('/catalog')
    } catch (error) {
      alert(error.message)
    }


  }

  const context = {
    onLoginSubmit,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken

  }

  return (
    <authContext.Provider value={context}>
      <div id="box">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/catalog' element={<CatalogPage gamesList={gamesList} />} />
            <Route path='/create' element={<CreatePage onCreateGameSubmit={onCreateGameSubmit} />} />
            <Route path='/details/:gameId' element={<DetailsPage />} />
            <Route path='/edit' element={<EditPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </main>
      </div>
    </authContext.Provider>
  );
}

export default App;
