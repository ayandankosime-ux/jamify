export const musicLibrary = [
  {
    artistId: "artist-1",
    artistName: 'Rapsody',
    verified: true,
    monthlyListeners: "45,210",
    bannerImage: 'images/image-artist-1.jpeg',
    albums: [
      {
        albumId: "album-1",
        albumTitle: "Please Don't Cry",
        releaseYear: 2023,
        coverImage: 'images/image-1.jpeg',
        songs: [
          {
            id: "song-101",
            title: 'Stand Tall',
            duration: "2:09",
            audio: 'media/Stand Tall(MP3_160K).mp3',
            plays: 1240500,
          }
        ],
      },
      {
        albumId: "album-2",
        albumTitle: "Grae",
        releaseYear: 2020,
        coverImage: "/images/covers/grae.jpg",
        songs: [
          {
            id: "song-103",
            title: "Virile",
            duration: "4:16",
            audio: "/tracks/virile.mp3",
            plays: "2,100,400",
          },
        ],
      },
    ],
  },
  {
    artistId: "artist-2",
    artistName: 'J. Cole',
    verified: false,
    monthlyListeners: "12,800",
    bannerImage: 'images/image-artist-2.jpeg',
    albums: [
      {
        albumId: "album-3",
        albumTitle: "KOD",
        releaseYear: 2019,
        coverImage: 'images/image-2.jpeg',
        songs: [
          {
            id: "song-201",
            title: 'The Cut Off',
            duration: "3:57",
            audio: 'media/The Cut Off(MP3_160K) (1).mp3',
            plays: "430,100",
          },
        ],
      },
    ],
  },
];