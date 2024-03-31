import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { CarType } from "../../models/interfaces/ResultApi";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
// import { api } from "./axios";
// import { CarType } from "../models/interfaces/ResultApi";


const DetailedCar = ( ) => {
    const { id } = useParams()

    const [car, setCar] = useState<CarType>()

    useEffect(() => {
        api.get('/cars/' + id)
        .then((response) => {
            setCar(response.data)
        })
        .catch((err) => {
            console.log(`Error in get by API. ${err}`);
        })
    }, [id]);

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
                <Button size="large">favorite</Button>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
  )
}

export default DetailedCar