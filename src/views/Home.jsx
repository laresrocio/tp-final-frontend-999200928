import { Aside } from "../components/Aside"
import { Chat } from "../components/Chat"
import { UserMenu } from "../components/UserMenu"

const Home = () => {
  return (
    <section className="home-screen">
      <UserMenu />

      <main className='app'>
        <Aside />
        <Chat />
      </main>
    </section>
  )
}

export { Home }