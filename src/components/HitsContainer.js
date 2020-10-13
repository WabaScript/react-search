import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Hits from './Hits';

import { connectHits } from 'react-instantsearch-dom';

const HitsContainer = () => {
    const CustomHits = connectHits(Hits);
    
    return (
        <Container >
            <Row id="hits">
                <CustomHits />
            </Row>
        </Container>
    );
  }
  
export default HitsContainer;