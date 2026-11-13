import { BottomPlaybar } from '../components/BottomPlaybar';
import { Sidebar } from '../components/Sidebar';
import './LikedSongsPage.css'

export function LikedSongsPage({ currentIndex, setCurrentIndex, songs }) {
  const likedSongs = songs.filter((song) => song.isLiked === true);

  return (
    <>
      <div className="app-container">

        <Sidebar />

        <main className="main-content">

          <section className="liked-hero">
            <div className="hero-icon">❤️</div>
            <div className="hero-details">
              <span className="hero-type">PLAYLIST</span>
              <h1>Liked Songs</h1>
              <p className="hero-meta"><span id="likedCount">{likedSongs.length}</span> tracks saved</p>
            </div>
          </section>

          <section className="songs-section">
            <table className="song-list">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title & Artist</th>
                  <th>Album</th>
                  <th>Time</th>
                  <th></th>
                </tr>
              </thead>
              <tbody id="likedSongsBody">

                {


                  likedSongs.map((song, index) => {
                    function handleClick() {
                      const originalIndex = songs.findIndex((s) => s.id === song.id);

                      setCurrentIndex(originalIndex);
                    }

                    function handleLikeButtonClick() {
                    if (song.isLiked === true) {
                      song.isLiked = false;

                    } else {
                      song.isLiked = true;

                    }

                    console.log(song.isLiked);
                  }

                    return (
                      <tr className="song-row" data-src={song.audio} key={song.id} onClick={handleClick}>
                        <td>{index + 1}</td>
                        <td className="track-details">
                          <img className="thumb cover-1" src={song.albumImage} />
                          <div>
                            <p className="title">{song.title}</p>
                            <p className="artist">{song.artist}</p>
                          </div>
                        </td>
                        <td>{song.album}</td>
                        <td>4:30</td>
                        <td><button className="remove-like-btn" title="Remove from Liked" onClick={handleLikeButtonClick}>❤️</button></td>
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
          songs={songs}
        />

      </div>
    </>
  )
}