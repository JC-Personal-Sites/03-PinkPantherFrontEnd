export interface I_Appendix {
  id: number;
  Reference: string;
  Link: string;
  Comments?: string;
  Type: 'Documentation' | 'Video';
  Topic: 'TypeScript' | 'Testing' | 'JavaScript' | 'Data' | 'Angular';
}