import { useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { MdCall, MdEmail, MdLocationOn } from 'react-icons/md';
import textColor, { ResourceCardShadow } from '../../themes/colors';

const Title = styled('h1')({
  padding: '0rem 0.25rem 0.2rem 0',
  fontSize: '2.5rem',
  '@media (max-width: 767px)': {
    fontSize: '1.5rem',
  },

});

const ContactSection = styled('div')({
  padding: '3rem 4.5rem',
  '@media (max-width: 767px)': {
    padding: '3rem 1rem',
  },
});

const ContactCard = styled('div')({
  display: 'flex',
  marginTop: '3.5rem',
  borderRadius: '0.75rem',
  flexDirection: 'column',
  padding: '2.5rem',
  boxShadow: ResourceCardShadow,
  iframe: {
    width: '100%',
    height: '300px',
    '@media (max-width: 767px)': {
      height: '200px',
    },
  },
  '@media (max-width: 767px)': {
    padding: '2rem',
  },
});

const ContactDetails = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 1,

});

const ContactDetailsWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  h2: {
    fontSize: '1.4rem',
    color: textColor,
    margin: '0.1rem 0',
  },
  h4: {
    fontSize: '0.9rem',
    color: '#cccccc',
    margin: '0.1rem 0 2rem 0',
  },
  '@media (max-width: 767px)': {
    h2: {
      fontSize: '1.2rem',
    },
    h4: {
      fontSize: '0.75rem',
    },
  },
});

const Contact = () => {
  const mobile = useMediaQuery('(max-width:769px)');
  const iconValue = useMemo(() => ({
    className: 'icon2', size: mobile ? '1.4rem' : '1.75rem',
  }), []);
  return (
    <ContactSection>
      <Title>Contact Us</Title>
      <ContactCard>
        <ContactDetails>
          <IconContext.Provider
            value={iconValue}
          >
            <MdEmail />
          </IconContext.Provider>
          <ContactDetailsWrapper>
            <h2>Email</h2>
            <h4>probe@nitt.edu</h4>
          </ContactDetailsWrapper>
        </ContactDetails>
        <ContactDetails>
          <IconContext.Provider
            value={iconValue}
          >
            <MdCall />
          </IconContext.Provider>
          <ContactDetailsWrapper>
            <h2>Call</h2>
            <h4>+919790546296</h4>
          </ContactDetailsWrapper>
        </ContactDetails>
        <ContactDetails>
          <IconContext.Provider
            value={iconValue}
          >
            <MdLocationOn />
          </IconContext.Provider>
          <ContactDetailsWrapper>
            <h2>Location</h2>
            <h4>NIT Trichy, Tiruchirappalli</h4>
          </ContactDetailsWrapper>
        </ContactDetails>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6599618037735!2d78.81693200000001!3d10.760668200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfc796e03e3a25f39!2sDepartment%20of%20Electronics%20and%20Communication%20Engineering!5e0!3m2!1sen!2sin!4v1673290768707!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          frameBorder="0"
          style={{ border: '2rem', margin: '1rem 0' }}
          aria-hidden="false"
        />

      </ContactCard>
    </ContactSection>
  );
};

export default Contact;
