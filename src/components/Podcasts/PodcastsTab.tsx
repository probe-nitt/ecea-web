import { styled } from '@mui/system';
import { useState } from 'react';
import PodcastsPanel from './PodcastsPanel';
import { TabPanelProps } from './types';

const tabs = [
  'All',
  'Guest Lectures',
  'Career Paths',
];

const Content = styled('div')(({ theme }) => ({
  height: 'fit-content',
  borderRadius: '1rem',
  background: theme.palette.sectionBackgroundColor,
}));

const TabList = styled('div')({
  display: 'flex',
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  listStyleType: 'none',
  borderRadius: '0.8rem',
});

const TabItem = styled('h5')<TabPanelProps>(({ theme, index, value }) => ({
  color: index === value ? theme.palette.activeBackgroundColor : theme.palette.subTitleColor,
  backgroundColor: index === value ? theme.palette.hoverBackgroundColor : 'transparent',
  fontSize: '1rem',
  cursor: 'pointer',
  flex: 1,
  fontWeight: '900',
  textAlign: 'center',
  padding: '0.8rem 0rem',
  margin: '0rem',
  borderRadius: `${index === tabs[0] ? '0.8rem' : '0'} ${index === tabs[2] ? '0.8rem' : '0'} 0 0 `,
  borderRight: `${index === tabs[1] ? '3px' : '0'} solid ${theme.palette.backgroundColor}`,
  borderLeft: `${index === tabs[1] ? '3px' : '0'} solid ${theme.palette.backgroundColor}`,
  borderBottom: `3px solid ${index !== value ? theme.palette.backgroundColor
    : theme.palette.activeBackgroundColor}`,
  '@media (max-width: 767px)': {
    fontSize: '0.8rem',
  },

}));

const PodcastsTab = () => {
  const [value, setValue] = useState('All');
  return (
    <Content>
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
    </Content>
  );
};

export default PodcastsTab;
