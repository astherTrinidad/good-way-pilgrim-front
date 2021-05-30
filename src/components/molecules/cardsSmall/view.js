import React from "react";

import {
  Illustration,
  TextNameCamino,
  ContainerCard,
  TextWrapper,
} from "./styled";

const CardsSmall = ({ id, alt, src, tabIndex, name, onClick }) => {
  return (
    <ContainerCard>
      <Illustration src={src} alt={alt} id={id} onClick={onClick} />
      <TextWrapper>
        <TextNameCamino tabIndex={tabIndex}>{name}</TextNameCamino>
      </TextWrapper>
    </ContainerCard>
  );
};

export default CardsSmall;
