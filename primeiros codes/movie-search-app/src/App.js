import React, { useReducer, useEffect } from 'react';
import Header from './components/Header';
import Movie from './components/Movie';
import Search from './components/Search';

import './app.css';

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const initialState = {
   loading: true,
   filmes: [],
   error: null
}

const reducer = (state, action) => {
   switch(action.type)
   {
      case 'SEARCH_MOVIES_REQUEST':
         return {
            ...state,
            loading: true,
            error: null
         };
      case 'SEARCH_MOVIES_SUCESS':
         return {
            ...state,
            loading: false,
            filmes: action.payload
         };
      case 'SEARCH_MOVIES_FAIL':
         return {
            ...state,
            loading: false,
            error: action.error
         }
      default:
         return state;
   }
}

const App = () => {

   var [ state, dispatch ] = useReducer(reducer, initialState);

   useEffect( () => {

      fetch(MOVIE_API_URL)
         .then(response => response.json())
         .then(jsonResponse => {
            dispatch({
               type: 'SEARCH_MOVIES_SUCESS',
               payload: jsonResponse.Search
            })
         });

   }, []);

   const search = (searchValue) => {
      dispatch({
         type: 'SEARCH_MOVIES_REQUEST'
      })

      fetch(`https://www.omdbapi.com/?s=${ searchValue }&apikey=4a3b711b`)
         .then(response => response.json())
         .then(jsonResponse => {
            if (jsonResponse.Response === "True")
            {
               dispatch({
                  type: 'SEARCH_MOVIES_SUCESS',
                  payload: jsonResponse.Search
               })
            } else {
               dispatch({
                  type: 'SEARCH_MOVIES_FAIL',
                  error: jsonResponse.Error
               })             
            }
         });
   }

   const { filmes, error, loading } = state;

   return (
      <div className="App">
         <Header texto='FILMES :D'/>
         <Search search={ search }/>

         <p className="App-intro">Compartilhando alguns dos seus filmes favoritos!</p>

         <section className="movies">
         {
            loading && !error ? (
               <span>Carregando...</span>
            ) : error ? (
               <div className="errorMessage">{ error }</div>
            ) : (
               filmes.map( (filme, index) => (
                  <Movie key={ `${ index }-${ filme.title }` } movie={ filme }/>
               ))
            )
         }
         </section>
      </div>
   );   
}

export default App;