import { BottomPlaybar } from './components/BottomPlaybar';
import { Sidebar } from './components/Sidebar';
import './NewPlaylistsPage.css'

export function NewPlaylistsPage() {
  return (
    <>
      <div class="app-container">

        <Sidebar />

        <main class="main-content">

          <header class="top-header">
            <h1>Create Playlist</h1>
          </header>

          <section class="create-playlist-section">
            <div class="playlist-form-card">
              <div class="playlist-cover-uploader" id="coverUploader" title="Click to change cover">
                <span>🎵</span>
                <p>Upload Cover</p>
              </div>

              <div class="playlist-inputs">
                <div class="input-group">
                  <label for="playlistName">Playlist Name</label>
                  <input type="text" id="playlistName" placeholder="My Awesome Playlist" value="My Playlist #1" />
                </div>

                <div class="input-group">
                  <label for="playlistDesc">Description</label>
                  <textarea id="playlistDesc" placeholder="Add an optional description">Fresh local tracks and late-night vibes.</textarea>
                </div>

                <button class="save-playlist-btn" id="savePlaylistBtn">Save Playlist</button>
              </div>
            </div>
          </section>

          <section class="songs-section">
            <div class="table-header-info">
              <h2>Add Tracks to Playlist</h2>
            </div>

            <table class="song-list">
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
                  <td>4:30</td>
                  <td><button class="add-track-btn">+ Add</button></td>
                </tr>
                <tr class="song-row">
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
                  <td><button class="add-track-btn">+ Add</button></td>
                </tr>
                <tr class="song-row">
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
                  <td><button class="add-track-btn">+ Add</button></td>
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