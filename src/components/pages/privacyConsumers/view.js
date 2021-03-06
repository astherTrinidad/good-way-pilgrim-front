import React from 'react';
import { Navbar, Footer } from '../../organisms';
import GlobalStyle from '../../../globalStyles';
import {
  Container,
  Section,
  Question,
  Answer,
  Title,
  SubTitle,
  List,
  ListItem,
  SubTitle2,
} from './styled';

export default function PrivacyConsumers() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Section>Políticas de privacidad</Section>
        <Title>Fecha última actualización: 14 de abril 2021</Title>
        <SubTitle>
          En Good Way Pilgrim nos tomamos muy en serio la privacidad de nuestros
          usuarios. En la presente Política de Privacidad, te proporcionamos
          información detallada y comprensible sobre los datos personales que
          trataremos sobre ti, su origen, los usos que les daremos y la base
          legitimadora que resulta aplicable a cada uno de los referidos usos.
        </SubTitle>
        <SubTitle2>
          También te explicamos en detalle los derechos que tienes y cómo
          ejercitarlos. Por favor, dedica unos minutos a leer y entender
          correctamente su contenido. Para cualquier duda, contacta con
          nosotros.
        </SubTitle2>
        <Question>
          1. ¿Quién es el responsable del tratamiento de mis datos?
        </Question>
        <Answer>
          Good Way Pilgrim S.A. (en adelante Good Way Pilgrim). Paseo de la
          Castellana s/n, 28046, Madrid.
        </Answer>
        <Question>2. ¿Qué datos trata Good Way Pilgrim sobre mí?</Question>
        <Answer>
          Los datos personales que recopilamos y tratamos sobre ti para
          prestarte nuestros servicios incluyen: datos de identificación y datos
          de tu navegación en nuestra página web. Cuando te das de alta como
          usuario con nosotros incorporamos a nuestra base de datos información
          sobre tu nombre, apellidos, email y contraseña. Además también
          guardamos tus datos sobre caminos del Camino de Santiago, etapas,
          logros personales y los elementos que decidas incluir en "tu mochila".
        </Answer>
        <Question>
          3. ¿Para qué y con qué legitimación trata Good Way Pilgrim mis datos
          personales?
        </Question>
        <Answer>
          El tratamiento de los datos del Usuario, se realiza con las siguientes
          bases jurídicas que legitiman el mismo:
          <List>
            <ListItem>
              • La solicitud de información y/o la contratación de los servicios
              de la Aplicación, cuyos términos y condiciones se pondrán a
              disposición del Usuario en todo caso, con carácter previo, para su
              expresa aceptación.
            </ListItem>
            <ListItem>
              • El consentimiento libre, específico, informado e inequívoco del
              Usuario, poniendo a su disposición la presente política de
              privacidad, que deberá aceptar mediante una declaración o una
              clara acción afirmativa, como el marcado de una casilla dispuesta
              al efecto. En caso de que el Usuario no facilite a Good Way
              Pilgrim sus datos, o lo haga de forma errónea o incompleta, no
              será posible proceder al uso de la Aplicación.
            </ListItem>
          </List>
        </Answer>
        <Question>
          4. ¿Durante cuánto tiempo conservará Good Way Pilgrim mis datos?
        </Question>
        <Answer>
          Los datos personales proporcionados por el Usuario, se conservarán en
          los sistemas y bases de datos mientras aquél continúe haciendo uso de
          la Aplicación, y siempre que no solicite su supresión.
        </Answer>
        <Question>
          5. ¿A qué destinatarios podría comunicar mis datos Good Way Pilgrim?
        </Question>
        <Answer>
          Los datos no se comunicarán a ningún tercero ajeno a Good Way Pilgrim,
          salvo obligación legal o en cualquier caso, previa solicitud del
          consentimiento del Usuario.
        </Answer>
        <Question>7. ¿Cómo proteje mis datos Good Way Pilgrim?</Question>
        <Answer>
          Good Way Pilgrim adopta las medidas necesarias para garantizar la
          seguridad, integridad y confidencialidad de los datos conforme a lo
          dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del
          Consejo, de 27 de abril de 2016, relativo a la protección de las
          personas físicas en lo que respecta al tratamiento de datos personales
          y a la libre circulación de los mismos.
        </Answer>
        <Answer>
          Good Way Pilgrim realiza copias de seguridad de los contenidos
          alojados en sus servidores, sin embargo no nos responsabilizamos de la
          pérdida o el borrado accidental de los datos por parte de los
          Usuarios. De igual manera, no garantizamos la reposición total de los
          datos borrados por los Usuarios, ya que los citados datos podrían
          haber sido suprimidos y/o modificados durante el periodo de tiempo
          transcurrido desde la última copia de seguridad.
        </Answer>
        <Question>
          8. ¿Cuáles son mis derechos cuando facilito mis datos?
        </Question>
        <Answer>
          Good Way Pilgrim informa al Usuario de que le asisten los derechos de
          acceso, rectificación, limitación, supresión, oposición y
          portabilidad, los cuales podrá ejercitar mediante petición dirigida al
          correo electrónico: goodwaypilgrim@gmail.com. Así mismo, el Usuario
          tiene derecho a revocar el consentimiento inicialmente prestado, y a
          interponer reclamaciones de derechos frente a la Agencia Española de
          Protección de Datos (AEPD).
        </Answer>
        <Question>
          9. ¿Qué comunicaciones pueden llegarme a través del mail?
        </Question>
        <Answer>
          En aplicación de la LSSI (Ley de Servicios de la Sociedad de la
          Información), Good Way Pilgrim, no enviará comunicaciones
          publicitarias o promocionales por correo electrónico u otro medio de
          comunicación electrónica equivalente que previamente no hubieran sido
          solicitadas o expresamente autorizadas por los destinatarios de las
          mismas.
        </Answer>
      </Container>
      <Footer />
    </div>
  );
}
