import React from 'react';
import { LogroImg, NameText, ContainerLogros, DescriptionText } from './styled';
const Logro = ({ id, src, alt, tabIndex, name, description, onClick }) => {
  return (
    <ContainerLogros onClick={onClick}>
      <LogroImg id={id} src={src} alt={alt} tabIndex={tabIndex} />
      <NameText tabIndex={tabIndex}>{name}</NameText>
      <DescriptionText tabIndex={tabIndex}>{description}</DescriptionText>
    </ContainerLogros>
  );
};

export default Logro;
