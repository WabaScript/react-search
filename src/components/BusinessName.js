import React, {useState} from 'react';
import {Button, Card, Modal} from 'react-bootstrap';

const BusinessName = ({props}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {key, name, address, city, state, postal_code, stars, hours, categories, attributes, business_id, insights} = props;

    return (
        <>
            <div id="businessName" onClick={() => {
                handleShow();
                insights('clickedObjectIDsAfterSearch', {
                    eventName: 'View business'
                });
            }}>{name}</div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {address}
                    <br/>
                    {city} {state} {postal_code}
                    <br/>
                    {categories}
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

export default BusinessName;