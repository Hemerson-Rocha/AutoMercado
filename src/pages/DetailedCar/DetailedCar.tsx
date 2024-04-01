import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { CarType } from "../../models/interfaces/ResultApi";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { AuthContext } from "../../contexts/AuthContext";

import FavoriteIcon from '@mui/icons-material/Favorite';


const DetailedCar = ( ) => {
    const { id } = useParams()
    const [car, setCar] = useState<CarType>()

    const { auth, setAuth } = useContext(AuthContext)
    const [callGet, setCallGet] = useState('')

    useEffect(() => {
        api.get('/cars/' + id)
        .then((response) => {
            setCar(response.data)
        })
        .catch((err) => {
            console.log(`Error in get by API. ${err}`);
        })
    }, [id]);

    const handleFavorite = ( idCar: string ) => {
        const userAddFavorite = auth
        userAddFavorite?.favoriteCars.push(idCar)
        setAuth(userAddFavorite)
        api.put(`/users/${auth?.id}`, userAddFavorite)
        console.log(callGet);
        setCallGet(' ')
      }
      
      const handleUnfavorite = ( idCar: string ) => {
        const userRemoveFavorite = auth!
        const index = auth?.favoriteCars.indexOf(idCar)
        userRemoveFavorite.favoriteCars.splice(index!, 1);
        setAuth(userRemoveFavorite)
        api.put(`/users/${auth?.id}`, userRemoveFavorite)
        setCallGet(' ')
      }

  return (
    <Grid container marginY={10}>
        <Grid item xs={8} md={7} lg={7} xl={8} sx={{margin:'auto'}}>
            <Card>
                <div>
                <CardMedia
                    sx={{ height: 450 }}
                    image={car?.img}
                    title="Foto do carro"
                />
                </div>
                <CardContent>
                <Typography gutterBottom variant="h2" component="div">
                    {car?.model}
                </Typography>
                <Typography color='text.secondary' margin={1.5} fontSize={20} >
                    <Typography color='text.primary' variant='caption' fontSize={24}>
                    Descrição: 
                    </Typography> 
                    {car?.description}
                </Typography>
                <Typography color='text.secondary' margin={1.5} fontSize={20}>
                    <Typography color='text.primary' variant='caption' fontSize={24}>
                    Marca:
                    </Typography> 
                    {car?.brand}
                </Typography>
                <Typography color='text.secondary' margin={1.5} fontSize={20}>
                    <Typography color='text.primary' variant='caption' fontSize={24}>
                    Ano:
                    </Typography>
                    {car?.year}
                </Typography>

                <Typography sx={{ m: 1.5 }} color="text.secondary" fontSize={20}>
                    <Typography color='text.primary' variant='caption' fontSize={24}>
                    Preço: 
                    </Typography>
                    {car?.value}
                </Typography>
                </CardContent>
                <CardActions>
                { car &&
                auth?.favoriteCars.includes(car.id) ? (
                    <Button onClick={() => handleUnfavorite(car.id)}>
                        <FavoriteIcon sx={{fontSize: '60px'}} color='error' />
                    </Button>
                ) : (      
                    <Button onClick={() => handleFavorite(car!.id)}>
                        <FavoriteIcon sx={{fontSize: '60px'}} color='disabled' />
                    </Button>
                )}
                </CardActions>
            </Card>
        </Grid>
    </Grid>
  )
}

export default DetailedCar