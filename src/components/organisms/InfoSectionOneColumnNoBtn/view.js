import { Link } from 'react-router-dom';
import { Container, Button } from '../../../globalStyles';
import { InfoSec, InfoColumn, TextWrapper, Heading, Subtitle } from './styled';

function InfoSectionOneColumnNoBtn({
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  description,
}) {
  return (
    <>
      <InfoSec>
        <Container>
          <InfoColumn>
            <TextWrapper>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
            </TextWrapper>
          </InfoColumn>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSectionOneColumnNoBtn;
