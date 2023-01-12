import { styled } from '@mui/material';
import { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { TbBrandFacebook, TbBrandInstagram, TbBrandLinkedin } from 'react-icons/tb';

const IconsList = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  justifyContent: 'center',
});

const icons = [
  {
    name: 'facebook',
    value: <TbBrandFacebook />,
  },
  {
    name: 'instagra',
    value: <TbBrandInstagram />,
  },
  {
    name: 'linkedIn',
    value: <TbBrandLinkedin />,
  },
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
          key={icon.name}
          value={iconValue}
        >
          {icon.value}
        </IconContext.Provider>
      ))}
    </IconsList>
  );
};

export default SocialIcons;
