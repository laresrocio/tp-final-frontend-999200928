import { useContext } from "react"
import { Aside } from "../components/Aside"
import { Chat } from "../components/Chat"
import { UserMenu } from "../components/UserMenu"
import { ChatContext } from "../context/ChatContext"

const Home = () => {
  const { selectedUser } = useContext(ChatContext)
  const viewMode = selectedUser ? "chat-open" : "list-open"

  return (
    <section className="home-screen">
      <UserMenu />

      <main className={`app ${viewMode}`}>
        <Aside />
        <Chat />
      </main>
    </section>
  )
}

export { Home }