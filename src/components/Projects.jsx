import Navbar from './Navbar'
import DogAbout from './DogAbout'
import { Canvas } from '@react-three/fiber'
import './Projects.css'

const Projects = () => {
  const completedProjects = [
    {
      title: "ShibaSwap",
      description: "The official decentralized exchange of the Shiba Inu ecosystem. It allows users to trade tokens, provide liquidity, and earn rewards through decentralized finance (DeFi)."
    },
    {
      title: "LEASH Token",
      description: "One of the first tokens introduced after SHIB. It was designed to support the ecosystem and provide additional benefits to long-term holders."
    },
    {
      title: "BONE Token",
      description: "Used for governance. This means the community can vote on decisions related to the project and its future development."
    }
  ]

  const ongoingProjects = [
    {
      title: "Shibarium",
      description: "A Layer-2 blockchain built to make transactions faster and cheaper. It helps developers build decentralized applications using the Shiba Inu ecosystem."
    },
    {
      title: "Shiba Inu Metaverse",
      description: "Focused on creating a virtual digital world where users can buy virtual land, interact with others, and explore new blockchain-based experiences."
    }
  ]

  const upcomingProjects = [
    {
      title: "SHIB-Based Web3 Applications",
      description: "The ecosystem is planning to expand into Web3 platforms, decentralized apps, and digital services that will support the global crypto community."
    },
    {
      title: "Community Governance Expansion",
      description: "The team is working on improving governance systems so users can directly participate in decision-making."
    }
  ]

  return (
    <>
      <Navbar />
      <Canvas
        id='canvas-elem'
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1,
        }} >
        <DogAbout />
      </Canvas>
      <div className="projects-page">
        <section className="projects-hero">
          <h1>Projects & Roadmap</h1>
          <p className="hero-subtitle">
            The Shiba Inu ecosystem is not just a cryptocurrency. <br />
            It is a growing blockchain platform with multiple products and decentralized applications.
          </p>
        </section>

        {/* Completed Projects */}
        <section className="projects-section completed-section">
          <div className="section-header">
            <h2>Completed Projects</h2>
            <p className="section-description">Major products that have been launched and are actively used by the community.</p>
          </div>
          <div className="projects-grid">
            {completedProjects.map((project, index) => (
              <div key={index} className="project-item completed">
                <div className="status-badge">Completed</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ongoing Projects */}
        <section className="projects-section ongoing-section">
          <div className="section-header">
            <h2>Ongoing Projects</h2>
            <p className="section-description">Projects currently active and continuously being improved.</p>
          </div>
          <div className="projects-grid">
            {ongoingProjects.map((project, index) => (
              <div key={index} className="project-item ongoing">
                <div className="status-badge">In Progress</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Projects */}
        <section className="projects-section upcoming-section">
          <div className="section-header">
            <h2>Upcoming Projects</h2>
            <p className="section-description">Future plans announced by the development team and community.</p>
          </div>
          <div className="projects-grid">
            {upcomingProjects.map((project, index) => (
              <div key={index} className="project-item upcoming">
                <div className="status-badge">Upcoming</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Projects
