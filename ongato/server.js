const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = express.Router();

router.get('/', (req, res) => res.json('Funcionando!'));

router.get('/gatos/:id?', (req, res) => {
   let filter = '';

   if (req.params.id) {
      filter = ' WHERE ID=' + parseInt(req.params.id);
   }

   executarQuerySQL("SELECT * FROM gatos" + filter, res);
});

router.post('/gatos/novo', (req, res) => {
   var 
   raca          = req.body.raca.substring(0, 250),
   sexo          = req.body.sexo.substring(0, 250),
   idade         = req.body.idade.substring(0, 250),
   adotado       = req.body.adotado.substring(0, 250),
   castrado      = req.body.castrado.substring(0, 250),
   vermifugado   = req.body.vermifugado.substring(0, 250),
   personalidade = req.body.personalidade.substring(0, 250);

   executarQuerySQL(
      `INSERT INTO gatos(raca, sexo, idade, adotado, castrado, vermifugado, personalidade)
      VALUES('${ raca }', '${ sexo }', '${ idade }', '${ adotado }', '${ castrado }',
      '${ vermifugado }', '${ personalidade }')`, res
   );
});

/*
router.delete('/delete/:id', (req, res) => {
   executarQuerySQL(
      `DELETE FROM gatos WHERE ID=${ parseInt(req.params.id) }`, res
   );
});

router.patch('/', (req, res) => {

});*/

app.use('/', router);

const executarQuerySQL = (query, res) => {
   var conexao = mysql.createConnection({
      host     : 'localhost',
      port     : '',
      user     : 'root',
      password : '',
      database : 'ongato'
   });

   conexao.query(query, (error, results, fields) => {
      if (error) {
         res.json(error);
      } else {
         res.json(results);
      }

      conexao.end();
      console.log(`Query executada: ${ query }`);
   });
}

app.listen(port, () => console.log(`Usando o port: ${ port }.`));