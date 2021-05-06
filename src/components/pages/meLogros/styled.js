import styled from 'styled-components';
import colors from '../../../assets/colors';

export const Row = styled.div`
  display: flex;
  flex-direction: row;

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

export const RowLogros = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 4rem;
  max-width: 100%;
  background-color: pink;
  justify-content: center
`;

export const ContainerLogros = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

export const LogroImg = styled.img`
  background-color: ${colors.lightGrey};
  border-radius: 50%;
  height: 100px;
  margin: 0.5rem;
  width: 100px;
`;

export const TextWrapper = styled.div`
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 100%;
  padding-top: 0;
  padding-bottom: 60px;
  text-align: center;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Heading = styled.h1`
  color: ${colors.darkGrey};
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 2.5em;
  font-weight: bold;
  line-height: 1.5;
  margin-right: auto;
  margin-left: auto;
  margin-top: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 960px) {
    font-size: 1.5em;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5em;
    margin-bottom: 2rem;
    margin-top: 1rem;
    max-width: 100%;
  }
`;

export const Subtitle = styled.p`
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5em;
  font-weight: 300;
  line-height: 1.5;
  margin-right: auto;
  margin-left: auto;
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  width: 86%;

  @media screen and (max-width: 960px) {
    font-size: 1.35em;
  }

  @media screen and (max-width: 768px) {
    display: none;
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
  margin: 1rem;
  padding: 1rem 1.5rem;
  transition: all 0.3s ease-out;

  &:hover {
    background: ${colors.redDark};
    color: ${colors.white};
    cursor: pointer;
    box-shadow: inset 0px 11px 8px -10px ${colors.black};
  }
  @media screen and (max-width: 960px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin: 1rem;
  }
`;

export const NameText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem 1rem 0 1rem;
`;

export const DescriptionText = styled.p`
  font-size: 1rem;
  font-weight: 300;
  padding: 0.5rem 1rem 1rem 1rem;
`;
