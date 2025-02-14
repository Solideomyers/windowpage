export interface GalleryItem {
  name: string;
  alt: string;
  href: string;
  src: string;
}

export interface VideoModalProps {
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
}
