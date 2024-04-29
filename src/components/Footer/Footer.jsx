import './Footer.css'
import CustomProducts_logo from '../../assets/images/logo/CustomProducts_logo.png'
import { Link } from 'react-router-dom';

import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
    return (
        <footer id='logo-footer'>
            <ul>
                <li>Inicio</li>
                <li>Terminos y condiciones</li>
                <li>Contactanos</li>
                <li>Ayuda</li>
            </ul>
            <hr />
            <Link to="/" className="link-no-underline">
                <img src={CustomProducts_logo} alt="CustomProducts_logo" />
            </Link>
            <p>&copy; 2023 CustomProducts, SA.</p>
            <div>
                <span><CiFacebook /></span>
                <span><CiInstagram /></span>
                <span><CiYoutube /></span>
                <span><CiLinkedin /></span>
            </div>
            <p><small>Saladillo, Bs.As.</small></p>
        </footer>
    )
}

export default Footer