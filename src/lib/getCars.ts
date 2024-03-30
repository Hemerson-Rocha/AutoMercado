import { useEffect, useState } from "react";
import { api } from "./axios";
import { CarType } from "../models/interfaces/ResultApi";

export const GetCars = () => {
    const [getedCars, setGetedCars] = useState<CarType[]>()

    useEffect(() => {
        api.get('/cars')
        .then((response) => {
            setGetedCars(response.data)
        })
        .catch((err) => {
            console.log(`Error in get by API. ${err}`);
        })
    }, []);

    return { getedCars }
}