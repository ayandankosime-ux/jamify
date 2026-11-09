import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { LibraryPage } from './pages/LibraryPage';
import { AlbumsPage } from './pages/AlbumsPage';
import { ArtistsPage } from './pages/ArtistsPage';
import { LikedSongsPage } from './pages/LikedSongsPage';
import { LocalFilesPage } from './pages/LocalFilesPage';
import { NewPlaylistsPage } from './pages/NewPlaylistsPage';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LibraryPage currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>} />
          <Route path='/albums' element={<AlbumsPage currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>} />
          <Route path='/artists' element={<ArtistsPage currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>} />
          <Route path='/liked-songs' element={<LikedSongsPage currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>} />
          <Route path='/local-files' element={<LocalFilesPage currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>} />
          <Route path='/new-playlists' element={<NewPlaylistsPage currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
