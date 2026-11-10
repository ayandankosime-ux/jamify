import { BottomPlaybar } from '../components/BottomPlaybar';
import { Sidebar } from '../components/Sidebar';
import { songs } from '../data/data';
import './LikedSongsPage.css'

export function LikedSongsPage({ currentIndex, setCurrentIndex }) {
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

                {songs.map((song, index) => {
                  return (
                    <tr className="song-row" data-src={song.audio}>
                      <td>{index + 1}</td>
                      <td className="track-details">
                        <img className="thumb cover-1" src={song.image}/>
                        <div>
                          <p className="title">{song.title}</p>
                          <p className="artist">{song.artist}</p>
                        </div>
                      </td>
                      <td>{song.album}</td>
                      <td>4:30</td>
                      <td><button className="remove-like-btn" title="Remove from Liked">❤️</button></td>
                    </tr>
                  )
                })}
                
              </tbody>
            </table>
          </section>

        </main>

        <BottomPlaybar
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />

      </div>
    </>
  )
}