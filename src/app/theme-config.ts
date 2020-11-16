export interface ThemeConfig {
  themeId: string;
  mainColors: {
    [key in ThemeMainColorType]: string;
  };
  components: {
    [key in ThemeableComponentName]: ThemeableComponentConfig;
  };
}

export interface ColorConfig {
  colorVariant: string;
  colorHexValue: string;
  shouldHaveDarkContrast: boolean;
}

export enum ThemeMainColorType {
  primaryColor = 'primaryColor',
  accentColor = 'accentColor',
  warnColor = 'warnColor'
}

export interface ThemeableComponentConfig {
  label: string;
  colors: ThemeableComponentProperties;
}

export interface ThemeableComponentProperties {
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
}

export enum ThemeableComponentName {
  heroContent = 'heroContent',
  showcaseContent = 'showcaseContent'
  // Add more variables if you need to here
}
