import { Header } from './components/Header'
import { BottomPlaybar } from './components/BottomPlaybar'
import { Sidebar } from './components/Sidebar';
import { songs } from '../data/data';


export function LibraryPage() {
  return (
    <>
      <div className="app-container">

        <Sidebar />

        <main className="main-content">

          <Header pageName='Your Library' placeholder='Search local tracks...'/>

          <section className="collection-grid">
            
            <div className="card card-1">
              <span className="time-tag">Album</span>
              <div className="card-info">
                <h3>Doomed</h3>
                <p>Moses Sumney</p>
              </div>
            </div>
            <div className="card card-2">
              <span className="time-tag">Album</span>
              <div className="card-info">
                <h3>Los Angeles</h3>
                <p>James Curran</p>
              </div>
            </div>
            <div className="card card-3">
              <span className="time-tag">Album</span>
              <div className="card-info">
                <h3>Orlando</h3>
                <p>Adam Grason</p>
              </div>
            </div>
          </section>

          <section className="top-songs">
            <h2>Queue / Songs</h2>
            <table className="song-list">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title & Artist</th>
                  <th>Album</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="song-row" data-src="tracks/song1.mp3">
                  <td>01</td>
                  <td className="track-details">
                    <div className="thumb"></div>
                    <div>
                      <p className="title">Doomed</p>
                      <p className="artist">Moses Sumney</p>
                    </div>
                  </td>
                  <td>Arofan</td>
                  <td>4:30</td>
                </tr>
                <tr className="song-row" data-src="tracks/song2.mp3">
                  <td>02</td>
                  <td className="track-details">
                    <div className="thumb"></div>
                    <div>
                      <p className="title">James Curran</p>
                      <p className="artist">Los Angeles</p>
                    </div>
                  </td>
                  <td>Amusing Dragon</td>
                  <td>3:00</td>
                </tr>
                <tr className="song-row" data-src="tracks/song3.mp3">
                  <td>03</td>
                  <td className="track-details">
                    <div className="thumb"></div>
                    <div>
                      <p className="title">Adam Grason</p>
                      <p className="artist">Orlando</p>
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