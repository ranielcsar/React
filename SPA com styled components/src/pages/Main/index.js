import React from 'react';

import { Container } from './styles';

import Post from '../../components/Post';
import posts from '../../posts';

const Main = () => (  
   <Container>
      {
         posts.map( (post, index) => (
            <Post post={ post } key={ index }/>
         ))
      }
   </Container>  
);

export default Main;