import React from 'react';

function Facet() {
    return (
        <div className="col-md-3" id="facetContainer">
            <div className="card bg-default" id="facet">
                <h5 className="card-header">
                    Facet Title
                </h5>
                <div className="card-body" id="facetList">
                    <p className="card-text">
                        Facet Content
                    </p>
                </div>
                <div className="card-footer">
                </div>
            </div>
        </div>
    );
  }
  
export default Facet;
