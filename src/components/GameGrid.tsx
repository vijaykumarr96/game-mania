import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';

function GameGrid() {
    const [games,setGames] = useState([])
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient
        .get("/games")
        .then(res => {
            console.log(res)})
        .catch((err) => setError(err.message));
    })
  return (

    <div>GameGrid</div>
  )
}

export default GameGrid