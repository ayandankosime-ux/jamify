import { Link } from 'react-router'
import './Sidebar.css'

export function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <h2>MusicPlayer</h2>
        </div>

        <nav className="nav-section">
          <ul>
            <li><Link to="/">Library</Link></li>
            <li><Link to="/albums">Albums</Link></li>
            <li><Link to="/artists">Artists</Link></li>
            <li><Link to="/liked-songs">Liked Songs</Link></li>
          </ul>
        </nav>

        <div className="nav-section">
          <p className="menu-label">PLAYLISTS</p>
          <ul>
            <li><Link to="/local-files">Local Files</Link></li>
            <li><Link to="/new-playlists" className="add-btn">+ New Playlist</Link></li>
          </ul>
        </div>
      </aside>
    </>
  )
}