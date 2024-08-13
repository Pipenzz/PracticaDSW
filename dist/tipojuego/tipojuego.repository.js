import { Tipojuego } from "./tipojuego.entity.js";
const tipojuegos = [
    new Tipojuego('League of leyends', 'El juego q te chupa la vida', '344213'),
];
export class TipojuegoRepository {
    async findAll() {
        return await tipojuegos;
    }
    async findOne(item) {
        return await tipojuegos.find((tipojuego) => tipojuego.id == item.id);
    }
    async add(item) {
        await tipojuegos.push(item);
        return item;
    }
    async update(item) {
        const tipojuegoid = await tipojuegos.findIndex(tipojuego => tipojuego.id === item.id);
        if (tipojuegoid !== -1) {
            tipojuegos[tipojuegoid] = { ...tipojuegos[tipojuegoid], ...item };
        }
        return tipojuegos[tipojuegoid];
    }
    async delete(item) {
        const tipojuegoid = await tipojuegos.findIndex(tipojuego => tipojuego.id === item.id);
        if (tipojuegoid !== -1) {
            const deletedtipojuegos = tipojuegos[tipojuegoid];
            tipojuegos.splice(tipojuegoid, 1);
            return deletedtipojuegos;
        }
    }
}
//# sourceMappingURL=tipojuego.repository.js.map