import { TipojuegoRepository } from "./tipojuego.repository.js";
import { Tipojuego } from "./tipojuego.entity.js";
const repository = new TipojuegoRepository();
function sanitizeTipojuegoInput(req, res, next) {
    req.body.sanitiziedinput = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        id: req.body.id
    };
    //more checks here
    Object.keys(req.body.sanitiziedinput).forEach(key => {
        if (req.body.sanitiziedinput[key] === undefined) {
            delete req.body.sanitiziedinput[key];
        }
    });
    next();
}
async function findAll(req, res) {
    res.json({ data: await repository.findAll() });
}
async function findOne(req, res) {
    const tipojuego = await repository.findOne({ id: req.params.id });
    if (!tipojuego) {
        return res.status(404).send({ message: 'tipo de juego no encontrado' });
    }
    res.json(tipojuego);
}
async function add(req, res) {
    const input = req.body.sanitiziedinput;
    const tipojuegoinput = new Tipojuego(input.nombre, input.descripcion, input.id);
    const tipojuego = await repository.add(tipojuegoinput);
    return res.status(201).send({ message: 'se logro posho', data: tipojuego });
}
async function update(req, res) {
    req.body.sanitiziedinput.id = req.params.id;
    const tipojuego = await repository.update(req.body.sanitiziedinput);
    if (!tipojuego) {
        return res.status(404).send({ message: "no lo encontre :,(" });
    }
    return res.status(200).send({ message: "se logro papu", data: tipojuego });
}
/* patch fue reemplazada por el put */
async function remove(req, res) {
    const id = req.params.id;
    const tipojuego = await repository.delete({ id });
    if (!tipojuego) {
        res.status(404).send({ message: 'tipo de juego no encontrado' });
    }
    else {
        res.status(200).send({ message: 'tipo de juego borrado satisfactoriamente' });
    }
}
export { sanitizeTipojuegoInput, findAll, findOne, add, update, remove };
//# sourceMappingURL=tipojuego.controler.js.map