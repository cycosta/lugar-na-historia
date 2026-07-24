export interface AgendaItem {
  date: string;
  title: string;
}

export type AgendaVariant = 'spike' | 'circle' | 'none';

export interface AgendaCardProps {
  variant?: AgendaVariant;
  month?: string;
  items?: AgendaItem[];
  photo?: string | null;
}
