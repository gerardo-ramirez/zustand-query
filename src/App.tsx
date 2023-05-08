import React from 'react'
import { useCounterStore } from '../src/store/counter'; 
import { shallow } from "zustand/shallow";

import { Navigation } from './components/navigation/navigation';


const App = () => {

 // const count=useCounterStore((state)=>state.count)
 // const title=useCounterStore((state)=>state.title)
  //llamar multiples valores: 
  const { title}=useCounterStore(state=>({
    count: state.count,
    title: state.title,
    users:state.users
  }),shallow)




  return (
    <div>App hola
      <Navigation />
          <h3>{title}</h3>
    </div>
  )
}

export default App