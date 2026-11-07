import { useState, useRef, useEffect } from 'react'
import { songs } from '../../data/data'
import './BottomPlaybar.css'

export function BottomPlaybar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();

    } else {
      audioRef.current.pause();
    }


  }, [isPlaying, currentIndex])

  const currentSong = songs[currentIndex];

  function handleLoadedMetadata() {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  }

  function handlePlayButton() {
    const song = document.getElementById('song');

    if (isPlaying) {
      setIsPlaying(false);

    } else {
      setIsPlaying(true);

    }

  }

  function handleNextButton() {
    setCurrentIndex((count) => count + 1);

    if (currentIndex > songs.length - 2) {
      setCurrentIndex(0);
    }

    setIsPlaying(true);
  }

  function handlePreviousButton() {
    setCurrentIndex((count) => count - 1);

    if (currentIndex < 1) {
      setCurrentIndex(songs.length - 1);
    }

    setIsPlaying(true);
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${mins}:${secs < 10 ? "0" : ''}${secs}`;
    
  }

  return (
    <>
      <footer className="player-bar">

        <div className="now-playing">
          <img className="player-thumb" src={currentSong.image}></img>
          <div className="player-meta">
            <p className="player-title">{currentSong.title}</p>
            <p className="player-artist">{currentSong.artist}</p>
          </div>
        </div>

        <div className="player-controls-container">

          <div className="controls-buttons">
            <button id="prevBtn" onClick={handlePreviousButton}>&#9198;</button>
            <button id="playBtn" className="main-play-btn" onClick={handlePlayButton}>&#9654;</button>
            <button id="nextBtn" onClick={handleNextButton}>&#9197;</button>
          </div>

          <div className="progress-bar-container">

            <span id="currentTime">0:00</span>
            <input type="range" id="progressBar" min="0" max="100" />
            <span id="totalTime">{formatTime(duration)}</span>
          </div>
        </div>

        <div className="volume-container">

          <span>🔊</span>
          <input type="range" id="volumeSlider" min="0" max="100" />
        </div>

        <audio
          ref={audioRef}
          id='song'
          src={currentSong.audio}
          onLoadedMetadata={handleLoadedMetadata}
        />
      </footer>
    </>
  )
}