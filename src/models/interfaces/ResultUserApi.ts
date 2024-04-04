import { CarType } from "./ResultApi";

export interface UserType {
    id?: string,
    name: string,
    email: string,
    password: string,
    favoriteCars?: CarType[],
}