import { BottomPlaybar } from '../components/BottomPlaybar';
import { Sidebar } from '../components/Sidebar';
import { songs } from '../data/data';
import { useState } from 'react';


export function LibraryPage({ currentIndex, setCurrentIndex }) {
  const [searchItem, setSearchItem] = useState('');
  const [filteredSongs, setFilteredSongs] = useState(songs);

  const handleSearchInput = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchItem(searchTerm);

    const filteredList = songs.filter((song) => song.album.toLowerCase().includes(searchTerm) || song.artist.toLowerCase().includes(searchTerm) || song.title.toLowerCase().includes(searchTerm));

    setFilteredSongs(filteredList);
  }



  return (
    <>
      <div className="app-container">

        <Sidebar />

        <main className="main-content">

          {/* <Header pageName='Your Library' placeholder='Search local tracks...' /> */}

          <header className="top-header">
            <h1>Your Library</h1>
            <div className="search-box">
              <input
                type="text"
                id="searchInput"
                value={searchItem}
                placeholder="Search local tracks..."
                onInput={handleSearchInput}
              />

            </div>
          </header>

          <section className="collection-grid">

            {filteredSongs.map((song, index) => {
              return (
                <div className={`card card-${index + 1}`} key={song.id} >
                  <span className="time-tag">Album</span>
                  <div className="card-info">
                    <h3>{song.album}</h3>
                    <p>{song.artist}</p>
                  </div>
                </div>
              );
            })}

          </section>

          <section className="top-songs">
            <h2>Queue / Songs</h2>
            <table className="song-list">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title & Artist</th>
                  <th>Album</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>

                {filteredSongs.map((song, index) => {
                  function handleClick() {
                    const originalIndex = songs.findIndex((s) => s.id === song.id);

                    setCurrentIndex(originalIndex);
                  }

                  return (
                    <tr className="song-row" data-src={song.audio} key={song.id} onClick={handleClick}>
                      <td>{index + 1}</td>
                      <td className="track-details">
                        <img className="thumb" src={song.image} />
                        <div>
                          <p className="title">{song.title}</p>
                          <p className="artist">{song.artist}</p>
                        </div>
                      </td>
                      <td>{song.album}</td>
                      <td>4:30</td>
                    </tr>
                  )
                })}

              </tbody>
            </table>
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