const About = () => {
  return (
    <section className="cont-about">
      <h1 >Documentación WSP-95</h1>
      <div className="about-card">
        <article>
          <h2>¿Qué es este proyecto?</h2>
          <p>
            WSP-95 es una aplicación de chat inspirada en una estetica Retro, al estilo Windows 95 pero con tonos pasteles y modernos.
            Busca recrear la experiencia nostálgica de los primeros mensajeros
            utilizando herramientas modernas de desarrollo web.
          </p>
        </article>
        <article>
          <h2>Tecnologías</h2>
          <ul>
            <li><strong>React:</strong> Para la creación de componentes reutilizables.</li>
            <li><strong>React Router:</strong> Para navegar entre Login, Chat y esta página.</li>
            <li><strong>Context API:</strong> Para manejar los datos del usuario y los mensajes en toda la app.</li>
            <li><strong>CSS Nativo:</strong> Para lograr el estilo retro sin librerías externas.</li>
          </ul>
        </article>
        <article>
          <h2>Decisiones Técnicas</h2>
          <p>
            Se decidió utilizar <strong>Context API</strong> para evitar pasar datos
            manualmente entre componentes (prop drilling), permitiendo que el
            nombre del usuario esté disponible tanto en la Navbar como en el Chat.
          </p>
        </article>
        <article>
          <h2>Dificultades y Aprendizaje</h2>
          <p>
            El mayor desafío fue lograr que el chat se mantuviera abajo al recibir
            mensajes nuevos. Aprendí a usar <code>useRef</code> y <code>useEffect</code>
            para manipular el scroll de forma automática.
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