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
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: max-content;

  &:nth-of-type(3) {
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: max-content;
  margin: 0 auto 4rem auto;

  &:nth-of-type(3) {
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const RowPath = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: max-content;

  &:nth-of-type(3) {
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
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

  @media screen and (max-width: 578px) {
    display: none;
  }
`;

export const NumberStep = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${colors.darkGrey};
  padding: 0 1rem 0 1rem;
  line-height: 1.5;
  margin: 1rem 0;
`;

export const ArrowStep = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.mustard};
  padding-left: 1rem;
`;

export const TextStep = styled.span`
  font-size: 1.25rem;
  font-weight: 300;
  color: ${colors.darkGrey};
  padding: 0 1rem 0 1rem;
`;

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 60%;
  min-height: 600px;
  text-align: center;
  margin: 1rem auto;
  border-radius: 10px;
  padding-bottom: 32px;
  position: relative;
`;

export const ContainerModal = styled.div`
  max-width: 600px;
  height: max-content;
  justify-content: center;
  align-items: center;
  color: ${colors.darkGrey};
  text-align: center;
`;

export const Illustration = styled.img`
  background-size: cover;
  width: auto;
  height: 200px;
  margin: 2rem auto;
  display: block;
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
  font-family: "Poppins", sans-serif;
  margin: 0 1rem 1rem 1rem;
  padding: 1rem 1.5rem;
  transition: all 0.3s ease-out;

  &:hover {
    background: ${colors.redDark};
    color: ${colors.white};
    cursor: pointer;
    box-shadow: inset 0px 11px 8px -10px ${colors.black};
  }
`;

export const ButtonSave = styled.button`
  background-color: ${colors.turquoise};
  border-radius: 8px;
  color: ${colors.white};
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  padding: 1rem 1.5rem;
  transition: all 0.3s ease-out;
  margin: 0 1rem 1rem 0;
  width: 50%;

  &:hover {
    background: ${colors.turquoiseDark};
    color: ${colors.white};
    cursor: pointer;
    box-shadow: inset 0px 11px 8px -10px ${colors.black};
  }
`;

export const TitleList = styled.h3`
  color: ${colors.turquoise};
  font-size: 2rem;
  margin: 3rem 0 2rem 0;
`;

export const ContainerForm = styled.div`
  align-items: center;
  border-radius: 5px;
  color: ${colors.white};
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  justify-content: space-between;
  margin: 0.25rem auto;
  padding: 0.5rem 1rem 0.5rem 1rem;
  position: relative;
  width: max-content;

  .stored {
    opacity: 0.5;
    text-decoration: line-through;
  }

  &:nth-child(3n + 1) {
    background: linear-gradient(
      90deg,
      ${colors.turquoise} 0%,
      ${colors.turquoiseDark} 100%
    );
  }

  &:nth-child(3n + 2) {
    background: linear-gradient(
      90deg,
      ${colors.pistach} 0%,
      ${colors.pistachDark} 100%
    );
  }

  &:nth-child(3n + 3) {
    background: linear-gradient(
      90deg,
      ${colors.mustard} 0%,
      ${colors.mustardDark} 100%
    );
  }
`;
