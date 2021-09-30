import styled from "styled-components";

export const StyledListPage = styled.div`
  button.regularButton {
    margin-right: 10px;
  }
  .productButton {
    font-size: 1rem;
    margin-right: 10px;
    margin-top: 10px;
  }
  ul.productsList {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    li.listItem {
      display: flex;
      flex-direction: column;
      margin-bottom: 25px;
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
        margin-bottom: 0;
      }
    }
  }
  button.addProduct {
    margin-bottom: 25px;
  }
`;
