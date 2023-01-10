import {
  ImageList, ImageListItem, styled, useMediaQuery,
} from '@mui/material';

const Title = styled('h1')({
  padding: '0rem 0.25rem 0.2rem 0',
  fontSize: '2.5rem',
  '@media (max-width: 767px)': {
    fontSize: '1.5rem',
  },

});

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: '3rem 4.5rem',
  justifySelf: 'center',
  background: 'neutral',
  '@media (max-width: 767px)': {
    padding: '1rem',
  },
});

const itemData = [
  {
    img: '../../assets/images/img1.jpg',
    title: 'Bed',
  },
  {
    img: '../../assets/images/img3.jpg',
    title: 'Sink',
  },
  {
    img: '../../assets/images/img5.jpg',
    title: 'Blinds',
  },
  {
    img: '../../assets/images/img6.jpg',
    title: 'Chairs',
  },
  {
    img: '../../assets/images/img7.jpg',
    title: 'Laptop',
  },
  {
    img: '../../assets/images/img2.jpg',
    title: 'Coffee',
  },
  {
    img: '../../assets/images/img8.jpg',
    title: 'Doors',
  },
  {
    img: '../../assets/images/img9.jpg',
    title: 'Coffee',
  },
  {
    img: '../../assets/images/img10.jpg',
    title: 'Storage',
  },
];

const Gallery = () => {
  const mobile = useMediaQuery('(max-width:769px)');
  return (
    <Wrapper>
      <Title>Gallery</Title>
      <ImageList
        variant="masonry"
        cols={mobile ? 1 : 3}
        style={{ padding: '1rem' }}
        gap={20}
      >
        {itemData.map((item) => {
          const image = new URL(item.img, import.meta.url).href;
          return (
            <ImageListItem key={item.img}>
              <img
                className="gallery"
                src={`${image}`}
                srcSet={`${image}`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Wrapper>
  );
};

export default Gallery;
