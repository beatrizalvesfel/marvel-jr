import logoMarvel from "../../assets/images/logo-marvel.png";
import imgPerfil from "../../assets/images/profile-picture.png";
import { NavLink } from "react-router-dom";
import { Header } from "./styles";

interface IProps {
  children: JSX.Element;
}

const Menu = ({ children }: IProps) => {
  return (
    <>
      <div className="container">
        <Header>
          <div className="imgHeader">
            <img src={logoMarvel} alt="Marvel Logo" />
          </div>
          <nav>
            <ul>
              <NavLink exact activeClassName="active" to="/personagens">
                <li>Personagens</li>
              </NavLink>
              <NavLink activeClassName="active" to="/filmes">
                <li>Filmes</li>
              </NavLink>
              <NavLink activeClassName="active" to="/hqs">
                <li>HQs</li>
              </NavLink>
            </ul>
          </nav>
          <div className="imgPerfil">
            <img src={imgPerfil} alt="Avatar" />
            <a href="/">Sair</a>
          </div>
        </Header>
      </div>
      <div className="content">{children}</div>
    </>
  );
};
export default Menu;
function handleClick(menuItem: any) {
  throw new Error("Function not implemented.");
}
