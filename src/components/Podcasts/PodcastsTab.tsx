import { styled } from '@mui/system';
import { useState } from 'react';
import PodcastsPanel from './PodcastsPanel';
import { TabPanelProps } from './types';

const tabs = [
  'All',
  'Guest Lectures',
  'Career Paths',
];

const TabList = styled('ul')(({ theme }) => ({
  display: 'flex',
  background: theme.palette.navBarBgColor,
  boxShadow: theme.palette.PodcastTabShadow,
  justifyContent: 'center',
  listStyleType: 'none',
  width: 'fit-content',
  margin: '1rem auto',
  padding: '0.6rem 0.3rem',
  borderRadius: '1rem',
}));

const TabItem = styled('li')<TabPanelProps>(({ theme, index, value }) => ({
  color: index === value ? theme.palette.navActiveColor : theme.palette.subTitleColor,
  fontSize: '0.8rem',
  cursor: 'pointer',
  width: '8rem',
  height: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.5rem 1rem',
  margin: `0rem ${index === tabs[2] ? '0.5rem' : '0.06rem'} 0rem ${index === tabs[0] ? '0.5rem' : '0.06rem'}`,
  background: index !== value ? theme.palette.navHoverBgColor : theme.palette.navDefaultBgColor,
  borderRadius: `${index === tabs[0] ? '0.8rem' : 0}  ${index === tabs[2] ? '0.8rem' : 0}  ${index === tabs[2] ? '0.8rem' : 0} ${index === tabs[0] ? '0.8rem' : 0}`,
  '@media (max-width: 767px)': {
    height: '2rem',
    width: '4rem',
    margin: `0rem ${index === tabs[2] ? '0.2rem' : '0.06rem'} 0rem ${index === tabs[0] ? '0.2rem' : '0.06rem'}`,
    padding: '0.25rem 1rem',
    fontSize: '0.55rem',
  },

}));

const PodcastsTab = () => {
  const [value, setValue] = useState('All');
  return (
    <>
      <TabList>
        {tabs.map((tab:string) => (
          <TabItem
            key={tab}
            onClick={() => setValue(tab)}
            index={tab}
            value={value}
          >
            {tab}
          </TabItem>
        ))}
      </TabList>
      {tabs.map((tab:string) => (
        <PodcastsPanel
          key={tab}
          value={value}
          index={tab}
        />
      ))}
    </>
  );
};

export default PodcastsTab;
