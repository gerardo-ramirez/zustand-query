import React from 'react'
import { User } from './types'
type UserListProps ={
    user: User

}
export const UserCard = ({ user }: UserListProps) => {
  return (
    <div key={user.id}><p>user:</p>
          <small>{user.name}</small>
    </div>
  )
}
