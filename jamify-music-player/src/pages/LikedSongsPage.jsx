import { BottomPlaybar } from './components/BottomPlaybar';
import { Sidebar } from './components/Sidebar';
import './LikedSongsPage.css'

export function LikedSongsPage() {
  return (
    <>
      <div class="app-container">

        <Sidebar />

        <main class="main-content">

          <section class="liked-hero">
            <div class="hero-icon">❤️</div>
            <div class="hero-details">
              <span class="hero-type">PLAYLIST</span>
              <h1>Liked Songs</h1>
              <p class="hero-meta"><span id="likedCount">3</span> tracks saved</p>
            </div>
          </section>

          <section class="songs-section">
            <table class="song-list">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title & Artist</th>
                  <th>Album</th>
                  <th>Time</th>
                  <th></th>
                </tr>
              </thead>
              <tbody id="likedSongsBody">
                <tr class="song-row" data-src="tracks/song1.mp3">
                  <td>01</td>
                  <td class="track-details">
                    <div class="thumb cover-1"></div>
                    <div>
                      <p class="title">Doomed</p>
                      <p class="artist">Moses Sumney</p>
                    </div>
                  </td>
                  <td>Arofan</td>
                  <td>4:30</td>
                  <td><button class="remove-like-btn" title="Remove from Liked">❤️</button></td>
                </tr>
                <tr class="song-row" data-src="tracks/song2.mp3">
                  <td>02</td>
                  <td class="track-details">
                    <div class="thumb cover-2"></div>
                    <div>
                      <p class="title">James Curran</p>
                      <p class="artist">Los Angeles</p>
                    </div>
                  </td>
                  <td>Amusing Dragon</td>
                  <td>3:00</td>
                  <td><button class="remove-like-btn" title="Remove from Liked">❤️</button></td>
                </tr>
                <tr class="song-row" data-src="tracks/song3.mp3">
                  <td>03</td>
                  <td class="track-details">
                    <div class="thumb cover-3"></div>
                    <div>
                      <p class="title">Adam Grason</p>
                      <p class="artist">Orlando</p>
                    </div>
                  </td>
                  <td>Kasara</td>
                  <td>2:30</td>
                  <td><button class="remove-like-btn" title="Remove from Liked">❤️</button></td>
                </tr>
              </tbody>
            </table>
          </section>

        </main>

        <BottomPlaybar />

      </div>
    </>
  )
}