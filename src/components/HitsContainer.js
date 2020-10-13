import React from 'react';
import { Container, Col } from 'react-bootstrap';
import Hits from './Hits';

import { connectHits } from 'react-instantsearch-dom';

const HitsContainer = () => {
    const CustomHits = connectHits(Hits);
    
    return (
        <Container>
            <Col md={11} >
                <CustomHits /> 
            </Col>
        </Container>
    );
  }
  
export default HitsContainer;