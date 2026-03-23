import { use, useState, useContext, useEffect } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"
const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [country, setCountry] = useState("")
  const [avatar, setAvatar] = useState("https://api.dicebear.com/7.x/pixel-art/svg?seed=Sarah")

  const { register, loggedUser } = useContext(ChatContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedUser) {
      navigate("/");
    }
  }, [loggedUser, navigate]);

  const [error, setError] = useState(null)

  const avatares = [
    "https://api.dicebear.com/7.x/pixel-art/svg?seed=Sarah",
    "https://api.dicebear.com/7.x/pixel-art/svg?seed=George",
    "https://api.dicebear.com/7.x/pixel-art/svg?seed=Christian",
    "https://api.dicebear.com/7.x/pixel-art/svg?seed=Christopher",
    "https://api.dicebear.com/7.x/pixel-art/svg?seed=Luna",
    "https://api.dicebear.com/7.x/pixel-art/svg?seed=Liliana"
  ]

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleChangeNombre = (e) => {
    setFirstName(e.target.value)
  }

  const handleChangeApellido = (e) => {
    setLastName(e.target.value)
  }

  const handleChangePais = (e) => {
    setCountry(e.target.value)
  }

  const handleAvatar = (url) => {
    setAvatar(url);
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)

    if (!firstName || !email || !password || !lastName || !country) {
      setError("Faltan completar campos");
      return;
    }
    if (firstName.length < 3) {
      setError("El nombre debe tener al menos 3 caracteres");
      return;
    }
    if (lastName.length < 3) {
      setError("El apellido debe tener al menos 3 caracteres");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
      setError("Ingrese un email valido");
      return;
    }

    const newUser = {
      email, password, firstName, lastName, country, avatar, id: Date.now()
    }
    register(newUser);
    navigate("/")
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
          <div className="avatar-grid">
            {avatares.map((url) => (
              <img
                key={url}
                src={url}
                alt="Opción de avatar"
                className={avatar === url ? "selected" : ""}
                onClick={() => handleAvatar(url)}
              />
            ))}
          </div>
        </div>
        {error && (
          <div className="error-mensaje">
            {error}
          </div>
        )}
        <button>Registrarse</button>
      </form >
    </section >
  )
}

export { Register }