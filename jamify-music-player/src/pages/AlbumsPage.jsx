import { Header } from '../components/Header';
import { BottomPlaybar } from '../components/BottomPlaybar';
import { Sidebar } from '../components/Sidebar';
import './AlbumsPage.css';

export function AlbumsPage({ currentIndex, setCurrentIndex,songs }) {
  return (
    <>
      <div className="app-container">

        <Sidebar />

        <main className="main-content">

          <Header pageName='Albums' placeholder='Search albums...' />

          <section className="albums-grid">

            {songs.map((song) => {
              return (
                <div className="album-card" data-album="Arofan" key={song.id}>
                  <img className="album-cover cover-1" src={song.albumImage}/>
                  <div className="album-info">
                    <h3 className="album-title">{song.album}</h3>
                    <p className="album-artist">{song.artist}</p>
                    <span className="album-meta">{song.tracks} Tracks • {song.year}</span>
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