import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'


const Map = () => {

  return (
    <div className='w-full'>
      <MapContainer center={[5.0377, 7.9138]} zoom={15} scrollWheelZoom={false} style={{ height: '100vh', zIndex: '-1'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[5.0377, 7.9128]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
       
      </MapContainer>
    </div>
  )
}

export default Map