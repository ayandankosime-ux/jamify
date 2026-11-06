import { Header } from './components/Header';
import { BottomPlaybar } from './components/BottomPlaybar';
import { Sidebar } from './components/Sidebar';
import './LocalFilesPage.css'

export function LocalFilesPage() {
  return (
    <>
      <div class="app-container">

        <Sidebar />

        <main class="main-content">

          <Header pageName='Local Files'/>

          <section class="import-section">
            <div class="drop-zone" id="dropZone">
              <div class="drop-icon">📁</div>
              <div class="drop-text">
                <h3>Add Music Files</h3>
                <p>Drag & drop audio files here or click to browse</p>
              </div>
              <input type="file" id="fileInput" accept="audio/*" multiple hidden />
                <button class="browse-btn" onclick="document.getElementById('fileInput').click()">Choose Files</button>
            </div>
          </section>

          <section class="songs-section">
            <div class="table-header-info">
              <h2>Scanned Tracks (<span id="localTrackCount">3</span>)</h2>
            </div>

            <table class="song-list">
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
                <tr class="song-row" data-src="tracks/song1.mp3">
                  <td>01</td>
                  <td class="track-details">
                    <div class="thumb file-icon">🎵</div>
                    <div>
                      <p class="title">Doomed</p>
                      <p class="artist">Moses Sumney</p>
                    </div>
                  </td>
                  <td class="file-path">Doomed_Moses_Sumney.mp3</td>
                  <td>10.4 MB</td>
                  <td>4:30</td>
                </tr>
                <tr class="song-row" data-src="tracks/song2.mp3">
                  <td>02</td>
                  <td class="track-details">
                    <div class="thumb file-icon">🎵</div>
                    <div>
                      <p class="title">James Curran</p>
                      <p class="artist">Los Angeles</p>
                    </div>
                  </td>
                  <td class="file-path">James_Curran_LA.mp3</td>
                  <td>7.1 MB</td>
                  <td>3:00</td>
                </tr>
                <tr class="song-row" data-src="tracks/song3.mp3">
                  <td>03</td>
                  <td class="track-details">
                    <div class="thumb file-icon">🎵</div>
                    <div>
                      <p class="title">Adam Grason</p>
                      <p class="artist">Orlando</p>
                    </div>
                  </td>
                  <td class="file-path">Adam_Grason_Orlando.mp3</td>
                  <td>5.8 MB</td>
                  <td>2:30</td>
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