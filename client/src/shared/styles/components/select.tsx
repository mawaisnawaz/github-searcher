import React from "react";
import styled from "styled-components";

const SelectBox = styled.select`
  font-size: 14px;
  border: none;
  box-shadow: none;
  border-radius: 0;
  background: transparent;
  height: 40px;
  cursor: pointer;
  outline: none;
  padding-right: 35px;
  padding-left: 15px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;

  -moz-appearance: none;

  // Disable ugly ass outline on firefox
  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }

  -webkit-appearance: none;

  // Disable default arrow on IE 11+
  &::-ms-expand {
    display: none;
  }

  &:focus {
    border-color: #50add6;
  }
`;

const SelectContainer = styled.div`
    position: relative;
    height: 40px;
    background: white;
    
    &:after {
        content: '';
        position: absolute;
        top: 0;
        width: 0;
        height: 0;
        right: 10px;
        bottom: 0;
        margin: auto;
        border-style: solid;
        border-width: 5px 5px 0 5px;
        border-color: #c4c4c4 transparent transparent transparent;
        pointer-events: none;
    }
    
    &:before {
        width: 30px;
        position: absolute;
        top: 1px;
        right: 1px;
        bottom: 1px;
        content: '';
        pointer-events: none;
    }
  
    &:hover {
        &:before {
           
        }
    }
}`;

const SelectBoxContainer = ({ ...props }) => (
  <SelectContainer>
    <SelectBox {...props}>{props.children}</SelectBox>
  </SelectContainer>
);

export default SelectBoxContainer;
