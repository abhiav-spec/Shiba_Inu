import Navbar from './Navbar'
import DogAbout from './DogAbout'
import { Canvas } from '@react-three/fiber'
import './About.css'

const About = () => {
  const projects = [
    {
      title: "Tomorrowland",
      year: "2020 - ONGOING"
    },
    {
      title: "Navy Pier",
      year: "2020 - ONGOING"
    },
    {
      title: "MSI Chicago",
      year: "2020 - ONGOING"
    },
    {
      title: "This Was Louise's Phone",
      year: "2020 - ONGOING"
    },
    {
      title: "KIKK Festival 2018",
      year: "2020 - ONGOING"
    },
    {
      title: "The Kennedy Center",
      year: "2020 - ONGOING"
    },
    {
      title: "Royal Opera Of Wallonia",
      year: "2020 - ONGOING"
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
      <div className="about-page">
        <section className="about-hero">
          <h1>About Us</h1>
          <p className="hero-subtitle">
            We are a multidisciplinary creative studio at the intersection <br />
            of art, design and technology.
          </p>
        </section>

        <section className="about-content">
          <div className="content-grid">
            <div className="content-block">
              <h2>Our Mission</h2>
              <p>
                We create immersive digital experiences that push the boundaries of 
                creativity and technology. Our work combines artistic vision with 
                cutting-edge technical expertise to deliver memorable brand experiences.
              </p>
            </div>

            <div className="content-block">
              <h2>Our Approach</h2>
              <p>
                Every project is a collaboration between design, technology, and art. 
                We believe in creating experiences that resonate with audiences and 
                leave a lasting impression through innovation and creativity.
              </p>
            </div>
          </div>
        </section>

        <section className="projects-section">
          <h2>Our Work</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <small>{project.year}</small>
                <h3>{project.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default About
