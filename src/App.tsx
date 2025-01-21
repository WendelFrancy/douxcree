import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './components/GlobalStyles'
import LandingPg from './components/landingpage/LandingPg'

function App() {

  return (
    <>
      <GlobalStyle/>
      <Router>
        <LandingPg/>
      </Router>
    </>
  )
}

export default App
