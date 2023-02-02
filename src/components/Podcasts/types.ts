export type Podcast = {
  image: string,
  presenterName: string,
  presenterDescription: string,
  audioSrc:string
};

export interface TabPanelProps {
  index: string;
  value: string;
}

export interface AudioPlayerProps {
  playerIsOpen:boolean;
  setPlayerIsOpen:React.Dispatch<React.SetStateAction<boolean>>;
  podcasts:Podcast[];
  podcastIndex:number;
  isPlaying:boolean;
  setIsPlaying:React.Dispatch<React.SetStateAction<boolean>>;
  setPodcastIndex: React.Dispatch<React.SetStateAction<number>>
}
