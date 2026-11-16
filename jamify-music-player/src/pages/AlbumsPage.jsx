import { Header } from '../components/Header';
import { BottomPlaybar } from '../components/BottomPlaybar';
import { Sidebar } from '../components/Sidebar';
import { musicLibrary } from '../data/music';
import './AlbumsPage.css';

export function AlbumsPage({ currentIndex, setCurrentIndex,songs }) {
  const allAlbums = musicLibrary.flatMap(artist => artist.albums.map(album => ({
    ...album,
      artist: artist.artist
  })));
  

  return (
    <>
      <div className="app-container">

        <Sidebar />

        <main className="main-content">

          <Header pageName='Albums' placeholder='Search albums...' />

          <section className="albums-grid">

            {allAlbums.map((album) => {
              return (
                <div className="album-card" data-album="Arofan" key={album.albumId}>
                  <img className="album-cover cover-1" src={album.coverArt}/>
                  <div className="album-info">
                    <h3 className="album-title">{album.albumTitle}</h3>
                    <p className="album-artist">{album.artist}</p>
                    <span className="album-meta">{album.tracks.length} Tracks • {album.year}</span>
                  </div>
                </div>
              )
            })}

          </section>

        </main>

        <BottomPlaybar
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          songs={songs}
        />

      </div>
    </>
  )
}