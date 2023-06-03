import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { MapContainer, ImageOverlay } from 'react-leaflet';
import { CRS } from 'leaflet';

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
    const center = [
        Math.floor((bounds[1][0] - bounds[0][0]) / 2),
        Math.floor((bounds[1][1] - bounds[0][1]) / 2)
    ];

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
        </MapContainer>
    );
};

Map.propTypes = {
    rom: PropTypes.object,
    mapName: PropTypes.string
};

export default Map;
