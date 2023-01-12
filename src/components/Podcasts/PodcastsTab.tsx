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
  background: theme.palette.sectionBgColor,
  boxShadow: theme.palette.PodcastTabShadow,
  justifyContent: 'center',
  listStyleType: 'none',
  width: 'fit-content',
  margin: '0rem auto',
  padding: '1.2rem 0.6rem',
  borderRadius: '1rem 1rem 0 0',
  '@media (max-width: 767px)': {
    padding: '0.2',
  },
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
  margin: `0rem ${index === tabs[2] ? '0.5rem' : '-1rem'} 0rem ${tabs[0] ? '0.5rem' : '-1rem'}`,
  background: index !== value ? 'transparent' : theme.palette.navDefaultBgColor,
  borderRadius: '0.8rem',
  '@media (max-width: 767px)': {
    height: '2rem',
    width: '5rem',
    padding: '0.25rem 1rem',
    borderRadius: '1rem',
    margin: `0rem ${index === tabs[2] ? '0.35rem' : '-0.7rem'} 0rem ${tabs[0] ? '0.35rem' : '-0.7rem'}`,
    fontSize: '0.6rem',
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
