import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import './AlbumsPage.css'
import { BottomPlaybar } from './components/BottomPlaybar';

export function AlbumsPage() {
  return (
    <>
      <div class="app-container">

        <Sidebar />

        <main class="main-content">

          <Header pageName='Albums' placeholder='Search albums...'/>

          <section class="albums-grid">

            <div class="album-card" data-album="Arofan">
              <div class="album-cover cover-1"></div>
              <div class="album-info">
                <h3 class="album-title">Arofan</h3>
                <p class="album-artist">Moses Sumney</p>
                <span class="album-meta">12 Tracks • 2023</span>
              </div>
            </div>

            <div class="album-card" data-album="Amusing Dragon">
              <div class="album-cover cover-2"></div>
              <div class="album-info">
                <h3 class="album-title">Amusing Dragon</h3>
                <p class="album-artist">James Curran</p>
                <span class="album-meta">8 Tracks • 2022</span>
              </div>
            </div>

            <div class="album-card" data-album="Kasara">
              <div class="album-cover cover-3"></div>
              <div class="album-info">
                <h3 class="album-title">Kasara</h3>
                <p class="album-artist">Adam Grason</p>
                <span class="album-meta">10 Tracks • 2024</span>
              </div>
            </div>

            <div class="album-card" data-album="Mabon Story">
              <div class="album-cover cover-4"></div>
              <div class="album-info">
                <h3 class="album-title">Mabon Story</h3>
                <p class="album-artist">Virgil Pana</p>
                <span class="album-meta">14 Tracks • 2021</span>
              </div>
            </div>

            <div class="album-card" data-album="Midnight Blue">
              <div class="album-cover cover-5"></div>
              <div class="album-info">
                <h3 class="album-title">Midnight Blue</h3>
                <p class="album-artist">Various Artists</p>
                <span class="album-meta">9 Tracks • 2023</span>
              </div>
            </div>

            <div class="album-card" data-album="Sunset Echoes">
              <div class="album-cover cover-6"></div>
              <div class="album-info">
                <h3 class="album-title">Sunset Echoes</h3>
                <p class="album-artist">Lo-Fi Collective</p>
                <span class="album-meta">15 Tracks • 2025</span>
              </div>
            </div>

          </section>

        </main>

        <BottomPlaybar />

      </div>
    </>
  )
}