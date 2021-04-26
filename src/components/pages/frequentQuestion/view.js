import React from 'react';
import { Navbar, Footer } from '../../organisms';
import GlobalStyle from '../../../globalStyles';

const FrequentQuestion = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <h1>Preguntas Frecuentes</h1>
      <p>
        {' '}
        ¿Tienes alguna pregunta sobre GoodWayPilgrim? Probablemente ya la hemos
        contestado. Por eso, puedes consultar primero nuestra lista de preguntas
        y respuestas que presentamos en esta sección.{' '}
      </p>
      <h2>¿Qué puedo hacer con GoodWayPilgrim?</h2>
      <p>
        Con esta aplicación puedes registrar toda tu información como peregrino:
        apuntar los caminos que haces y la etapa por la que vas, registrar tus
        logros, planificar tu mochila y revisar mochilas anteriores.
      </p>
      <h2>¿GoodWayPilgrim es gratuita?</h2>
      <p> Sí,el uso de esta aplicación es totalmente gratuito.</p>
      <h2>¿Dónde puedo usarla?</h2>
      <p>
        Puedes usar GoodWayPilgrim desde cualquier navegador. Solo tienes que
        escribir el nombre en un buscador y acceder. Esto permite que la
        aplicación sea accesible tanto desde ordenador y tablet como desde un
        teléfono móvil.
      </p>
      <h2>¿Cómo funciona la app?</h2>
      <p>
        Lo primero que necesitas es crear tu cuenta personal que pondrá a tu
        disposición un área de usuario donde podrás gestionar tus caminos,
        logros y mochilas. Tengo una sugerencia o un comentario sobre
        GoodWayPilgrim.
      </p>
      <h2>¿Dónde puedo ir?</h2>
      <p>
        Busca al final de nuestra página principal la sección de datos de
        contacto y no dudes en escribirnos para cualquier duda, problema o
        sugerencia que tengas.
      </p>
      <h2>¿Es obligatorio registrarme para poder usar GoodWayPilgrim?</h2>
      <p>
        Para acceder al área de usuario y sus funcionalidades es imprescindible
        tener una cuenta personal y, por lo tanto, haberse registrado. De todos
        modos, se trata de un formulario muy breve donde solo te pedimos tu
        nombre, email y contraseña ¡En menos de un minuto estarás dentro!
      </p>
      <h2>¿La App funciona en todos los smartphones?</h2>
      <p>
        Al ejecutarse en un navegador normal la aplicación es independiente del
        sistema operativo y por lo tanto puede ejecutarse en cualquier
        Smartphone, ya sea Android o iPhone.
      </p>
      <h2>¿Necesito una conexión de internet para usar la aplicación?</h2>
      <p>
        Sí. Para utilizar la aplicación necesitas una conexión a internet, ya
        que sin ella no podrás ver ni actualizar tus datos.
      </p>
      <h2>
        Tengo otro teléfono, ¿puedo cambiar mi cuenta a este nuevo dispositivo?
      </h2>
      <p>
        Sí, tu cuenta no está vinculada a ningún dispositivo concreto. La abras
        donde la abras podrás ver tu información y hacer cambios{' '}
      </p>
      <h2>¿Qué hacéis con mis datos?</h2>
      <p>
        Por supuesto somos muy cuidadosos con tus datos. Puedes leer más sobre
        este aspecto en nuestra política de privacidad actual.
      </p>
      <Footer />
    </div>
  );
};

export default FrequentQuestion;
