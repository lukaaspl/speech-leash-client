import "styled-components";

interface Fonts {
  primary: string;
  secondary: string;
}

interface Sizes {
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
}

interface Weights {
  light: number;
  normal: number;
  bold: number;
}

interface Colors {
  black: string;
  white: string;
}

export type Font = keyof Fonts;

export type Size = keyof Sizes;

export type Weight = keyof Weights;

export type Color = keyof Colors;

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: Fonts;
    sizes: Sizes;
    weights: Weights;
    colors: Colors;
  }
}
