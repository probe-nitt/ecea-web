export type Resources = {
  subjectCategory: string
  subjects: Subject[]
};

export type Subject = {
  subjectName: string
  subjectImage: string
  materials: SubjectMaterial[]
};

export type SubjectMaterial = {
  materialName: string
  materialFile: string
};
