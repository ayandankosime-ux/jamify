import { BottomPlaybar } from "../components/BottomPlaybar";
import { Sidebar } from "../components/Sidebar";
import './ArtistsDetailPage.css';


export function ArtistsDetailPage({currentIndex, setCurrentIndex, songs }) {
  return (
    <div class="app-container">

      <Sidebar />

        <main class="main-content">

          <section class="artist-hero banner-artist-1">
            <div class="artist-hero-content">
              <span class="verified-badge">✔ Verified Artist</span>
              <h1>{songs[currentIndex].artist}</h1>
              <p class="artist-listeners">45,210 monthly listeners</p>
              <div class="artist-actions">
                <button class="play-artist-btn">&#9654; Play</button>
                <button class="follow-btn">Follow</button>
              </div>
            </div>
          </section>

          <section class="songs-section">
            <h2>Popular Songs</h2>
            <table class="song-list">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Album</th>
                  <th>Plays</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr class="song-row">
                  <td>01</td>
                  <td class="track-details">
                    <div class="thumb cover-1"></div>
                    <div>
                      <p class="title">Doomed</p>
                      <p class="artist">Moses Sumney</p>
                    </div>
                  </td>
                  <td>Arofan</td>
                  <td>1,240,500</td>
                  <td>4:30</td>
                </tr>
                <tr class="song-row">
                  <td>02</td>
                  <td class="track-details">
                    <div class="thumb cover-1"></div>
                    <div>
                      <p class="title">Lonely World</p>
                      <p class="artist">Moses Sumney</p>
                    </div>
                  </td>
                  <td>Arofan</td>
                  <td>890,200</td>
                  <td>3:50</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section class="artist-albums-section">
            <h2>Discography</h2>
            <div class="albums-grid">
              <div class="album-card">
                <img class="album-cover cover-1" src={songs[currentIndex].albumImage}/>
                <div class="album-info">
                  <h3 class="album-title">{songs[currentIndex].album}</h3>
                  <span class="album-meta">Album • {songs[currentIndex].year}</span>
                </div>
              </div>
            </div>
          </section>

        </main>

        <BottomPlaybar
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          songs={songs}
        />
    </div>
  )
}