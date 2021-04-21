/** Creación de un enlace de token personalizado (Hook)
 * Eliminarmos la lógica de implementación del componente para reutilizarlo en varios componentes
 */

 import { useState } from 'react';

 export default function useToken() {

/**
 * Dentro de setToken, guardamos el userToken como argumento para almacenarlo en la sesión
 * 'token'-> clave /cadena->2º argumento 
 * convertimos userToken de un objeto a un objeto JSON
 */
//    function setToken(userToken) {
//      console.log('******* ',userToken)
//     sessionStorage.setItem('token', JSON.stringify(userToken));
// }

   /** Recuperamos el token para acceder a la página correspondiente
    * getItem: pasamos la clave como argumento
    * convertimos la cadena en un objeto y devolvemos el valor del token
    * Para encadenar el token con la aplicación usamos ?. ya que si nunca ha accedido aparecerá como "undefined"
    */
   const getToken = () => {
     const tokenString = sessionStorage.getItem('token');
     const userToken = JSON.parse(tokenString);
     return userToken?.token;
   };
 
   /**
    * useState Hook: creamos y declaramos el estado obteniendo el token
    * creamos una estado de token y una función setToken
    */
   const [token, setToken] = useState(getToken());
 
   /** 
    * Copiamos la función settoken de App.js(router.js) y la convertimos en una arrow function "saveToken"
    * Almacenamos el argumento userToken en sessionStorage y en el estado
    * setItem: clave como primer argumento, cadena como segundo
    * convertimos el objeto userToken a una cadena
    */
   const saveToken = userToken => {
    console.log('****Save token*** ',userToken)

     sessionStorage.setItem('token', JSON.stringify(userToken));
     setToken(userToken.token);
   };
   /**
    * Devolvemos un objeto que tenga token y saveToken almacenados en setToken
    */
   return {
     setToken: saveToken,
     token,
   };
 }
 