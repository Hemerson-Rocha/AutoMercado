import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import { NavLink } from 'react-router-dom';
import './LateralMenu.css'

const LateralMenu = ({ toggleDrawer }) => {
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
                    <HorizontalSplitIcon />
                </ListItemIcon>
                <ListItemText>
                    <NavLink to='/cards' >Products</NavLink>
                </ListItemText>
            </ListItem>
            {/* <ListItem>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText>
                    <NavLink to='/contact'>Contact</NavLink>
                </ListItemText>
            </ListItem> */}
        </List>
        <Divider />
    </Box>
  )
}

export default LateralMenu