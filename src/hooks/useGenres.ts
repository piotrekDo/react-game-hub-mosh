import useData from './useData'


export interface Genre {
    id: number;
    name: string;
}

const useGenres = () => useData<Genre>('/games');

export default useGenres;
