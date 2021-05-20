import styled from 'styled-components';
import colors from '../../../assets/colors';

export const ContainerEtapa = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  width: 250px;
  height: 250px;

  @media screen and (max-width: 968px) {
    width: 33%;
  }

  @media screen and (max-width: 767px) {
    width: 50%;
  }
`;

export const EtapaImg = styled.img`
  background-color: ${colors.lightGrey};
  border-radius: 50%;
  cursor: pointer;
  height: 100px;
  margin: 0.5rem;
  width: 100px;
`;

export const Text = styled.span`
  color: ${colors.darkGrey};
  font-size: 1rem;
  padding: auto 0.5rem;
  line-height: 1.5;
`;

export const MidleDash = styled.p`
  color: ${colors.mustard};
  font-size: 1rem;
`;

export const DescriptionText = styled.p`
  color: ${colors.darkGrey};
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  padding: 0.5rem 1rem 1rem 1rem;

  @media screen and (max-width: 768px) {
    font-size: 0.813rem;
    padding: 0.5rem 0rem;
  }
`;
