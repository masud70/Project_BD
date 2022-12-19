// import React, { useRef, useState } from "react";
// import { Map, TileLayer, Popup, Marker } from "react-leaflet";

// const attribution =
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
// const url =
//     "https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=puoG6vOLC4oqJXcum8fR";

// const OpenStreetMap = () => {
//     const [center, setCenter] = useState({
//         lat: 23.729211164246585,
//         lng: 90.40874895549243,
//     });
//     const mapRef = useRef();
//     console.log(Map);

//     return (
//         <div>
//             <Map center={center} zoom={9} ref={mapRef}>
//                 <TileLayer attribution={attribution} url={url} />
//                 <Marker position={[23.729211164246585, 90.40874895549243]}>
//                     <Popup>This is a popup.</Popup>
//                 </Marker>
//             </Map>
//         </div>
//     );
// };

// export default OpenStreetMap;
