import React from 'react';
import styled from '@emotion/styled';



const Ul = styled.ul`
  list-style: none;
  padding: 0 0 0 30px;
  color: white;
  margin-top: 50px;
`

export const SearchResults = ({searchResults}) => {


    return (
        <Ul>{searchResults.map(item=>(
            <li key={item}>{item}</li>
            ))}
          </Ul>
    )
}