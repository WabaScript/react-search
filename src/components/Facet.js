import React, { useState } from 'react';
import { RefinementList } from 'react-instantsearch-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';


const Facet = ({ attribute }) => {
    const [show, setShow] = useState(true);
    const handleShow = () => setShow(!show);

    return (
        <Col md={12} id="facet">
            <Card>
                <Card.Header onClick={handleShow}>
                    {attribute.charAt(0).toUpperCase() + attribute.slice(1)}
                </Card.Header>
                {show &&
                <Card.Body id="facetList">
                    <RefinementList attribute={attribute} searchable={true} showMore={true}/>
                </Card.Body> 
                }
                <Card.Footer />
            </Card>
        </Col>
    );
}
export default Facet;
