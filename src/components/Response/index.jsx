import React from 'react'

export const Response = ({response}) => {
  if (response){
    return (
        <span className={response.error ? 'error' : 'success'}>
            {response.message}
        </span>
    )
  }
  return null
}
