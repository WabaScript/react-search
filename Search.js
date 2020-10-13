import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SearchBox } from 'react-instantsearch-dom';

function Search() {
    return (
        <Col md={12}>
            <Row>
                <SearchBox className="searchBox" />
            </Row>
        </Col>
    );
  }
  
export default Search;