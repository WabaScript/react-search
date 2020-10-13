import React from 'react';
import { connectHits, connectHitInsights } from 'react-instantsearch-dom';
import Hit from "./Hit"
  
const HitWithInsights = connectHitInsights(window.aa)(Hit);
  
  const Hits = ({ hits }) => (
    <div>
      {hits.map(hit => (
        <HitWithInsights key={hit.objectID} hit={hit} />
      ))}
    </div>
  );
  
  const CustomHits = connectHits(Hits);
  
 export default CustomHits;
