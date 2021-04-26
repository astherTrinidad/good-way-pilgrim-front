import { NavLink } from 'react-router-dom';
import NavUnlisted from './styled';
import appRoutes from '../../../config/appRoutes';

const List = () => {
  return (
    <NavUnlisted>
      <NavLink to={appRoutes.login} activeClassName="current" exact>
        <li>Entrar</li>
      </NavLink>
      <NavLink to={appRoutes.register} activeClassName="current" exact>
        <li>Registrarse</li>
      </NavLink>
    </NavUnlisted>
  );
};

export default List;
