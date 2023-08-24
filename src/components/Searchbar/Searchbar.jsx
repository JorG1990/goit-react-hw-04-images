
import React, { useState } from "react";
import PropTypes from "prop-types";
import { MdSearch } from "react-icons/md";
import { Header, SearchButton, SearchForm, Input } from "./Searchbar.styled";

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(query);
    reset();
  };

  const reset = () => {
    setQuery("");
  };

  return (
    <Header>
      <SearchForm onSubmit={ handleSubmit }>
        <SearchButton type="submit">
          <MdSearch style={{ width:20, height: 20 }} />
        </SearchButton>

        <Input
          type="text"
          name="query"
          value={ query }
          onChange={ handleChange }
          autoComplete="off"
          autoFocus
          placeholder="search images and photos"
        />
      </SearchForm>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
