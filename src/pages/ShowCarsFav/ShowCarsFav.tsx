import { CarType } from "../../models/interfaces/ResultApi"
import { GetCars } from "../../lib/getCars"
import SearchForm from "../../components/SearchForm/SearchForm"
import AddNewCar from "../../components/AddNewCar/AddNewCar"
import { Suspense, lazy, useContext, useEffect, useState } from "react"
import { Box, Grid } from '@mui/material';
import Loading from '../../components/Loading/Loading';
import { AuthContext } from "../../contexts/AuthContext"
import NotCars from "../NotCars/NotCars"
const CardCar = lazy(() => import('../../components/CardCar/CardCar'));

const ShowCarsFav = () => {
  
  const [cars, setCars] = useState<CarType[]>()
  const { auth } = useContext(AuthContext)
  const { getedCars } = GetCars()
  useEffect(() => {
    setCars(getedCars)
  }, [getedCars])

  const idList: string[] = []
  auth?.favoriteCars && auth?.favoriteCars.map((car) => idList.push(car.id))


  return (
    <>
    <Box width='90%' margin='auto'>
      { idList && idList?.length > 0 && <SearchForm /> }
      { idList && idList?.length > 0 && <AddNewCar /> }
      { idList && idList?.length == 0 ? ( 
        <NotCars/> 
      ) : (
        cars &&
          <Grid container spacing={3}>
            {cars.map((car) => (
              <Suspense key={car.id} fallback={ <Loading />}>
              {/* {auth?.favoriteCars.includes(car.id)  && */}
              {idList.includes(car.id)  &&
                  <CardCar
                    setCars={setCars}
                    car={car}
                    />}
                </Suspense>
            ))}
          </Grid>
        )} 
    </Box>
    </>
  )
}

export default ShowCarsFav