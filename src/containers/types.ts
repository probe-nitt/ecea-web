import { Document } from '../components/Documents/types';

export type DocumentsResponse = {
  id:number
  name:string
  image_url:string
  subject_code:string
  materials:Document[]
};
