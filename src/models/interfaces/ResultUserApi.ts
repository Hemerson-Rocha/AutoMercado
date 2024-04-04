import { CarType } from "./ResultApi";

export interface UserType {
    id?: number,
    name: string,
    email: string,
    password: string,
    favoriteCars?: CarType[],
}