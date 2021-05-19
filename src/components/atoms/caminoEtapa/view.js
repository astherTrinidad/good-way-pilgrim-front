import React from 'react';
import {
  ContainerEtapa,
  TextNameEtapa,
  TextEtapa,
  DescriptionText,
  Value,
} from './styled';

const CaminoEtapa = ({
  tabIndex,
  name,
  start,
  finish,
  num_etapas,
  km,
  description,
  etapas,
}) => {
  return (
    <ContainerEtapa>
      <TextNameEtapa tabIndex={tabIndex}>
        <Value>{name}</Value>
      </TextNameEtapa>
      <TextEtapa tabIndex={tabIndex}>
        <Value>{start}</Value>
      </TextEtapa>
      <TextEtapa tabIndex={tabIndex}>
        <Value>{finish}</Value>
      </TextEtapa>
      <TextEtapa tabIndex={tabIndex}>
        <Value>{num_etapas}</Value>
      </TextEtapa>
      <TextEtapa tabIndex={tabIndex}>
        <Value>{km}</Value>
      </TextEtapa>
      <TextEtapa tabIndex={tabIndex}>
        <Value>{etapas}</Value>
      </TextEtapa>
      <DescriptionText tabIndex={tabIndex}>{description}</DescriptionText>
    </ContainerEtapa>
  );
};

export default CaminoEtapa;
