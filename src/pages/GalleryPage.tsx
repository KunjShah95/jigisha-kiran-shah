import { useState, useRef } from 'react';
import { Image as ImageIcon, Upload, X, Calendar } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { GALLERY, type GalleryItem } from '../data/gallery';
import { cldUrl, cldSrcSet, hasCloudinary, cloudName } from '../lib/cloudinary';

const uploadPreset = (): string | undefined =>
  (import.meta as { env?: Record<string, string> }).env?.VITE_CLOUDINARY_UPLOAD_PRESET;

const resolveSrc = (item: GalleryItem): string => {
  if (item.publicId && hasCloudinary()) return cldUrl(item.publicId, 600);
  return item.src ?? '';
};

const MAX_BYTES = 4 * 1024 * 1024;
const ALLOWED = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

export default function GalleryPage() {
  useSEO({
    title: 'Gallery | Stories in Pictures — Jigisha Kiran Shah, LIC Advisor',
    description:
      'A visual gallery of client moments and behind-the-scenes stories from 22+ years of LIC advising in Ahmedabad. Each image carries a short story.',
    path: '/gallery',
    keywords: 'LIC advisor gallery Ahmedabad, Jigisha Kiran Shah photos, insurance stories images',
    breadcrumbLabel: 'Gallery',
  });
  useScrollReveal();

  const [items, setItems] = useState<GalleryItem[]>(GALLERY);
  const [preview, setPreview] = useState<string | null>(null);
  const [caption, setCaption] = useState('');
  const [story, setStory] = useState('');
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File | null) => {
    setError(null);
    if (!file) return;
    if (!ALLOWED.includes(file.type)) {
      setError('Please choose a JPG, PNG, WebP or GIF image.');
      return;
    }
    if (file.size > MAX_BYTES) {
      setError('Image is larger than 4 MB. Please compress it first.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.onerror = () => setError('Could not read the image. Try another file.');
    reader.readAsDataURL(file);
  };

  const handleAdd = () => {
    if (!preview || !consent) return;
    const newItem: GalleryItem = {
      id: `local-${Date.now()}`,
      src: preview,
      alt: caption || 'Uploaded gallery image',
      title: caption || 'Untitled moment',
      story: story || 'A short story for this image is yet to be written.',
      date: new Date().toISOString().slice(0, 10),
    };
    setItems((prev) => [newItem, ...prev]);
    setPreview(null);
    setCaption('');
    setStory('');
    setConsent(false);
    if (fileRef.current) fileRef.current.value = '';
  };

  const openCloudinaryWidget = () => {
    const cloud = cloudName();
    const preset = uploadPreset();
    if (!cloud || !preset) {
      setError('Set VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UPLOAD_PRESET in .env first.');
      return;
    }
    const loadScript = () =>
      new Promise<void>((resolve, reject) => {
        if ((window as any).cloudinary) return resolve();
        const s = document.createElement('script');
        s.src = 'https://upload-widget.cloudinary.com/global/all.js';
        s.async = true;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error('Failed to load Cloudinary widget'));
        document.body.appendChild(s);
      });

    loadScript()
      .then(() => {
        const widget = (window as any).cloudinary!.createUploadWidget(
          { cloudName: cloud, uploadPreset: preset, multiple: false, sources: ['local', 'url', 'camera'] },
          (err: unknown, result: any) => {
            if (err) {
              setError('Upload failed. Check your upload preset.');
              return;
            }
            if (result?.event === 'success') {
              const info = result.info;
              const newItem: GalleryItem = {
                id: info.public_id,
                publicId: info.public_id,
                alt: info.original_filename || 'Uploaded image',
                title: caption || info.original_filename || 'Uploaded moment',
                story: story || 'A short story for this image is yet to be written.',
                date: new Date().toISOString().slice(0, 10),
              };
              setItems((prev) => [newItem, ...prev]);
              setCaption('');
              setStory('');
              setConsent(false);
            }
          },
        );
        widget.open();
      })
      .catch(() => setError('Could not load Cloudinary upload widget.'));
  };

  const handleClear = () => {
    setPreview(null);
    setCaption('');
    setStory('');
    setConsent(false);
    setError(null);
    if (fileRef.current) fileRef.current.value = '';
  };
  return (
    <section className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-cream relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl mb-10">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">Gallery</p>
          <h1 className="text-3xl md:text-4xl font-display font-medium text-midnight mb-4">Stories in pictures</h1>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed font-light">Moments from 22+ years of advising Ahmedabad families — each image carries a short story. Upload your own moment below; previews stay in this browser until you save them elsewhere.</p>
        </div>

        <div className="bg-white rounded-2xl border border-border shadow-sm p-6 lg:p-8 mb-12">
          <h2 className="text-xl font-display font-bold text-midnight mb-4 flex items-center gap-2">
            <Upload className="w-5 h-5 text-gold-dark" aria-hidden="true" /> Add a moment
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-midnight mb-2" htmlFor="gallery-file">Image</label>
              <input id="gallery-file" ref={fileRef} type="file" accept="image/*" onChange={(e) => handleFile(e.target.files?.[0] ?? null)} className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-midnight file:text-white hover:file:bg-gold cursor-pointer" />
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
              <p className="mt-2 text-xs text-gray-500">JPG, PNG, WebP or GIF, up to 4 MB.</p>
              {preview && (
                <div className="mt-4 relative inline-block">
                  <img src={preview} alt="Preview" className="max-h-48 rounded-xl border border-border object-cover" />
                  <button type="button" onClick={handleClear} className="absolute -top-2 -right-2 bg-midnight text-white rounded-full p-1 hover:bg-gold" aria-label="Remove preview">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-midnight mb-2" htmlFor="gallery-caption">Title / caption</label>
                <input id="gallery-caption" type="text" value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="A short title for this moment" className="w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-sm font-bold text-midnight mb-2" htmlFor="gallery-story">Short story</label>
                <textarea id="gallery-story" value={story} onChange={(e) => setStory(e.target.value)} rows={4} placeholder="What happened in this moment?" className="w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:border-gold resize-none" />
              </div>
              <label className="flex items-start gap-2 text-xs text-gray-600">
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5" />
                <span>I confirm I have the subject's consent to publish this image and story (required).</span>
              </label>
              <button type="button" onClick={handleAdd} disabled={!preview || !consent} className="inline-flex items-center justify-center px-6 py-3 bg-midnight text-white text-sm font-bold rounded-xl hover:bg-gold active:scale-[0.98] transition-all min-h-11 disabled:opacity-40 disabled:cursor-not-allowed">Add to gallery</button>
              {cloudName() && uploadPreset() && (
                <button type="button" onClick={openCloudinaryWidget} className="inline-flex items-center justify-center px-6 py-3 bg-gold text-midnight text-sm font-bold rounded-xl hover:bg-gold-dark active:scale-[0.98] transition-all min-h-11">
                  Upload to Cloudinary
                </button>
              )}
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-500 font-light">Note: uploads are kept in memory for this session. To publish them permanently, store the image in <code className="px-1">public/</code> and add an entry to <code className="px-1">src/data/gallery.ts</code>.</p>
        </div>
        {items.length === 0 ? (
          <div className="bg-white rounded-2xl border border-border p-10 text-center">
            <ImageIcon className="w-10 h-10 text-gold-dark mx-auto mb-3" aria-hidden="true" />
            <p className="text-lg font-display font-bold text-midnight mb-2">No moments yet</p>
            <p className="text-sm text-gray-600 font-light">Upload your first image above.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <article key={item.id} className="group bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img src={resolveSrc(item)} srcSet={item.publicId && hasCloudinary() ? cldSrcSet(item.publicId) : undefined} sizes={item.publicId && hasCloudinary() ? '(max-width: 768px) 100vw, 33vw' : undefined} alt={item.alt} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="text-lg font-display font-bold text-midnight mb-2 leading-snug">{item.title}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed font-light flex-1">{item.story}</p>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-xs text-gray-500">
                    <Calendar className="w-3.5 h-3.5 text-gold-dark" aria-hidden="true" /> {fmt(item.date)}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}