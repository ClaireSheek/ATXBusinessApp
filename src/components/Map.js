require('dotenv').config()
import React from 'react'


const Map = (props) => {
  console.log(props.business.address)
  let address = props.business.address;
  let addressParam = address.split(' ').join('+')
  console.log(addressParam)


  return (
    <iframe title="map"
      width="450"
      height="350"
      frameborder="0"
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.G_KEY}&q=${addressParam}`}
      allowfullscreen>
    </iframe>
  )
}

export default Map
