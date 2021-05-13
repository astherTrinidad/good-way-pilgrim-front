import React from 'react';
import {
  ContainerCaminos,
  TextNameCamino,
  TextCamino,
  DescriptionText,
} from './styled';

const Camino = ({
  tabIndex,
  name,
  start,
  finish,
  num_etapas,
  km,
  description,
}) => {
  return (
    <ContainerCaminos>
      <TextNameCamino tabIndex={tabIndex}>{name}</TextNameCamino>
      <TextCamino tabIndex={tabIndex}>{start}</TextCamino>
      <TextCamino tabIndex={tabIndex}>{finish}</TextCamino>
      <TextCamino tabIndex={tabIndex}>{num_etapas}</TextCamino>
      <TextCamino tabIndex={tabIndex}>{km}</TextCamino>
      <DescriptionText tabIndex={tabIndex}>{description}</DescriptionText>
    </ContainerCaminos>
  );
};

export default Camino;
