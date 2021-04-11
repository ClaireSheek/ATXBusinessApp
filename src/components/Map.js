import React from 'react'


const Map = (props) => {
  let address = props.map
  let addressParam = address.toString().split(' ').join('+')
  let apiKey = 'AIzaSyCvLozyym_Bo2mYiiW61EPctnFFTLBtZCM'


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
