import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul className='navbar'>
        <li>
          <NavLink  to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink  to='/books'>Books</NavLink>
        </li>
        <li>
          <NavLink  to='/contact'>contact</NavLink>
        </li>

    </ul>
  )
}

export default Navbar