import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface IGameRes {
    count: number;
    results: [];
  }
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

const useGames = () => {
    const [games, setGames] = useState<Igame[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading]=useState(true);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)
        apiClient
        .get<IGameRes>("/games",{signal: controller.signal})
        .then((res) => {
          setGames(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)});
        return () => controller.abort();
    }, []);
  
return {error, games,loading}
}
export default useGames;