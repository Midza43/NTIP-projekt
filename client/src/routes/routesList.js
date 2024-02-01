import { Routes, Route } from 'react-router-dom';
import Garaza from '../pages/garaza/Garaza';
import Projekti from '../pages/projekti/Projekti';
import Zadaci from '../pages/zadaci/zadaci';
import Body from '../components/body/Body';
import Pocetna from '../pages/pocetna/pocetna';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import AddAutomobil from '../pages/garaza/AddAutomobil';
import EditAutomobil from '../pages/garaza/EditAutomobil';
import Prodaja from '../pages/prodaja/prodaja';
function RoutesList({auth, setAuth}) {
  return (
      <Routes>
      <Route path="/" element={<Body/>}>
        <Route index element={ auth ? <Pocetna/> : <Login setAuth={setAuth} /> } />
        <Route path="Projekti" element={<Projekti/>} />
        <Route path="zadaci" element={<Zadaci/>} />
        <Route path="garaza" element={<Garaza/>} />
        <Route path="login" element={<Login setAuth={setAuth} />} />
        <Route path="logout" element={<Login setAuth={setAuth} />} />
        <Route path="add-automobil" element={<AddAutomobil />} />
        <Route path="edit-automobil/:id" element={<EditAutomobil />} />        
        <Route path="register" element={<Register />} />
        <Route path="prodaja" element={<Prodaja />} />
      </Route>
      </Routes>
  );
}

export default RoutesList;