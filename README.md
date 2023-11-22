# Más que Suculentas

Este es un proyecto de e-commerce básico que utilicé para el curso de React.js. La aplicación permite ver una lista de suculentas y cactus, verlas en detalle a cada una y realizar compras en línea. Estos productos y las órdenes de compra se almacenan en Firebase.

## Tecnologías utilizadas

- Vite
- React
- React Router
- Firebase

## Funcionalidades

- Ver una lista de productos disponibles
- Agregar y eliminar productos al carrito de compras
- Descontar stock
- Ver el carrito de compras
- Realizar una orden de compra

## Instalación

### Para instalar y ejecutar la aplicación en tu máquina local, sigue los siguientes pasos:

1. Clona el repositorio en tu PC,
2. Abre una terminal en el directorio del proyecto (donde veas los archivos .json),
3. Ejecuta el comando npm install para instalar las dependencias.
4. Ejecuta el comando npm run dev para iniciar la aplicación.
5. Abre tu navegador y pega el  http://localhost:5173 para ver la ejecución de la app; o dentro de la terminal, cuando te brinda el http://localhost:5173, podés hacer sobre el link, ctrl + click y se abre sola en tu navegador.

## Configuración de Firebase

### Para utilizar Firebase en esta aplicación, debes seguir los siguientes pasos:
1. Crea una cuenta en Firebase (usando tu correo gmail) y crea un nuevo proyecto.
2. En la sección "Authentication" de Firebase, el proveedor habilita la autenticación de correo electrónico y contraseña.
3. En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solamente a usuarios autenticados.
4. En la sección "Project settings" de Firebase, haz clic en "Add app" y sigue las instrucciones para agregar una nueva aplicación web.
5. Copia las credenciales de Firebase y configura las variables de entorno en el archivo .env de tu proyecto.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.
