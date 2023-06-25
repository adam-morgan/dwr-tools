import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
    ImageOverlay,
    MapContainer,
    Marker,
    Popup
} from 'react-leaflet';

import { CRS, divIcon } from 'leaflet';

import 'leaflet/dist/leaflet.css';

import styles from './RomViewer.module.css';

const Map = (props) => {
    const [mapData, setMapData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                '/api/map',
                {
                    method: 'POST',
                    body: JSON.stringify(props.rom.maps[props.mapName].tiles),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.ok) {
                const data = await response.arrayBuffer();

                const bytes = new Uint8Array(data);
                let binary = '';
                for (let i = 0; i < bytes.length; i++) {
                    binary += String.fromCharCode(bytes[i]);
                }

                setMapData(btoa(binary));
            }
        };

        fetchData();
    }, props.rom[props.mapName]);

    const layers = [];

    const bounds = [[0, 0], [120 * 16, 120 * 16]];

    const { x: centerX, y: centerY } = props.rom.locations.TANTEGEL;
    const center = tileToMapCoords([centerX, centerY]);

    if (mapData) {
        const imageUrl = `data:image/png;base64, ${mapData}`;
        layers.push((
            <ImageOverlay
                key="mapImg"
                url={imageUrl}
                bounds={bounds}
            />
        ));
    }

    return (
        <MapContainer
            className={styles.leafletMap}
            crs={CRS.Simple}
            center={center}
            zoom={0}
            minZoom={-3}
            maxZoom={5}
            scrollWheelZoom={false}
        >
            {layers}
            {createMarkers(props.rom)}
        </MapContainer>
    );
};

const createMarkers = (rom) => {
    const markers = [];

    for (const [l, def] of Object.entries(rom.locations)) {
        if (def.map === 'OVERWORLD') {
            markers.push((
                <Marker
                    position={tileToMapCoords([def.x, def.y])}
                    icon={divIcon({
                        className: 'leaflet-mouse-marker',
                        iconAnchor: [8, 8],
                        iconSize: [16, 16]
                    })}
                >
                    <Popup>
                        {l}
                    </Popup>
                </Marker>
            ));
        }
    }

    return markers;
};

const tileToMapCoords = (tileCoords) => {
    return imgToMapCoords([
        (tileCoords[0] * 16) + 8,
        (tileCoords[1] * 16) + 8
    ]);
};

const imgToMapCoords = (imgCoords) => {
    return [
        (120 * 16) - imgCoords[1],
        imgCoords[0]
    ];
};

Map.propTypes = {
    rom: PropTypes.object,
    mapName: PropTypes.string
};

export default Map;
