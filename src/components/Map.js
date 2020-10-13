import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Map = ({key, name, address, city, state, postal_code, geoloc, business_id }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      
    return (
          <>
            <Button variant="primary" onClick={handleShow}>
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