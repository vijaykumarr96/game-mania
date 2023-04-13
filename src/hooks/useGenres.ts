import { useState,useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}
interface fetchGenresRes{
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading]=useState(true);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)
        apiClient
        .get<fetchGenresRes>("/genres",{signal: controller.signal})
        .then((res) => {
          setGenres(res.data.results)
          setLoading(false);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)});
        return () => controller.abort();
    }, []);
  
return {error, genres,loading}
}

export default useGenres;