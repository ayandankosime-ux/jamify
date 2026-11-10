import { Header } from '../components/Header';
import { BottomPlaybar } from '../components/BottomPlaybar';
import { Sidebar } from '../components/Sidebar';
import { songs } from '../data/data';
import './ArtistsPage.css'


export function ArtistsPage({ currentIndex, setCurrentIndex }) {
  return (
    <>
      <div className="app-container">

        <Sidebar />

        <main className="main-content">

          <Header pageName='Artists' placeholder='Search artists...' />

          <section className="artists-grid">

            {songs.map((song) => {
              return (
                <div className="artist-card" data-artist="Moses Sumney" key={song.id}>
                  <img className="artist-avatar avatar-1" src={song.image}/>
                  <div className="artist-info">
                    <h3 className="artist-name">{song.artist}</h3>
                    <span className="artist-meta">{song.albumCount} Album • {song.tracks}</span>
                  </div>
                </div>
              )
            })}

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