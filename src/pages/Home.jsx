import '../App.css'
import Dog from '../components/Dog'
import Navbar from '../components/Navbar'
import { Canvas } from '@react-three/fiber'

function Home() {
  return (
    <>
      <main>
        <div className="images">
          <img id='tomorrowland' src="/tommorowland.png" alt="" />
          <img id='navy-pier' src="/navy-pier.png" alt="" />
          <img id='msi-chicago' src="/msi-chicago.png" alt="" />
          <img id='phone' src="/phone.png" alt="" />
          <img id='kikk' src="/kikk.png" alt="" />
          <img id='kennedy' src="/kennedy.png" alt="" />
          <img id='opera' src="/opera.png" alt="" />
        </div>
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
          <Dog />
        </Canvas>
        <section id='section-1' >
          <Navbar />
          <div className="middle">
            <div className="left">
              <h1>WHAT IS <br /> SHIBA <br /> INU <br /> (SHIB)?</h1>
            </div>
            <div className="right"></div>
          </div>
          <div className="bottom">
            <div className="left"></div>
            <div className="right">
              <p>
                Shiba Inu (SHIB) is a decentralized <br />
                ERC-20 token on Ethereum, built and <br />
                driven by a global community.
              </p>
            </div>
          </div>

          <div className="first-line"></div>
          <div className="second-line"></div>

        </section>
        <section id='section-2' >
          <div className="titles">
            <div img-title="tomorrowland" className="title">
              <small>OVERVIEW</small>
              <h1>Launched in 2020 by Ryoshi</h1>
            </div>
            <div img-title="navy-pier" className="title">
              <small>BLOCKCHAIN</small>
              <h1>Built on Ethereum as ERC-20</h1>
            </div>
            <div img-title="msi-chicago" className="title">
              <small>HOW IT WORKS</small>
              <h1>Secure peer-to-peer transactions</h1>
            </div>
            <div img-title="phone" className="title">
              <small>UTILITY</small>
              <h1>Wallets, trading, dApps, governance</h1>
            </div>
            <div img-title="kikk" className="title">
              <small>KEY FEATURE</small>
              <h1>Decentralized and community-driven</h1>
            </div>
            <div img-title="kennedy" className="title">
              <small>KEY FEATURE</small>
              <h1>Blockchain security and transparency</h1>
            </div>
            <div img-title="opera" className="title">
              <small>ECOSYSTEM</small>
              <h1>DeFi, tokens, and future Web3 apps</h1>
            </div>
          </div>


        </section>
        <section id='section-3' ></section>
      </main>
    </>
  )
}

export default Home
