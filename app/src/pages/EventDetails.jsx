import React from "react";
import { useLocation } from "react-router-dom";
import EventDetailCard from "../components/event_details_ui/event_detail_card";
import EssentialInfo from "../components/event_details_ui/essential_info";
import RightSideLooksees from "../components/event_details_ui/right_side_looksees";
import NavBar from "../components/ui/NavBar";
import WhyVisitUs from "../components/event_details_ui/why_visit_us";
import { MOCK_EVENTS, CATEGORY_IMAGES, mapThirdSpaceToEvent } from "../data/mockEvents";

const CATEGORY_LABELS = {
  sports: "Sports & Fitness",
  arts: "Arts & Culture",
  tech: "Tech & Coding",
  music: "Music & Performance",
  food: "Food & Drink",
  nature: "Nature & Outdoors",
  gaming: "Gaming",
  volunteer: "Volunteering",
  social: "Social & Meetups",
};

function getEventImage(event) {
  return event.imageUrl || CATEGORY_IMAGES[event.categoryId];
}

function getEventTags(event) {
  if (event.tags && event.tags.length) return event.tags;
  const label = CATEGORY_LABELS[event.categoryId];
  return label ? [label] : [];
}

/** Normalize so we always have display shape (from mapper or already mapped) */
function normalizeEvent(raw) {
  if (!raw) return MOCK_EVENTS[0];
  if (raw.title != null || raw.event_name == null) return raw;
  return mapThirdSpaceToEvent(raw);
}

export default function EventDetails() {
  const { state } = useLocation();
  const event = normalizeEvent(state?.event || MOCK_EVENTS[0]);
  const imageUrl = getEventImage(event);
  const tags = getEventTags(event);

  return (
    <>
      <NavBar />
      <main className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-[1200px] px-4 py-6 md:px-10">
          <EventDetailCard
            imageUrl={imageUrl}
            imageAlt={event.title}
            tags={tags}
            title={event.title}
            address={event.address || event.locationLabel}
          />
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 space-y-12 min-w-0">
              <EssentialInfo items={event.essentialInfo} />
              <WhyVisitUs items={event.whyVisitUs} />
            </div>
            <RightSideLooksees
              openingHours={event.openingHours}
              addressLine1={event.addressLine1}
              addressLine2={event.addressLine2}
              directionsUrl={event.directionsUrl}
              quote={event.quote}
              quoteAttribution={event.quoteAttribution}
            />
          </div>
        </div>
      </main>
    </>
  );
}
