import styled from 'styled-components';
import colors from '../../../assets/colors';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ColumnMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: yellow;
`;

export const ColumnCamino = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 2rem;
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: max-content;
  justify-content: center;
  margin: 3rem auto;
  width: 80%;
`;
export const Section = styled.h1`
  color: ${colors.darkGrey};
  font-size: 1.5em;
  margin-bottom: 2rem;
  text-align: left;
  justify-content: left;
  align-items: left;
`;

export const RowCaminos = styled.div`
  align-items: left;
  justify-content: left;
  margin-bottom: 4rem;
  margin-top: -3rem;
  max-width: 100%;
`;

export const TextWrapper = styled.div`
  align-items: left;
  justify-content: left;
  margin: 0 auto;
  max-width: 100%;
  padding-top: 0;
  padding-bottom: 60px;
  text-align: left;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Heading = styled.h2`
  color: ${colors.turquoise};
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 2em;
  font-weight: bold;
  line-height: 1.5;
  margin-right: auto;
  margin-left: auto;
  margin-top: 1rem;
  text-align: left;
  width: 100%;

  @media screen and (max-width: 960px) {
    font-size: 1.25em;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.25em;
    margin-bottom: 2rem;
    margin-top: 1rem;
    max-width: 100%;
  }
`;

export const Subtitle = styled.h3`
  color: ${colors.darkGrey};
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5em;
  font-weight: 300;
  line-height: 1.5;
  margin-top: 1rem;
  margin-bottom: 3rem;
  text-align: left;
  width: 80%;

  @media screen and (max-width: 960px) {
    font-size: 1em;
    margin: 0 0 1rem 0;
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const TextDownload = styled.a`
  color: ${colors.turquoise};
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 300;

  &:nth-of-type(1) {
    border-right: 1px solid ${colors.mustard};
    padding-right: 2rem;

    @media screen and (max-width: 578px) {
      border-right: 0;
      padding-right: 0;
    }
  }

  &:nth-of-type(2) {
    padding-left: 2rem;
    border-right: 0;
  }

  &:hover {
    color: ${colors.darkGrey};
  }
`;

export const ButtonDelete = styled.button`
  width: 50%;
  border-radius: 8px;
  background-color: ${colors.red};
  color: ${colors.white};
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  margin: 1rem auto;
  padding: 1rem 1rem;
  transition: all 0.3s ease-out;

  &:hover {
    background: ${colors.redDark};
    color: ${colors.white};
    cursor: pointer;
    box-shadow: inset 0px 11px 8px -10px ${colors.black};
  }
  @media screen and (max-width: 960px) {
    display: block;
    margin: 1rem auto;
  }
`;
