import React from 'react';
import { ContainerCheckbox, StyledCheckbox, LabelCheckbox } from './styles';

const Checkbox = ({ label, name, ...props }) => {
  return (
    <ContainerCheckbox>
      <StyledCheckbox id={name} name={name} {...props} />
      <LabelCheckbox htmlFor={name}>
        <span>{label}</span>
      </LabelCheckbox>
    </ContainerCheckbox>
  );
};

export default Checkbox;
