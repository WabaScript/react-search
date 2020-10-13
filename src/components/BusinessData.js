import React from 'react';
import { Card } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import BusinessName from "./BusinessName";
import moment from 'moment';

const BusinessData = (props) => {
    // {key, name, address, city, state, postal_code, stars, hours, categories, attributes, business_id }
    const { name, address, stars, hours } = props;
    return (
        <Card id="hitInfoContainer">
          <div id="hitInfo">
              {/* <a target="_blank" href={`https://www.yelp.com/biz/${business_id}`} rel="noopener noreferrer" /> */}
            <BusinessName props={props} />
            {address}
            <br/>
            <ReactStars
              count={5}
              size={18}
              isHalf={true}
              value={stars}
              emptyIcon={<i className="fa fa-star" />}
              halfIcon={<i className="fa fa-star-half-alt" />}
              fullIcon={<i className="fa fa-star" />}
              activeColor="#ffd700"
            />
            {isOpenToday(hours) ? `Today's hours: ${getHoursFromObject(hours)}` : `Sorry, ${name} is not open today.`}
          </div>
        </Card>
    );
}

function isOpenToday(hours) {
    if (hours === null) {
        return false;
    }

    const now = moment();
    const dayOfWeek = now.format("dddd");
    if (hours[dayOfWeek] !== undefined) {
        const hoursArray = hours[dayOfWeek].split('-');
        const open = parseTimeFromString(hoursArray[0]), close = parseTimeFromString(hoursArray[1]);
        return open <= now <= close;
    }
    return false;
}

function parseTimeFromString(timeString) {
    return moment(timeString, "HH:mm");
}

function getHoursFromObject(hours) {
    if (hours === null) {
        return;
    }

    const now = moment();
    const dayOfWeek = now.format("dddd");
    if (hours[dayOfWeek] !== undefined) {
        const hoursArray = hours[dayOfWeek].split('-');
        const open = parseTimeFromString(hoursArray[0]), close = parseTimeFromString(hoursArray[1]);
        return open.format("hh:mm A") + " - " + close.format("hh:mm A");
    }
}
  
export default BusinessData;