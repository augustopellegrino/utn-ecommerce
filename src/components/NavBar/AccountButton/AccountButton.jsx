import './AccountButton.css'
import { Link } from 'react-router-dom'

const AccountButton = () => {
    return (
        <Link to="/login"><button id='accountButton'>Acceder</button></Link>
    )
}

export default AccountButton