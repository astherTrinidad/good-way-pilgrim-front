import React from "react";

import {
  Illustration,
  TextNameCamino,
  ContainerCard,
  TextWrapper,
} from "./styled";

const CardsSmall = ({ id, title, alt, src, tabIndex, name, onClick }) => {
  return (
    <ContainerCard>
      <Illustration
        src={src}
        alt={alt}
        id={id}
        onClick={onClick}
        title={title}
      />
      <TextWrapper>
        <TextNameCamino tabIndex={tabIndex}>{name}</TextNameCamino>
      </TextWrapper>
    </ContainerCard>
  );
};

export default CardsSmall;
