import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Bloco = ({ valor, onClick }) => (
   <button className="bloco"
      onClick={ onClick }>
      { valor }
   </button>
);


const Tabela = ({ blocos, onClick }) => {      

   const criarBloco = (i) => (
      <Bloco valor={ blocos[i] } onClick={ () => onClick(i) } />
   );  
   
   return (
      <div>
        
        <div className="linha-tabela">
          { criarBloco(0) }
          { criarBloco(1) }
          { criarBloco(2) }
        </div>
        <div className="linha-tabela">
          { criarBloco(3) }
          { criarBloco(4) }
          { criarBloco(5) }
        </div>
        <div className="linha-tabela">
          { criarBloco(6) }
          { criarBloco(7) }
          { criarBloco(8) }
        </div>
        
      </div>
   );
}

const verificarVencedor = (blocos) => {
   var linhas = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
   ];
   
   for (var i in linhas)
   {
      var [a, b, c] = linhas[i];

      if (blocos[a] && blocos[a] === blocos[b] && blocos[a] === blocos[c])
      {
         return blocos[a];
      }
   }
     
  return null;
}

const Jogo = () => {

   const [ historico, setHistorico ] = React.useState([{ blocos: Array(9).fill(null) }]);
   
   const [ jogo, setStatusJogo ] = React.useState({
      turnoAtual: 0,
      proximoJogador: true
   });
   
   const manusearClick = (i) => {   
      var hist = historico.slice(0, jogo.turnoAtual + 1),
          atual = hist[hist.length - 1];
          
      var novosBlocos = atual.blocos.slice();
      
      if (verificarVencedor(novosBlocos) || novosBlocos[i])
      {
         return;
      }
      
      novosBlocos[i] = jogo.proximoJogador ? 'X' : 'O';
      
      setHistorico( historico.concat([{ blocos: novosBlocos }]) );
      
      setStatusJogo({
         turnoAtual: historico.length,
         proximoJogador: !jogo.proximoJogador
      });
   }
   
   const pularPara = (jogada) => {
      setStatusJogo({
         turnoAtual: jogada,
         proximoJogador: (jogada % 2 === 0)
      });
   }
      
   var turnoAtual = historico[jogo.turnoAtual],
       vencedor   = verificarVencedor(turnoAtual.blocos);
       
   var jogadas = historico.map( (turno, jogada) => {     
      
      var texto = jogada ? 
      'Jogada: ' + jogada :
      'Reiniciar';
                           
      return (
         <button
            key={ jogada } 
            className="botao"
            onClick = { () => pularPara(jogada) }>
            { texto }
         </button>        
      );
      
   });
   
   var status;   
   if (vencedor)
   {
      status = 'Vencedor: ' + vencedor;
   } else {
      status = 'Próximo jogador: ' + (jogo.proximoJogador ? 'X' : 'O');
   }  
   
   return (
      <div className="jogo">
      
         <div className="jogo-info">
            <div key={ jogo.turnoAtual }>
               { status }
               { jogadas }
            </div>            
         </div>

         <div className="tabela-jogo">
            <Tabela 
               blocos={ turnoAtual.blocos }
               onClick={ (i) => manusearClick(i) }
            />
         </div>

      </div>
   );
}


// ========================================

ReactDOM.render(
  <Jogo />,
  document.getElementById('app')
);