import Tabulator from 'tabulator-tables';

export interface I_Appendix {
  id: number;
  Reference: string;
  Link: string;
  Comments?: string;
  Type: 'Documentation' | 'Video';
  Topic: 'TypeScript' | 'Testing' | 'JavaScript' | 'Data' | 'Angular';
}

// Table Column Structure
export const Columns: Tabulator.ColumnDefinition[] = [
  {
    title: 'Reference',
    field: 'Link',
    sorter: 'string',
    formatter: 'link',
    formatterParams: {
      labelField: 'Reference',
      urlPrefix: '',
      target: '_blank',
    },
  },
  {
    title: 'Comments',
    field: 'Comments',
    sorter: 'string',
  },
  {
    title: 'Topic',
    field: 'Topic',
    sorter: 'string',
  },
];
