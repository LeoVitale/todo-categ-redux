import styled from 'styled-components';

export const ContainerCheckbox = styled.div``;
export const LabelCheckbox = styled.label`
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin-left: 30px;
  &:before {
    display: inline-block;
    content: '';
    margin: 0 10px 0 0;
    width: 19px;
    height: 19px;
    border: 1px solid #ccc;
    border-radius: 30px;
    vertical-align: middle;
    color: #f95e5e;
    transition: all 200ms ease-in-out;
    position: absolute;
    top: -1px;
    left: -30px;
  }
`;
export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: inline-block;
  vertical-align: middle;
  display: none;
  &:checked + ${LabelCheckbox}:before {
    background: #66bb69;
    color: #66bb69;
    border: 1px solid #66bb69;
    transform: scale(1.2);
  }
`;
