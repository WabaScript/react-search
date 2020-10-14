import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import BusinessName from "./BusinessName";
import moment from 'moment';
import Map from "./Map";
import {
    FaTv,
    FaAccessibleIcon,
    FaDollarSign,
    FaCloudSun,
    FaCreditCard,
    FaCocktail,
    FaBaby,
    FaParking,
    FaBicycle,
    FaWifi,
    FaGlassCheers,
    FaPaw
} from 'react-icons/fa';

const BusinessData = (props) => {
    // {key, name, address, city, state, postal_code, stars, hours, categories, attributes, business_id }
    const { name, address, stars, hours, attributes } = props;
    return (
          <div id="hitInfo">
            <Row>
                <Col xs={9} sm={9} md={8} lg={8} xl={10}>
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
                    edit={false}
                    activeColor="#ffd700"
                    />
                    {isOpenToday(hours) ? `Today's hours: ${getHoursFromObject(hours)}` : `Sorry, ${name} is not open today.`}
                    <br/>
                    {getIconList(attributes).map((icon, index) => (<div key={index} className="attribute-icon">{icon}</div>))}
                </Col>
                <Col xs={3} sm={3} md={4} lg={4} xl={2} id="mapIconModal">
                    <Map props={props} />
                </Col>
          </Row>
          </div>
    );
}

function isOpenToday(hours) {
    if (!hours) {
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
    if (!hours) {
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

function getIconMap() {
    let icons = {};
    const attributeKeys = [
        'HasTV', 'WheelchairAccessible', 'RestaurantsPriceRange2', 'OutdoorSeating', 'BusinessAcceptsCreditCards',
        'Alcohol', 'GoodForKids', 'BusinessParking', 'BikeParking', 'WiFi', 'HappyHour', 'DogsAllowed',
    ]
    const iconElements = [
        <FaTv title={"Has TV"} key="tv" />, <FaAccessibleIcon title={"Wheelchair Accessible"} key="wheelchair" />,
        <FaDollarSign title={"Has Price Point"} key="dollar" />, <FaCloudSun title={"Outdoor Seating"} key="outdoor" />,
        <FaCreditCard title={"Accepts Credit Cards"} key="cc" />, <FaCocktail title={"Alcohol"} key="cocktail" />,
        <FaBaby title={"Good for Kids"} key="kids" />, <FaParking title={"Has Parking"} key="parking" />,
        <FaBicycle title={"Has Bike Parking"} key="bike" />, <FaWifi title={"Has WiFi"} key="wifi" />,
        <FaGlassCheers title={"Happy Hour"} key="hh" />, <FaPaw title={"Dogs Allowed"} key="dogs" />
    ]

    for (let i = 0; i < attributeKeys.length; i++) {
        icons[attributeKeys[i]] = iconElements[i];
    }

    return icons;
}

function getIconList(attributes) {
    if (!attributes) {
        return []
    }

    const icons = getIconMap();
    const finalIconList = [];
    for (let attribute of Object.keys(attributes)) {
        if (icons[attribute] !== undefined) {
            const value = attributes[attribute].toLowerCase().replaceAll("u'", "").replaceAll("'", "");
            if ((attribute === "BusinessParking" && value.includes('true')) || isTrue(value)) {
                finalIconList.push(icons[attribute]);
            }
        }
    }
    return finalIconList;
}

function isTrue(value) {
    return value !== 'none' && value !== 'no' && value !== 'false';
}
  
export default BusinessData;
