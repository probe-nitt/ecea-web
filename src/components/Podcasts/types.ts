export type Podcast = {
  name: string,
  description: string,
  episodeNo: number,
  image_url:string,
  mediaUrl:string,
  type:string
};

export interface TabPanelProps {
  index: string;
  value: string;
}
