import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Grid, Tooltip, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const AddNewCar = () => {
  return (
    <Grid container alignItems={'center'} justifyContent={'center'} marginBottom={3} gap={1}>
        <Typography variant='h4'>
          Divulgue seu carro
        </Typography>
        <Tooltip title="Adicione um carro" arrow>
          <NavLink to='/formcar'>
              <AddCircleIcon sx={{fontSize: '60px'}} color='primary' />
          </NavLink>
        </Tooltip>
    </Grid>
  )
}

export default AddNewCar