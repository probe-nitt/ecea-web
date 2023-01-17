import { styled } from '@mui/system';
import { useState } from 'react';
import PodcastsPanel from './PodcastsPanel';
import { TabPanelProps } from './types';

const tabs = [
  'All',
  'Guest Lectures',
  'Career Paths',
];

const TabList = styled('div')(({ theme }) => ({
  display: 'flex',
  alignSelf: 'center',
  boxShadow: theme.palette.PodcastTabShadow,
  margin: 'auto',
  alignItems: 'center',
  listStyleType: 'none',
  width: '50%',
  borderRadius: '0.8rem',
  '@media (max-width: 767px)': {
    width: '92%',
  },
}));

const TabItem = styled('div')<TabPanelProps>(({ theme, index, value }) => ({
  color: index === value ? theme.palette.navActiveColor : theme.palette.subTitleColor,
  fontSize: '0.8rem',
  cursor: 'pointer',
  flex: 1,
  textAlign: 'center',
  padding: '0.75rem 0rem',
  margin: `0rem ${index === tabs[2] ? '0rem' : '0.05rem'} 0rem ${index === tabs[0] ? '0rem' : '0.05rem'}`,
  background: index !== value ? theme.palette.navHoverBgColor : theme.palette.navDefaultBgColor,
  borderRadius: `${index === tabs[0] ? '0.8rem' : 0}  ${index === tabs[2] ? '0.8rem' : 0}  ${index === tabs[2] ? '0.8rem' : 0} ${index === tabs[0] ? '0.8rem' : 0}`,
  '@media (max-width: 767px)': {
    fontSize: '0.65rem',
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
