import React from 'react';
import { Card } from 'react-bootstrap';

const BusinessData = ({key, name, address, city, state, postal_code, stars, hours, categories, attributes, business_id }) => {
    return (
        <Card id="hitInfoContainer">
          <div id="hitInfo">
            <a target="_blank" href={`https://www.yelp.com/biz/${business_id}`}>
            {name} 
            <br/>
            {address}
            <br/>
            </a>
            {stars}
            <br/>
            {/* ${hit.hours ? `Today's hours: ${hit.hours[dateToday()]}` : `Sorry, ${hit.name} is not open today`} */}
          </div> 
        </Card>
    );
}
  
export default BusinessData;
