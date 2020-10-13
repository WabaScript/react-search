import React from 'react';
import SearchClient from './utils/SearchClient'
import { InstantSearch } from 'react-instantsearch-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as YelpLogo } from './img/Yelp_Logo.svg';
import Facet from './components/Facet'
import HitsContainer from './components/HitsContainer'
import Search from './components/Search'
import SortDropwDown from './components/SortDropDown';

function App() {
  return (
    <Container fluid id="main" className="background-img">
      {/* InstantSearch Will Power Entire Application */}
      <InstantSearch
        indexName="yelp-businesses-test"
        searchClient={SearchClient}
      >
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
            <SortDropwDown/>
          </Col>
        </Row>
        
        <Row id="facetsAndHits">
          <Col md={12} id="facetContainer">
            <Facet/>
          </Col>
          <Col md={11} id="hitsContainer">
            <HitsContainer/>
          </Col>
        </Row>
      </InstantSearch>
    </Container>
  );
}

export default App;