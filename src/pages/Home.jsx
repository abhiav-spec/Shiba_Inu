import '../App.css'
import Dog from '../components/Dog'
import Navbar from '../components/Navbar'
import { Canvas } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'

function Home() {
  const chartCanvasRef = useRef(null)
  const chartInstanceRef = useRef(null)
  const [isChartLoading, setIsChartLoading] = useState(true)
  const [isStatsLoading, setIsStatsLoading] = useState(true)
  const [stats, setStats] = useState(null)

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY || import.meta.env.API_KEY || 'CG-RvyheaPYaZ39Bo4eKxNsNAdf'
    const chartApiUrl = import.meta.env.VITE_SHIB_CHART_URL
      || `https://api.coingecko.com/api/v3/coins/shiba-inu/market_chart?vs_currency=usd&days=30&x_cg_demo_api_key=${apiKey}`
    const statsApiUrl = import.meta.env.VITE_SHIB_STATS_URL
      || `https://api.coingecko.com/api/v3/coins/shiba-inu?x_cg_demo_api_key=${apiKey}`

    const formatDate = (timestamp) => {
      const date = new Date(timestamp)
      return `${date.getDate()}/${date.getMonth() + 1}`
    }

    const renderChart = (pricePoints) => {
      if (!chartCanvasRef.current || !window.Chart) return

      const labels = pricePoints.map((item) => formatDate(item[0]))
      const prices = pricePoints.map((item) => item[1])

      if (chartInstanceRef.current) {
        chartInstanceRef.current.data.labels = labels
        chartInstanceRef.current.data.datasets[0].data = prices
        chartInstanceRef.current.update()
        return
      }

      chartInstanceRef.current = new window.Chart(chartCanvasRef.current, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: 'SHIB Price (USD)',
              data: prices,
              borderColor: '#ff3b3b',
              backgroundColor: 'rgba(255, 59, 59, 0.14)',
              borderWidth: 2,
              fill: true,
              tension: 0.35,
              pointRadius: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 900,
            easing: 'easeOutQuart',
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              ticks: {
                color: 'rgba(245,245,245,0.7)',
                maxTicksLimit: 8,
              },
              grid: {
                color: 'rgba(255,255,255,0.08)',
              },
            },
            y: {
              ticks: {
                color: 'rgba(245,245,245,0.7)',
              },
              grid: {
                color: 'rgba(255,255,255,0.08)',
              },
            },
          },
        },
      })
    }

    const loadData = async () => {
      try {
        const [chartResponse, statsResponse] = await Promise.all([
          fetch(chartApiUrl),
          fetch(statsApiUrl),
        ])

        const [chartData, statsData] = await Promise.all([
          chartResponse.json(),
          statsResponse.json(),
        ])

        if (chartData?.prices?.length) {
          renderChart(chartData.prices)
          setIsChartLoading(false)
        }

        if (statsData?.market_data) {
          setStats(statsData.market_data)
          setIsStatsLoading(false)
        }
      } catch (error) {
        console.error('Failed to fetch SHIB data:', error)
      }
    }

    loadData()
    const intervalId = setInterval(loadData, 10000)

    return () => {
      clearInterval(intervalId)
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy()
        chartInstanceRef.current = null
      }
    }
  }, [])

  const formatUsd = (value, maxFractionDigits = 8) => {
    if (value == null) return '--'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: maxFractionDigits,
    }).format(value)
  }

  const formatCompactUsd = (value) => {
    if (value == null) return '--'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 2,
    }).format(value)
  }

  const formatNumber = (value) => {
    if (value == null) return '--'
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0,
    }).format(value)
  }

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
        <section id='section-3' >
          <div className="shib-highlights">
            <h2>Shiba Inu Highlights</h2>
            <div className="highlight-list">
              <div className="highlight-item">
                <small>OVERVIEW</small>
                <p>Launched in 2020 by Ryoshi</p>
              </div>
              <div className="highlight-item">
                <small>BLOCKCHAIN</small>
                <p>Built on Ethereum as ERC-20</p>
              </div>
              <div className="highlight-item">
                <small>HOW IT WORKS</small>
                <p>Secure peer-to-peer transactions</p>
              </div>
              <div className="highlight-item">
                <small>UTILITY</small>
                <p>Wallets, trading, dApps, governance</p>
              </div>
              <div className="highlight-item">
                <small>KEY FEATURE</small>
                <p>Decentralized and community-driven</p>
              </div>
              <div className="highlight-item">
                <small>KEY FEATURE</small>
                <p>Blockchain security and transparency</p>
              </div>
              <div className="highlight-item">
                <small>ECOSYSTEM</small>
                <p>DeFi, tokens, and future Web3 apps</p>
              </div>
            </div>
          </div>

          <div className="live-data-row">
            <div className="market-panel">
              <h3>Live SHIB Market Data</h3>
              {isStatsLoading ? (
                <p className="loading-text">Loading market data...</p>
              ) : (
                <div className="market-grid">
                  <div className="market-item">
                    <span>Live Price (USD)</span>
                    <strong>{formatUsd(stats?.current_price?.usd)}</strong>
                  </div>
                  <div className="market-item">
                    <span>Market Cap</span>
                    <strong>{formatCompactUsd(stats?.market_cap?.usd)}</strong>
                  </div>
                  <div className="market-item">
                    <span>Circulating Supply</span>
                    <strong>{formatNumber(stats?.circulating_supply)}</strong>
                  </div>
                  <div className="market-item">
                    <span>Total Supply</span>
                    <strong>{formatNumber(stats?.total_supply)}</strong>
                  </div>
                  <div className="market-item">
                    <span>24h Price Change %</span>
                    <strong className={stats?.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}>
                      {stats?.price_change_percentage_24h?.toFixed(2)}%
                    </strong>
                  </div>
                  <div className="market-item">
                    <span>24h Trading Volume</span>
                    <strong>{formatCompactUsd(stats?.total_volume?.usd)}</strong>
                  </div>
                </div>
              )}
            </div>

            <div className="chart-panel">
              <h3>SHIB Price - Last 30 Days</h3>
              {isChartLoading && <p className="loading-text">Loading chart data...</p>}
              <div className="chart-wrap">
                <canvas ref={chartCanvasRef}></canvas>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
