
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 10px 12px 10px;
  color: #fff;
  background-color: #4354b0;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 2px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 40px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;


  &:hover {
    opacity: 1;
  }
`;

export const SearchFormLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const Input = styled.input`
  width: 100%;
  display: inline-block;
  font-size: 15px;
  padding-left: 4px;
  padding-right: 4px;
  border: none;
  outline: none;


  &::placeholder {
    font-size: 16px;
  }
`;
