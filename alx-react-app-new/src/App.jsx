import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import WelcomeMessage from './components/WelcomeMessage'

function App() {
  

  return (
   <>
      <Header />
      <MainContent />
      
      <WelcomeMessage />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
   </>
  )
}

export default App
