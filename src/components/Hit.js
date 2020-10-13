import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import Map from "./Map";
import BusinessData from "./BusinessData";

const Hit = ({ hit, insights }) => {
    return (
        <Card md={12} id="hit" key={hit.objectID}>
                <Row>
                    <Col md={3} id="hitMap">
                        <Map
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
                            insights={insights}
                        />
                    </Col>
                </Row>
            </Card>
    )
}

export default Hit;