import React from 'react'

const Error = ({message}) => {
  return (
    <div>
        <div>
            There was an error
        </div>
        <div>
            The error message is {message}
        </div>
    </div>
  )
}

export default Error