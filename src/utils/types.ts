
export interface ImageProps {
  id: number;
  height: string;
  width: string;
  public_id: string;
  format: string;
  blurDataUrl?: string;
}

export interface SharedModalProps {
  index: number;
  images?: ImageProps[];
  src?: ImageProps[];
}

export interface AIImage {
  id: number;
  width: number;
  height: number;
  src: string;
  alt: string;
}




