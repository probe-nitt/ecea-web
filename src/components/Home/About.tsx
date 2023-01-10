import { styled } from '@mui/material';
import textColor from '../../themes/colors';

const Title = styled('h1')({
  padding: '0rem 0.25rem 0.2rem 0',
  fontSize: '2.5rem',
  '@media (max-width: 767px)': {
    fontSize: '1.5rem',
  },

});

const DescriptionBox = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '4rem 4rem 0 4rem',
  gap: '1rem',
  iframe: {
    flex: 2,
    aspectRatio: '3 / 2.25',
    display: 'inline-block',
    padding: '1rem',
    height: '20rem',
    borderRadius: '1.5rem',
  },
  '@media (max-width: 1200px)': {
    flexDirection: 'column',
    padding: '2rem 1rem',
    iframe: {
      width: '85%',
      aspectRatio: '3 / 2.75',
      padding: '1rem',
    },
  },
});

const DescriptionWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '0rem 1rem',
  justifyContent: 'flex-start',
  flex: 2,
});

const Description = styled('p')({
  fontSize: '1.2rem',
  padding: '0.1rem',
  color: textColor,
  '@media (max-width: 767px)': {
    fontSize: '1rem',
  },
});

const About = () => (
  <DescriptionBox>
    <DescriptionWrapper>
      <Title>About Us</Title>
      <Description>
        {
            `ECE Association deals with the welfare of students and the department.
             The Association organizes several events throughout the academic year like guest lectures,
             competitions, field trips, tech talks and most importantly, 
             PROBE, one of the largest departmental symposiums in India.
             To provide for all supportive co-curricular training required by students to enhance
             their curricular performance and keep them updated with recent trends in the industry.
            `
            }
      </Description>
    </DescriptionWrapper>
    <iframe
      src="https://www.youtube.com/embed/XqPonkmsyyY"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      title="video"
    />
  </DescriptionBox>
);

export default About;
