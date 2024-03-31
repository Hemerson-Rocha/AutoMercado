import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

const AddNewCar = () => {
  return (
    <Grid container alignItems={'center'} justifyContent={'center'} marginBottom={3} gap={1}>
        <h3>Divulgue seu carro</h3>
        <NavLink to='/formcar'>
            <AddCircleIcon fontSize='large' color='primary' />
        </NavLink>
    </Grid>
  )
}

export default AddNewCar