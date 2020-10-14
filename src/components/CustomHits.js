import React from 'react';
import { Col } from 'react-bootstrap';
import { connectHits, connectHitInsights } from 'react-instantsearch-dom';
import Hit from "./Hit"
  
const HitWithInsights = connectHitInsights(window.aa)(Hit);
  
  const Hits = ({ hits }) => (
    <>
      {/* Utilize Insights for click tracking */}
      {hits.map(hit => (
        <Col md={6} id="hitDiv" key={hit.objectID}>
          <HitWithInsights hit={hit} />
        </Col>
      ))}
    </>
  );
  
  const CustomHits = connectHits(Hits);
  
 export default CustomHits;
