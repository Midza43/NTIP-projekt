import { Routes, Route } from 'react-router-dom';
import Garaza from '../pages/garaza/garaza';
import Projekti from '../pages/projekti/projekti';
import Zadaci from '../pages/zadaci/zadaci';
import Body from '../components/body/Body';
import Pocetna from '../pages/pocetna/pocetna';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';

function RoutesList({auth, setAuth}) {
  return (
      <Routes>
      <Route path="/" element={<Body/>}>
        <Route index element={ auth ? <Pocetna/> : <Login setAuth={setAuth} /> } />
        <Route path="projekti" element={<Projekti/>} />
        <Route path="zadaci" element={<Zadaci/>} />
        <Route path="garaza" element={<Garaza/>} />
        <Route path="login" element={<Login setAuth={setAuth} />} />
        <Route path="logout" element={<Login setAuth={setAuth} />} />
        <Route path="register" element={<Register />} />
      </Route>
      </Routes>
  );
}

export default RoutesList;