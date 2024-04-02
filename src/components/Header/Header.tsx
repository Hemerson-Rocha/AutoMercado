import { NavLink } from 'react-router-dom'
import { AppBar, Stack, Toolbar, Typography} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'
import './Banner.css'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import LateralMenu from './LateralMenu';
import { useContext, useState } from 'react';
import { useWidth } from '../../hooks/useWidth';
import logo_cars from '../../assets/logo_cars.png'
import LoginIcon from '@mui/icons-material/Login';
import { AuthContext } from '../../contexts/AuthContext';
import MenuAccount from '../MenuAccount/MenuAccount';

const Header = () => {
  const [open, setOpen] = useState(false);
  const { auth } = useContext(AuthContext)

  const toggleDrawer = (newOpen: boolean) => ():void => {
    setOpen(newOpen);
  };
  

  return (
    <>
    <AppBar position='static' sx={{height: `15vh`, justifyContent: 'center', padding:'0 4%'}}>
      <Toolbar>
        <img className='img_logo' src={logo_cars} alt="" />
        <Typography 
          variant={!(useWidth() === 'xs') ? 'h4' : 'h5'}
          component='div' 
          sx={{flexGrow: 1}}>
          AutoMercado
        </Typography>
        {!(useWidth() === 'xs') ? (
          <Stack direction='row' spacing={2} className='navbar'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/cards'>Carros</NavLink>
            {auth && <NavLink to='/carsfav'>Carros Favoritos</NavLink>}
          </Stack>
          ) : (
            <div>
            <Button variant="contained" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              <LateralMenu 
                toggleDrawer = {toggleDrawer}/>
            </Drawer>
          </div>)
          }
          <Stack margin='0 2%'>
            {!(auth) ?
              (
                <NavLink to={'/login'}>
                  <Button variant='contained'>
                    <LoginIcon  />
                    <Typography variant='button' marginLeft={1}>
                      Login
                    </Typography>
                  </Button>
                </NavLink>
              ) : (
                <MenuAccount />
                // <AccountCircleIcon sx={{fontSize:'50px'}} />
              )}
          </Stack>
      </Toolbar>
    </AppBar>
    </>
  )
}

export default Header