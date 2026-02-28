import React, { useState, useCallback } from "react";
import NavBar from "../components/ui/NavBar";
import EventFeedHeadbar from "../components/eventfeed_ui/eventfeed_headbar";
import EventFeedSidebar from "../components/eventfeed_ui/eventfeed_sidebar";
import EventFeedMap3D from "../components/eventfeed_ui/eventfeed_map_3d";

const DEFAULT_MAP_CENTER = { lat: 35.9132, lng: -79.0558 };

export default function EventFeed() {
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleEventHover = useCallback((lat, lng) => {
    setHoveredLocation({ lat, lng });
  }, []);

  const handleEventLeave = useCallback(() => {
    setHoveredLocation(null);
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <NavBar
        isLoggedIn
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <EventFeedHeadbar />
      <main className="flex flex-1 min-h-0 relative z-0">
        <EventFeedSidebar
          onEventHover={handleEventHover}
          onEventLeave={handleEventLeave}
          searchQuery={searchQuery}
        />
        <div className="flex-1 min-w-0 min-h-0 relative z-0">
          <EventFeedMap3D
            defaultCenter={DEFAULT_MAP_CENTER}
            hoveredLocation={hoveredLocation}
          />
        </div>
      </main>
    </div>
  );
}