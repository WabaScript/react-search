import React from 'react';
import Facet from './Facet';

function FacetsContainer() {
    return (
        <>
            <Facet attribute={"categories"} />
            <Facet attribute={"city"} />
        </>
    );
  }
  
export default FacetsContainer;
