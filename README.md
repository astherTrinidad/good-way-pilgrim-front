# good-way-pilgrim-front
Proyecto



## Características 📋

###	Framework

Se utiliza React. https://es.reactjs.org/

###	Versión

17.0.2

## Quick start 🚀

Con estos pasos la API estará preparada para hacerle llamadas al back y ver la aplicación en funcionamiento
1.	Descarga del proyecto desde el repositorio de GitHub https://github.com/astherTrinidad/good-way-pilgrim-front
2.  Iniciar Docker
3.	Abrir una consola, situarse en la carpeta del proyecto e instala las dependencias de node
```
npm install
```

4.	Inicia la aplicación
```
npm start
```

Se aportan instrucciones detalladas de cada uno de estos pasos en los apartados siguientes.


## Pruebas ⚙️

Para ejecutar los tests utilizamos Postman, que se puede usar online (precisa descargar el cliente https://www.postman.com/downloads/) o en local también tras descarga previa. Llevamos a cabo primero una llamada al end point del login con un usuario y una contraseña estándar de la base de datos para obtener el token y ya con él podemos probar el resto de llamadas a los end points de la API.


## React

El proyecto contiene un fichero server.js para configurar las llamadas de manera local 

Para especificar las variables, React utiliza un fichero .env. En este fichero aparece, por ejemplo, la definición del entorno:
```
REACT_APP_BASE_URL=http://localhost:8000
```
Dentro de la carpeta de configuración del proyecto, indicamos en un fichero llamado url las variables de entorno en las que asignamos cada uno de los endpoints disponibles. Por otro lado disponemos de un segundo fichero llamado appRoutes, en el que asignamos cada una de las rutas en las que se sitúan cada una de nuestras páginas que componen el proyecto.


## Construido con 🛠️

•	React
•	React-Router-Dom
•	Styled Components
•	Material UI
•	Prettier
•	Lodash

## Versionado 📌

Primera versión de la aplicación


## Autoras ✒️

Asther Trinidad, Patricia Herranz e Irene Sánchez
