import styled from "styled-components";

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 720px;
  margin: 0 auto;
  a {
    margin: 0;
    padding: 0;
  }
  h1.title {
    margin-bottom: 25px;
    font-size: 2rem;
  }
  hr {
    margin-bottom: 25px;
  }
  .regularButton {
    padding: 10px;
    background-color: #3d3da5;
    font-weight: bold;
    color: white;
    outline: none;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 2px;
    display: inline-block;
    font-size: 1.1rem;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    &:hover {
      cursor: pointer;
      background-color: blue;
    }
  }
  button {
    padding: 1em;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default StyledAppContainer;
