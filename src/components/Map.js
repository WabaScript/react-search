import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaMapMarkedAlt, FaMapMarkerAlt } from 'react-icons/fa';
import GoogleMap from 'google-map-react';

const Map = ({ props }) => {
    const { name, address, state, geoloc, business_id, insights } = props;
    const mapKey = process.env.REACT_APP_MAPS_API;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const center = geoloc ? {lat: geoloc["lat"], lng: geoloc["lng"]} : {lat: 0, lng: 0};
    const Marker = () => <FaMapMarkerAlt size={"3em"} color={"red"}/>;
  
    return (
      <>
        <FaMapMarkedAlt onClick={handleShow} className="map-icon"/>
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {address}, {state}
            <br/><br/>
            <div style={{ height: '50vh', width: '100%' }}>
              <GoogleMap
                  bootstrapURLKeys={{ key: mapKey }}
                  defaultCenter={center}
                  defaultZoom={14}
                >
                  {geoloc ?
                    <Marker
                        lat={geoloc['lat']}
                        lng={geoloc['lng']}
                    />
                  :
                    <Marker
                        lat={0}
                        lng={0}
                    />
                  }
                </GoogleMap>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <a target="_blank" href={`https://www.yelp.com/biz/${business_id}`} rel="noopener noreferrer" >
            <Button variant="primary" onClick={() => {
              handleClose();
              insights('convertedObjectIDsAfterSearch', {
                  eventName: `Went to ${name}'s Yelp Business Page`
              })
            }}>
              See more about {name} on Yelp!
            </Button>
            </a>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
export default Map;