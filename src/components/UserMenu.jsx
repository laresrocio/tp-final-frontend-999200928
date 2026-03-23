import { useContext } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const UserMenu = () => {

  const { loggedUser, logout } = useContext(ChatContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
  }
  const handleAboutBtn = () => {
    navigate("/about")
  }
  return (
    <nav className="user-nav">
      <div className="profile-info">
        <img src={loggedUser?.avatar} alt="avatar" />
        <span>{loggedUser?.firstName}</span>
      </div>
      <div className="btn-menu">
        <button onClick={handleAboutBtn} >Sobre el proyecto</button>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </nav>
  )
}
export { UserMenu }