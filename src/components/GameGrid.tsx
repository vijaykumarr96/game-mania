import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface IGameRes {
  count: number;
  results: [];
}
interface Igame {
  name: string;
}
function GameGrid() {
  const [games, setGames] = useState<Igame[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<IGameRes>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
