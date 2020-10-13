import React from 'react';
import SearchClient from './utils/SearchClient'
import { InstantSearch, Pagination, SortBy, Configure } from 'react-instantsearch-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as YelpLogo } from './img/Yelp_Logo.svg';
import FacetsContainer from './components/FacetsContainer'
import HitsContainer from './components/HitsContainer'
import Search from './components/Search'
import FullMap from './components/FullMap'

function App() {
  return (
    <Container fluid id="main" className="background-img">
      {/* InstantSearch Will Power Entire Application */}
      <InstantSearch
        indexName="yelp-businesses-test"
        searchClient={SearchClient}
      >
        <Configure
          hitsPerPage={8}
          analytics={true}
          clickAnalytics={true}
          enablePersonalization={true}
          aroundLatLngViaIP={true}
          distinct
        />
        <Row id="title">
          <Col md={12}>
            <h1>	Yelp Search <small>powered by Algolia</small></h1>
          </Col>
        </Row>

        <Row id="searchRow">
          <Col md={2} id="searchRowImg">
            <a href="/"><YelpLogo/></a>
          </Col>
          <Col md={6} id="searchBox">
            <Search />
          </Col>
          <Col md={4} id="searchSort">
            <SortBy 
              defaultRefinement="yelp-businesses-test"
              items={[
                { value: 'yelp-businesses-test', label: 'Default' }
              ]}
            />
          </Col>
        </Row>
        
        <Row id="facetsAndHits">
          <Col md={3} id="facetContainer">
            <FacetsContainer/>
          </Col>
          <Col md={9} id="hitsContainer">
            <Row>
              <HitsContainer/>
            </Row>
            <Col md={12} id="pagination">
              <Pagination />
            </Col>
          </Col>
        </Row>

        <Row>
          <Col md={12} id="mapView">
            <FullMap />
          </Col>
        </Row>

      </InstantSearch>
    </Container>
  );
}

export default App;