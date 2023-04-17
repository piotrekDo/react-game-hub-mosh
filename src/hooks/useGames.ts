import React, { useEffect, useState } from 'react';
import gameService, { FetchGamesResponse, Game } from '../services/api-client';
import { CanceledError } from 'axios';

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const { request, cancel } = gameService.getAll();
    setIsLoading(true);
    request
      .then(response => {
        setGames(response.data.results);
        setIsLoading(false);
      })
      .catch(error => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));

    // return () => cancel();
  }, []);

  return { games, error, isLoading, setGames, setError, setIsLoading };
};

export default useGames;
