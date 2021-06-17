import styled from "styled-components";
import colors from "../../../assets/colors";

export const ContainerSlide = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 400px;
  text-align: center;
  margin: auto auto;
  border-radius: 20px;
  position: relative;
  padding: 1rem;
  justify-content: center;

  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 80%;
    height: max-content;
    padding-bottom: 1.5rem;
  }

  @media screen and (max-width: 578px) {
    flex-direction: column;
    width: 80%;
    height: max-content;
    padding-bottom: 1.5rem;
  }
`;

export const ContainerArrow = styled.div`
  color: ${colors.mustard};

  .right-arrow {
    position: relative;
    top: 50%;
    right: 32px;
    font-size: 3rem;
    z-index: 10;
    cursor: pointer;
    user-select: none;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
      right: -15px;
    }

    @media screen and (max-width: 578px) {
      font-size: 2rem;
      right: -5px;
    }
  }

  .left-arrow {
    position: relative;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    z-index: 10;
    cursor: pointer;
    user-select: none;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
      left: -15px;
    }
    @media screen and (max-width: 578px) {
      font-size: 2rem;
      left: -5px;
    }
  }
  &:hover {
    color: ${colors.turquoise};
  }
`;

export const TextWrapper = styled.div`
  width: 37%;
  height: max-content;
  background-color: ${colors.turquoise};
  border-radius: 0 20px 20px 0;
  padding: 1rem;
  position: relative;

  @media screen and (max-width: 578px) {
    width: 100%;
    height: max-content;
    border-radius: 0 0 20px 20px;
  }
`;

export const TextSlide = styled.p`
  color: ${colors.white};
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.5;
  text-align: left;
  @media screen and (max-width: 968px) {
    font-size: 1rem;
  }
`;

export const Illustration = styled.img`
  position: relative;
  width: auto;
  height: 400px;
  border-radius: 20px 0 0 20px;

  @media screen and (max-width: 768px) {
    width: 80%;
    height: max-content;
    border-radius: 20px 20px 0 0;
  }

  @media screen and (max-width: 578px) {
    width: 100%;
    height: max-content;
    border-radius: 20px 20px 0 0;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 578px) {
    flex-direction: column;
  }
`;
