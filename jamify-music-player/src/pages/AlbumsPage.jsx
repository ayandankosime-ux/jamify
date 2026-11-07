import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import './AlbumsPage.css'
import { BottomPlaybar } from './components/BottomPlaybar';

export function AlbumsPage() {
  return (
    <>
      <div className="app-container">

        <Sidebar />

        <main className="main-content">

          <Header pageName='Albums' placeholder='Search albums...'/>

          <section className="albums-grid">

            <div className="album-card" data-album="Arofan">
              <div className="album-cover cover-1"></div>
              <div className="album-info">
                <h3 className="album-title">Arofan</h3>
                <p className="album-artist">Moses Sumney</p>
                <span className="album-meta">12 Tracks • 2023</span>
              </div>
            </div>

            <div className="album-card" data-album="Amusing Dragon">
              <div className="album-cover cover-2"></div>
              <div className="album-info">
                <h3 className="album-title">Amusing Dragon</h3>
                <p className="album-artist">James Curran</p>
                <span className="album-meta">8 Tracks • 2022</span>
              </div>
            </div>

            <div className="album-card" data-album="Kasara">
              <div className="album-cover cover-3"></div>
              <div className="album-info">
                <h3 className="album-title">Kasara</h3>
                <p className="album-artist">Adam Grason</p>
                <span className="album-meta">10 Tracks • 2024</span>
              </div>
            </div>

            <div className="album-card" data-album="Mabon Story">
              <div className="album-cover cover-4"></div>
              <div className="album-info">
                <h3 className="album-title">Mabon Story</h3>
                <p className="album-artist">Virgil Pana</p>
                <span className="album-meta">14 Tracks • 2021</span>
              </div>
            </div>

            <div className="album-card" data-album="Midnight Blue">
              <div className="album-cover cover-5"></div>
              <div className="album-info">
                <h3 className="album-title">Midnight Blue</h3>
                <p className="album-artist">Various Artists</p>
                <span className="album-meta">9 Tracks • 2023</span>
              </div>
            </div>

            <div className="album-card" data-album="Sunset Echoes">
              <div className="album-cover cover-6"></div>
              <div className="album-info">
                <h3 className="album-title">Sunset Echoes</h3>
                <p className="album-artist">Lo-Fi Collective</p>
                <span className="album-meta">15 Tracks • 2025</span>
              </div>
            </div>

          </section>

        </main>

        <BottomPlaybar />

      </div>
    </>
  )
}