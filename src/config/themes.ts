import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/CreatePalette' {
  interface Palette {
    textColor: string;
    titleColor:string;
    subTitleColor:string;
    hintColor:string;
    dividerColor:string;
    pageBgColor:string;
    sectionBgColor:string;
    navActiveColor:string;
    navHoverColor:string;
    navHoverBgColor:string;
    navInActiveColor:string;
    navDefaultBgColor:string;
    navInActiveBgColor:string;
    navActiveColorMobile:string;
    navInActiveColorMobile:string;
    navBarBgColor:string;
    navBarShadow:string;
    cardText:string;
    cardColor:string;
    cardTextHover:string;
    searchBarText:string;
    searchBarColor:string;
    searchBarShadow:string;
    ResourceCardHover:string;
    ResourceCardColor:string;
    TeamCardShadow: string;
    ResourceCardShadow:string;
    ResourceCardHoverShadow:string;
    PodcastTabShadow:string;
    PodcastCardShadow:string;
    LoginTabHoverShadow:string;
    DLoginColor:string;
    DLoginHoverShadow:string;
  }
  interface PaletteOptions {
    textColor: string;
    titleColor:string;
    subTitleColor:string;
    hintColor:string;
    dividerColor:string;
    pageBgColor:string;
    sectionBgColor:string;
    navActiveColor:string;
    navHoverColor:string;
    navHoverBgColor:string;
    navInActiveColor:string;
    navDefaultBgColor:string;
    navInActiveBgColor:string;
    navActiveColorMobile:string;
    navInActiveColorMobile:string;
    navBarBgColor:string;
    navBarShadow:string;
    cardText:string;
    cardColor:string;
    cardTextHover:string;
    searchBarText:string;
    searchBarColor:string;
    searchBarShadow:string;
    ResourceCardHover:string;
    TeamCardShadow: string;
    ResourceCardShadow:string;
    ResourceCardHoverShadow:string;
    PodcastTabShadow:string;
    PodcastCardShadow:string;
    LoginTabHoverShadow:string;
    DLoginColor:string;
    DLoginHoverShadow:string;
  }
}

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    textColor: '#fff',
    titleColor: '#6AE1DD',
    subTitleColor: '#cccccc',
    hintColor: '#cccccc',
    dividerColor: 'rgb(70, 70, 70)',
    pageBgColor: '#121212',
    sectionBgColor: '#1A1A1A',
    navActiveColor: '#000',
    navHoverColor: '#ffffff',
    navHoverBgColor: '#0c7db128',
    navInActiveColor: 'rgb(241, 237, 237)',
    navDefaultBgColor: '#6AE8fd',
    navInActiveBgColor: 'transparent',
    navActiveColorMobile: '#6AE8fd',
    navInActiveColorMobile: '#cccccc',
    navBarBgColor: '#1A1A1A',
    navBarShadow: '0 0 0.25rem 0 rgb(100, 100, 100)',
    cardText: '#6AE1DD',
    cardColor: '#000',
    cardTextHover: '#111',
    searchBarText: '#cccccc',
    searchBarColor: '#020020',
    searchBarShadow: '0rem 0rem 0.25rem 0rem #eeeeee',
    ResourceCardHover: '#6AE1DD',
    TeamCardShadow: '0rem 0rem 0.25rem 0rem #0088A3',
    ResourceCardShadow: '0rem 0rem 0.35rem 0rem #6AE1FF',
    ResourceCardHoverShadow: '0rem 0rem 1rem 0rem #6AE1DD',
    PodcastTabShadow: '0rem 0rem 0.3rem 0rem #777',
    PodcastCardShadow: '0rem 0rem 0.3rem 0rem #0088A3',
    LoginTabHoverShadow: '0rem 0rem 0.8rem 0rem #6AE1DD',
    DLoginColor: '#808080',
    DLoginHoverShadow: '0rem 0rem 0.8rem 0rem #808080',
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    textColor: '#364146',
    titleColor: '#007fea',
    subTitleColor: '#000',
    hintColor: '#000000',
    dividerColor: '#a9a9a9',
    pageBgColor: '#f7f7f7',
    sectionBgColor: '#fff',
    navActiveColor: '#fff',
    navHoverColor: '#fff',
    navHoverBgColor: '#0c7db14e',
    navInActiveColor: '#434343',
    navDefaultBgColor: '#006Fdd',
    navInActiveBgColor: 'transparent',
    DLoginColor: '#808080',
    navActiveColorMobile: '#006FFF',
    navInActiveColorMobile: '#777',
    navBarBgColor: '#ffffff',
    navBarShadow: '0 0 0.55rem 0 #afafaf',
    cardText: '#007fea',
    cardColor: 'transparent',
    searchBarText: '#cccccc',
    searchBarColor: '#020020',
    searchBarShadow: '0rem 0rem 0.25rem 0rem #eeeeee',
    ResourceCardHover: '#007fea',
    cardTextHover: '#fff',
    TeamCardShadow: '0rem 0rem 0.25rem 0rem #007fea',
    ResourceCardShadow: '0rem 0rem 0.5rem 0rem #007fea',
    ResourceCardHoverShadow: '0rem 0rem 1rem 0rem #007fea',
    PodcastTabShadow: '0rem 0rem 0.3rem 0rem #555555',
    PodcastCardShadow: '0rem 0rem 0.35rem 0rem #007fea',
    LoginTabHoverShadow: '0rem 0rem 0.8rem 0rem #007fea',
    DLoginHoverShadow: '0rem 0rem 0.8rem 0rem #808080',
  },

});

export default lightTheme;
