import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <Container className='mt-5'>
      <h2>Terms & Conditions</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quis sit repellendus ipsum iusto exercitationem dolorem fugiat officia nulla debitis.</p>
      <p>Go back to <Link to="/register">Register</Link></p>
    </Container>
  );
};

export default Terms;