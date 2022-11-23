import { Server } from "../server-list/server";

export interface Stack {
    id: number,
    brand : string,
    model: string,
    type : string,
    stock: number,
    quantity: number,
    image : string,
    fail : boolean,
    order: Server,
    order1: Server,
    }