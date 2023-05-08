import React from 'react'
import { Outlet, useNavigate} from 'react-router-dom';
export const Users = () => {
    const navigate = useNavigate(); 
  return (
    <div><h2>users</h2>

         <div>
        <h4>Lista de usuarios :</h4>
              <button onClick={() => navigate('users-list')}>list</button>
        <Outlet/>
        </div>
    </div>
  )
    
   
}
