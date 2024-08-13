import { ObjectId } from 'mongodb';
import crypto from 'node:crypto'

export class Tipojuego{
    constructor(
        public nombre: string, 
        public descripcion: string, 
        public id: string,
        public _id?: ObjectId
    ){}
}