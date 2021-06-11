import React from "react";
import DeleteIconContainer from "./styled";
import { TiTimes } from "react-icons/ti";

const DeleteIcon = ({ id, title, onClick }) => {
  return (
    <DeleteIconContainer>
      <TiTimes
        onClick={onClick}
        removeItem={id}
        className="delete-icon"
        title={title}
      />
    </DeleteIconContainer>
  );
};
export default DeleteIcon;
