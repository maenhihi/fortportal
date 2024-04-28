import '../Styles/MapPage.css';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, ZoomControl, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import MapSearchBar from '../Components/MapSearchBar';

import { Icon, divIcon, point } from "leaflet";
// import { SiD } from 'react-icons/si';

// const customIcon = new Icon({
//     iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
//     iconUrl: require("./icons/placeholder.png"),
//     iconSize: [38, 38]
//   });

// async function logData() {
//     const API = await fetch(`http://127.0.0.1:8000/poi/`) 
//     const APIData = await API.json()
//     console.log(APIData);
//     return APIData
// }

// logData();

const markers = [
    {
      geocode: [0.6626441059207978, 30.275449855151653],
      popUp: "Fort Fun City Hotel & Amusement Park"
    },
    {
      geocode: [0.6463193683408491, 30.27558173589785],
      popUp: "Kyebambe Girls Secondary School"
    },
    {
      geocode: [0.6673957489413439, 30.26758061457692],
      popUp: "Kalitusi Nature Resort"
    },
  ];



function MapPage() {
  
    return (

        <>
                <MapSearchBar/>
                 <MapContainer center={[0.654444, 30.274444]} zoom={13} dragging={true} autoPanOnFocus={true} zoomControl={false}>
           <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
           {/* <MarkerClusterGroup
                chunkedLoading
                iconCreateFunction={createClusterCustomIcon}
            >
                {markers.map((marker) => (
                <Marker position={marker.geocode} icon={customIcon}>
                    <Popup>{marker.popUp}</Popup>
                </Marker>
                ))}
            </MarkerClusterGroup> */}
            <ZoomControl position="topright" className="zoom-control-container"/>
        </MapContainer> 
        </>
       

    );
}

export default MapPage;
