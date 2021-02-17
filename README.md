# Mercado Libre Front-End Challenge

*Este proyecto fue inicializado usando [Create React App](https://create-react-app.dev/)*

Aplicación web desarrollada en base al challenge de Front-End propuesto por Mercado Libre.



## Instalación

1. Clonar el proyecto

3. Instalar las dependencias ejecutando `npm install`  dentro del directorio donde se haya clonado
4. Crear un archivo `.env` con la configuración de la aplicación, guiándose con el archivo `.env.example` , o por otro  lado, también puede renombrar este mismo a `.env` y debería de funcionar con las configuraciones por defecto
5. Clonar, instalar, e inicializar la API correspondiente a este proyecto [aqui](https://github.com/maurperez/MELI-Challenge-API) . (En el mismo se encuentran las instrucciones de instalación)
6. Inicializar el proyecto ejecutando `npm run start`  dentro del directorio donde se haya clonado



## Estructuración del proyecto

* **/src**
  * **/adapters** --> Conectores de la aplicación con el resto del mundo, en este caso con la API
  * **/assets** --> Archivos varios utilizados dentro de la aplicación como logos o imágenes
  * **/components** --> Componentes de React creados utilizando hooks y componentes funcionales
  * **/contexts** --> Componentes Context, que tienen como objetivo pasar información a todos los componentes hijos
  * **/hooks** --> Custom Hooks
  * **/pages** --> Cada una representa una ruta de la aplicación, cada una esta compuesta por uno o mas componentes
  * **/styles** --> Archivos sass utilizados para dar estilos a las paginas o componentes



## Construido con

* [React](https://es.reactjs.org/)
* [React Router DOM](https://reactrouter.com/) 
* [Sass](https://sass-lang.com/)



## Autor

Mauro Alejandro Pérez - <mauro.alejandro.perez@outlook.es>



## Licencia

Este proyecto está bajo la Licencia MIT