import AboutContainer from './AboutContainer'
import ProjetsContainer from './ProjetsContainer'
import TechnologiesContainer from './TechnologiesContainer'
import '../styles/components/maincontent.sass'

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TechnologiesContainer /> 
      <ProjetsContainer />
    </main>
  )
}

export default MainContent
