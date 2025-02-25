import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import WelcomeMessage from './components/WelcomeMessage'
import Counter from './components/Counter'
function App() {
  

  return (
   <>

      <Header />
      <MainContent />
      <Counter />
      <WelcomeMessage />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
   </>
  )
}

export default App
