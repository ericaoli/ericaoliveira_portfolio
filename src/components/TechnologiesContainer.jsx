import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiSass
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  {id:"html", name: "HTML5", icon: <DiHtml5 />},
  {id:"css", name: "CSS3", icon: <DiCss3 />},
  {id: "sass", name: "Sass", icon: <DiSass />},
  {id:"js", name: "JavaScript", icon: <DiJsBadge />}, 
  {id:"react", name: "React", icon: <DiReact />},
  {id:"node", name: "Node.JS", icon: <DiNodejsSmall />},
  {id:"mysql", name: "MySQL", icon: <DiMysql />},
]

const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
      <h2>Technologies</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id} >
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer
