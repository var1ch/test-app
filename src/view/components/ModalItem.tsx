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
  // bgcolor: "background.paper",
  backgroundColor: "white",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
};

interface Props {
  title: string;
  text: string;
  openModal: boolean;
  closeButtonTitle: string;
  confirmButtonTitle: string;
  onClose: () => void;
  onConfirm: () => void;
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
      <Box sx={style}>
        <h2 id="unstyled-modal-title">{props.title}</h2>
        <p id="unstyled-modal-description">{props.text}</p>
        <button onClick={props.onConfirm}>{props.confirmButtonTitle}</button>
        <button onClick={props.onClose}>{props.closeButtonTitle}</button>
      </Box>
    </StyledModal>
  );
}
