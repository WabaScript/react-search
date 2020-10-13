import React from 'react';
import { GoogleMapsLoader, GeoSearch, Marker } from 'react-instantsearch-dom-maps';
const mapKey = process.env.REACT_APP_MAPS_API

function FullMap() {
    return (
    <div style={{ height: 500 }}>
        <GoogleMapsLoader apiKey={mapKey}>
        {google => (
          <GeoSearch
            google={google}
            mapTypeId={google.maps.MapTypeId.SATELLITE}
          >
            {({ hits }) => (
              <div>
                {hits.map(hit => <Marker key={hit.objectID} hit={hit} />)}
              </div>
            )}
          </GeoSearch>
        )}
      </GoogleMapsLoader>
    </div>
    );
  }
  
export default FullMap;