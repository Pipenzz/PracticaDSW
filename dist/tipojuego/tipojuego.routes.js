import { Router } from "express";
import { sanitizeTipojuegoInput, findAll, findOne, add, update, remove } from "./tipojuego.controler.js";
export const tipojuegoRouter = Router();
tipojuegoRouter.get('/', findAll);
tipojuegoRouter.get('/:id', findOne);
tipojuegoRouter.post('/', sanitizeTipojuegoInput, add);
tipojuegoRouter.put('/:id', sanitizeTipojuegoInput, update);
tipojuegoRouter.patch('/:id', sanitizeTipojuegoInput, update);
tipojuegoRouter.delete('/:id', remove);
//# sourceMappingURL=tipojuego.routes.js.map