import React,{ useEffect} from 'react'
import { useCounterStore } from '../../src/store/counter';
import { UserCard } from '../components/userList/userCard';
export const UserList = () => {
    const users = useCounterStore((state) => state.users)

    const { getUsers, cleanUsers } = useCounterStore();
  return (
    <div><h3>userList</h3>
          <div>
              <div>
                  <button onClick={() => getUsers()}>
                      ver users
                  </button>
                  <button onClick={() => cleanUsers()}>
                      limpiar users
                  </button>
              </div>
              <div>

                  {users?.map(user => (
                      <UserCard user={user} />
                  ))}

              </div>
          </div>
    
    </div>
  )
}
