import styled from 'styled-components';
import colors from '../../../assets/colors';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  width: 80%;
  height: max-content;
`;
export const Section = styled.h1`
  font-size: 1.5em;
  margin-bottom: 2rem;
  color: ${colors.darkGrey};
`;

export const SearchInput = styled.input`
  font-size: 2em;
  border-bottom: 1px solid ${colors.turquoise};
  padding: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  &::placeholder {
    ${colors.mustard};
  }
`;
/* COLUMN LEFT */

export const ColumnImg = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 80%;
  height: auto;
`;

export const Text = styled.p`
  font-weight: 300;
  color: ${colors.darkGrey};
  line-height: 2;

  &:first-of-type,
  &:last-of-type {
    margin-top: 2rem;
  }
`;

/* FINISH COLUMN LEFT */

/* COLUMN RIGHT */

export const ColumnText = styled.div`
  width: 50%;
  height: max-content;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-top: 3rem;
  }
`;

export const ContainerName = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

export const RowName = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
