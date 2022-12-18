import React, { useEffect, useState } from "react";
import {
    GoogleMap,
    InfoWindow,
    LoadScript,
    Marker,
} from "@react-google-maps/api";
import mapStyles from "./mapStyle";
import * as data from "./data.json";

const containerStyle = {
    width: "90vw",
    height: "80vh",
};

function MyComponent({ data }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsMounted(true);
        }, 5000);
    }, []);

    const [selectedPark, setSelectedPark] = useState(null);
    return (
        <div className="flex justify-center">
            <LoadScript googleMapsApiKey="AIzaSyACEr9LghZDPPVbV2Y5rMzpRlEQthKw068">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={{ lat: 45.4211, lng: -75.6903 }}
                    zoom={10}
                    defaultOptions={{ styles: mapStyles }}
                >
                    {isMounted &&
                        data.features.map((park, idx) => (
                            <Marker
                                key={idx + 1}
                                position={{
                                    lat: park.geometry.coordinates[1],
                                    lng: park.geometry.coordinates[0],
                                }}
                                onClick={() => {
                                    setSelectedPark(park);
                                }}
                            />
                        ))}
                    {selectedPark && (
                        <InfoWindow
                            onCloseClick={() => {
                                setSelectedPark(null);
                            }}
                            position={{
                                lat: selectedPark.geometry.coordinates[1],
                                lng: selectedPark.geometry.coordinates[0],
                            }}
                        >
                            <div className="flex flex-col justify-center items-center space-y-2">
                                <h1 className="font-bold">
                                    {selectedPark.properties.NAME}
                                </h1>
                                <p>{selectedPark.properties.DESCRIPTIO}</p>
                                <div>
                                    <button
                                        onClick={() => {
                                            alert("OK!");
                                        }}
                                        className="font-bold text-white bg-green-700 p-2 rounded-lg justify-center"
                                    >
                                        Click to post an issue
                                    </button>
                                </div>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    );
}

export default MyComponent;
