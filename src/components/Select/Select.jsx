import React from 'react';
import { StyledSelect } from './styles';

const Select = ({ options, ...props }) => {
  return (
    <StyledSelect {...props}>
      <option value="">All</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
