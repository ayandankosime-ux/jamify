import { Sidebar } from './components/Sidebar'
import './ArtistsPage.css'
import { BottomPlaybar } from './components/BottomPlaybar'
import { Header } from './components/Header'



export function ArtistsPage() {
  return (
    <>
      <div className="app-container">

        <Sidebar />

        <main className="main-content">

          <Header pageName='Artists' placeholder='Search artists...'/>

          <section className="artists-grid">

            <div className="artist-card" data-artist="Moses Sumney">
              <div className="artist-avatar avatar-1"></div>
              <div className="artist-info">
                <h3 className="artist-name">Moses Sumney</h3>
                <span className="artist-meta">1 Album • 12 Tracks</span>
              </div>
            </div>

            <div className="artist-card" data-artist="James Curran">
              <div className="artist-avatar avatar-2"></div>
              <div className="artist-info">
                <h3 className="artist-name">James Curran</h3>
                <span className="artist-meta">1 Album • 8 Tracks</span>
              </div>
            </div>

            <div className="artist-card" data-artist="Adam Grason">
              <div className="artist-avatar avatar-3"></div>
              <div className="artist-info">
                <h3 className="artist-name">Adam Grason</h3>
                <span className="artist-meta">1 Album • 10 Tracks</span>
              </div>
            </div>

            <div className="artist-card" data-artist="Virgil Pana">
              <div className="artist-avatar avatar-4"></div>
              <div className="artist-info">
                <h3 className="artist-name">Virgil Pana</h3>
                <span className="artist-meta">2 Albums • 22 Tracks</span>
              </div>
            </div>

            <div className="artist-card" data-artist="Lo-Fi Collective">
              <div className="artist-avatar avatar-5"></div>
              <div className="artist-info">
                <h3 className="artist-name">Lo-Fi Collective</h3>
                <span className="artist-meta">3 Albums • 45 Tracks</span>
              </div>
            </div>

            <div className="artist-card" data-artist="Various Artists">
              <div className="artist-avatar avatar-6"></div>
              <div className="artist-info">
                <h3 className="artist-name">Various Artists</h3>
                <span className="artist-meta">5 Albums • 60 Tracks</span>
              </div>
            </div>

          </section>

        </main>

        <BottomPlaybar />

      </div>
    </>
  )
}