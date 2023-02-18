import {
  FormControl, FormControlLabel, FormLabel, Radio, RadioGroup,
} from '@mui/material';
import { styled } from '@mui/system';
import { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { TbArrowsSort } from 'react-icons/tb';
import { VscListFilter } from 'react-icons/vsc';
import { Line } from '../components/Navigations/SideBar';
import { feeds } from '../constants/dummy';

const Wrapper = styled('div')(({ theme }) => ({
  padding: '0rem 1.5rem',
  maxWidth: '100%',
  overflow: 'hidden',
  height: '100vh',
  display: 'flex',
  flexDirection: 'row',
  h1: {
    color: theme.palette.titleColor,
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '4rem',
  },
  '@media (max-width: 767px)': {
    padding: '0.2rem',
    flexDirection: 'column',
  },
}));

const FeedsList = styled('div')(({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3',
  flex: '3 0 1%',
  overflowY: 'scroll',
}));

const FeedFilterLayout = styled('div')({
  flex: '1 0 1%',
  flexDirection: 'column',
  margin: '1.5rem',
  height: 'fit-content',
  justifyContent: 'space-between',
  display: 'flex',
});

const FeedFilter = styled('div')(({ theme }) => ({
  borderRadius: '0.2rem',
  background: theme.palette.cardColor,
  boxShadow: theme.palette.tabShadow,
  flexDirection: 'column',
  height: 'min-content',
  marginBottom: '2rem',
  display: 'flex',
  div: {
    margin: '1.5rem',
    h1: {
      fontSize: '1.8rem',
      padding: 0,
    },
  },
}));

const FeedCard = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '0.2rem',
  background: theme.palette.cardColor,
  boxShadow: theme.palette.cardShadow,
  margin: '1.5rem 4rem',
  position: 'relative',
  aspectRatio: '3/2',
  width: '75%',
  '@media (max-width: 767px)': {
    width: '92%',
  },
  img: {
    margin: '0 0.02rem',
    height: '35rem',
    aspectRatio: '3/2',
  },
  div: {
    display: 'flex',
    flexDirection: 'row',
    padding: '1rem',
    height: '3rem',
    img: {
      aspectRatio: '1/1',
      width: '3rem',
      height: '3rem',
    },
    div: {
      display: 'flex',
      color: theme.palette.textColor,
      flexDirection: 'column',
      padding: '0 0.5rem',
      h1: {
        textAlign: 'start',
        margin: 0,
        padding: 0,
        fontSize: '1rem',
        fontWeight: 'bold',
      },
      h6: {
        margin: 0,
        padding: 0,
        fontSize: '0.65rem',
      },
    },
  },

}));

const TypeBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const PostedOn = styled('h2')(({ theme }) => ({
  width: 'fit-content',
  fontSize: '0.75rem',
  height: 'fit-content',
  padding: '0.25rem 1rem',
  alignItems: 'center',
  marginLeft: '0.5rem',
  borderRadius: '0.5rem',
  boxShadow: theme.palette.tabShadow,
  color: theme.palette.textColor,
}));

const FeedType = styled('h5')(({ theme }) => ({
  background: theme.palette.activeBackgroundColor,
  width: 'fit-content',
  fontWeight: 'bolder',
  fontSize: '0.9rem',
  height: 'fit-content',
  padding: '0.25rem 2rem',
  alignItems: 'center',
  borderRadius: '0.5rem',
  boxShadow: theme.palette.tabShadow,
  color: theme.palette.activeColor,
}));

const FeedDescription = styled('h6')(({ theme }) => ({
  padding: '0rem 0.5rem 1rem 0.5rem',
  color: theme.palette.textColor,
  margin: '0rem 1rem 1rem 1rem',
  fontWeight: 900,
  fontSize: '0.85rem',
}));

const FilterLabel = styled(FormLabel)(({ theme }) => ({
  fontSize: '1.4rem',
  color: theme.palette.titleColor,
  fontWeight: '600',
  display: 'flex',
  span: {
    marginLeft: '0.4rem',
  },
}));

const FilterButton = styled(Radio)(({ theme }) => ({
  color: theme.palette.titleColor,
  '&.Mui-checked': {
    color: theme.palette.titleColor,
  },
}));

const FilterControlLabel = styled(FormControlLabel)(({ theme }) => ({
  color: theme.palette.textColor,
  fontWeight: 'bold',
  '.MuiFormControlLabel-label': {
    fontSize: '0.95rem',
    fontFamily: 'Falling Sky Cond',
  },
}));

const Explore = () => {
  const iconValue = useMemo(() => ({
    className: 'icon',
  }), []);
  return (
    <Wrapper>
      <FeedsList>
        {feeds.map((feed) => (
          <FeedCard>
            <div>
              <img alt={feed.from.name} src={feed.from.image} />
              <div>
                <h1>{feed.from.name}</h1>
                <h6>{feed.from.email}</h6>
              </div>
            </div>
            <Line />
            <img alt={feed.name} src={feed.image} />
            <Line />
            <TypeBox>
              <FeedType>{feed.category}</FeedType>
              <PostedOn>• 1 day ago</PostedOn>
            </TypeBox>
            <FeedDescription>{feed.description}</FeedDescription>
          </FeedCard>
        ))}
      </FeedsList>
      <FeedFilterLayout>
        <FeedFilter>
          <FormControl>
            <FilterLabel>
              <IconContext.Provider
                value={iconValue}
              >
                <VscListFilter />
              </IconContext.Provider>
              <span>Filter by</span>

            </FilterLabel>
            <RadioGroup
              name="controlled-radio-buttons-group"
            >
              <FilterControlLabel value="All" control={<FilterButton />} label="All" />
              <FilterControlLabel value="Events" control={<FilterButton />} label="Events" />
              <FilterControlLabel value="Guest Lectures" control={<FilterButton />} label="Guest Lectures" />
              <FilterControlLabel value="Workshops" control={<FilterButton />} label="Workshops" />
              <FilterControlLabel value="Others" control={<FilterButton />} label="Others" />
            </RadioGroup>
          </FormControl>
        </FeedFilter>
        <FeedFilter>
          <FormControl>
            <FilterLabel>
              <IconContext.Provider
                value={iconValue}
              >
                <TbArrowsSort />
              </IconContext.Provider>
              <span>Sort by</span>

            </FilterLabel>
            <RadioGroup
              name="controlled-radio-buttons-group"
            >
              <FilterControlLabel value="All" control={<FilterButton />} label="Newest" />
              <FilterControlLabel value="Events" control={<FilterButton />} label="Oldest" />
            </RadioGroup>
          </FormControl>
        </FeedFilter>
      </FeedFilterLayout>
    </Wrapper>
  );
};

export default Explore;
