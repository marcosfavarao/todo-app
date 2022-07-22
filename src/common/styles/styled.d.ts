import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
    };

    fonts: {
      family: {
        nunito: string;
        lato: string;
      };

      weight: {
        light: number;
        normal: number;
        semiBold: number;
        bold: number;
      };
    };

    transitions: {
      fast: string;
      medium: string;
      slow: string;
    };
  }
}
