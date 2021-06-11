import styled from "styled-components";
import colors from "../../../assets/colors";

const DeleteIconContainer = styled.div`
  background-color: ${colors.red};
  border-radius: 50%;
  cursor: pointer;
  height: 50px;
  margin-top: -25px;
  position: absolute;
  right: -25px;
  width: 50px;

  .delete-icon {
    color: ${colors.white};
    font-size: 3rem;
    font-weight: 500;
    position: relative;
  }

  &:hover {
    background-color: ${colors.white};
    border: 1px solid ${colors.red};

    .delete-icon {
      color: red;
      font-size: 3rem;
      position: relative;
    }
  }
`;

export default DeleteIconContainer;
