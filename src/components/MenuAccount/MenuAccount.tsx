import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useContext, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import DeleteIcon from '@mui/icons-material/Delete';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { api } from '../../lib/axios';
import { Divider, Typography } from '@mui/material';

const MenuAccount = () => {
    const navigate = useNavigate()
    const { auth ,setAuth } = useContext(AuthContext)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.clear()
        navigate('/')
        setAuth(null)
        setAnchorEl(null);
        window.location.reload()
    };

    const handleDelete = ( idUser: number | undefined ) => {
        localStorage.clear()
        navigate('/')
        setAuth(null)
        setAnchorEl(null);
        console.log(`id do user: ${idUser}`);


        api.delete('/users/' + idUser)


        window.location.reload()
    };

    return (
        <div>
            <Button
            sx={{width:'20px', borderRadius:'50%'}}
            variant='contained'
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
                <AccountCircleIcon sx={{fontSize:'50px'}}/>
            </Button>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            >
            <MenuItem>
                <Typography variant='h5'>
                    {auth?.name}
                </Typography>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
                <MeetingRoomIcon />
                Logout
            </MenuItem>
            <MenuItem onClick={() => handleDelete(auth?.id)}>
                <DeleteIcon />
                Excluir Conta
            </MenuItem>
            </Menu>
        </div>
    )
}

export default MenuAccount