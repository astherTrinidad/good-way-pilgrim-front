import { Link } from 'react-router-dom';
import { Container, Button } from '../../../globalStyles';
import { InfoSec, InfoColumn, TextWrapper, Heading, Subtitle } from './styled';
import appRoutes from '../../../config/appRoutes';
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
              <Heading
                lightText={lightText}
                aria-label="Saca el peregrino que llevas dentro y comienza tu aventura"
                tabIndex="0"
              >
                {headline}
              </Heading>
              <Subtitle
                lightTextDesc={lightTextDesc}
                aria-label="Descubre todos los caminos y disfruta de ellos en cualquier época del año. Sólo necesitas preparar tu mochila y consigue sin darte cuenta los 20 logros. ¡Haz tuyo el Camino de Santiago!"
                tabIndex="0"
              >
                {description}
              </Subtitle>
              <Link to={appRoutes.caminos} buttonLabel="Ver caminos">
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
