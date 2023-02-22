export interface I_Picture {
  id: number;
  title: string;
  url: string;
  source: 'FaceBook' | 'Twitter' | 'Google' | 'Other';
  comments: number;
  likes: number;
}

export interface I_Video {
  id: number;
  title: string;
  url: string;
  episode: number;
  season: number;
  likes: number;
  Source: 'FaceBook' | 'Twitter' | 'YouTube' | 'Other';
}
