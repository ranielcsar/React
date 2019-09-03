import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
   }

   html { font-family: Helvetica, sans-serif; font-size: 16px; }

   #app {
      width: 95%;
      margin: 0.2em auto;
      color: #eeeeee;
      text-align: center;
      font-size: 1.335em;
      
      display: grid;
      
      grid-template-areas: 
         "header header header"
         "main main aside"
         "footer footer footer";
         
      grid-gap: 1em; 
      
      grid-template-columns: auto auto 10.375em;
      grid-template-rows: 3.25em auto 7em;
   }

   .active {
      border-bottom: 3px solid #009cde;
      transition: 100ms;
   }
`;