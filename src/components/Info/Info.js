import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {InfoData} from '../../data/dataStore';


const Info = () => (
  <Container>
    <h2>Info</h2>
    <Hero titleText={InfoData} image={InfoData.image} /> 
    <p>{InfoData.tekst}</p>
  </Container>
);

export default Info;