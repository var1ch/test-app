import React from "react";
import { Box } from "@mui/system";
import { StyledModal, style, Backdrop } from "./StyledEditProductModal";

interface Props {
  openModal: boolean;
  onClose: () => void;
  children: JSX.Element;
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
