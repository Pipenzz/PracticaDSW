import { Repository } from "../shared/repository.js";
import { Tipojuego } from "./tipojuego.entity.js";
import { db } from "../shared/db/conn.js";
import { ObjectId } from "mongodb";

const tipojuegos = db.collection<Tipojuego>('tipojuego')


export class TipojuegoRepository implements Repository<Tipojuego>{

    public async findAll(): Promise<Tipojuego[] | undefined> {
        return await tipojuegos.find().toArray()
    }
    public async findOne(item: { id: string; }): Promise<Tipojuego | undefined> {
        const _id = new ObjectId(item.id);
        return await tipojuegos.findOne({_id}) || undefined
    }
    public async add(item: Tipojuego): Promise<Tipojuego | undefined> {
        item._id = (await tipojuegos.insertOne(item)).insertedId
        return item
    }
    public async update(id:string ,item: Tipojuego): Promise<Tipojuego | undefined> { 
        const _id = new ObjectId(id);
        return await tipojuegos.findOneAndUpdate({_id},{$set: item},{returnDocument:'after'}) || undefined
    }
    public async delete(item: { id: string; }): Promise<Tipojuego | undefined> {
       const _id = new ObjectId(item.id)
       return await tipojuegos.findOneAndDelete({_id}) || undefined
    }
}