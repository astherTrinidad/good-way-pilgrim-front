import React from "react";

import {
  Illustration,
  TextNameCamino,
  ContainerCard,
  TextWrapper,
} from "./styled";

const CardsSmall = ({ id, alt, src, tabIndex, name, onClick }) => {
  return (
    <ContainerCard id={id} onClick={onClick}>
      <Illustration src={src} alt={alt} />
      <TextWrapper>
        <TextNameCamino tabIndex={tabIndex}>{name}</TextNameCamino>
      </TextWrapper>
    </ContainerCard>
  );
};

export default CardsSmall;
