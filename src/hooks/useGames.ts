import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface IGameRes {
    count: number;
    results: [];
  }
  interface Igame {
    name: string;
  }

const useGames = () => {
    const [games, setGames] = useState<Igame[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const controller = new AbortController();
        console.log(controller)
      apiClient
        .get<IGameRes>("/games",{signal: controller.signal})
        .then((res) => {
          setGames(res.data.results);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)});
        return () => controller.abort();
    }, []);
  
return {error, games}
}
export default useGames;