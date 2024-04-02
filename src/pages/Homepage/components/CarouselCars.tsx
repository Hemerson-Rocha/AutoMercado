import Carousel from 'react-material-ui-carousel'
import { Suspense, lazy, useEffect, useState } from 'react'
import Loading from '../../../components/Loading/Loading';
import { CarType } from '../../../models/interfaces/ResultApi';
import { GetCars } from '../../../lib/getCars';
const CardCar = lazy(() => import('../../../components/CardCar/CardCar'));

function CarouselCars() {

    const [cars, setCars] = useState<CarType[]>()

    const { getedCars } = GetCars()
    useEffect(() => {
      setCars(getedCars)
    }, [getedCars])

    return (

        <Carousel>
            {cars &&
                cars.map((car) => 
                
                <Suspense key={car.id} fallback={ <Loading />}>
                <CardCar
                  setCars={setCars}
                  car={car}
                  />
              </Suspense>
                )
              }
        </Carousel>
    )
}

export default CarouselCars;