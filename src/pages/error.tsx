import React from 'react';
import { useRouteError} from 'react-router-dom'

export const Error = () => {
    const errors= useRouteError();
    console.log(errors)
  return (
    <div><h6>Error</h6>
    <p>{errors.statusText}</p>
    </div>
  )
}
