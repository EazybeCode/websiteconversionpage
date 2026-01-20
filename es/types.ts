
export interface Feature {
  id: string;
  tag: string;
  title: string;
  description: string;
  points: string[];
  visualType: 'timeline' | 'inbox' | 'workflow' | 'properties';
}
