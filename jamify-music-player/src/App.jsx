import { BrowserRouter, Route, Routes } from 'react-router'
import { LibraryPage } from './pages/LibraryPage'
import { AlbumsPage } from './pages/AlbumsPage'
import { ArtistsPage } from './pages/ArtistsPage'
import { LikedSongsPage } from './pages/LikedSongsPage'
import './App.css'
import { LocalFilesPage } from './pages/LocalFilesPage'
import { NewPlaylistsPage } from './pages/NewPlaylistsPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LibraryPage />} />
          <Route path='/albums' element={<AlbumsPage />} />
          <Route path='/artists' element={<ArtistsPage />} />
          <Route path='/liked-songs' element={<LikedSongsPage />} />
          <Route path='/local-files' element={<LocalFilesPage />} />
          <Route path='/new-playlists' element={<NewPlaylistsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
