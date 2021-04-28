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
} from './styled';

export default function FrequentQuestion() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Section>Preguntas Frecuentes</Section>

        <Title>¿Tienes alguna pregunta sobre GoodWayPilgrim?</Title>
        <SubTitle>
          Probablemente ya la hemos contestado. Por eso, puedes consultar
          primero nuestra lista de preguntas y respuestas que presentamos en
          esta sección.
        </SubTitle>
        <Question>¿Qué puedo hacer con GoodWayPilgrim?</Question>
        <Answer>
          Con esta aplicación puedes registrar toda tu información como
          peregrino: apuntar los caminos que haces y la etapa por la que vas,
          registrar tus logros, planificar tu mochila y revisar mochilas
          anteriores.
        </Answer>
        <Question>¿GoodWayPilgrim es gratuita?</Question>
        <Answer> Sí, el uso de esta aplicación es totalmente gratuito.</Answer>
        <Question>¿Dónde puedo usarla?</Question>
        <Answer>
          Puedes usar GoodWayPilgrim desde cualquier navegador. Solo tienes que
          escribir el nombre en un buscador y acceder. Esto permite que la
          aplicación sea accesible tanto desde ordenador y tablet como desde un
          teléfono móvil.
        </Answer>
        <Question>¿Cómo funciona la app?</Question>
        <Answer>
          Lo primero que necesitas es crear tu cuenta personal que pondrá a tu
          disposición un área de usuario donde podrás gestionar tus caminos,
          logros y mochilas.
        </Answer>
        <Question>
          Tengo una sugerencia o un comentario sobre GoodWayPilgrim.¿Dónde puedo
          ir?
        </Question>
        <Answer>
          Busca al final de nuestra página principal la sección de datos de
          contacto y no dudes en escribirnos para cualquier duda, problema o
          sugerencia que tengas.
        </Answer>
        <Question>
          ¿Es obligatorio registrarme para poder usar GoodWayPilgrim?
        </Question>
        <Answer>
          Para acceder al área de usuario y sus funcionalidades es
          imprescindible tener una cuenta personal y, por lo tanto, haberse
          registrado. De todos modos, se trata de un formulario muy breve donde
          solo te pedimos tu nombre, email y contraseña ¡En menos de un minuto
          estarás dentro!
        </Answer>
        <Question>¿La App funciona en todos los smartphones?</Question>
        <Answer>
          Al ejecutarse en un navegador normal la aplicación es independiente
          del sistema operativo y por lo tanto puede ejecutarse en cualquier
          Smartphone, ya sea Android o iPhone.
        </Answer>
        <Question>
          ¿Necesito una conexión de internet para usar la aplicación?
        </Question>
        <Answer>
          Sí. Para utilizar la aplicación necesitas una conexión a internet, ya
          que sin ella no podrás ver ni actualizar tus datos.
        </Answer>
        <Question>
          Tengo otro teléfono, ¿puedo cambiar mi cuenta a este nuevo
          dispositivo?
        </Question>
        <Answer>
          Sí, tu cuenta no está vinculada a ningún dispositivo concreto. La
          abras donde la abras podrás ver tu información y hacer cambios.
        </Answer>
        <Question>¿Qué hacéis con mis datos?</Question>
        <Answer>
          Por supuesto somos muy cuidadosos con tus datos. Puedes leer más sobre
          este aspecto en nuestra política de privacidad actual.
        </Answer>
      </Container>

      <Footer />
    </>
  );
}
