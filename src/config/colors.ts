declare module '@mui/material/styles/CreatePalette' {
  interface Palette {
    backgroundColor: string;
    sectionBackgroundColor: string;
    barBackgroundColor: string;
    textColor: string;
    titleColor:string;
    subTitleColor:string;
    hintColor:string;
    dividerColor:string;
    activeColor: string;
    activeBackgroundColor: string;
    inactiveColor: string;
    inactiveBackgroundColor: string;
    hoverBackgroundColor: string;
    hoverColor: string;
    cardShadow: string;
    cardHoverShadow: string;
    tabShadow: string;
    barShadow: string;
  }
  interface PaletteOptions {
    backgroundColor: string;
    barBackgroundColor: string;
    sectionBackgroundColor: string;
    textColor: string;
    titleColor:string;
    subTitleColor:string;
    hintColor:string;
    dividerColor:string;
    activeColor: string;
    activeBackgroundColor: string;
    inactiveColor: string;
    inactiveBackgroundColor: string;
    hoverBackgroundColor: string;
    hoverColor: string;
    cardShadow: string;
    cardHoverShadow: string;
    tabShadow: string;
    barShadow: string;
  }
}

export const darkPalette = {
  backgroundColor: '#252525',
  sectionBackgroundColor: '#1C1C1C',
  barBackgroundColor: '#151515',
  textColor: '#FFFFFF',
  titleColor: '#6AE1DD',
  subTitleColor: '#CCCCCC',
  hintColor: '#CCCCCC',
  dividerColor: '#464646',
  activeColor: '#000000',
  activeBackgroundColor: '#6AE8FD',
  inactiveColor: '#EEEEEE',
  inactiveBackgroundColor: 'transparent',
  hoverBackgroundColor: '#0C7DB139',
  hoverColor: '#FFFFFF',
  cardColor: '#222222',
  cardShadow: '0rem 0rem 0.4rem 0rem #0088A3',
  cardHoverShadow: '0rem 0rem 0.6rem 0rem #0088A3',
  tabShadow: '0rem 0rem 0.15rem 0rem #777777',
  barShadow: '0rem 0rem 0.25rem 0rem #777777',
};

export const lightPalette = {
  backgroundColor: '#F7F7F7',
  sectionBackgroundColor: '#FFFFFF',
  barBackgroundColor: '#FFFFFF',
  textColor: '#364146',
  titleColor: '#007FEA',
  subTitleColor: '#111111',
  hintColor: '#555555',
  dividerColor: '#A9A9A9',
  activeColor: '#FFFFFF',
  activeBackgroundColor: '#006FDD',
  inactiveColor: '#434343',
  inactiveBackgroundColor: 'transparent',
  hoverBackgroundColor: '#0C7DB13A',
  hoverColor: '#FFFFFF',
  cardColor: '#FFFEEEE',
  cardShadow: '0rem 0rem 0.25rem 0rem #007FEA',
  cardHoverShadow: '0rem 0rem 0.6rem 0rem #007FEA',
  tabShadow: '0rem 0rem 0.15rem 0rem #555555',
  barShadow: '0rem 0rem 0.5rem 0rem #555555',
};
