import styles from '../assets/Title.module.css'
import { Suspense, lazy, useEffect, useState } from "react"
import Loading from '../components/Loading/Loading'
import { CarType } from '../models/interfaces/ResultApi';
import { Grid } from '@mui/material';
import SearchForm from '../components/SearchForm/SearchForm';
import { GetCars } from '../lib/getCars';
import AddNewCar from '../components/AddNewCar/AddNewCar';
const CardCar = lazy(() => import('../components/CardCar/CardCar'));


const Cards = () => {
  const [cars, setCars] = useState<CarType[]>()

  const { getedCars } = GetCars()
  useEffect(() => {
    setCars(getedCars)
  }, [getedCars])

  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.title_h1}>Ultimos lançamentos</h1>
      <SearchForm />
      <AddNewCar  />
        {cars &&
          <Grid container spacing={3}>
            {cars.map((car) => (
              <Suspense key={car.id} fallback={ <Loading />}>
                <CardCar
                  setCars={setCars}
                  car={car}
                  />
              </Suspense>
            ))}
          </Grid>
        }
    </div>
    </>
  )
}

export default Cards