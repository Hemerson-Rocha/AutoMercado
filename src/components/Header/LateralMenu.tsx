import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { NavLink } from 'react-router-dom';
import './LateralMenu.css'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

interface LateralMenuProps {
    toggleDrawer: (newOpen: boolean) => () => void
}

const LateralMenu = ({ toggleDrawer }: LateralMenuProps) => {

    const { auth } = useContext(AuthContext)

  return (
    <Box className='box-lateralMenu' sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <List>
            <ListItem>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText>
                    <NavLink to='/' >Home</NavLink>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText>
                    <NavLink to='/cards' >Carros</NavLink>
                </ListItemText>
            </ListItem>
        { auth && (
            <ListItem>
                <ListItemIcon>
                    <FavoriteIcon />
                </ListItemIcon>
                <ListItemText>
                    <NavLink to='/carsfav' >Carros favoritos</NavLink>
                </ListItemText>
            </ListItem>
        )}
        </List>
        <Divider />
    </Box>
  )
}

export default LateralMenu