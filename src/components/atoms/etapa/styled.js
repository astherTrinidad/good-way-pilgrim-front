import styled from 'styled-components';
import colors from '../../../assets/colors';

export const ContainerEtapa = styled.div`
  align-items: left;
  display: flex;
  flex-direction: row;
  text-align: left;
  width: 100%;

  @media screen and (max-width: 578px) {
    flex-direction: column;
  }
`;

export const ColumnNumber = styled.div`
  width: 10%;
  height: max-content;
  @media screen and (max-width: 578px) {
    width: 100%;
  }
`;

export const NumEtapa = styled.p`
  color: ${colors.mustard};
  font-size: 3rem;
  font-weight: 700;
  text-align: right;
  padding: 1rem;
  @media screen and (max-width: 578px) {
    text-align: left;
    font-size: 3.5rem;
    padding: 1rem 0 1rem 0;
  }
`;

export const ColumnText = styled.div`
  border-left: 1px solid ${colors.turquoise};
  height: max-content;
  margin: 2rem 1.25rem;
  padding-left: 1rem;
  width: 90%;
  @media screen and (max-width: 578px) {
    border-left: 0;
    border-top: 1px solid ${colors.turquoise};
    margin: -1rem 0;
    padding: 1rem 0 1rem 0;
  }
`;

export const TextEtapa = styled.p`
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

export const Value = styled.span`
  font-weight: 300;
`;

export const Key = styled.span`
  font-weight: 700;
`;
