import styled from 'styled-components';
import colors from '../../../assets/colors';

export const ContainerCaminos = styled.div`
  align-items: left;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  text-align: left;
  margin-bottom: 3rem;
`;

export const TextNameCamino = styled.h4`
  color: ${colors.turquoise};
  font-weight: 300;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const TextCamino = styled.p`
  color: ${colors.darkGrey};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
`;

export const DescriptionText = styled.p`
  color: ${colors.darkGrey};
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    padding: 0.5rem 0rem;
  }
`;
