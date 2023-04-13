import useData from "./useData";
  export interface Platform{
    id: number;
    name: string;
    slug: string;
  }
 export interface Igame {
    name: string;
    id: number;
    background_image: string;
    parent_platforms: {platform : Platform}[];
    metacritic: number
  }

const useGames = () => useData<Igame>('/games')
export default useGames;