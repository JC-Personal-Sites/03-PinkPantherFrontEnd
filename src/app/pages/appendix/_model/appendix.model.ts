export interface I_Appendix {
  _id: string;
  id: number;
  reference: string;
  link: string;
  comments?: string;
  type: 'Documentation' | 'Video';
  topic: 'TypeScript' | 'Testing' | 'JavaScript' | 'Data' | 'Angular';
}