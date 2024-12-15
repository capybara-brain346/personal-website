"use client";

import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const Map: React.FC = () => {
  const position: [number, number] = [18.5204, 73.8567]; // Pune coordinates

  return (
    <MapContainer
      center={position}
      zoom={12}
      scrollWheelZoom={false}
      dragging={false}
      zoomControl={false}
      className="w-full h-[180px] rounded-xl overflow-hidden mt-4"
      attributionControl={false}
    >
      <TileLayer
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
        className="opacity-50"
      />
    </MapContainer>
  );
};

export default Map;