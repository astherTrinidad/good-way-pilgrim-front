import styled from "styled-components";
import colors from "../../../assets/colors";

export const ContainerSlide = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 250px;
  height: 350px;
  text-align: center;
  margin: 2rem;
  background: ${colors.white};
  border-radius: 20px;
  box-shadow: 0 2px 8px ${colors.lightGrey};
  position: relative;
  padding: 0.25rem;
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: max-content;
  background-color: ${colors.turquoise};
  border-radius: 0 0 20px 20px;
  padding-bottom: 1rem;
`;

export const TextSlide = styled.p`
  color: ${colors.white};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
`;

export const Illustration = styled.img`
  width: 100%;
  height: auto;
`;
