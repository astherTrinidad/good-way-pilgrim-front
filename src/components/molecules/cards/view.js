import React from "react";
import ButtonTurquoise from "./../../atoms/buttonTurquoise";

import {
  Illustration,
  TextNameCamino,
  TextMochila,
  Value,
  Key,
  ContainerCard,
  TextWrapper,
} from "./styled";

const Card = ({ id, alt, src, tabIndex, name, quantity, onClick }) => {
  return (
    <ContainerCard>
      <Illustration src={src} alt={alt} />
      <TextWrapper>
        <TextNameCamino tabIndex={tabIndex}>{name}</TextNameCamino>
        <TextMochila tabIndex={tabIndex}>
          <Key>Objetos: </Key>
          <Value>{quantity}</Value>
        </TextMochila>
      </TextWrapper>
      <div className="size-lg">
        <ButtonTurquoise
          id={id}
          type="button"
          onClick={onClick}
          label="Ver mochila"
          value="show info"
        />
      </div>
    </ContainerCard>
  );
};

export default Card;
