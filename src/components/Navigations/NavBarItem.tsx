import { styled } from '@mui/system';
import { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { Link, useLocation } from 'react-router-dom';
import textColor, {
  navActiveColor,
  navActiveColorMobile,
  navDefaultBgColor,
  navInActiveBgColor,
  navInActiveColor,
  navInActiveColorMobile,
} from '../../themes/colors';
import { NavindicatorProps, NavitemProps } from './types';

const Navitem = styled('li')({
  listStyleType: 'none',
  margin: '0.2rem 0',
});

const NavitemLink = styled('a')<NavindicatorProps>(({ bg, isActive }) => ({
  fontSize: '1rem',
  display: 'flex',
  fontWeight: 'bold',
  gap: '0.75rem',
  padding: '0.7rem 0 0.7rem 1.2rem',
  margin: '0 0.5rem 0 0.25rem',
  cursor: 'pointer',
  color: isActive ? navActiveColor : navInActiveColor,
  background: isActive ? bg : navInActiveBgColor,
  borderRadius: '0.8rem',
  span: {
    fontSize: '0.9rem',
    marginTop: '0.2rem',
  },
  ':hover': {
    color: textColor,
    background: bg,
  },
  '@media (max-width: 767px)': {
    flexDirection: 'column',
    gap: '0.1rem',
    padding: '0.3rem 0rem',
    margin: '0',
    span: {
      fontSize: '0.6rem',
    },
    color: isActive ? navActiveColorMobile : navInActiveColorMobile,
    background: navInActiveBgColor,
    ':hover': {
      color: isActive ? navActiveColorMobile : navInActiveColorMobile,
      background: navInActiveBgColor,
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
          bg={bgColor === undefined ? navDefaultBgColor : bgColor}
          isActive={location.pathname === `/${path}`}
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
