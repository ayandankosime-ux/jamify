import { BottomPlaybar } from '../components/BottomPlaybar';
import { Sidebar } from '../components/Sidebar';
import './NewPlaylistsPage.css'

export function NewPlaylistsPage({ currentIndex, setCurrentIndex }) {
  return (
    <>
      <div className="app-container">

        <Sidebar />

        <main className="main-content">

          <header className="top-header">
            <h1>Create Playlist</h1>
          </header>

          <section className="create-playlist-section">
            <div className="playlist-form-card">
              <div className="playlist-cover-uploader" id="coverUploader" title="Click to change cover">
                <span>🎵</span>
                <p>Upload Cover</p>
              </div>

              <div className="playlist-inputs">
                <div className="input-group">
                  <label for="playlistName">Playlist Name</label>
                  <input type="text" id="playlistName" placeholder="My Awesome Playlist" value="My Playlist #1" />
                </div>

                <div className="input-group">
                  <label for="playlistDesc">Description</label>
                  <textarea id="playlistDesc" placeholder="Add an optional description">Fresh local tracks and late-night vibes.</textarea>
                </div>

                <button className="save-playlist-btn" id="savePlaylistBtn">Save Playlist</button>
              </div>
            </div>
          </section>

          <section className="songs-section">
            <div className="table-header-info">
              <h2>Add Tracks to Playlist</h2>
            </div>

            <table className="song-list">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title & Artist</th>
                  <th>Album</th>
                  <th>Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="song-row">
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
                  <td><button className="add-track-btn">+ Add</button></td>
                </tr>
                <tr className="song-row">
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
                  <td><button className="add-track-btn">+ Add</button></td>
                </tr>
                <tr className="song-row">
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
                  <td><button className="add-track-btn">+ Add</button></td>
                </tr>
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