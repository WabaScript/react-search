import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import { GoogleMapsLoader, GeoSearch, Marker } from 'react-instantsearch-dom-maps';
const mapKey = process.env.REACT_APP_MAPS_API

const popover = (hit) => (
  <Popover id="popover-basic">
    <Popover.Title as="h3">{hit.name}</Popover.Title>
    <Popover.Content>
      {hit.address}
    </Popover.Content>
  </Popover>
);

function FullMap() {
    return (
    <div style={{ height: 500 }} id="fullMapView">
        <GoogleMapsLoader apiKey={mapKey}>
        {google => (
          <GeoSearch
            google={google}
            mapTypeId={google.maps.MapTypeId.SATELLITE}
          >
            {({ hits }) => (
              <div>
                {hits.map(hit => (
                  <OverlayTrigger trigger="click" placement="right" overlay={popover({hit})}>
                    <Marker key={hit.objectID} hit={hit} />
                  </OverlayTrigger>
                  ))}
              </div>
            )}
          </GeoSearch>
        )}
      </GoogleMapsLoader>
    </div>
    );
  }
  
export default FullMap;