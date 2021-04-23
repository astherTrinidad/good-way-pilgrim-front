import foto from '../../../assets/images/gota-show-profile.png';
import { Container } from '../../../globalStyles';
import { InfoSec, InfoColumn, TextWrapper,TopLine,ImgWrapper,Img} from './styled';

function InfoSectionTwoColumn({ lightBg, topLine,lightTopLine,alt,start}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={foto} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSectionTwoColumn;