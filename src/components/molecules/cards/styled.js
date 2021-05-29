import styled from "styled-components";
import colors from "../../../assets/colors";

export const ContainerCard = styled.div`
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
