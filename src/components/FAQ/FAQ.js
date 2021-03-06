import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {FAQData} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={FAQData} image={FAQData.image} />
    <p>{FAQData.tekst}</p>
  </Container>
);

export default FAQ;