import { useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { Link, useLocation } from 'react-router-dom';
import { NavindicatorProps, NavitemProps } from './types';

const Navitem = styled('li')({
  listStyleType: 'none',
  margin: '0.2rem 0',
  '@media (max-width: 767px)': {
    margin: '0.1rem 0 0rem 0',
  },
});

const NavitemContent = styled('div')<NavindicatorProps>(({ theme, bg, isActive }) => ({
  fontSize: '1rem',
  display: 'flex',
  fontWeight: 'bold',
  gap: '0.75rem',
  padding: '0.7rem 0 0.7rem 1.2rem',
  margin: '0 0.5rem 0 0.25rem',
  cursor: 'pointer',
  color: isActive ? theme.palette.activeColor : theme.palette.inactiveColor,
  background: isActive ? theme.palette.activeBackgroundColor
    : theme.palette.inactiveBackgroundColor,
  borderRadius: '0.8rem',
  span: {
    fontSize: '0.9rem',
    marginTop: '0.2rem',
  },
  ':hover': {
    color: theme.palette.hoverColor,
    background: bg,
  },
  '@media (max-width: 767px)': {
    flexDirection: 'column',
    gap: '0rem',
    padding: '0.2rem 0rem 0rem 0',
    margin: '0',
    outlineStyle: 'none',
    span: {
      fontSize: '0.6rem',
    },
    color: isActive ? theme.palette.activeBackgroundColor : theme.palette.hintColor,
    background: theme.palette.inactiveBackgroundColor,
    ':hover': {
      color: isActive ? theme.palette.activeBackgroundColor : theme.palette.hintColor,
      background: 'transparent',
    },
  },
}));

const NavItemLink = ({
  path, bgColor, element, label,
}: NavitemProps) => {
  const location = useLocation();
  const theme = useTheme();
  const iconValue = useMemo(() => ({
    className: 'icon',
  }), []);
  return (
    <NavitemContent
      bg={bgColor === undefined ? theme.palette.hoverBackgroundColor : bgColor}
      isActive={location.pathname === `/${path}`}
    >
      <IconContext.Provider
        value={iconValue}
      >
        {element}
      </IconContext.Provider>
      <span>{label}</span>
    </NavitemContent>
  );
};

const NavBarItem = ({
  path, isHref, bgColor, element, label,
}: NavitemProps) => (
  <Navitem key={path}>
    {isHref
      ? (
        <a
          href={path}
          rel="noopener noreferrer"
          target="_blank"
        >
          <NavItemLink
            path={path}
            bgColor={bgColor}
            element={element}
            label={label}
          />
        </a>
      )
      : (
        <Link
          to={path}
        >
          <NavItemLink
            path={path}
            bgColor={bgColor}
            element={element}
            label={label}
          />
        </Link>
      )}
  </Navitem>
);

export default NavBarItem;
