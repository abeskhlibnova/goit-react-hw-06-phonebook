import React from 'react';
import PropTypes from 'prop-types';
import { FilterTitle, FilterInput, Input } from './Phonebook.styled';

export default function Filter({ filter, handleChange }) {
  return (
    <div>
      <FilterTitle>Find contacts by name</FilterTitle>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Введіть ім'я для пошуку"
      ></Input>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
