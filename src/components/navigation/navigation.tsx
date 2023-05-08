import React from 'react'
import {Link} from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/counter'} >Counter </Link></li>
              <li><Link to={'/repositories'}>Repos</Link></li>
              <li><Link to={'/users'} >Users </Link></li>

        </ul>
    </nav>
  )
}
