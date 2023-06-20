import React from 'react';

import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"

function Search(){
  return(
    <InputGroup className="search align-items-center rounded">
      <FormControl placeholder="search" className="search__input" />
    </InputGroup>
  )
}

export default Search