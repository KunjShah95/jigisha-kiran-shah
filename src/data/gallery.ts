export interface GalleryItem {
  id: string;
  /** Local path under public/ (used when Cloudinary is not configured). */
  src?: string;
  /** Cloudinary public_id (used when VITE_CLOUDINARY_CLOUD_NAME is set). */
  publicId?: string;
  alt: string;
  title: string;
  story: string;
  date: string; // ISO
}

export const GALLERY: GalleryItem[] = [
  {
    id: 'g-1',
    src: '/hero-image.jpeg',
    alt: 'Jigisha Kiran Shah with a family during a consultation',
    title: 'A family that almost did not ask',
    story:
      'They came in with no policy number, no file, and a lot of fear. Forty minutes later they left with a clear picture of what they actually owned — and what they did not. The image is from the day we finally put numbers on paper.',
    date: '2025-09-14',
  },
  {
    id: 'g-2',
    src: '/about.jpeg',
    alt: 'Jigisha Kiran Shah, LIC advisor, Ahmedabad',
    title: 'Twenty-two years in one frame',
    story:
      'This portrait was taken in the office at Orchid Legacy, Shela. Behind it are two decades of policy files, claim forms, and families who trusted the process enough to come back.',
    date: '2025-08-02',
  },
  {
    id: 'g-3',
    src: '/og-image.jpg',
    alt: 'Jigisha Kiran Shah brand image',
    title: 'The story behind the cover',
    story:
      'Every policy begins as a conversation. This image is the face of the practice — but the real work happens in the quieter rooms, over tea, with a calculator and a pen.',
    date: '2025-07-20',
  },
];

export function getGalleryItem(id: string): GalleryItem | undefined {
  return GALLERY.find((g) => g.id === id);
}