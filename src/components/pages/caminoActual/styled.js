import styled from "styled-components";
import colors from "../../../assets/colors";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DropMenu = styled.img`
  margin: 0 auto 1rem auto;
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ColumnMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  position: fixed;
  @media screen and (max-width: 768px) {
    position: relative;
    width: 100%;
  }
`;

export const ColumnCamino = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 30%;
  height: max-content;
  @media screen and (max-width: 968px) {
    margin: 0rem;
    width: 100%;
  }
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

export const RowCamino = styled.div`
  align-items: left;
  justify-content: left;
  margin-bottom: 4rem;
  margin-top: -3rem;
  max-width: 100%;
`;

export const RowEtapas = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 4rem;
  margin-top: -3rem;
  max-width: 100%;
`;

export const TextWrapper = styled.div`
  display: block;
  align-items: left;
  justify-content: left;
  margin: 0 auto 3rem auto;
  max-width: 100%;
  text-align: left;
  line-height: 2;

  &:nth-of-type(1) {
    margin-top: 3rem;
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TextLink = styled.a`
  align-items: left;
  border-bottom: 1px solid ${colors.turquoise};
  color: ${colors.darkGrey};
  display: block;
  justify-content: left;
  line-height: 1.5;
  margin: 0 auto 1rem auto;
  max-width: 100%;
  padding-top: 1rem;
  text-align: left;

  &:nth-of-type(1) {
    margin-top: 3rem;
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    display: none;
  }
`;

export const TextMenu = styled.p`
  font-weight: 300;
  color: ${colors.mediumGrey};
  cursor: pointer;
  margin-top: 1rem;

  &:nth-of-type(1) {
    margin-top: 1rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TextEtapa = styled.p`
  align-items: left;
  color: ${colors.darkGrey};
  font-size: 1.5rem;
  justify-content: left;
  margin: 5rem auto 0 auto;
  max-width: 100%;
  text-align: left;
`;

export const TextEmptyEtapas = styled.p``;

export const Heading = styled.h2`
  color: ${colors.turquoise};
  display: block;
  font-family: "Poppins", sans-serif;
  font-size: 2em;
  font-weight: bold;
  line-height: 1.5;
  margin-right: auto;
  margin-left: auto;
  margin-top: 7rem;
  text-align: left;
  width: 100%;

  @media screen and (max-width: 960px) {
    font-size: 1.5em;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5em;
    margin-top: 1rem;
    max-width: 100%;
  }
`;

export const Subtitle = styled.h3`
  color: ${colors.darkGrey};
  display: block;
  font-family: "Poppins", sans-serif;
  font-size: 1.25em;
  font-weight: 300;
  line-height: 1.5;
  margin-top: 1rem;
  margin-bottom: 3rem;
  text-align: left;
  width: 100%;

  @media screen and (max-width: 960px) {
    font-size: 1em;
    margin: 0 0 1rem 0;
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    margin-top: 1rem;
  }
`;

export const TextDownload = styled.a`
  color: ${colors.turquoise};
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 300;

  &:nth-of-type(1) {
    border-right: 1px solid ${colors.mustard};
    padding: 0 2rem 0 0;

    @media screen and (max-width: 578px) {
      display: none;
    }
  }

  &:nth-of-type(2) {
    padding-left: 2rem;
    border-right: 0;
    @media screen and (max-width: 578px) {
      display: none;
    }
  }

  &:hover {
    color: ${colors.darkGrey};
  }
`;

export const ButtonSave = styled.button`
  width: 50%;
  border-radius: 8px;
  background-color: ${colors.turquoise};
  color: ${colors.white};
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  margin: 1rem auto;
  padding: 1rem 1rem;
  transition: all 0.3s ease-out;

  &:hover {
    background: ${colors.turquoiseDark};
    color: ${colors.white};
    cursor: pointer;
    box-shadow: inset 0px 11px 8px -10px ${colors.black};
  }
  @media screen and (max-width: 960px) {
    display: block;
    margin: 1rem auto;
  }
`;

export const Illustration = styled.img`
  height: 400px;
  transform: scaleX(-1);
  width: auto;
`;

export const IllustrationContainer = styled.div`
  height: max-content;
  width: max-content;
  margin-right: -300px;
`;
