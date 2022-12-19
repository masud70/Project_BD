import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
    GoogleMap,
    InfoWindow,
    LoadScript,
    MarkerF,
} from "@react-google-maps/api";
import mapStyles from "./mapStyle";
import { default as finalData } from "./finalData.json";

const containerStyle = {
    width: "100%",
    height: "80vh",
};
const options = [
    { label: "Category", value: 1 },
    { label: "Project Time", value: 2 },
];
const api1 = "AIzaSyA8A62BrXcmfsbDGWj9KfM3CXtCOh3QFho";
const api2 = "AIzaSyACEr9LghZDPPVbV2Y5rMzpRlEQthKw068";
const api3 = "AIzaSyCwGiisx0jEMdbYUq5HM68Vu0hi3XcIZ94";
const api4 = 'AIzaSyDt9IIsFpS3H9Efjgkoh87zD3onXnTDWVw';

function MyComponent() {
    const [isMounted, setIsMounted] = useState(false);
    const [selected, setSelected] = useState(null);
    const [selectedPark, setSelectedPark] = useState(null);
    let categories = [];

    useEffect(() => {
        setTimeout(() => {
            setIsMounted(true);
        }, 1000);
    }, []);

    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-8/12 lg:w-10/12 overflow-hidden">
                <LoadScript googleMapsApiKey={api2}>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={{
                            lat: 23.729211164246585,
                            lng: 90.40874895549243,
                        }}
                        zoom={10}
                        defaultOptions={{ styles: mapStyles }}
                    >
                        {isMounted &&
                            finalData.data.map((each, idx) => {
                                categories = [
                                    ...new Map(
                                        [
                                            ...categories,
                                            {
                                                label: each.category,
                                                value: each.category,
                                            },
                                        ].map((item) => [item["label"], item])
                                    ).values(),
                                ];
                                each.location_coordinates.map((x, id) => {
                                    return (
                                        <MarkerF
                                            key={idx * 10 + id}
                                            position={{
                                                lat: x.lat,
                                                lng: x.lng,
                                                // lat: 23.729211164246585,
                                                // lng: 90.40874895549243,
                                            }}
                                            onClick={() => {
                                                const node = {
                                                    ...each,
                                                    location_coordinates: {
                                                        lat: x.lat,
                                                        lng: x.lng,
                                                    },
                                                };
                                                setSelectedPark(node);
                                            }}
                                        />
                                    );
                                });
                            })}
                        {selectedPark && (
                            <InfoWindow
                                onCloseClick={() => {
                                    setSelectedPark(null);
                                }}
                                position={{
                                    lat: selectedPark.location_coordinates.lat,
                                    lng: selectedPark.location_coordinates.lng,
                                }}
                            >
                                <div className="flex flex-col justify-center items-center space-y-2">
                                    <h1 className="font-bold">
                                        {selectedPark.project_name}
                                    </h1>
                                    <div>{selectedPark.category}</div>
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
            <div className="w-full md:w-4/12 lg:w-2/12 bg-slate-400">
                <div className="py-4 px-3 justify-center flex w-full flex-col space-y-2">
                    <div className="w-full">
                        <Autocomplete
                            className="w-full"
                            options={options}
                            renderInput={(params) => (
                                <TextField {...params} label="Filter by" />
                            )}
                            onChange={(event, value) => setSelected(value)}
                        />
                    </div>
                    <div className=" space-y-2">
                        {selected && selected.value === 1 ? (
                            <>
                                <Autocomplete
                                    className="w-full"
                                    options={categories}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Select Category"
                                        />
                                    )}
                                />
                            </>
                        ) : selected && selected.value === 2 ? (
                            <>
                                <TextField
                                    className="w-full"
                                    label="Lat"
                                    variant="outlined"
                                />
                                <TextField
                                    className="w-full"
                                    label="Lng"
                                    variant="outlined"
                                />
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyComponent;
