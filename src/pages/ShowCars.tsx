import { Suspense, lazy, useContext, useEffect, useState } from "react"
import Loading from '../components/Loading/Loading'
import { CarType } from '../models/interfaces/ResultApi';
import { Box, Grid, Typography } from '@mui/material';
import SearchForm from '../components/SearchForm/SearchForm';
import { GetCars } from '../lib/getCars';
import AddNewCar from '../components/AddNewCar/AddNewCar';
import { AuthContext } from '../contexts/AuthContext';
import NotLoged from './NotLoged/NotLoged';
const CardCar = lazy(() => import('../components/CardCar/CardCar'));


const Cards = () => {
  const [cars, setCars] = useState<CarType[]>()

  const { auth } = useContext(AuthContext)

  const { getedCars } = GetCars()
  useEffect(() => {
    setCars(getedCars)
  }, [getedCars])

  return (
    <>
    { auth && auth ? (
      <Box width='90%' margin='auto'>
      <Typography margin={'25px 0'} variant='h3'>Ultimos lançamentos</Typography>
      <SearchForm />
      <AddNewCar  />
        {cars &&
          <Grid container spacing={3}>
            {cars && cars.map((car) => (
              <Suspense key={car.id} fallback={ <Loading />}>
                <CardCar
                  setCars={setCars}
                  car={car}
                  />
              </Suspense>
            ))}
          </Grid>
        }
      </Box>
    ) : (
      <NotLoged/>
    ) }
    </>
  )
}

export default Cards