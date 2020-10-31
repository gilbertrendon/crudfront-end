//import { Observable } from 'rxjs';
const express = require('express');
const app = express();
const morgan = require('morgan');


//config
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
const axios = require('axios');

//variable para almacenar el listado de carros
//var carros = '{ "id": 4, "aumento": 0.5, "finsercion": "29/10/2020", "habilitado": true,"img": "https://imganuncios.mitula.net/renault_9_1993_gasolina_renault_9_brio_1993_al_dia_recibo_moto_3740129565186886781.jpg","valor": 20000 }';

//Para obtener el listado de carros
var carros;

//Para obtener los carros por id
var id = "0";
var carro;
var str = "";

//Para eliminar un carro por id
var mensaje = "";

//Para la lista de carros
    axios.get('http://localhost:8085/getcarlist')
      .then(response => {
        //console.log(response.data);
        carros = response.data;
      }).catch(error => {
      });

app.get('/api/cars', (req, res) => {
  //res.end('http://localhost:3000/carbyid/1');   
  res.json(carros);   


});

//Para buscar un carro por el id
 app.get('/api/carbyid/:id', (req, res) => {
   //Para obtener el carro en específico
  this.id = req.params.id;
  axios.get(str.concat('http://localhost:8085/getcarbyid/',this.id)).then(response => {
    carro = response.data;
    res.json(carro); 
  }).catch(error => {
  });
  //Fin para obtener carro en específico
});

//Para borrar un carro por el id
app.get('/api/delcarbyid/:id', (req, res) => {
  //Para obtener el carro en específico
 this.id = req.params.id;
 //console.log(this.id);
 axios.get(str.concat('http://localhost:8085/deletecarbyid/',this.id)).then(response => {
  mensaje = response.data;
   res.json(mensaje); 
 }).catch(error => {
 });
 //Fin para obtener carro en específico
});


//Para updatear un carro por el id
app.get('/api/delcarbyid/:id', (req, res) => {
  //Para obtener el carro en específico
 this.id = req.params.id;
 //console.log(this.id);
 axios.get(str.concat('http://localhost:8085/deletecarbyid/',this.id)).then(response => {
  mensaje = response.data;
   res.json(mensaje); 
 }).catch(error => {
 });
 //Fin para obtener carro en específico
});


//fin routes


//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});


//app.use(require('list.js'));
// var http = require('http');
// http.createServer(function (req, res) {
//   res.write('Hello World!'); 
//   res.end();
// }).listen(8080);