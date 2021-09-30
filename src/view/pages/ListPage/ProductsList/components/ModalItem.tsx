import React from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/core/ModalUnstyled";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .modalTitle {
    font-weight: bold;
    font-size: 1.3rem;
  }
  .modalButton {
    margin-top: 10px;
    padding: 5px;
    border: 1px solid black;
    margin-right: 10px;
    font-size: 1.3rem;
    color: black;
    border-radius: 4px;
    &:hover {
      cursor: pointer;
      background-color: blue;
      color: white;
    }
  }
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  backgroundColor: "white",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
};

interface Props {
  children: JSX.Element;
  openModal: boolean;
  onClose: () => void;
}

export default function ModalItem(props: Props) {
  return (
    <StyledModal
      open={props.openModal}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      BackdropComponent={Backdrop}
    >
      <Box sx={style}>{props.children}</Box>
    </StyledModal>
  );
}
