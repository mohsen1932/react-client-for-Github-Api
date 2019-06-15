import styled from "styled-components";

export const SearchBox = styled.div`
  display: block;
  width: 100%;
  padding: 0 1rem;
  height: 50px;
  margin: 1rem 0;
  * {
    float: left;
  }
  .search-input {
    display: inline-block;
    width: calc(100% - 70px);
    padding: 0.5rem 0.75rem;
    height: 50px;
    line-height: 50px;
    font-size: 1rem;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-right: none;
    transition: border-color 0.5s ease-in-out;
    &:focus {
      color: #495057;
      background-color: #fff;
      border-color: #777;
      outline: 0;
    }
  }
  .search-btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid #03a9f4;
    padding: 0 0.5rem;
    font-size: 0.9rem;
    height: 50px;
    width: 70px;
    line-height: 50px;
    border-radius: 0 0.25rem 0.25rem 0;
    color: #fff;
    background-color: #03a9f4;
    margin: 0;
    transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out,
      border-color 0.5s ease-in-out;
    &:not(:disabled):not(.disabled) {
      cursor: pointer;
    }
    &:not(:disabled):not(.disabled):hover {
      background-color: #2196f3;
      border-color: #2196f3;
    }
    &:focus {
      outline: none;
    }
    &.disabled,
    &:disabled {
      opacity: 0.5;
    }
  }
`;
