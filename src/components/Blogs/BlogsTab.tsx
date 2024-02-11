import { styled } from '@mui/system';
import { useState } from 'react';
import BlogsPanel from './BlogsPanel';
import { TabBlogProps } from './types';

const tabs = [
  'Blogs on medium.com',
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

const TabItem = styled('h5')<TabBlogProps>(({ theme, index, value }) => ({
  color: index === value ? theme.palette.activeBackgroundColor : theme.palette.subTitleColor,
  backgroundColor: index === value ? theme.palette.hoverBackgroundColor : 'transparent',
  fontSize: '1rem',
  cursor: 'pointer',
  flex: 1,
  fontWeight: '900',
  textAlign: 'center',
  padding: '0.8rem 0rem',
  margin: '0rem',
  borderRadius: `${index === tabs[0] ? '0.8rem' : '0'} ${index === tabs[0] ? '0.8rem' : '0'} 0 0 `,
  borderBottom: `3px solid ${index !== value ? theme.palette.backgroundColor
    : theme.palette.activeBackgroundColor}`,
  '@media (max-width: 767px)': {
    fontSize: '0.8rem',
  },

}));

const BlogsTab = () => {
  const [value, setValue] = useState('Blogs on medium.com');
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
        <BlogsPanel
          key={tab}
          value={value}
          index={tab}
        />
      ))}
    </Content>
  );
};

export default BlogsTab;
