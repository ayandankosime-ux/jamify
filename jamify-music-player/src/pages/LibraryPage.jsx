import { Header } from './components/Header'
import { BottomPlaybar } from './components/BottomPlaybar'
import { Sidebar } from './components/Sidebar';
import { songs } from '../data/data';


export function LibraryPage() {
  return (
    <>
      <div class="app-container">

        <Sidebar />

        <main class="main-content">

          <Header pageName='Your Library' placeholder='Search local tracks...'/>

          <section class="collection-grid">
            <div class="card card-1">
              <span class="time-tag">Album</span>
              <div class="card-info">
                <h3>Doomed</h3>
                <p>Moses Sumney</p>
              </div>
            </div>
            <div class="card card-2">
              <span class="time-tag">Album</span>
              <div class="card-info">
                <h3>Los Angeles</h3>
                <p>James Curran</p>
              </div>
            </div>
            <div class="card card-3">
              <span class="time-tag">Album</span>
              <div class="card-info">
                <h3>Orlando</h3>
                <p>Adam Grason</p>
              </div>
            </div>
          </section>

          <section class="top-songs">
            <h2>Queue / Songs</h2>
            <table class="song-list">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title & Artist</th>
                  <th>Album</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr class="song-row" data-src="tracks/song1.mp3">
                  <td>01</td>
                  <td class="track-details">
                    <div class="thumb"></div>
                    <div>
                      <p class="title">Doomed</p>
                      <p class="artist">Moses Sumney</p>
                    </div>
                  </td>
                  <td>Arofan</td>
                  <td>4:30</td>
                </tr>
                <tr class="song-row" data-src="tracks/song2.mp3">
                  <td>02</td>
                  <td class="track-details">
                    <div class="thumb"></div>
                    <div>
                      <p class="title">James Curran</p>
                      <p class="artist">Los Angeles</p>
                    </div>
                  </td>
                  <td>Amusing Dragon</td>
                  <td>3:00</td>
                </tr>
                <tr class="song-row" data-src="tracks/song3.mp3">
                  <td>03</td>
                  <td class="track-details">
                    <div class="thumb"></div>
                    <div>
                      <p class="title">Adam Grason</p>
                      <p class="artist">Orlando</p>
                    </div>
                  </td>
                  <td>Kasara</td>
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