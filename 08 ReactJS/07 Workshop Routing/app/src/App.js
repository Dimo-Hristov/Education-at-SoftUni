import { CatalogPage } from "./CatalogPage/CatalogPage";
import { CreatePage } from "./CreatePage/CreatePage";
import { DetailsPage } from "./DetailsPage/DetailsPage";
import { EditPage } from "./EditPage/EditPage";
import { Register } from "./Register/Register";
import { Login } from "./Login/Login";
import { Header } from "./Header/Header";
import { HomePage } from "./HomePage/HomePage";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
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
