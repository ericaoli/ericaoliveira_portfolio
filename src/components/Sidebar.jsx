import Avatar from '../img/1713183971889.jpg'
import SocialNetworks from './SocialNetworks'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Érica Oliveira" />
      <p className="title">Développeuse web</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/1-X5ahbSrVrlCKb7khTh4i7_ZsoZdynpr/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn">Téléchargez mon CV</a>
    </aside>
  )
}

export default Sidebar
