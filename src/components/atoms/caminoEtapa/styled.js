import styled from 'styled-components';
import colors from '../../../assets/colors';

export const ContainerEtapa = styled.div`
  align-items: left;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  text-align: left;
  margin-bottom: 0;
  height: max-content;
`;

export const TextEtapa = styled.p`
  color: ${colors.darkGrey};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
`;

export const TextNameEtapa = styled.a`
  color: ${colors.mediumGrey};
  line-height: 1;
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

export const Value = styled.span`
  font-weight: 300;
`;

export const Key = styled.span`
  font-weight: 700;
`;
