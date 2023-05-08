import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClientProvider} from '@tanstack/react-query'
import queryClient from './QueryClient.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Error} from './pages/error.tsx'
import { Counter } from './pages/counter.tsx'
import { Users } from './pages/users.tsx'
import { Repositories } from './pages/rpositories.tsx'
import { UserList } from './pages/userList.tsx'
const router = createBrowserRouter([
  {
    path:'/',
    element: <App /> ,
    errorElement: <Error/>
  },
  {
    path: '/counter',
    element: <Counter/>
  },
  {
    path: '/users',
    element: <Users/>,
    children:[{
      path:'users-list',
      element: <UserList /> ,
      errorElement:<h3>error de children</h3>
    }]
    
  },
  {
    path: '/repositories',
    element: <Repositories/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>,
)
