import styled from "styled-components";
import colors from "../../../assets/colors";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: max-content;
  justify-content: center;
  margin: 3rem auto;
  width: 80%;
  align-items: left;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  &:nth-of-type(3) {
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ColumnCard = styled.div`
  display: flex;
  flex-direction: column;
  &:hover {
    border: 1px solid ${colors.mustard};
    border-radius: 20px;
  }
`;

export const Section = styled.h1`
  color: ${colors.darkGrey};
  font-size: 1.5em;
  margin-bottom: 2rem;
  text-align: left;
  justify-content: left;
  align-items: left;

  &:nth-child(1) {
    margin-top: 4rem;
  }
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

export const TextWrapperWithoutBackpacks = styled.div`
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
  font-family: "Poppins", sans-serif;
  font-size: 2em;
  font-weight: bold;
  line-height: 1.5;
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
  font-family: "Poppins", sans-serif;
  font-size: 1.5em;
  font-weight: 300;
  line-height: 1.5;
  margin-top: 1rem;
  text-align: left;
  width: 100%;

  @media screen and (max-width: 960px) {
    font-size: 1em;
    margin: 0 0 1rem 0;
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const ColumnImg = styled.div`
  width: 70%;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

export const ConchaIcon = styled.img`
  width: 40px;
  height: 40px;
  margin: 1rem 0;
`;

export const NumberStep = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${colors.darkGrey};
  padding: 0 1rem 0 1rem;
`;

export const ArrowStep = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.mustard};
  padding: 0 0 0 1rem;
`;

export const TextStep = styled.span`
  font-size: 1.25rem;
  font-weight: 300;
  color: ${colors.darkGrey};
  padding: 0 1rem 0 1rem;
`;
