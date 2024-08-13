import { Repository } from "../shared/repository.js";
import { Tipojuego } from "./tipojuego.entity.js";

const tipojuegos= [
    new Tipojuego(
        'League of leyends',
        'El juego q te chupa la vida',
        '344213'
    ),
]


export class TipojuegoRepository implements Repository<Tipojuego>{

    public async findAll(): Promise<Tipojuego[] | undefined> {
        return await tipojuegos
    }
    public async findOne(item: { id: string; }): Promise<Tipojuego | undefined> {
       return await tipojuegos.find((tipojuego) => tipojuego.id == item.id)
    }
    public async add(item: Tipojuego): Promise<Tipojuego | undefined> {
        await tipojuegos.push(item)
        return item
    }
    public async update(item: Tipojuego): Promise<Tipojuego | undefined> {
        const tipojuegoid = await tipojuegos.findIndex(tipojuego => tipojuego.id === item.id)

    if(tipojuegoid !== -1){
     tipojuegos[tipojuegoid]= {... tipojuegos[tipojuegoid], ...item}
    }
    return tipojuegos[tipojuegoid]
    }
    public async delete(item: { id: string; }): Promise<Tipojuego | undefined> {
        const tipojuegoid = await tipojuegos.findIndex(tipojuego => tipojuego.id === item.id)

        if(tipojuegoid !== -1){
        const deletedtipojuegos = tipojuegos[tipojuegoid]
        tipojuegos.splice(tipojuegoid,1)
        return deletedtipojuegos
        }
    }
}