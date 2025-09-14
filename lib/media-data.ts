export interface VideoProject {
  id: string
  title: string
  description: string
  videoUrl: string
  thumbnailUrl?: string
  date?: string
  duration?: string
  tags?: string[]
  featured?: boolean
  category?: 'showreel' | 'documentary' | 'promotional' | 'event' | 'creative'
}

export interface PhotoAlbum {
  id: string
  title: string
  description: string
  albumUrl: string
  localPhotos: string[] // Array of local photo paths (up to 20 photos)
  coverImageUrl?: string
  date?: string
  imageCount?: number
  tags?: string[]
  featured?: boolean
  category?: 'photography' | 'events' | 'travel' | 'portraits' | 'commercial' | 'personal'
}

// Video Projects Data
export const videoProjects: VideoProject[] = [
  {
    id: "showreel-2024",
    title: "2024 Showreel",
    description: "A comprehensive showcase of my best video work from 2024, featuring cinematic storytelling and technical expertise.",
    videoUrl: "https://drive.google.com/file/d/1Ly_wOraeMngsvn84HUS9JUvyoEyUPdTg/preview",
    featured: true,
    category: "showreel"
  },
  {
    id: "corporate-documentary",
    title: "Corporate Documentary",
    description: "Behind-the-scenes documentary showcasing company culture and team collaboration.",
    videoUrl: "https://drive.google.com/file/d/YOUR_VIDEO_ID_2/preview", // Replace with your actual video URL
    featured: true,
    category: "documentary"
  },
  {
    id: "product-promo",
    title: "Product Launch Promo",
    description: "Dynamic promotional video for a tech product launch with motion graphics and animations.",
    videoUrl: "https://drive.google.com/file/d/YOUR_VIDEO_ID_3/preview", // Replace with your actual video URL
    featured: true,
    category: "promotional"
  }
]

// Photo Albums Data
export const photoAlbums: PhotoAlbum[] = [
  {
    id: "travel-photos-2024",
    title: "Michigan Trip 2025",
    description: "Some flicks from my senior trip up to Michigan. I got some really nice pictures from the Silver Lake and Sleeping Bear sand dunes, and Mackinaw Island. Notably my favorite trip 😍.",
    albumUrl: "https://photos.app.goo.gl/7YMvAezGRTj8zYdj7", // Your existing album URL
    localPhotos: [
      "/work/Michigan/Vador-4.jpg",
      "/work/Michigan/Vador-17.jpg",
      "/work/Michigan/Vador-34.jpg",
      "/work/Michigan/Vador-78.jpg",
      "/work/Michigan/Vador-82.jpg",
      "/work/Michigan/Vador-130.jpg",
      "/work/Michigan/Vador-165.jpg",
      "/work/Michigan/Vador-179.jpg",
      "/work/Michigan/Vador-248.jpg",
      "/work/Michigan/Vador-262.jpg",
      "/work/Michigan/Vador-276.jpg",
      "/work/Michigan/Vador-294.jpg",
      "/work/Michigan/Vador-311.jpg",
      "/work/Michigan/Vador-330.jpg",
      "/work/Michigan/Vador-340.jpg",
    ],
    date: "2025",
    imageCount: 342,
    tags: ["travel", "landscape", "nature"],
    featured: true,
    category: "travel"
  },
  {
    id: "event-photography",
    title: "Wedding Ceremonials",
    description: "A collection of wedding ceremonial photography, a personal favorite of mine to capture.",
    albumUrl: "", // Replace with your actual album URL
    localPhotos: [
      "/work/wedding/DSVR-33.jpg",
      "/work/wedding/DSVR-75.jpg",
      "/work/wedding/NWR-207.jpg",
      "/work/wedding/Vador-3.jpg",
      "/work/wedding/Vador-21.jpg",
      "/work/wedding/Vador-36.jpg",
      "/work/wedding/Vador-47.jpg",
      "/work/wedding/Vador-51.jpg",
      "/work/wedding/Vador-122.jpg",
      "/work/wedding/Vador-134.jpg",
      "/work/wedding/Vador-180.jpg",
      "/work/wedding/Vador-249.jpg",
    ],
    date: "2024-2025",
    imageCount: 120,
    tags: ["wedding", "professional"],
    featured: true,
    category: "events"
  },
  {
    id: "portrait-session",
    title: "Portrait Sessions",
    description: "A few images from my favorite portrait sessions I've done recently.",
    albumUrl: "", // Replace with your actual album URL
    localPhotos: [
      "/work/portraits/Vador-7.jpg",
      "/work/portraits/Vador-3.jpg",
      "/work/portraits/Vador-4.jpg",
      "/work/portraits/Vador-15.jpg",
      "/work/portraits/Vador-21.jpg",
      "/work/portraits/Vador-22.jpg",
      "/work/portraits/Vador-147.jpg",
      "/work/portraits/Vador-155.jpg",
      "/work/portraits/Vador-214.jpg",
      "/work/portraits/Vador-358.jpg",
      "/work/portraits/Vador-399.jpg",
    ],
    date: "2024-2025",
    imageCount: 78,
    tags: ["portraits", "professional"],
    category: "portraits"
  }
]

// Helper functions
export function getFeaturedVideos(): VideoProject[] {
  return videoProjects.filter(video => video.featured)
}

export function getFeaturedAlbums(): PhotoAlbum[] {
  return photoAlbums.filter(album => album.featured)
}

export function getVideosByCategory(category: string): VideoProject[] {
  return videoProjects.filter(video => video.category === category)
}

export function getAlbumsByCategory(category: string): PhotoAlbum[] {
  return photoAlbums.filter(album => album.category === category)
}

export function getAllVideoCategories(): string[] {
  const categories = videoProjects.map(video => video.category).filter(Boolean)
  return Array.from(new Set(categories)) as string[]
}

export function getAllAlbumCategories(): string[] {
  const categories = photoAlbums.map(album => album.category).filter(Boolean)
  return Array.from(new Set(categories)) as string[]
}

// Instructions for setup:
/*
To add your own content:

VIDEO PROJECTS:
1. Upload your videos to Google Drive
2. Get the shareable link and replace '/view' with '/preview'
3. Replace the placeholder video URLs with your actual Google Drive video URLs
4. Update titles, descriptions, and metadata
5. Add your own tags and categories

PHOTO ALBUMS:
Since Google Photos doesn't allow direct iframe embedding, you have two options:

OPTION 1 - Use PublicAlbum.org (Recommended):
1. Open your Google Photos album and click "Share" → "Create link"
2. Copy the URL (looks like: https://photos.app.goo.gl/...)
3. Go to https://www.publicalbum.org/blog/embedding-google-photos-albums
4. Paste your Google Photos URL and generate an embed code
5. Replace the placeholder album URLs with the generated embed URLs
6. Update titles, descriptions, and image counts

OPTION 2 - Use the fallback display:
1. Just paste your Google Photos album URLs directly
2. The component will show a nice fallback card with album info
3. Users can click "View Album" to open the album in a new tab

LOCAL PHOTOS:
1. Add up to 20 photos to the /public/work/ directory
2. Update the localPhotos array with the file paths
3. Photos will display in a carousel with thumbnail navigation
4. If you have more than 20 photos, only the first 20 will show in thumbnails

The system will automatically handle both approaches.
*/
