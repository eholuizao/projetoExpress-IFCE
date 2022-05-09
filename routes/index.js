var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chromatiz' });
});

module.exports = router;

//OBS:Tamo usando EJS pq é bem similar ao HTML
//Pra cada arquivo no formato js, há um no formato ejs correspondente, cada arquivo no formato js é uma rota, eu criei só 2 rotas porque só temos o index(o home) e o exp(página principal do site que é a parte onde a pessoa customiza as cores e tals)
