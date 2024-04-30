const express = require('express');
const { SerialPort } = require('serialport');
const app = express();
const port = 3000;

const serial = new SerialPort({
  path: 'COM6', // Asegúrate de usar tu puerto correcto
  baudRate: 9600
});

app.use(express.json());  // Middleware para parsear JSON
app.use(express.static('public'));

app.post('/led', (req, res) => {
  const { intensity } = req.body;  // Recibe la intensidad como parte del cuerpo de la solicitud
  serial.write(String(intensity)); // Envía la intensidad al Arduino
  res.send(`Intensidad del LED ajustada a ${intensity}`);
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
