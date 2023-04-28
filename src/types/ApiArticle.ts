import { Source } from './Source';

export interface ApiArticle {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
}
