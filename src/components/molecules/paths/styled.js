import styled from 'styled-components';
import colors from '../../../assets/colors';

export const Component = styled.div`
  align-items: center;
  width: 100%;
  height: max-content;
  justify-content: center;
  margin: 1rem 0;
`;

export const Name = styled.p`
  font-size: 1.5rem;
  color: ${colors.turquoise};
  padding-right: 2rem;
`;

export const Status = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: ${colors.mustard};
`;

export const Key = styled.p`
  font-size: 0.938rem;
  font-weight: 500;
  color: ${colors.darkGrey};
  margin: 1.5rem 0;
  padding: 0 1rem;
  border-right: 2px solid ${colors.mustard};

  &:nth-child(1) {
    padding-left: 0;
  }

  &:nth-child(3) {
    border-right: 0;
  }
`;

export const Value = styled.span`
  font-size: 0.938rem;
  font-weight: 300;
  color: ${colors.darkGrey};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
