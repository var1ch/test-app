import styled from "styled-components";

export const StyledProductItem = styled.li`
  margin-top: 25px;
  background-color: white;
  border-radius: 3px;
  padding: 1em;
  box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.25);
  span.productName {
    font-weight: bold;
  }
  img {
    float: left;
    margin-right: 16px;
    width: 150px;
  }
  &:last-child {
    margin-bottom: 25px;
  }
  a {
    color: black;
    text-decoration: none;
    border: 1px solid grey;
    margin-right: 16px;
    padding: 0.7em;
    border-radius: 3px;
    &:hover {
      background-color: grey;
      color: white;
    }
  }
  button {
    &:hover {
      cursor: pointer;
    }
  }
`;
