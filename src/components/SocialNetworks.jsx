import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, url:"https://www.linkedin.com/in/oliveira-a39429259/" },
    { name: "github", icon: <FaGithub />, url:"https://github.com/ericaoli" },
]

const SocialNetworks = () => {
  return (
    <section id="social-networks" >
      {socialNetworks.map((network) => (
        <a href={network.url} className='social-btn' id={network.name} key={network.name} target="_blank" rel="noopener noreferrer">{network.icon}</a>
      ))}
    </section>
  )
}

export default SocialNetworks
