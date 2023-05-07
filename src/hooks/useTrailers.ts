import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import { Trailer } from '../entities/Trailer';


const useTrailer = (id: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${id}/movies`);
  return useQuery({
    queryKey: ['trailers', id],
    queryFn: apiClient.getAll
  });
};

export default useTrailer;