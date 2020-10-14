import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import CustomHits from './CustomHits'
import { Configure } from 'react-instantsearch-dom';

const HitsContainer = () => {
    return (
        <Container>
            <Col md={11} >
                <Row>
                    <Configure clickAnalytics />
                    <CustomHits />
                </Row>
            </Col>
        </Container>
    );
  }
  
export default HitsContainer;