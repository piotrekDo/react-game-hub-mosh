import useTrailer from '../hooks/useTrailers';

interface Props {
  id: number;
}

export const GameTrailer = ({ id }: Props) => {
  const { data, error, isLoading } = useTrailer(id);

  if (isLoading) return null;
  if (error) throw error;

  const firstTrailer = data?.results[0];
  if (!firstTrailer) return null;

  return <video 
  src={firstTrailer.data[480]} 
  poster={firstTrailer.preview}
  controls
  ></video>;
};
