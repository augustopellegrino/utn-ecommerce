import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NavMenuList = ({close}) => (
  <>
    <li>Categorias</li>
    <li>Favoritos</li>
    <li>Ofertas</li>
    <li>Ayuda</li>
    <li><Link to="/contact" className="link-no-underline" onClick={close}>Contactanos</Link></li>
  </>

);

NavMenuList.propTypes = {
  close: PropTypes.func,
};

export default NavMenuList

