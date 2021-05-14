import React, {useState} from 'react';
import SearchClient from './utils/SearchClient'
import { InstantSearch, Pagination, Configure } from 'react-instantsearch-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as YelpLogo } from './img/Yelp_Logo.svg';
import FacetsContainer from './components/FacetsContainer'
import HitsContainer from './components/HitsContainer'
import Search from './components/Search'
import FullMap from './components/FullMap'
import { FaAlgolia } from 'react-icons/fa';
import { BiMap } from "react-icons/bi";

function App() {
  const [mapDisplay, setMapDisplay] = useState(false);
  const handleShow = () => setMapDisplay(!mapDisplay);

  return (
    <Container fluid id="main" className="background-img">
        {/* InstantSearch Will Power Entire Application */}
      <InstantSearch
        indexName="yelp-businesses-test"
        searchClient={SearchClient}
      >
        {/* Power search even further with analytics, geolocation & more */}
      <Configure
          hitsPerPage={10}
          analytics={true}
          clickAnalytics={true}
          enablePersonalization={true}
          aroundLatLngViaIP={true}
          distinct
      />
          {/* Header */}
        <Row>
          <Col xs={2} sm={2} md={2} id="logoImg">
            <a href="/"><YelpLogo/></a> 
          </Col>
          <Col xs={{span: 1, offset: 10}} sm={{span: 1, offset: 10}} md={{span: 1, offset: 10}} className="d-none d-sm-block d-md-block">
            <a target="_blank" href={'https://www.algolia.com'} rel="noopener noreferrer">
              <FaAlgolia size={"3em"} id="algoliaIcon"/>
            </a>
          </Col>
        </Row>
          {/* Search */}
        <Row  id="searchRow">
          <Col xs={11} sm={11} md={11} lg={11}>
            <Search /> 
          </Col>
          <Col md={1} sm={1} xs={1}>
            <BiMap id="biMap" onClick={handleShow}/>
          </Col>
        </Row>
          {/* Facets */}
        <Row id="facetsAndHits">
          <Col xl={3} lg={4} md={4} sm={6} xs={6} className="d-none d-sm-block d-md-block"id="facetContainer">
            <FacetsContainer/>
          </Col>
            {/* Ability to toggle default display and map view */}
          {!mapDisplay ?
          <Col xl={9} lg={8} md={8} sm={6} xs={12} id="hitsContainer">
            <Row>
              <HitsContainer/>
            </Row>
            <Col lg={12} md={12} sm={12} xs={12} id="pagination">
              <Pagination />
            </Col>
          </Col>
        :
          <Col lg={8} md={8} id="mapView">
            <FullMap />
          </Col>
        }
        </Row>

      </InstantSearch>
    </Container>
  );
}

export default App;

// {/* <SortBy 
//   defaultRefinement="yelp-businesses-test"
//   items={[
//     { value: 'yelp-businesses-test', label: 'Default' }
//   ]}
// /> */}