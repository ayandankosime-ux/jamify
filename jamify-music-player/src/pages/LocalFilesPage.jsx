import { Header } from '../components/Header';
import { BottomPlaybar } from '../components/BottomPlaybar';
import { Sidebar } from '../components/Sidebar';
import './LocalFilesPage.css'

export function LocalFilesPage({ currentIndex, setCurrentIndex, songs }) {
  return (
    <>
      <div className="app-container">

        <Sidebar />

        <main className="main-content">

          <Header pageName='Local Files' placeholder='Search local files...' />

          <section className="import-section">
            <div className="drop-zone" id="dropZone">
              <div className="drop-icon">📁</div>
              <div className="drop-text">
                <h3>Add Music Files</h3>
                <p>Drag & drop audio files here or click to browse</p>
              </div>
              <input type="file" id="fileInput" accept="audio/*" multiple hidden />
              <button className="browse-btn" onclick="document.getElementById('fileInput').click()">Choose Files</button>
            </div>
          </section>

          <section className="songs-section">
            <div className="table-header-info">
              <h2>Scanned Tracks (<span id="localTrackCount">{songs.length}</span>)</h2>
            </div>

            <table className="song-list">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title & Artist</th>
                  <th>File Name</th>
                  <th>Size</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody id="localFilesBody">

                {songs.map((song, index) => {
                  return (
                    <tr className="song-row" data-src={song.audio} key={song.id}>
                      <td>{index + 1}</td>
                      <td className="track-details">
                        <div className="thumb file-icon">🎵</div>
                        <div>
                          <p className="title">{song.title}</p>
                          <p className="artist">{song.artist}</p>
                        </div>
                      </td>
                      <td className="file-path">Doomed_Moses_Sumney.mp3</td>
                      <td>10.4 MB</td>
                      <td>4:30</td>
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
          songs={songs}
        />

      </div>
    </>
  )
}