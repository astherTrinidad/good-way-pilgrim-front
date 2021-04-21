import { NavLink } from "react-router-dom"
import NavUnlisted from './styled'


const List = ()=> {
    return (
      <NavUnlisted>
        <NavLink to="/login" activeClassName="current" exact>
          <li>Entrar</li>
        </NavLink>
        <NavLink to="/register" activeClassName="current" exact>
          <li>Registrarse</li>
        </NavLink>
      </NavUnlisted>
    );
  }
  
  export default List
  
  