import React from 'react';
import Hit from "./Hit";

const Hits = ({hits}) => {
    return (
        <>
            {hits.map(hit => (
                <Hit hit={hit} />
            ))}
        </>
    );
}

export default Hits;