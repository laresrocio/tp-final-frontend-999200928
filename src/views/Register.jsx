import { use, useState } from "react"

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [pais, setPais] = useState("")

  const [error, setError] = useState(null)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)
    const newUser = {
      email, password, nombre, apellido, pais
    }
    console.log(newUser)
  }


  return (
    <section>
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
        <button>Registrarse</button>
      </form>
    </section>
  )
}

export { Register }