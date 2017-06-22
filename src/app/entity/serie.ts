import { Season } from './season';

export class Serie {
  id: number;
  title: string;
  description: string;
  seasons: string;
  seasons_details: Season[];
  episodes: string;
  followers: string;
  comments: string;
  creation: string;
  genres: string[];
  length: string;
  status: string;
  image: string;
  loaded: boolean;
}
