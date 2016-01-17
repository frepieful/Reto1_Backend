var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarPost = function(){
  var randomid = faker.random.uuid();
  var randomNombre = faker.name.title();
  var randomContenido = faker.lorem.sentence();
  var randomFecha = faker.date.past();
  var randomImage = faker.image.avatar();
  return {
    id: randomid,
    nombre: randomNombre,
    contenido: randomContenido,
    fecha: randomFecha,
    imagen: randomImage
  }

}

var generarClienteBanco = function(){
  var randomid = faker.random.number();
  var randomNombre = faker.name.findName();
  var randomNroCuenta = faker.finance.account();
  var randomNombreCuenta = faker.finance.accountName();
  var randomCurrencyName = faker.finance.currencyName();
  var randomCurrencySymbol = faker.finance.currencySymbol();
  return {
    id: randomid,
    cliente: randomNombre,
    nroCuenta: randomNroCuenta,
    nombreCuenta: randomNombreCuenta,
    tipoMoneda: randomCurrencyName,
    simboloMoneda: randomCurrencySymbol
  }

}

app.get('/', function (req, res) {
  res.send('Mi primer reto, el primer endpoint es posts, el segundo endpoint es banco');
})

app.get('/posts', function (req, res) {
  var cantidad = _.random(5,10)
  var posts = _.times(cantidad, generarPost)
  res.json(posts);
})

app.get('/banco', function (req, res) {
  var cantidad = _.random(5,10)
  var banco = _.times(cantidad, generarClienteBanco)
  res.json(banco);
})



app.listen(3000);
