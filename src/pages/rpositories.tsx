import React from 'react'
import { useFetchRepositories } from '../hooks/useRepos'
import { Card } from '../components/card'
import { useFavoriteReposStore } from '../store/favoriteRepos'

export const Repositories = () => {
 const {favoriteReposIds} =useFavoriteReposStore()
    const{ data, isLoading }= useFetchRepositories()
    if(isLoading) return <div> <h3>loading...</h3></div>
  //console.log(favoriteReposIds)
  return (
    <div><h2>Repositories</h2>
    <div>
  
    {
        data?.map(repo=>(
            <Card  repository={repo} isFavorite={favoriteReposIds.includes(repo.id)}/>
        ))
    }
       



        </div>
  
    
    </div>
  )
}
