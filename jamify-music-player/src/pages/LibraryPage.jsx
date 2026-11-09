import { Header } from '../components/Header';
import { BottomPlaybar } from '../components/BottomPlaybar';
import { Sidebar } from '../components/Sidebar';
import { songs } from '../data/data';


export function LibraryPage({ currentIndex, setCurrentIndex }) {


  return (
    <>
      <div className="app-container">

        <Sidebar />

        <main className="main-content">

          <Header pageName='Your Library' placeholder='Search local tracks...' />

          <section className="collection-grid">

            {songs.map((song, index ) => {
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

                {songs.map((song, index) => {
                  function handleClick() {
                    setCurrentIndex(index);
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