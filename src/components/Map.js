import React, { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';

const Map = ({key, name, address, city, state, postal_code, geoloc, business_id }) => {
    const mapKey = process.env.REACT_APP_MAPS_API
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const center = {lat: geoloc["lat"], lng: geoloc["lng"]}
  
    return (
          <>
          <Button variant="primary" onClick={handleShow}>
            {/* <GoogleMapReact
              bootstrapURLKeys={{ key: mapKey }}
              defaultCenter={center}
              defaultZoom={11}
            >
              <Card
                lat={geoloc["lat"]}
                lng={geoloc["lng"]}
                text="My Marker"
              />
            </GoogleMapReact> */}
            Open Map!
          </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{address}, {state}</Modal.Title>
              </Modal.Header>
              <Modal.Body>Insert Google Map API using coords:
                <br/>
                Lattitude: {geoloc["lat"]}
                <br/>
                Longitude: {geoloc["lng"]}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
    );
}
export default Map;