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
    pageBgColor: '#111000',
    sectionBgColor: '#000018',
    navActiveColor: '#000',
    navHoverColor: '#ffffff',
    navHoverBgColor: '#0c7db157',
    navInActiveColor: 'rgb(241, 237, 237)',
    navDefaultBgColor: '#6AE8fd',
    navInActiveBgColor: 'transparent',
    navActiveColorMobile: 'rgb(110, 207, 207)',
    navInActiveColorMobile: 'rgb(141, 141, 141)',
    navBarBgColor: '#000018',
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
    PodcastTabShadow: '0rem 0rem 0.5rem 0rem #444333',
    PodcastCardShadow: '0rem 0rem 0.3rem 0rem #0088A3',
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
    navActiveColorMobile: '#007fea',
    navInActiveColorMobile: 'rgb(141, 141, 141)',
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
    PodcastTabShadow: '0rem 0rem 0.5rem 0rem #cccccc',
    PodcastCardShadow: '0rem 0rem 0.35rem 0rem #007fea',
  },

});

export default lightTheme;
