import React from 'react';
import { Card } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

const BusinessData = ({key, name, address, city, state, postal_code, stars, hours, categories, attributes, business_id }) => {
    return (
        <Card id="hitInfoContainer">
          <div id="hitInfo">
            <a target="_blank" href={`https://www.yelp.com/biz/${business_id}`} rel="noopener noreferrer">
            {name} 
            <br/>
            {address}
            <br/>
            </a>
            <ReactStars
              count={stars}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            {`Sorry, ${name} is not open today.`}
            {/* ${hit.hours ? `Today's hours: ${hit.hours[dateToday()]}` : `Sorry, ${hit.name} is not open today`} */}
          </div> 
        </Card>
    );
}
  
export default BusinessData;
