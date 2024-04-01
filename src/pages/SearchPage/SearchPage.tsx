import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { CarType } from "../../models/interfaces/ResultApi";
import { Grid } from "@mui/material";
import Loading from "../../components/Loading/Loading";
import CardExample from "../../components/CardCar/CardCar";
import styles from '../../assets/Title.module.css'
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
    <div>
        <Grid container>
            
        <h1 className={styles.title_h1}>Resultados</h1>
        <div>

          <SearchForm  />
        </div>
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
    </div>
  )
}

export default SearchPage