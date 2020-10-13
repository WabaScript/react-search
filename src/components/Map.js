import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Map = ({key, name, address, city, state, postal_code, geoloc, business_id }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      
    return (
          <>
            <Button variant="primary" onClick={handleShow}>
              Launch demo modal
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
    );
}
export default Map;
                // {/* <!-- Half Map --> */}
                // <div class="col-md-4" id="hitLocationMap">
                //   {/* <!-- Modal Button --> */}
                //   <a id="modal-342513" href="#modal-container-342513" role="button" class="btn" data-toggle="modal">Open Map!</a>
                //   {/* <!-- Modal For Map --> */}
                //   <div class="modal fade" id="modal-container-342513" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                //     <div class="modal-dialog" role="document">
                //       <div class="modal-content">
                //         <div class="modal-header">
                //           <h5 class="modal-title" id="myModalLabel">
                //             ${hit.address}, ${hit.state}
                //           </h5> 
                //           <button type="button" class="close" data-dismiss="modal">
                //             <span aria-hidden="true">×</span>
                //           </button>
                //         </div>
                //         <div class="modal-body">
                //           Insert Google Map API using coords:
                //           <br>
                //           Lattitude: ${hit._geoloc["lat"]}
                //           Longitude: ${hit._geoloc["lng"]}
                //         </div>
                //         <div class="modal-footer">
                //           <button type="button" class="btn btn-secondary" data-dismiss="modal">
                //             Close
                //           </button>
                //         </div>
                //       </div>
                //     </div>  
                //   </div>
                //   {/* <!-- End Modal For Map --> */}
                // </div>