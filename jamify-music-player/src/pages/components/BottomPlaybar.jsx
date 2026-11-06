import './BottomPlaybar.css'

export function BottomPlaybar() {
  return (
    <>
      <footer class="player-bar">

        <div class="now-playing">
          <div class="player-thumb"></div>
          <div class="player-meta">
            <p class="player-title">Select a track</p>
            <p class="player-artist">-</p>
          </div>
        </div>

        <div class="player-controls-container">
          <div class="controls-buttons">
            <button id="prevBtn">&#9198;</button>
            <button id="playBtn" class="main-play-btn">&#9654;</button>
            <button id="nextBtn">&#9197;</button>
          </div>
          <div class="progress-bar-container">
            <span id="currentTime">0:00</span>
            <input type="range" id="progressBar" value="0" min="0" max="100" />
            <span id="totalTime">0:00</span>
          </div>
        </div>

        <div class="volume-container">
          <span>🔊</span>
          <input type="range" id="volumeSlider" min="0" max="100" value="80" />
        </div>

      </footer>
    </>
  )
}