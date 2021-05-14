# good-way-pilgrim-front

## Características 📋

###	Framework
![logo react](https://user-images.githubusercontent.com/61313038/118236531-7a9aee00-b496-11eb-93ed-8e6ea0417edb.png)

Se utiliza React. https://es.reactjs.org/

###	Versión

17.0.2

### Node/NPM Versions

v15.13.0

Podemos cambiar de versiones de node entre los diferentes proyectos con el comando:

```
nvm use <version>
```

## Quick start 🚀

Creamos la aplicación con el siguiente método:
```
npx create-react-app good-way-pilgrim-front
```

Con estos pasos la API estará preparada para hacerle llamadas al back y ver la aplicación en funcionamiento
1.	Descarga del proyecto desde el repositorio de GitHub 
    https://github.com/astherTrinidad/good-way-pilgrim-front
2.  Iniciar Docker
3.	Abrir una consola, situarse en la carpeta del proyecto e instala las dependencias de node
```
npm install
```
Dentro del proyecto, podemos verificar todas las dependencias que nos instalamos durante toda la creación del proyecto junto con todas sus versiones correspondientes en un fichero llamado package.json.

4.	Inicia la aplicación
```
npm start
```
5. Abrimos el navegador y podemos ver la aplicación en http://localhost:3000/

## Pruebas ⚙️

Para ejecutar los tests utilizamos Postman, que se puede usar online (precisa descargar el cliente https://www.postman.com/downloads/) o en local también tras descarga previa. Llevamos a cabo primero una llamada al end point del login con un usuario y una contraseña estándar de la base de datos para obtener el token y ya con él podemos probar el resto de llamadas a los end points de la API.


## React 

El proyecto contiene un fichero server.js para configurar las llamadas de manera local 

Para especificar las variables, React utiliza un fichero .env. En este fichero aparece, por ejemplo, la definición del entorno:
```
REACT_APP_BASE_URL=http://localhost:8000
```
Dentro de la carpeta de configuración del proyecto, indicamos en un fichero llamado url las variables de entorno en las que asignamos cada uno de los endpoints disponibles. Por otro lado disponemos de un segundo fichero llamado appRoutes, en el que asignamos cada una de las rutas en las que se sitúan cada una de nuestras páginas que componen el proyecto.

### Estructura de carpetas 📁 

<img width="680" alt="estructura de carpetas![Uploading Captura de pantalla 2021-05-14 a las 9.19.20.png…]()
" src="https://user-images.githubusercontent.com/61313038/118235336-e8deb100-b494-11eb-9c8c-8840bec0a1c7.png">

### Estructura de carpetas de componentes visuales 📁 

<img width="680" alt="estructura de carpetas de componentes" src="https://user-images.githubusercontent.com/61313038/118235839-918d1080-b495-11eb-9d89-ea776356d18a.png">


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
