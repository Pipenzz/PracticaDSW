import express from 'express';
import { tipojuegoRouter } from './tipojuego/tipojuego.routes.js';
const app = express();
app.use(express.json());
app.use('/api/tipojuegos', tipojuegoRouter);
app.use((_, res) => {
    return res.status(404).send({ message: 'recurso no encontrado' });
});
app.listen(2000, () => {
    console.log('servidor corriendo en http://localhost:2000/');
});
//# sourceMappingURL=app.js.map