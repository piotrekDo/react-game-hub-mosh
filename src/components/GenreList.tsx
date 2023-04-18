import React from 'react'
import useGenres from '../hooks/useGenres'

export const GenreList = () => {
    const {data} =  useGenres();
  return (
    <ul>
        {data.map(genre => <p key={genre.id}>{genre.name}</p>)}
    </ul>
  )
}
