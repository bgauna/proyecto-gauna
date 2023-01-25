import './NavBar.css'
import Logo from "../Logo/Logo"
import MenuOpciones from "../MenuOpciones/MenuOpciones"
import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
  return (
    <div className='NavBar'>
        <Logo />
        <MenuOpciones/>
        <CartWidget/>
    </div>
  )
}

export default NavBar