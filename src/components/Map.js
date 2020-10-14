import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaMapMarkedAlt, FaMapMarkerAlt } from 'react-icons/fa';
import GoogleMap from 'google-map-react';

const Map = ({ props }) => {
    const { key, name, address, city, state, postal_code, geoloc, business_id, insights } = props;
    const mapKey = process.env.REACT_APP_MAPS_API;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const center = {lat: geoloc["lat"], lng: geoloc["lng"]};
    const Marker = () => <FaMapMarkerAlt />;
  
    return (
          <>
            <FaMapMarkedAlt onClick={handleShow} className="map-icon" style={{marginLeft: 'auto'}}/>

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
                      <Marker
                          lat={geoloc['lat']}
                          lng={geoloc['lng']}
                      />
                    </GoogleMap>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <a target="_blank" href={`https://www.yelp.com/biz/${business_id}`} rel="noopener noreferrer" >
                <Button variant="primary" onClick={() => {
                  handleClose();
                  insights('clickedObjectIDsAfterSearch', {
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