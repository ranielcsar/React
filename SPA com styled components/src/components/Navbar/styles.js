import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
   grid-area: header;
   background-color: #232931;
   padding: 1em;
`;

export const Link = styled(NavLink)`
   text-align: center;
   text-decoration: none;
   color: #aaa;
   margin: 1em 1em;

   &:hover {
     color: #fff;
   }
`;