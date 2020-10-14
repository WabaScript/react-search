import React from 'react';
import Facet from './Facet';

function FacetsContainer() {
    return (
        <>
            <Facet attribute={"city"} />
            <Facet attribute={"categories"} />
        </>
    );
  }
  
export default FacetsContainer;
