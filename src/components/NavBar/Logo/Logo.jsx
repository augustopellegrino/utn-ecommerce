import './Logo.css'
import { Link } from 'react-router-dom'
import CustomProducts_logo from '../../../assets/images/logo/CustomProducts_logo.png'

const Logo = () => {
    return (
        <Link to="/" className="link-no-underline">
            <div id='logo'>
                <img src={CustomProducts_logo} alt="CustomProducts_logo" />
                <h1>
                    <span>Custom</span>
                    <span>Products</span>
                </h1>
            </div>
        </Link>
    )
}

export default Logo