import React from "react";
import {
  ContainerCaminos,
  TextNameCamino,
  TextCamino,
  DescriptionText,
  Value,
  Key,
} from "./styled";

const Camino = ({
  tabIndex,
  name,
  start,
  finish,
  num_etapas,
  km,
  description,
  id,
}) => {
  return (
    <ContainerCaminos id={id}>
      <TextNameCamino tabIndex={tabIndex}>{name}</TextNameCamino>
      <TextCamino tabIndex={tabIndex}>
        <Key>Origen: </Key>
        <Value>{start}</Value>
      </TextCamino>
      <TextCamino tabIndex={tabIndex}>
        <Key>Destino: </Key>
        <Value>{finish}</Value>
      </TextCamino>
      <TextCamino tabIndex={tabIndex}>
        <Key>Número total de etapas: </Key>
        <Value>{num_etapas}</Value>
      </TextCamino>
      <TextCamino tabIndex={tabIndex}>
        <Key>Kilómetros: </Key>
        <Value>{km}</Value>
      </TextCamino>

      <DescriptionText tabIndex={tabIndex}>{description}</DescriptionText>
    </ContainerCaminos>
  );
};

export default Camino;
