import { Marker, Popup } from 'react-leaflet'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'


const position = [-22.9083, -43.1964]
        
const Mapa = () => (

<MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: '50%', height: '400px', margin: 'auto' }}>
<TileLayer
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
<Marker position={[-22.9083, -43.1964]}>
  <Popup>
    Código: 36
<br />
Nome: Centro
<br />
Horário: 23:15 18/08/2023
<br />
Chuva (últ 15m): 20.0 mm
<br />
Temperatura: 28°C
<br />
Vento: 10 m/s (NE) <br /> 
  </Popup>
</Marker>

<Marker position={[-22.9810, -43.1964]}>
  <Popup>
    Código: 37
<br />
Nome: Copacabana
<br />
Horário: 23:15 18/08/2023
<br />
Chuva (últ 15m): 18.0 mm
<br />
Temperatura: 26°C
<br />
Vento: 11 m/s (NE) <br /> 
  </Popup>
</Marker>

</MapContainer>
)


export {Mapa}