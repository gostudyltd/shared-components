export interface Filter {
  id: number;
  label: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
}

export type ImageList = Record<"image", string>[];

export interface sliderState {
  isOpen: boolean;
  data?: ImageList | null;
  activeIndex?: number;
}

export interface CdnImage {
  src: string;
  width: number;
  height: number;
}
