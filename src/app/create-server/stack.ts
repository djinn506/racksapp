import { Server } from "./server";

export class Stack {
    constructor(
        public id: number,
        public brand?: string,
        public model?: string,
        public type?: string,

        public stock?: number,
        public quantity?: number,
        public image?: string,
        public isActive?: boolean,
        public server?: Server
){
    }
    }