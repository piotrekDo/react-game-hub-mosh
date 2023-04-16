import React, { useEffect, useState } from 'react';
import gameService, { FetchGamesResponse, Game } from '../services/api-client';

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsloading] = useState<boolean>(false);

  useEffect(() => {
    setIsloading(true);
    const { request, cancel } = gameService.getAll();
    request
      .then(resp => setGames(resp.data.results))
      .catch(err => setError(err))
      .finally(() => setIsloading(false));
  }, []);

  return { games, error, isLoading, setGames, setError, setIsloading };
};

export default useGames;