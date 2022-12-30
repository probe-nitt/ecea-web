import { styled } from '@mui/system';
import { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { Link, useLocation } from 'react-router-dom';
import { NavindicatorProps, NavitemProps } from './types';

const Navitem = styled('li')({
  listStyleType: 'none',
  margin: '0.55rem 0',
});

const NavitemLink = styled('a')<NavindicatorProps>(({ bg, isActive }) => ({
  fontSize: '1.25rem',
  display: 'flex',
  fontWeight: 'bold',
  gap: '1rem',
  padding: '0.7rem 1.2rem',
  margin: '0 0.5rem',
  cursor: 'pointer',
  color: isActive ? '#6AE1DD' : 'rgb(241, 237, 237)',
  background: isActive ? bg : 'transparent',
  borderRadius: '0.8rem',
  span: {
    fontSize: '1.1rem',
  },
  ':hover': {
    color: 'white',
    background: bg,
  },
  '@media (max-width: 767px)': {
    flexDirection: 'column',
    gap: '0.1rem',
    padding: '0.3rem 0rem',
    margin: '0',
    span: {
      fontSize: '0.75rem',
    },
    color: isActive ? 'rgb(110, 207, 207)' : 'rgb(141, 141, 141)',
    background: 'transparent',
    ':hover': {
      color: isActive ? 'rgb(110, 207, 207)' : 'rgb(141, 141, 141)',
      background: 'transparent',
    },
  },
}));

const NavBarItem = ({
  path, isHref, bgColor, element, label,
}: NavitemProps) => {
  const location = useLocation();
  const iconValue = useMemo(() => ({
    className: 'icon',
  }), []);
  return (
    <Navitem key={path}>
      <Link to={path} target={isHref ? '_blank' : undefined}>
        <NavitemLink
          href={path}
          bg={bgColor === undefined ? '#0c7db14e' : bgColor}
          isActive={location.pathname.includes(path)}
        >
          <IconContext.Provider
            value={iconValue}
          >
            {element}
          </IconContext.Provider>
          <span>{label}</span>
        </NavitemLink>
      </Link>
    </Navitem>
  );
};

export default NavBarItem;
