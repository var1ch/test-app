import { styled } from "@mui/system";
import ModalUnstyled from "@mui/core/ModalUnstyled";

export const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    border: 1px solid grey;
  }
  form {
    .submitButton {
      margin-right: 10px;
      margin-top: 10px;
    }
  }
`;

export const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export const style = {
  width: 400,
  backgroundColor: "white",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
};
