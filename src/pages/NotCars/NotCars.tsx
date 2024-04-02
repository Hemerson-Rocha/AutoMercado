import { Box, Card, CardContent, Link, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';


const NotCars = () => {
  return (
    <Box 
        width={'100vw'} 
        height={'70Vh'} 
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        >
        <Card 
        sx={{ width: '40%', height: '25%'}}
        >
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" display='flex' alignItems='center'>
            Você não favoritou nenhum carro 
            <HeartBrokenIcon color='error' fontSize="large" />
            </Typography>

            <Typography variant="body1" color="text.secondary">
                Veja todos os carros 
                <NavLink to='/cards'>
                    <Link marginLeft={1}>
                        Aqui!
                    </Link>
                </NavLink>
            </Typography>
        </CardContent>
    </Card>
    </Box>
  )
}

export default NotCars