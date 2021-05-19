import React from 'react';
import appRoutes from '../../../config/appRoutes';
import { DropTop, Nav } from './styled';
const AsideCaminos = () => {
  return (
    <Nav>
      <DropTop />
      <ul>
        <li>
          <a href="">Caminos</a>
          <ul>
            <li to="./caminos">Camino Francés</li>
            <li>Camino del Norte</li>
            <li>Camino Primitivo</li>
            <li>Camino Portugués</li>
            <li>Vía de la Plata</li>
          </ul>
        </li>
        <li>
          <a href="">Camino actual</a>
        </li>
        <li>
          <a href="">Histórico de Caminos</a>
        </li>
      </ul>
    </Nav>
  );
};
export default AsideCaminos;
