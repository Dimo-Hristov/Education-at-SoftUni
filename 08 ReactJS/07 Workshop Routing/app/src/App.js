import { CatalogPage } from "./components/CatalogPage/CatalogPage";
import { CreatePage } from "./components/CreatePage/CreatePage";
import { DetailsPage } from "./components/DetailsPage/DetailsPage";
import { EditPage } from "./components/EditPage/EditPage";
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import { Header } from "./components/Header/Header";
import { HomePage } from "./components/HomePage/HomePage";
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import * as gameService from './services/gameService'

function App() {
  const [gamesList, setGamesList] = useState([])

  useEffect(() => {
    gameService.getGamesList()
      .then(games => setGamesList(games))
  }, [setGamesList])

  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage gamesList={gamesList} />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/details' element={<DetailsPage />} />
          <Route path='/edit' element={<EditPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
