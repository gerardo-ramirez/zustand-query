import React from 'react'
import { useCounterStore } from '../src/store/counter'; 
import { shallow } from "zustand/shallow";
import { Repositories } from './pages/rpositories';

const App = () => {

 // const count=useCounterStore((state)=>state.count)
 // const title=useCounterStore((state)=>state.title)
  //llamar multiples valores: 
  const {count, title, users}=useCounterStore(state=>({
    count: state.count,
    title: state.title,
    users:state.users
  }),shallow)
   const increment=useCounterStore((state)=>state.increment)
  const { getUsers, cleanUsers } = useCounterStore();


  return (
    <div>App hola
          <h3>{title}</h3>
      <h2>counter: {count}</h2>
      <button onClick={() => increment()}>
Increment
      </button>
      <div>
        <div>
          <button onClick={() => getUsers()}>
              ver users
          </button>
          <button onClick={()=>cleanUsers()}>
    limpiar users
          </button>
        </div>
        <div>
           <ul>
          {users?.map(user=>(
          <li key={user.id}>{user.name}</li>
        ))} 
        </ul> 
        </div>
      </div>
      <div>
        <Repositories/>
      </div>
    </div>
  )
}

export default App