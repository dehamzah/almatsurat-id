export type DhikrSize = 'sughro' | 'kubro';
export type TimeMode = 'pagi' | 'petang';
export type Theme = 'auto' | 'light' | 'dark';

export type DhikrItemTag = "pagi" | "petang" | "sughro" | "kubro";

export interface DhikrSubItem {
  arabic: string;
  transliteration: string;
  translation: string;
}

export interface DhikrItem {
  title: string;
  hasPrefixBasmallah?: boolean;
  repeat: number;
  tags: DhikrItemTag[];
  children: DhikrSubItem[];
  note?: string;
}

export type DhikrVariant =
  | "pagi-sughro"
  | "pagi-kubro"
  | "petang-sughro"
  | "petang-kubro";