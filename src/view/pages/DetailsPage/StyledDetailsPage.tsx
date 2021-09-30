import styled from "styled-components";

export const StyledDetailsPage = styled.div`
  img {
    width: 380px;
  }
  span.description {
    display: block;
  }
  .backButton {
    display: inline-block;
  }
  h1 {
    display: inline-block;
    margin-left: 25px;
  }
  .productName {
    font-weight: bold;
  }
  div.header {
  }
  button.editButton {
    margin-bottom: 25px;
  }
  div.addCommentsField {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    input {
      flex: 1;
      margin-right: 10px;
      padding: 8px;
      font-size: 1.2rem;
    }
  }
  span.commentText {
    vertical-align: top;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    overflow: hidden;
  }
  .deleteButton {
    &:hover {
      cursor: pointer;
    }
  }
  .comment {
    display: flex;
    justify-content: space-between;
    width: 500px;
    margin-bottom: 16px;
    background-color: white;
    border-radius: 4px;
    padding: 10px;
  }
  .commentsBlock {
    width: 500px;
  }
`;
