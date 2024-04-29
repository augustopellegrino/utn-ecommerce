import { Link } from 'react-router-dom'
import { Home } from '../../pages'
import './LoginForm.css'
import logo from '../../assets/images/logo/CustomProducts_logo.png'

const LoginForm = () => {
    return (
        <>
            <form id='loginForm'>
                <Link to={"/"} element={<Home />} ><img src={logo} /></Link>
                <h3>Iniciar sesión</h3>
                <label>Usuario
                    <input type="text" placeholder="Ingresa tu Email o Teléfono" id="loginForm-user" />
                </label>
                <label>Password
                    <input type="password" placeholder="Escribi tu mensaje" id="loginForm-pass" />
                </label>
                <button>Acceder</button>
                <div id='loginForm-register'>
                    <p>No tenes una cuenta?</p>
                    <span>Registrate</span>
                </div>
                <Link to={"/"} element={<Home />} >Volver</Link>
            </form>
        </>
    )
}

export default LoginForm
