//importacion de la ruta para controlar el flujo
const routerAPI = require("./router/index.js");
//Llamado de express para iniciar el servidor
const express = require('express');
//gestion de directorios en el servidor
const fs = require('fs');
//viriable para el envio de informacion 
const { send } = require('process');

const app = express();
const port = process.env.PORT || 3000;


const server = require('http').Server(app);
//instalacion de cors
const cors = require('cors');
const { logErrors, errorHandler } = require('./middleware/error.handler')

app.use(cors());
app.use(express.json());
routerAPI(app);
//declaracion de middlewares
app.use(logErrors);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`);
});



