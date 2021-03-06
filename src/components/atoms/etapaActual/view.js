import React from 'react';
import {
  EtapaImg,
  Text,
  MidleDash,
  ContainerEtapa,
  DescriptionText,
} from './styled';
const EtapaActual = ({
  id,
  src,
  alt,
  tabIndex,
  start,
  finish,
  km,
  onClick,
}) => {
  return (
    <ContainerEtapa onClick={onClick}>
      <EtapaImg id={id} src={src} alt={alt} tabIndex={tabIndex} />
      <Text tabIndex={tabIndex}>{start}</Text>
      <MidleDash>-</MidleDash>
      <Text tabIndex={tabIndex}>{finish}</Text>
      <DescriptionText tabIndex={tabIndex}>{`${km} km`}</DescriptionText>
    </ContainerEtapa>
  );
};

export default EtapaActual;
