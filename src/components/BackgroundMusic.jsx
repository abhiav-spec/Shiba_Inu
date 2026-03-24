import { useEffect, useRef, useState } from 'react'
import musicFile from '../assets/kornevmusic-epic-478847.mp3'
import './BackgroundMusic.css'

function BackgroundMusic() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.35
  }, [])

  const toggleMusic = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch {
        setIsPlaying(false)
      }
      return
    }

    audio.pause()
    setIsPlaying(false)
  }

  return (
    <div className="music-control">
      <audio ref={audioRef} src={musicFile} loop preload="auto" />
      <button type="button" onClick={toggleMusic} className="music-button" aria-label="Toggle background music">
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>
    </div>
  )
}

export default BackgroundMusic
