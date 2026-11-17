import { BottomPlaybar } from "../../components/BottomPlaybar";
import { Sidebar } from "../../components/Sidebar";
import { musicLibrary } from "../../data/music";
import './ArtistsDetailPage.css';


export function ArtistsDetailPage({ currentIndex, setCurrentIndex, songs }) {
  // const artistIndex = currentIndex;
  const music = musicLibrary[0];
  const { albums } = music;
  const songTracks = albums[0].tracks;


  return (
    <div className="app-container">

      <Sidebar />

      <main className="main-content">

        <section className="artist-hero banner-artist-1">
          <div className="artist-hero-content">
            <span className="verified-badge">✔ Verified Artist</span>
            <h1>{music.artist}</h1>
            <p className="artist-listeners">45,210 monthly listeners</p>
            <div className="artist-actions">
              <button className="play-artist-btn">&#9654; Play</button>
              <button className="follow-btn">Follow</button>
            </div>
          </div>
        </section>

        <section className="songs-section">
          <h2>Popular Songs</h2>
          <table className="song-list">
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
              {songTracks.map((track) => {
                return (
                  <tr className="song-row" key={track.trackId}>
                    <td>01</td>
                    <td className="track-details">
                      <div className="thumb cover-1" src={track.albumImage} />
                      <div>
                        <p className="title">{track.title}</p>
                        <p className="artist">{track.artist}</p>
                      </div>
                    </td>
                    <td>{albums.albumTitle}</td>
                    <td>1,240,500</td>
                    <td>4:30</td>
                  </tr>
                )
              })}

            </tbody>
          </table>
        </section>

        <section className="artist-albums-section">
          <h2>Discography</h2>
          {albums.map((album) => {
            return (
              <div className="albums-grid" key={album.albumId}>
                <div className="album-card">
                  <img className="album-cover cover-1" src={album.coverArt} />
                  <div className="album-info">
                    <h3 className="album-title">{album.albumTitle}</h3>
                    <span className="album-meta">Album • {album.tracks.length}</span>
                  </div>
                </div>
              </div>
            )
          })}


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