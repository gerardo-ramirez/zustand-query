import React from 'react'
import { Repository } from '../hooks/types'
import { useFavoriteReposStore } from '../store/favoriteRepos'
type CardProps={
    repository: Repository,
  isFavorite:boolean
}

export const Card = ({ repository, isFavorite }: CardProps) => {
  const addFavoriteRepo = useFavoriteReposStore(state=>state.addFavoriteRepo); 
  const removeFavoriteRepo = useFavoriteReposStore(state => state.removeFavoriteRepo); 

  const toogleFavorite=()=>{
    if(isFavorite){
       removeFavoriteRepo(repository.id)
    return
    }
    addFavoriteRepo(repository.id)

  }

  return (
    <p key={repository.id}>
      <small>
        {repository.name}
        <button onClick={() => toogleFavorite()}>
          {isFavorite ?
            "dislike" :
            "like"
          }
        </button>
      </small>
    </p>
   
  )
}
