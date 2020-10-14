import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

const BusinessName = ({props}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { name, address, city, state, postal_code, categories, insights} = props;

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
                    {categorySplit(categories)}
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

function categorySplit(categories) {
    return categories.map(x => (x + " "))
}

export default BusinessName;