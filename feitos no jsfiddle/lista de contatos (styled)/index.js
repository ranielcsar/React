// RANOOB (2019)




/* ------------- COMPONENTES ------------- */

const GlobalStyle = styled.createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      font-family: sans-serif, arial, verdana;
      font-size: 16px;
      background-color: #25242A;
   }	
`

const Container = styled.div`
   width: 75%;
   margin: 2em auto;
   border-radius: 10px;
   background-color: white;
`

const Contatos = styled.div`	
   padding: 10px;
`

const Titulo = styled.h3`
   float: left;
   font-size: 1.25em;
   padding: 8px;
   margin: 0.7em -2px;
   padding: 10px;
`

const Pesquisar = styled.input`
   background-color: #ddd;
   outline: none;
   border: none;
   padding: 12px;
   font-size: 0.8em;
   border-radius: 5px;
   width: 93%;
   margin: 0 0.625em;
   margin-bottom: 0.9em;
`

const ListaDeContatos = styled.ul`
   li {
     text-align: left;
     padding: 0.75em;
     list-style: none;
   }
`

const Descricao = styled.span`
   float: right;
   font-size: 0.9em;
   opacity: 0.7;
`

const Botao = styled.button`
   background-color: ${ props => props.primario ? "#33c" : "transparent" };
   color: ${ props => props.primario ? "#fafafa" : "gray" };
   
   outline: none;
   border: none;
   border-radius: 5px;
   padding: 10px;
   margin-left: 0.8em;
   font-weight: bold;
`

const Botoes = styled.div`
   display: flex;
   justify-content: flex-end;
   background-color: #ddd;
   padding: 12px;
   border-radius: 0 0 10px 10px;
`

/* ------------- CONTATOS ------------- */

var contatos = [
   {
      nome: 'Jake',
      tipo: 'gata'
   },
   
   {
      nome: 'Negão',
      tipo: 'gato'
   },
   
   {
      nome: 'Galeguinho',
      tipo: 'gato'
   },
   
   {
      nome: 'Ranoob',
      tipo: 'noob'
   }
]

/* ------------- APP ------------- */

const App = () => (
	<div>
	   <GlobalStyle/>
      
	   <Container>
      
         <Contatos>
            <Titulo>Contatos</Titulo>
            <Pesquisar placeholder="Pesquisar..."/>
            <ListaDeContatos>
               {
                  contatos.map( (contato, i) => (
                     <li key={ i }>
                        { contato.nome }
                        <Descricao>{ contato.tipo }</Descricao>
                     </li>
                  ))
               }
            </ListaDeContatos>
         </Contatos>
         
         <Botoes>
            <Botao>Cancelar</Botao>
            <Botao primario>Convidar</Botao>
         </Botoes>
         
	   </Container>
	</div>
);

ReactDOM.render(
   <App/>,
   
   document.querySelector('#app')
);
