import { useContext } from "react"
import { ChatContext } from "../context/ChatContext"

const UserMenu = () => {

  const { loggedUser, logout } = useContext(ChatContext)

  const handleLogout = () => {
    logout()
  }
  console.log("Datos del usuario logueado:", loggedUser);
  return (
    <nav className="user-nav">
      <div className="profile-info">
        <img src={loggedUser?.avatar} alt="avatar" />
        <span>{loggedUser?.firstName}</span>
      </div>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </nav>
  )
}
export { UserMenu }