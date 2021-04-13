import React from 'react'
require('dotenv').config()


const Map = (props) => {
  let address = props.map
  let addressParam = address.toString().split(' ').join('+')
  let apiKey = process.env.REACT_APP_G_KEY


  if(address === ''){ 
    return null
    } else {
      return (
        <div className="map">
          <iframe 
            title="map"
            width="450"
            height="350"
            frameBorder="0"
            src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${addressParam}`}
            allowFullScreen>
          </iframe>
        </div>
      )
    }
}

export default Map
