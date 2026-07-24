export type PostType = 'pre' | 'pos' | 'outros' | 'agenda' | 'reels';

export interface PostTypeMeta {
  key: PostType;
  label: string;
}

export interface CardOverlay {
  kind: 'description' | 'subtitle';
  text: string;
}

export type CardComponent =
  'PrPasseio' | 'PSPasseio' | 'SemPasseio' | 'Reels' | 'AgendaCard';

export interface Card {
  component: CardComponent;
  label: string;
  w: number;
  h: number;
  photo?: string | null;
  coverShape?: string;
  needsPhoto?: boolean;
  clampTitle?: boolean;
  fixItinerary?: boolean;
  props: Record<string, any>;
  overlay?: CardOverlay | null;
}

export interface PreData {
  day: string;
  month: string;
  title: string;
  description: string;
  stops: string[];
  price: string;
  photo: string | null;
}

export interface GalleryItem {
  id: string;
  photo: string | null;
}

export interface PosData {
  day: string;
  month: string;
  title: string;
  coverPhoto: string | null;
  coverShape: 'circular' | 'arco';
  gallery: GalleryItem[];
}

export interface AgendaItemData {
  date: string;
  title: string;
}

export interface AgendaData {
  variant: 'spike' | 'circle' | 'none';
  month: string;
  items: AgendaItemData[];
  photo: string | null;
}

export interface OutrosData {
  title: string;
  description: string;
  photo: string | null;
  variant: 'cover' | 'circle' | 'spike';
  showImage: boolean;
  showDescription: boolean;
}

export interface ReelsData {
  title: string;
  photo: string | null;
  showSubtitle: boolean;
  subtitle: string;
}

export interface PostGeneratorData {
  pre: PreData;
  pos: PosData;
  agenda: AgendaData;
  outros: OutrosData;
  reels: ReelsData;
}

export interface ValidationResult {
  valid: boolean;
  missing: string[];
}
