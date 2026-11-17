import { BottomPlaybar } from "../../components/BottomPlaybar";
import { Sidebar } from "../../components/Sidebar";
import './AlbumsDetailPage.css';

export function AlbumsDetailPage({ currentIndex, setCurrentIndex, songs }) {
  return (
    <div className="app-container">

      <Sidebar />

      <main className="main-content">

        <section className="album-hero">
          <div className="album-hero-cover cover-1"></div>
          <div className="album-hero-details">
            <span className="album-type">ALBUM</span>
            <h1>Arofan</h1>
            <div className="album-metadata">
              <span className="artist-link">Moses Sumney</span>
              <span className="dot">•</span>
              <span className="release-year">2023</span>
              <span className="dot">•</span>
              <span className="track-count">2 songs, 8 min 20 sec</span>
            </div>
          </div>
        </section>

        <section className="album-actions-bar">
          <button className="play-album-btn">&#9654; Play</button>
          <button className="favorite-album-btn" title="Save to Liked">❤️</button>
        </section>

        <section className="songs-section">
          <table className="song-list">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Plays</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="song-row" data-src="tracks/doomed.mp3">
                <td>01</td>
                <td className="track-details">
                  <div>
                    <p className="title">Doomed</p>
                    <p className="artist">Moses Sumney</p>
                  </div>
                </td>
                <td>1,240,500</td>
                <td>4:30</td>
              </tr>
              <tr className="song-row" data-src="tracks/lonely-world.mp3">
                <td>02</td>
                <td className="track-details">
                  <div>
                    <p className="title">Lonely World</p>
                    <p className="artist">Moses Sumney</p>
                  </div>
                </td>
                <td>890,200</td>
                <td>3:50</td>
              </tr>
            </tbody>
          </table>
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
