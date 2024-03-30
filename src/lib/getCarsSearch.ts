import { useEffect, useState } from "react";
import { api } from "./axios";
import { CarType } from "../models/interfaces/ResultApi";

export const GetCarsSearch = (searchParams: URLSearchParams) => {
    const [getedCarsSearch, setGetedCarsSearch] = useState<CarType[]>()

    useEffect(() => {
        api.get('/cars?'+searchParams)
        .then((response) => {
            setGetedCarsSearch(response.data)
        })
        .catch((err) => {
            console.log(`Error in get by API. ${err}`);
        })
    }, [searchParams]);

    return { getedCarsSearch }
}