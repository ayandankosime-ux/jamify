import { Header } from '../components/Header';
import { BottomPlaybar } from '../components/BottomPlaybar';
import { Sidebar } from '../components/Sidebar';
import { musicLibrary } from '../data/music';
import { Link } from 'react-router';
import './ArtistsPage.css';


export function ArtistsPage({ currentIndex, setCurrentIndex, songs }) {
  const artists = musicLibrary;

  return (
    <>
      <div className="app-container">

        <Sidebar />

        <main className="main-content">

          <Header pageName='Artists' placeholder='Search artists...' />

          <section className="artists-grid">

            {artists.map((artist) => {
              return (
                <div className="artist-card" data-artist="Moses Sumney" key={artist.artistId}>
                  <img className="artist-avatar avatar-1" src={artist.artistImage}/>
                  <div className="artist-info">
                    <h3 ><Link to='/artist-details' className="artist-name">{artist.artist}</Link></h3>
                    <span className="artist-meta">{artist.albums.length} Album • {} Tracks</span>
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