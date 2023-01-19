import { Icon } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import { MdCall, MdEmail, MdLocationOn } from 'react-icons/md';

const Title = styled('h1')(({ theme }) => ({
  padding: '0rem 0.25rem 0.5rem 0',
  fontSize: '2.5rem',
  color: theme.palette.titleColor,
  textAlign: 'center',
  marginBottom: '2rem',
  '@media (max-width: 767px)': {
    fontSize: '1.6rem',
  },

}));

const ContactCard = styled('div')(({ theme }) => ({
  display: 'flex',
  margin: '4rem',
  justifyContent: 'center',
  borderRadius: '0.2rem',
  flexDirection: 'column',
  background: theme.palette.sectionBackgroundColor,
  padding: '2rem',
  iframe: {
    width: '100%',
    height: '20rem',
  },
  '@media (max-width: 1200px)': {
    margin: '4rem 0rem',
    padding: '2rem 2rem',
    iframe: {
      height: '16rem',
    },
  },
}));

const ContactDetails = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 1,
  width: '100%',
  span: {
    color: theme.palette.subTitleColor,
  },
}));

const ContactDetailsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  h2: {
    fontSize: '1.4rem',
    color: theme.palette.titleColor,
    margin: '0.1rem 0',
  },
  p: {
    fontSize: '0.9rem',
    color: theme.palette.subTitleColor,
    margin: '0.1rem 0 2rem 0',
  },
  '@media (max-width: 767px)': {
    h2: {
      fontSize: '1.2rem',
    },
    p: {
      fontSize: '0.8rem',
    },
  },
}));

const ContactIcon = styled(Icon)(({ theme }) => ({
  display: 'inline',
  marginTop: '-2.5rem',
  padding: '0.65rem',
  marginRight: '0.75rem',
  borderRadius: '50%',
  background: theme.palette.textColor,
}));

const contacts = [
  {
    icon: <MdEmail />,
    key: 'Email',
    value: 'probe@nitt.edu',
  },
  {
    icon: <MdCall />,
    key: 'Call',
    value: '+919790546296',
  },
  {
    icon: <MdLocationOn />,
    key: 'Location',
    value: 'NIT Trichy, Tiruchirappalli',
  },
];

const Contact = () => {
  const theme = useTheme();
  return (
    <ContactCard>
      <Title>Contact Us</Title>
      {contacts.map((contact) => (
        <ContactDetails key={contact.key}>
          <ContactIcon style={{
            color: theme.palette.backgroundColor,
          }}
          >
            {contact.icon}
          </ContactIcon>
          <ContactDetailsWrapper>
            <h2>
              {contact.key}
            </h2>
            <p>{contact.value}</p>
          </ContactDetailsWrapper>
        </ContactDetails>
      ))}
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
  );
};

export default Contact;
