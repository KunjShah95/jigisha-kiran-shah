// Cloudinary helpers for the gallery.
// Set VITE_CLOUDINARY_CLOUD_NAME in .env to switch image delivery to Cloudinary.
// When unset, the gallery falls back to local files in public/.

export const cloudName = (): string | undefined =>
  (import.meta as { env?: Record<string, string> }).env?.VITE_CLOUDINARY_CLOUD_NAME;

export const hasCloudinary = (): boolean => Boolean(cloudName());

export const cldUrl = (publicId: string, width: number): string => {
  const cloud = cloudName();
  if (!cloud) return '';
  // f_auto = format auto, q_auto = quality auto, c_fill + g_face = smart crop to face
  return `https://res.cloudinary.com/${cloud}/image/upload/f_auto,q_auto,w_${width},c_fill,g_face/${publicId}`;
};

export const cldSrcSet = (publicId: string): string =>
  [400, 800, 1200].map((w) => `${cldUrl(publicId, w)} ${w}w`).join(', ');