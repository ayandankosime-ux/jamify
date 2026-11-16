import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { LibraryPage } from './pages/LibraryPage';
import { AlbumsPage } from './pages/AlbumsPage';
import { ArtistsPage } from './pages/ArtistsPage';
import { LikedSongsPage } from './pages/LikedSongsPage';
import { LocalFilesPage } from './pages/LocalFilesPage';
import { NewPlaylistsPage } from './pages/NewPlaylistsPage';
import './App.css';
import { ArtistsDetailPage } from './pages/ArtistsDetailPage';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [artistIndex, setArtistIndex] = useState(0);
  const [songs, setSongs] = useState([{
    title: 'Stand Tall',
    artist: 'Rapsody',
    albumImage: 'images/image-1.jpeg',
    artistImage: 'images/image-artist-1.jpeg',
    album: "Please Don't Cry",
    albumCount: 1,
    audio: 'media/Stand Tall(MP3_160K).mp3',
    id: '1',
    tracks: 13,
    year: '2024',
    isLiked: false
  }, {
    title: 'The Cut Off',
    artist: 'J. Cole',
    albumImage: 'images/image-2.jpeg',
    artistImage: 'images/image-artist-2.jpeg',
    album: "KOD",
    albumCount: 1,
    audio: 'media/The Cut Off(MP3_160K) (1).mp3',
    id: '2',
    tracks: 24,
    year: '2019',
    isLiked: true
  }, {
    title: 'TOO COOL',
    artist: 'Dear Silas',
    albumImage: 'images/image-3.jpeg',
    artistImage: 'images/image-artist-3.jpeg',
    album: "SophistiRatchet: RED",
    albumCount: 1,
    audio: 'media/TOO COOL (Clean Version)(MP3_160K).mp3',
    id: '3',
    tracks: 9,
    year: '2025',
    isLiked: true
  }]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <LibraryPage
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                songs={songs}
              />
            }
          />

          <Route
            path='/albums'
            element={
              <AlbumsPage
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                songs={songs}
              />
            }
          />

          <Route
            path='/artists'
            element={
              <ArtistsPage
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                songs={songs}
              />
            }
          />

          <Route
            path='/liked-songs'
            element={
              <LikedSongsPage
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                songs={songs}
              />
            }
          />

          <Route
            path='/local-files'
            element={
              <LocalFilesPage
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                songs={songs}
                setSongs={setSongs}
              />
            }
          />

          <Route
            path='/new-playlists'
            element={
              <NewPlaylistsPage
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                songs={songs}
                setSongs={setSongs}
              />
            }
          />

          <Route
            path='/artist-details'
            element={
              <ArtistsDetailPage
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                songs={songs}
              />}
          />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
