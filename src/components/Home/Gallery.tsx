import {
  ImageList, ImageListItem, styled, useMediaQuery,
} from '@mui/material';
import { gallery } from '../../constants/dummy';

const Title = styled('h1')(({ theme }) => ({
  padding: '0rem 0.25rem 0.2rem 0',
  fontSize: '3rem',
  color: theme.palette.titleColor,
  '@media (max-width: 767px)': {
    fontSize: '2rem',
  },

}));

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: '2rem',
  justifySelf: 'center',
  alignItems: 'center',
  margin: '4rem',
  borderRadius: '0.4rem',
  background: theme.palette.sectionBackgroundColor,
  '@media (max-width: 1200px)': {
    padding: '1rem',
    margin: '3rem 0rem',
  },
}));

const ImageItem = styled(ImageListItem)(({ theme }) => ({
  img: {
    borderRadius: '0.1rem',
    boxShadow: theme.palette.cardShadow,
  },
  ':hover': {
    img: {
      boxShadow: theme.palette.cardHoverShadow,
      transform: 'scale(1.02)',
    },
  },
}));

const Gallery = () => {
  const tab = useMediaQuery('(min-width:1200px)');
  const mobile = useMediaQuery('(min-width:700px)');
  const colNum = (): number => {
    let num = 1;
    if (tab) num = 3;
    else if (mobile) num = 2;
    else num = 1;
    return num;
  };
  return (
    <Wrapper>
      <Title>Gallery</Title>
      <ImageList
        variant="masonry"
        cols={colNum()}
        style={{ padding: '1rem' }}
        gap={20}
      >
        {gallery.map((item) => (
          <ImageItem key={item.title}>
            <img
              className="gallery"
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.img}
              loading="lazy"
            />
          </ImageItem>
        ))}
      </ImageList>
    </Wrapper>
  );
};

export default Gallery;
