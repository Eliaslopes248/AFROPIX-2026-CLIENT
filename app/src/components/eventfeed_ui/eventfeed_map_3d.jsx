import { useEffect } from 'react';

export default function EventFeedMap3D() {
  useEffect(() => {

    const SCRIPT_ID = 'google_map_3d';

    if (document.getElementById(SCRIPT_ID)) return;

    const google_map_3d_key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const script = document.createElement('script');
    script.id = SCRIPT_ID
    script.src = `https://maps.googleapis.com/maps/api/js?key=${google_map_3d_key}&v=beta&libraries=maps3d`;
    script.async = true;
    document.head.appendChild(script);

  }, []);

  return (
    <div className="h-full w-full min-h-0">
      <gmp-map-3d
        mode="hybrid"
        center="37.841157, -122.551679"
        range="2000"
        tilt="75"
        heading="330"
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
}