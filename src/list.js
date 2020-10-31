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

var carros;

//Para la lista de carros
axios.get('http://localhost:8085/getcarlist')
  .then(response => {
    //console.log(response.data);
    carros = response.data[1];
    //console.log(response.data.explanation);
  })
  .catch(error => {
    //console.log(error);
  });
//Para 





app.get('/api/cars', (req, res) => {
  
     res.json(carros);   
 });





//fin routes


//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

//starting the server
//app.listen(3000, () => {
   // console.log('server on port $(3000)');
//});