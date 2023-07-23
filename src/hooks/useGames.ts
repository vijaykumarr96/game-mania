import useData from "./useData";
import { Genre } from "./useGenres";
  export interface Platform{
    id: number;
    name: string;
    slug: string;
  }
 export interface IGame {
    name: string;
    id: number;
    background_image: string;
    parent_platforms: {platform : Platform}[];
    metacritic: number;
  }
// @ts-ignore
const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<IGame>('/games', { params: {genres: selectedGenre?.id, platforms: selectedPlatform?.id} },[selectedGenre?.id, selectedPlatform?.id]);
export default useGames;