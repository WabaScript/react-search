import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

function SortDropwDown() {
    return (
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
    );
  }
  
export default SortDropwDown;