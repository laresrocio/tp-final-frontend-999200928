import { use, useState } from "react"

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [pais, setPais] = useState("")
  const [avatar, setAvatar] = useState("")


  const [error, setError] = useState(null)

  const avatares = [
    "https://api.dicebear.com/7.x/pixel-art/svg?seed=Felix",
    "https://api.dicebear.com/7.x/pixel-art/svg?seed=Aneka",
    "https://api.dicebear.com/7.x/pixel-art/svg?seed=Styles",
    "https://api.dicebear.com/7.x/pixel-art/svg?seed=Jack",
    "https://api.dicebear.com/7.x/pixel-art/svg?seed=Luna",
    "https://api.dicebear.com/7.x/pixel-art/svg?seed=Bear"
  ]

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleChangeNombre = (e) => {
    setNombre(e.target.value)
  }

  const handleChangeApellido = (e) => {
    setApellido(e.target.value)
  }

  const handleChangePais = (e) => {
    setPais(e.target.value)
  }

  const handleAvatar = (url) => {
    console.log("Cambiando avatar a:", url);
    setAvatar(url);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)
    const newUser = {
      email, password, nombre, apellido, pais, avatar
    }
    console.log(newUser)
  }


  return (
    <section className="register-view">
      <h2 className="title-login">Ingresa tus datos para registrarte</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo Electronico"
          onChange={handleChangeEmail}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={handleChangePassword}
        />
        <input
          type="text"
          placeholder="Nombre"
          onChange={handleChangeNombre}
        />
        <input
          type="text"
          placeholder="Apellido"
          onChange={handleChangeApellido}
        />
        <input
          type="text"
          placeholder="Pais"
          onChange={handleChangePais}
        />
        <p>Selecciona tu avatar:</p>

        <div className="avatar-selector">
          <p>Elige una foto de perfil</p>
          <div className="avatar-grid">
            <img
              src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Felix"
              onClick={() => handleAvatar("https://api.dicebear.com/7.x/pixel-art/svg?seed=Felix")}
            />
            <img
              src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Aneka"
              onClick={() => handleAvatar("https://api.dicebear.com/7.x/pixel-art/svg?seed=Aneka")}
            />
            <img
              src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Jack"
              onClick={() => handleAvatar("https://api.dicebear.com/7.x/pixel-art/svg?seed=Jack")}
            />
          </div>
          <small>Seleccionado: {avatar}</small>
        </div>
        <button>Registrarse</button>
      </form >
    </section >
  )
}

export { Register }