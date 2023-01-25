import { Link } from 'react-router-dom'
import './Logo.css'

const Logo = () => {
  return (
    <Link to='/' className='LogoLink'>
        <div className="Logo">
            <img src="./img/logoppal.png" alt="Logo de Pildoras Empresariales" />
            <h1>Pildoras Empresariales</h1>
        </div>
    </Link>
  )
}

export default Logo