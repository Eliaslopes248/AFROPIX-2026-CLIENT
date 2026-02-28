import React from "react";
import NavBar from "../components/ui/NavBar";
import EventFeedHeadbar from "../components/eventfeed_ui/eventfeed_headbar";
import EventFeedSidebar from "../components/eventfeed_ui/eventfeed_sidebar";
import EventFeedMap3D from "../components/eventfeed_ui/eventfeed_map_3d";

export default function EventFeed() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <NavBar isLoggedIn />
      <EventFeedHeadbar />
      <main className="flex flex-1 min-h-0">
        <EventFeedSidebar />
        <div className="flex-1 min-w-0 min-h-0">
          <EventFeedMap3D />
        </div>
      </main>
    </div>
  );
}