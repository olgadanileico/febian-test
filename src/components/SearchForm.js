import React from 'react';
import styled from '@emotion/styled';



const SearchInput = styled.input`
  border: 1px solid  #f2f2f2;;
  border-radius: 10px;
  height: 30px;
  width: 100%;
  padding: 2px 23px 2px 30px;
  outline: 0;
  background-color: #f5f5f5;

`
const Form = styled.form`
  max-width: 500px;
  width: 100%;
  margin: 50px auto;
`


export const SearchForm = ({history, setSearchQuery, searchQuery}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/${searchQuery}`);
      };
    
    const handleChange = e => {
        setSearchQuery(e.target.value);
    };

    return (
        <Form onSubmit={handleSubmit}>
        <SearchInput 
          type="text" 
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search for ... and press enter"
        />
        </Form>
    )
}