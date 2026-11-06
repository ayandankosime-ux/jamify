import { Link } from 'react-router'
import './Sidebar.css'

export function Sidebar() {
  return (
    <>
      <aside class="sidebar">
        <div class="logo">
          <h2>MusicPlayer</h2>
        </div>

        <nav class="nav-section">
          <ul>
            <li><Link to="/">Library</Link></li>
            <li><Link to="/albums">Albums</Link></li>
            <li><Link to="/artists">Artists</Link></li>
            <li><Link to="/liked-songs">Liked Songs</Link></li>
          </ul>
        </nav>

        <div class="nav-section">
          <p class="menu-label">PLAYLISTS</p>
          <ul>
            <li><Link to="/local-files">Local Files</Link></li>
            <li><Link to="/new-playlists" class="add-btn">+ New Playlist</Link></li>
          </ul>
        </div>
      </aside>
    </>
  )
}