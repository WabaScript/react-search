import React from 'react';
import { Container, Col } from 'react-bootstrap';
import Hit from './Hit';
import { Hits } from 'react-instantsearch-dom';
import { connectHitInsights } from 'react-instantsearch-dom';

const HitsContainer = () => {
    const HitWithInsights = connectHitInsights(window.aa)(Hit);
    
    return (
        <Container>
            <Col md={11} >
                <Hits hitComponent={HitWithInsights} />
            </Col>
        </Container>
    );
  }
  
export default HitsContainer;