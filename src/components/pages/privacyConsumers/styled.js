import styled from 'styled-components';
import colors from '../../../assets/colors';

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

export const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 2em;
  font-weight: 400;
  margin: 2rem 0;
  text-align: left;
  color: ${colors.darkGrey};
  line-height: 1.5;
  @media screen and (max-width: 960px) {
    margin-left: 0;
  }
`;

export const SubTitle = styled.p`
  text-align: left;
  font-size: 1.25em;
  font-weight: 300;
  margin-bottom: 2rem;
  line-height: 1.5;
  color: ${colors.darkGrey};
`;

export const SubTitle2 = styled.p`
  text-align: left;
  font-size: 1.25em;
  font-weight: 300;
  margin-bottom: 4rem;
  line-height: 1.5;
  color: ${colors.darkGrey};
`;

export const Question = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1.25em;
  color: ${colors.turquoise};
  line-height: 1.5;
  width: 100%;
  margin-bottom: 1em;
  border-radius: 30;
`;

export const Answer = styled.p`
  color: ${colors.darkGrey};
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 1.25em;
  margin-bottom: 2rem;
  padding-left: 2rem;
  line-height: 1.5;

  @media screen and (max-width: 960px) {
    padding-left: 0;
  }
`;

export const List = styled.ul`
  width: 80%;
  padding-left: 2rem;
`;

export const ListItem = styled.li`
  font-size: 1.25rem;
`;
