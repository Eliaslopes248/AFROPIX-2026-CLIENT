import { useEffect, useLayoutEffect, useRef } from 'react';

const DEFAULT_CENTER = { lat: 35.9132, lng: -79.0558 };

export default function EventFeedMap3D({ defaultCenter = DEFAULT_CENTER, hoveredLocation = null }) {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    const SCRIPT_ID = 'google_map_3d';

    if (document.getElementById(SCRIPT_ID)) return;

    const google_map_3d_key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${google_map_3d_key}&v=beta&libraries=maps3d`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!hoveredLocation || !mapRef.current) return;
    const map = mapRef.current;
    if (typeof map.flyCameraTo !== 'function') return;
    const lat = Number(hoveredLocation.lat);
    const lng = Number(hoveredLocation.lng);
    map.flyCameraTo({
      endCamera: {
        center: { lat, lng },
        tilt: 75,
        range: 1500,
      },
      durationMillis: 800,
    });
  }, [hoveredLocation]);

  useLayoutEffect(() => {
    if (!hoveredLocation || !markerRef.current) return;
    markerRef.current.position = {
      lat: Number(hoveredLocation.lat),
      lng: Number(hoveredLocation.lng),
    };
  }, [hoveredLocation]);

  const centerStr = `${defaultCenter.lat},${defaultCenter.lng}`;

  return (
    <div className="h-full w-full min-h-0">
      <gmp-map-3d
        ref={mapRef}
        mode="hybrid"
        center={centerStr}
        range="2000"
        tilt="75"
        heading="330"
        style={{ height: '100%', width: '100%' }}
      >
        {hoveredLocation != null && (
          <gmp-marker-3d ref={markerRef} />
        )}
      </gmp-map-3d>
    </div>
  );
}
