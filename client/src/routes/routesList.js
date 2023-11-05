import { Routes, Route } from 'react-router-dom';
import Garaza from '../pages/garaza/garaza';
import Projekti from '../pages/projekti/projekti';
import Zadaci from '../pages/zadaci/zadaci';
import Body from '../components/body/Body';
import Pocetna from '../pages/pocetna/pocetna';

function RoutesList() {
  return (
      <Routes>
      <Route path="/" element={<Body/>}>
        <Route index element={<Pocetna/>} />
        <Route path="projekti" element={<Projekti/>} />
        <Route path="zadaci" element={<Zadaci/>} />
        <Route path="garaza" element={<Garaza/>} />
      </Route>
      </Routes>
  );
}

export default RoutesList;