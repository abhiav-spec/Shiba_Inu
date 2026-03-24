import Navbar from './Navbar'
import DogAbout from './DogAbout'
import { Canvas } from '@react-three/fiber'
import './About.css'

const About = () => {
  const tokenInfo = [
    {
      title: "Launch Year",
      value: "2020"
    },
    {
      title: "Founder",
      value: "Ryoshi (Anonymous)"
    },
    {
      title: "Blockchain",
      value: "Ethereum (ERC-20)"
    },
    {
      title: "Type",
      value: "Decentralized Cryptocurrency"
    },
    {
      title: "Total Supply",
      value: "~589 Trillion SHIB"
    },
    {
      title: "All-Time High",
      value: "October 2021"
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
          <h1>About Shiba Inu (SHIB)</h1>
          <p className="hero-subtitle">
            Shiba Inu (SHIB) is a decentralized cryptocurrency launched in 2020 and built on the Ethereum blockchain. <br />
            Created as a community-driven digital token, it has grown into a global ecosystem supported by millions.
          </p>
        </section>

        <section className="about-content">
          <div className="content-grid">
            <div className="content-block">
              <h2>Key Information</h2>
              <p>
                Launch Year: 2020 <br />
                Founder: Ryoshi (anonymous developer) <br />
                Blockchain: Ethereum (ERC-20 token) <br />
                Type: Decentralized cryptocurrency <br />
                Community: SHIB Army
              </p>
            </div>

            <div className="content-block">
              <h2>Market & Supply Data</h2>
              <p>
                Total Supply: About 589 trillion SHIB tokens <br />
                Circulating Supply: Over 589 trillion tokens <br />
                Market Cap: Billions of dollars <br />
                Launch Date: August 2020 <br />
                All-Time High: October 2021
              </p>
            </div>

            <div className="content-block">
              <h2>How Shiba Inu Works</h2>
              <p>
                SHIB uses blockchain technology to let users send, receive, and store digital assets securely without central control. 
                Since it runs on Ethereum, users can trade SHIB, keep it in crypto wallets, use it in decentralized applications, 
                and participate in community governance.
              </p>
            </div>

            <div className="content-block">
              <h2>Official Ecosystem Website</h2>
              <p>
                Explore the official SHIB ecosystem platform for updates, token details, and Web3 developments.
              </p>
              <a className="official-link" href="https://shib.io" target="_blank" rel="noreferrer">
                Visit Official Website
              </a>
            </div>
            <div className="content-block">
              <h2>Core Vision</h2>
              <p>
                The project focuses on decentralization, transparency, and innovation,
                offering users a modern digital platform for secure transactions and
                blockchain-based applications.
              </p>
            </div>
          </div>
        </section>

        <section className="projects-section">
          <h2>Token Information</h2>
          <div className="projects-grid">
            {tokenInfo.map((project, index) => (
              <div key={index} className="project-card">
                <small>{project.title}</small>
                <h3>{project.title}</h3>
                <p>{project.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="creator-section">
          <h2>Created By</h2>
          <p>Abhinav Kumar</p>
          <div className="social-links">
            <a href="https://instagram.com/abhinavkumar" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="https://linkedin.com/in/abhinav-kumar" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="ri-linkedin-box-line"></i>
            </a>
            <a href="https://github.com/abhiav-spec" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="ri-github-line"></i>
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
