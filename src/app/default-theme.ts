import { ThemeConfig } from './theme-config';

export const DEFAULT_THEME: ThemeConfig = {
  themeId: 'default-theme-id',
  mainColors: {
    primaryColor: '#751273',
    accentColor: '#819b13',
    warnColor: '#910000'
  },
  components: {
    heroContent: {
      label: 'Hero content',
      colors: {
        backgroundColor: '#3164ef',
        hoverBackgroundColor: '#e96363',
        textColor: '#000',
        hoverTextColor: '#0b5842'
      }
    },
    showcaseContent: {
      label: 'Showcase content',
      colors: {
        backgroundColor: '#ab8950',
        hoverBackgroundColor: '#0a5f62',
        textColor: '#fff',
        hoverTextColor: '#0b5842'
      }
    }
  }
};
