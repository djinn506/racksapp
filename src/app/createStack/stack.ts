import { Server } from "./server";

export class Stack {
    constructor(
        public brand: string,
        public model: string,
        public type: string,

        public stock: number,
        public quantity: number,
        public image : string,
        public fail : boolean,
        public isActive : boolean,
        /*public order: Server*/
){
    }
    }