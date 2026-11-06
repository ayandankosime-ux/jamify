import { Sidebar } from './components/Sidebar'
import './ArtistsPage.css'
import { BottomPlaybar } from './components/BottomPlaybar'
import { Header } from './components/Header'



export function ArtistsPage() {
  return (
    <>
      <div class="app-container">

        <Sidebar />

        <main class="main-content">

          <Header pageName='Artists' placeholder='Search artists...'/>

          <section class="artists-grid">

            <div class="artist-card" data-artist="Moses Sumney">
              <div class="artist-avatar avatar-1"></div>
              <div class="artist-info">
                <h3 class="artist-name">Moses Sumney</h3>
                <span class="artist-meta">1 Album • 12 Tracks</span>
              </div>
            </div>

            <div class="artist-card" data-artist="James Curran">
              <div class="artist-avatar avatar-2"></div>
              <div class="artist-info">
                <h3 class="artist-name">James Curran</h3>
                <span class="artist-meta">1 Album • 8 Tracks</span>
              </div>
            </div>

            <div class="artist-card" data-artist="Adam Grason">
              <div class="artist-avatar avatar-3"></div>
              <div class="artist-info">
                <h3 class="artist-name">Adam Grason</h3>
                <span class="artist-meta">1 Album • 10 Tracks</span>
              </div>
            </div>

            <div class="artist-card" data-artist="Virgil Pana">
              <div class="artist-avatar avatar-4"></div>
              <div class="artist-info">
                <h3 class="artist-name">Virgil Pana</h3>
                <span class="artist-meta">2 Albums • 22 Tracks</span>
              </div>
            </div>

            <div class="artist-card" data-artist="Lo-Fi Collective">
              <div class="artist-avatar avatar-5"></div>
              <div class="artist-info">
                <h3 class="artist-name">Lo-Fi Collective</h3>
                <span class="artist-meta">3 Albums • 45 Tracks</span>
              </div>
            </div>

            <div class="artist-card" data-artist="Various Artists">
              <div class="artist-avatar avatar-6"></div>
              <div class="artist-info">
                <h3 class="artist-name">Various Artists</h3>
                <span class="artist-meta">5 Albums • 60 Tracks</span>
              </div>
            </div>

          </section>

        </main>

        <BottomPlaybar />

      </div>
    </>
  )
}