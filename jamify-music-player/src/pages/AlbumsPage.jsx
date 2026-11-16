import { Header } from '../components/Header';
import { BottomPlaybar } from '../components/BottomPlaybar';
import { Sidebar } from '../components/Sidebar';
import { musicLibrary } from '../data/music';
import { useState } from 'react';
import './AlbumsPage.css';

export function AlbumsPage({ currentIndex, setCurrentIndex,songs }) {
  const [searchItem, setSearchItem] = useState('');
  const allAlbums = musicLibrary.flatMap(artist => artist.albums.map(album => ({
    ...album,
      artist: artist.artist
  })));
  const [filteredAlbums, setFilteredAlbums] = useState(allAlbums);

  function handleSearchInput(e) {
    const searchTerm = e.target.value.toLowerCase();
    setSearchItem(searchTerm);

    const filteredAlbumsList = allAlbums.filter((album) => album.albumTitle.toLowerCase().includes(searchTerm) || album.artist.toLowerCase().includes(searchTerm));

    setFilteredAlbums(filteredAlbumsList);
    console.log(searchTerm);
  }
  


  return (
    <>
      <div className="app-container">

        <Sidebar />

        <main className="main-content">

          {/*<Header pageName='Albums' placeholder='Search albums...' />*/}

          <header className="top-header">
            <h1>Your Library</h1>
            <div className="search-box">
              <input
                type="text"
                id="searchInput"
                value={searchItem}
                placeholder="Search albums..."
                onInput={handleSearchInput}
              />

            </div>
          </header>

          <section className="albums-grid">

            {filteredAlbums.map((album) => {
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