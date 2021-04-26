import { Link } from 'react-router-dom';
import { Container, Button } from '../../../globalStyles';
import { InfoSec, InfoColumn, TextWrapper, Heading, Subtitle } from './styled';

function InfoSectionOneColumn({
  primary,
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoColumn>
            <TextWrapper>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
              <Link to="/caminos">
                <Button big fontBig primary={primary}>
                  {buttonLabel}
                </Button>
              </Link>
            </TextWrapper>
          </InfoColumn>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSectionOneColumn;
