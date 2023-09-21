import { Server } from "../server-list/server";

/* import { Server } from "./server"; */

export interface Stack {
    id: number,
    brand : string,
    model: string,
    type : string,
    stock: number,
    quantity: number,
    image : string,
    isActive : boolean,
    server: Server /*doesnt work when assigned to "Server" type */
    }