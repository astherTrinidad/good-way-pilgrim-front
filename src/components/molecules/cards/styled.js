import styled from "styled-components";
import colors from "../../../assets/colors";

export const ContainerCard = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 300px;
  height: max-content;
  text-align: center;
  margin: 0 3rem 5rem 3rem;
  background: ${colors.white};
  border-radius: 20px;
  box-shadow: 0 3px 6px ${colors.lightGrey};
  position: relative;
  padding: 0.25rem;

  @media screen and (max-width: 968px) {
    margin: 0 3rem 5rem 3rem;
  }

  @media screen and (max-width: 578px) {
    width: 80%;
    height: max-content;
  }
  &:hover {
    border: 3px solid ${colors.mustard};
    border-radius: 20px;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: max-content;
  background-color: ${colors.turquoise};
  border-radius: 0 0 20px 20px;
  padding-bottom: 1rem;
`;

export const TextNameCamino = styled.h4`
  color: ${colors.white};
  font-weight: 300;
  font-size: 1.25em;
  line-height: 2;
`;

export const TextMochila = styled.p`
  color: ${colors.white};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
`;

export const Illustration = styled.img`
  width: 100%;
  height: auto;
`;

export const Value = styled.span`
  font-weight: 300;
`;

export const Key = styled.span`
  font-weight: 700;
`;
