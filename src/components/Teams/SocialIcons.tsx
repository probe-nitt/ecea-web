import { styled } from '@mui/material';
import { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { TbBrandFacebook, TbBrandInstagram, TbBrandLinkedin } from 'react-icons/tb';

const IconsList = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  justifyContent: 'center',
  margin: '0.25rem 0 1rem 0',
});

const icons = [
  <TbBrandFacebook />,
  <TbBrandInstagram />,
  <TbBrandLinkedin />,
];

const SocialIcons = () => {
  const iconValue = useMemo(() => ({
    className: 'icon',
    size: '1.5rem',
  }), []);
  return (
    <IconsList>
      {icons.map((icon) => (
        <IconContext.Provider
          value={iconValue}
        >
          {icon}
        </IconContext.Provider>
      ))}
    </IconsList>
  );
};

export default SocialIcons;
