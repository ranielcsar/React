const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000;

const router = express.Router();

router.get('/', (req, res) => res.json('Funcionando!'));

router.get('/gatos/:id?', (req, res) => {
   let filter = '';

   if (req.params.id) {
      filter = ' WHERE ID=' + parseInt(req.params.id);
   }

   executarQuerySQL("SELECT * FROM gatos" + filter, res);
});

/*router.delete('/', (req, res) => {
   
});

router.post('/', (req, res) => {

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
      console.log('Executou!');
   });
}

app.listen(port, () => console.log(`Usando o port: ${ port }.`));