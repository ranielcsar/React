import React from 'react';

import { Container, Titulo, Subtitulo, Imagem, Descricao } from './styles';

const Post = ({ post }) => (  
   <Container>
      <Titulo>{ post.titulo }</Titulo>
      <Subtitulo>{ post.subtitulo }</Subtitulo>
      <Imagem src={ post.img }/>
      <Descricao texto={ post.descricao }/>
   </Container>
);

export default Post;