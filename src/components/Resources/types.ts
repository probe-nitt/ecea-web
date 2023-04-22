export type Resources = {
  category: string
  subjects: Subject[]
};

export type Subject = {
  id:number
  name: string
  image_url: string
  subject_code:string
  materials:SubjectMaterial[] | null
};

export type SubjectMaterial = {
  name: string
  document_url: string
};
