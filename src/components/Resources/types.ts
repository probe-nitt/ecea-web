import { Document } from '../Documents/types';

export type Resources = {
  category: string
  subjects: Subject[]
};

export type Subject = {
  id:number
  name: string
  image_url: string
  subject_code:string
  materials:Document[]
};
