# Parcial_TP2 Martin Lisi 21D

## TP2: Parcial
Realizar el desarrollo de un servidor **MVC** con Node.js y express.
Definir una ruta **post /entrada** que reciba números en forma individual y que los incorpore
al sistema de persistencia en memoria del servidor ó File System (a elección). El formato de
entrada del número será JSON, Ej. { numero: x }
Luego crear las siguientes rutas **get**:
1) **/entrada** retorna todos los números ingresados con el siguiente formato JSON.
Ej. { numeros: [ x,y,z, ….. ] }
3) **/promedio** me devuelve el promedio de los valores ingresados en formato JSON. Ej:
{ promedio: xx }
4) **/minmax** retorna un objeto con el valor máximo y mínimo de los números almacenados
Ej. { min: yy, max: zz }
5) **/cantidad** devuelve la cantidad de números guardados en este formato JSON
Ej. { cantidad: X }

**Tener en cuenta los siguientes puntos para realizar el desarrollo:**
* Todas las rutas descriptas anteriormente deben estar disponibles en un router con
ruta base **/numeros**
* El servidor debe estar estructurado en capas y tendrá implementado el patrón DAO
para el manejo del sistema de persistencia. Crear la estructura de carpetas y
archivos que soporte el esquema pedido.
* Orientar el desarrollo utilizando funciones ó clases de ES6 y manejar a elección los
procesos asincrónicos con callbacks y/o Promesas (con then/catch – async await).
* Para el test de la funcionalidad utilizar postman (rutas post y get).
* Utilizar cualquiera de los dos formas de importar módulos en Node.JS : require o
import

**Opcional** (suma calificación): incorporar una vista html en el espacio público del servidor
que contenga un formulario para el ingreso de los números.
