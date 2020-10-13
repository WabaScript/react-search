import React from 'react';
import { Container, Col } from 'react-bootstrap';
import CustomHits from './CustomHits'
import { Configure } from 'react-instantsearch-dom';

const HitsContainer = () => {
    return (
        <Container>
            <Col md={11} >
                <Configure clickAnalytics />
                <CustomHits />
            </Col>
        </Container>
    );
  }
  
export default HitsContainer;