import React from 'react';
import { Card } from "react-bootstrap";
import BusinessData from "./BusinessData";

const Hit = ({hit, insights}) => {
    return (
        <Card md={6} id="hit" className="h-100" key={hit.objectID}>
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
                geoloc={hit._geoloc}
                insights={insights}
            />
        </Card>
    )
}

export default Hit;