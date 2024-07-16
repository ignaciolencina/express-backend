import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

console.clear();
console.log('Inicializando servidor...');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Rutas o endpoints (PENDIENTE)

app.listen(PORT, () => {
  console.log(`El servidor está arriba y esta en el puerto ${PORT}`);
});
