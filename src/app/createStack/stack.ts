import { Server } from "./server";

export class Stack {
    constructor(
        public brand: string,
        public model: string,
        public type: string,

        public stock: number,
        public quantity: number,
        public image : string,
        public isActive : boolean,
        public server : Server,
        /*public order: Server*/
){
    }
    }