import { Box, Card, CardContent, Link, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"


const NotLoged = () => {
  return (
    <Box 
        width={'100vw'} 
        height={'80Vh'} 
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{background:'#eee'}}>
        <Card 
        sx={{ width: '40%', height: '25%'}}
        >
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Você não esta logado :/
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Para ver os carros faça 
                <NavLink to='/login'>
                    <Link marginLeft={1}>
                        Login aqui!
                    </Link>
                </NavLink>
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Não tem resgistro? Clique aqui!
                <NavLink to='/register'>
                    <Link marginLeft={1}>
                        Clique aqui!
                    </Link>
                </NavLink>
            </Typography>
        </CardContent>
    </Card>
    </Box>
  )
}

export default NotLoged