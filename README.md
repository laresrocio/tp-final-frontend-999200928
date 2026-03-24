# WSP-95 

## ● Descripción del proyecto
WSP-95 es una aplicación de mensajería instantánea que recrea la estética visual de los sistemas operativos de los años 90 (Windows 95). El proyecto permite el registro de usuarios con selección de avatares pixelados, inicio de sesión y una interfaz de chat funcional. Se priorizó la coherencia visual mediante el uso de fuentes retro, bordes de alto contraste y sombras sólidas, logrando una experiencia nostálgica pero técnicamente moderna.

## ● Tecnologías utilizadas
* **React.js**: Biblioteca principal para la construcción de la interfaz de usuario.
* **Vite**: Herramienta de construcción y entorno de desarrollo.
* **React Router Dom**: Gestión de rutas y navegación entre las pantallas de Login, Registro, Home y About.
* **Context API**: Manejo del estado global para la autenticación y persistencia de datos del usuario.
* **CSS**: Estilos personalizados utilizando variables y diseño adaptable (Flexbox).
* **LocalStorage**: Persistencia de la sesión del usuario en el navegador.

## ● Instrucciones para ejecutar el proyecto localmente
Para correr la aplicación en tu entorno local, seguí estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/laresrocio/tp-final-frontend-999200928.git
   
2. **Navegar a la carpeta del proyecto:**
Bash
cd nombre-del-repo

3. **Instalar las dependencias:**
Bash
npm install

4. **Iniciar el servidor de desarrollo:**
Bash
npm run dev
Abrir el navegador en la dirección indicada por la consola (usualmente http://localhost:5173).

## ● Estructura del proyecto
* **/src/components**: Contiene los componentes de UI como Aside.jsx, Chat.jsx y el UserMenu.jsx.
* **/src/context**: Almacena el ChatContext.jsx para la gestión de gitmensajes y estados globales.
* **/src/router**: Contiene RouterApp.jsx y la lógica de rutas protegidas.
* **/src/services**: Incluye mockApi.js para la simulación de datos y consumo de servicios.
* **/src/styles**: Archivo main.css con la definición de estilos, fuentes pixeladas y paleta de colores.
* **/src/views**: Contiene las páginas principales del flujo: Login.jsx, Register.jsx, Home.jsx, About.jsx y NotFound.jsx.
* **/public**: Almacena recursos estáticos como el logo personalizado logo-w95.svg.
* **index.html**: Punto de entrada de la aplicación.

## ●Enlaces del Proyecto

* **Deploy en Vercel:** [Ver aplicación en vivo](tp-final-frontend-999200928.vercel.app)
* **Documentación técnica en DeepWiki:** [Ver Wiki del proyecto](https://deepwiki.com/laresrocio/tp-final-frontend-999200928)