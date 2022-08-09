import React from 'react'

const Data = ({data}) => {
  return (
    <div>
        <div>
            The city name is  {data?.name}
        </div>
        <div>
            The Temperature is {data?.main.temp}
        </div>
        <div>
            The Weather type is {data?.weather[0].description}
        </div>
    </div>
  )
}

export default Data