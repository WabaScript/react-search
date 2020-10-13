import React from 'react';
import { SearchBox } from 'react-instantsearch-dom';

function Search() {
    return (
        <div class="col-md-11" id="searchBar">
            <div class="row">
                <SearchBox />
            </div>
        </div>
    );
  }
  
export default Search;