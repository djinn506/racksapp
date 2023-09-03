import { Server } from "../server-list/server";

export interface Stack {
    id: number,
    brand : string,
    model: string,
    type : string,
    stock: number,
    quantity: number,
    image : string,
    isActive : boolean,
    server: any /*doesnt work when assigned to "Server" type */
    }