import React from 'react';
import {
  ContainerEtapa,
  ColumnNumber,
  NumEtapa,
  ColumnText,
  TextEtapa,
  Value,
  Key,
  DescriptionText,
} from './styled';

const Etapa = ({ tabIndex, numEtapa, start, finish, km, description }) => {
  return (
    <ContainerEtapa>
      <ColumnNumber>
        <NumEtapa>{numEtapa}</NumEtapa>
      </ColumnNumber>
      <ColumnText>
        <TextEtapa tabIndex={tabIndex}>
          <Key>Inicio: </Key>
          <Value>{start}</Value>
        </TextEtapa>
        <TextEtapa tabIndex={tabIndex}>
          <Key>Fin: </Key>
          <Value>{finish}</Value>
        </TextEtapa>
        <TextEtapa tabIndex={tabIndex}>
          <Key>Kilómetros: </Key>
          <Value>{km}</Value>
        </TextEtapa>
        <DescriptionText tabIndex={tabIndex}>{description}</DescriptionText>
      </ColumnText>
    </ContainerEtapa>
  );
};

export default Etapa;
