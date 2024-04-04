import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { CarType } from "../../models/interfaces/ResultApi";
import { Box, Grid, Typography } from "@mui/material";
import Loading from "../../components/Loading/Loading";
import CardExample from "../../components/CardCar/CardCar";
import SearchForm from "../../components/SearchForm/SearchForm";
import { GetCarsSearch } from "../../lib/getCarsSearch";


const SearchPage = () => {
    const [searchParams] = useSearchParams()
    const [getedCars, setGetedCars] = useState<CarType[]>()
    
    const { getedCarsSearch } = GetCarsSearch(searchParams)
    useEffect(() => {
      setGetedCars(getedCarsSearch)
    }, [getedCarsSearch])

    
  return (
    <Box width='90%' margin='auto'>
      <Typography margin={'25px 0'} variant='h3'>Ultimos lançamentos</Typography>
      <SearchForm  />
      <Grid container>
        {getedCars &&
          <Grid container spacing={3}>
            {getedCars.map((car) => (
              <Suspense key={car.id} fallback={ <Loading />}>
              <CardExample
                setCars={setGetedCars}
                car={car}
                />
            </Suspense>
            ))}
          </Grid>
        }
      </Grid>
    </Box>
  )
}

export default SearchPage