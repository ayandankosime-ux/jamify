import { Header } from '../components/Header';
import { BottomPlaybar } from '../components/BottomPlaybar';
import { Sidebar } from '../components/Sidebar';
import './ArtistsPage.css'
import { Link } from 'react-router';


export function ArtistsPage({ currentIndex, setCurrentIndex, songs }) {
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
                  <img className="artist-avatar avatar-1" src={song.artistImage}/>
                  <div className="artist-info">
                    <h3 className="artist-name"><Link to='/artist-details'>{song.artist}</Link></h3>
                    <span className="artist-meta">{song.albumCount} Album • {song.tracks} Tracks</span>
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