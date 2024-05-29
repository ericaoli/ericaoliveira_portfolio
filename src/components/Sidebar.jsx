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
      <a href="#" className="btn">Téléchargez mon CV</a>
    </aside>
  )
}

export default Sidebar
