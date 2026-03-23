const About = () => {
  return (
    <section className="cont-about">
      <h1 >Documentación WSP-95</h1>
      <div className="about-card">
        <article>
          <h2>¿Qué es este proyecto?</h2>
          <p>
            WSP-95 es un proyecto final desarrollado como parte del curso Desarrollo Web Frontend de la UTN. Este simula la interfaz de un sistema de mensajería pero por decision personal se muestra con una estética retro. La aplicación permite registrarse, iniciar sesión con alguno de los datos de usuarios de la "MockApi", navegar entre diferentes chats de una lista de contactos predefinida y "enviar mensajes" en tiempo real.
          </p>
        </article>
        <article>
          <h2>Estructura del Sistema</h2>
          <ul>
            <li><strong>Sistema de Autenticación:</strong> Registro y Login con validaciones de campos, permitiendo el acceso personalizado a la plataforma.</li>
            <li><strong>Panel de Mensajería:</strong> Interfaz dividida en una lista lateral de contactos predefinidos y una ventana de chat activa para la visualización de mensajes.</li>
            <li><strong>Gestión de Chat:</strong> Permite el envío de nuevos mensajes con diferenciación visual entre burbujas enviadas y recibidas, manteniendo la coherencia estética del sitio.</li>
            <li><strong>Navegación Dinámica:</strong> Implementación de rutas protegidas para el contenido privado y rutas públicas para el acceso a la documentación y el registro.</li>
            <li><strong>Persistencia de Sesión:</strong> Uso de almacenamiento local para mantener al usuario conectado y conservar los datos básicos durante la navegación.</li>
          </ul>
        </article>
        <article>
          <h2>Tecnologías</h2>
          <ul>
            <li><strong>React:</strong> Biblioteca principal para la creación de la interfaz basada en componentes reutilizables.</li>
            <li><strong>React Router:</strong> Gestión de rutas dinámicas, permitiendo separar las vistas públicas (Login/Regiser/About) de las privadas (Home).</li>
            <li><strong>Context API:</strong> Implementación de un estado global para manejar la información del usuario logueado y la lista de mensajes sin recurrir a librerías externas.</li>
            <li><strong>Vite:</strong> Herramienta de construcción para un entorno de desarrollo rápido y optimizado.</li>
            <li><strong>CSS Nativo:</strong> Para lograr el estilo retro sin librerías externas.</li>
          </ul>
        </article>
        <article>
          <h2>Decisiones de Desarrollo</h2>
          <p>
            El proyecto tomó como base el modelo arquitectónico establecido en clase, sobre el cual se implementaron las funcionalidades requeridas como el sistema de <strong>registro de nuevos usuarios</strong> y la validación de acceso. Una decisión clave fue la <strong>unificación de la identidad visual</strong> en el registro, integrando una lógica de selección de avatares predefinidos. Para mejorar la <strong>UI/UX del usuario logueado</strong>, se diseñó un componente específico dentro del Home que permite visualizar los datos del perfil activo y gestionar el <strong>cierre de sesión</strong>, garantizando un flujo de navegación claro. Asimismo, se estandarizó el formato de los mensajes del 'Mock API' con los generados por el usuario para que convivan bajo el mismo estilo visual en el Contexto global..
          </p>
        </article>
        <article>
          <h2>Dificultades y Aprendizaje</h2>
          <p>
            Uno de los retos fue equilibrar la estética retro con la legibilidad, lo que requirio múltiples modificaciones en el CSS para que las sombras y bordes no dificultaran la lectura. Otro obstáculo técnico fue la estandarización de datos, logrando que los mensajes del 'Mock API' y los nuevos mensajes del usuario tuvieran el mismo formato y estilo visual. Finalmente, otro obstáculo fue integrar la selección de avatares dentro del formulario para que el nuevo usuario ingresara ya con la estética de la app, lo que requirió manejar estados de selección más complejos en el componente de Registro.
          </p>
        </article>
        <div className="about-footer">
          <a href="/">Volver al Inicio</a>
        </div>
      </div>
    </section>
  )
}
export { About }