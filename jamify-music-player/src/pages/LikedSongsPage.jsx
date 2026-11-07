import { BottomPlaybar } from './components/BottomPlaybar';
import { Sidebar } from './components/Sidebar';
import './LikedSongsPage.css'

export function LikedSongsPage() {
  return (
    <>
      <div className="app-container">

        <Sidebar />

        <main className="main-content">

          <section className="liked-hero">
            <div className="hero-icon">❤️</div>
            <div className="hero-details">
              <span className="hero-type">PLAYLIST</span>
              <h1>Liked Songs</h1>
              <p className="hero-meta"><span id="likedCount">3</span> tracks saved</p>
            </div>
          </section>

          <section className="songs-section">
            <table className="song-list">
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
                <tr className="song-row" data-src="tracks/song1.mp3">
                  <td>01</td>
                  <td className="track-details">
                    <div className="thumb cover-1"></div>
                    <div>
                      <p className="title">Doomed</p>
                      <p className="artist">Moses Sumney</p>
                    </div>
                  </td>
                  <td>Arofan</td>
                  <td>4:30</td>
                  <td><button className="remove-like-btn" title="Remove from Liked">❤️</button></td>
                </tr>
                <tr className="song-row" data-src="tracks/song2.mp3">
                  <td>02</td>
                  <td className="track-details">
                    <div className="thumb cover-2"></div>
                    <div>
                      <p className="title">James Curran</p>
                      <p className="artist">Los Angeles</p>
                    </div>
                  </td>
                  <td>Amusing Dragon</td>
                  <td>3:00</td>
                  <td><button className="remove-like-btn" title="Remove from Liked">❤️</button></td>
                </tr>
                <tr className="song-row" data-src="tracks/song3.mp3">
                  <td>03</td>
                  <td className="track-details">
                    <div className="thumb cover-3"></div>
                    <div>
                      <p className="title">Adam Grason</p>
                      <p className="artist">Orlando</p>
                    </div>
                  </td>
                  <td>Kasara</td>
                  <td>2:30</td>
                  <td><button className="remove-like-btn" title="Remove from Liked">❤️</button></td>
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