import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Map from './Map';
import BusinessData from './BusinessData';

const Hits = ({ hits }) => {
    return (
        <Row id="hits">
            {hits.map(hit => (
                <>
                    <Col md={4} id="hitMap">
                        <Map 
                            key={hit.objectID}
                            business_id={hit.business_id}
                            name={hit.name}
                            address={hit.address}
                            city={hit.city}
                            state={hit.state}
                            postal_code={hit.postal_code}
                            geoloc={hit._geoloc}
                            
                        /> 
                    </Col>
                    <Col md={8} id="hitData">
                        <BusinessData 
                            key={hit.objectID} 
                            name={hit.name}
                            address={hit.address}
                            city={hit.city}
                            state={hit.state}
                            postal_code={hit.postal_code}
                            stars={hit.stars}
                            hours={hit.hours}
                            categories={hit.categories}
                            attributes={hit.attributes}
                            business_id={hit.business_id}
                        />
                    </Col>
                </>
            ))}
        </Row>
    );
  }
  
export default Hits;