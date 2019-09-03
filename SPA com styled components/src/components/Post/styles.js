import styled from 'styled-components';
import React from 'react';

export const Container = styled.div`
   grid-area: main;
   background-color: #232931;
   padding: 1em;
   color: #fafafa;
   width: 44.5782%;
   margin: 1em 1.2em;
   float: left;
   text-align: left;
`

export const Titulo = styled.h2`
   color: #fafafa;
`

export const Subtitulo = styled.h4`
   opacity: 0.6;   
   margin: 5.5061% 0;
`

const StyledImg = styled.img`
   max-width: 100%;
`

export const Imagem = ({ src }) => (
   <StyledImg src={ src }/> 
);

const StyledDescricao = styled.p`
   line-heigth: 19px;
   margin: 10px 0;
`

export const Descricao = ({ texto }) => (
   <StyledDescricao>{ texto }</StyledDescricao>
);