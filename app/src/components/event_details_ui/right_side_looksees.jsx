/**
 * Right sidebar for event/space detail pages.
 * Matches mockup: app/src/assets/mockups/afropix/event-details/code.html (lines 142–184)
 * 1. Add to My Circles button + Opening Hours
 * 2. Location card with map image and Get Directions
 * 3. Quote block (italic + attribution)
 */

const DEFAULT_OPENING_HOURS = [
  { label: "Mon - Thu", hours: "08:00 - 22:00" },
  { label: "Fri - Sat", hours: "08:00 - 00:00" },
  { label: "Sunday", hours: "10:00 - 20:00" },
];

const DEFAULT_MAP_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCqlUNuB4jWcjET11f3GK4qdlzDOHPr9IdhhkFUWcMRsvCOnq88MAYYXgXzdhpfi90W-1Yau4jFqe8HJVm-JpNm05VQRqXdG2mG1IArS9wz4bZvu3C6mxE8IWLVgm9oKDfPSRcD6240WutXYlWuHlwAR8oFnj3jZWtyfNVaOUFuyY2oOB_Dz5kk_J8o82l5ibUxDv2g8inXjiUKXa8m_zioVdCefZvIagI6P23zQKnIIWc_RG3uApSNEwMG9ImNZvAbWOTSWvGotyxs";

export function RightSideLooksees({
  onAddToCircles,
  openingHours = DEFAULT_OPENING_HOURS,
  addressLine1 = "124 Melody Lane",
  addressLine2 = "East District, Soundtown, ST 542",
  mapImageUrl = DEFAULT_MAP_IMAGE_URL,
  directionsUrl,
  quote = '"The best place to find new local talent while enjoying a perfect oat latte."',
  quoteAttribution = "— Sarah K., Regular",
}) {
  return (
    <aside className="w-full lg:w-80 shrink-0 space-y-6">
      {/* 1. Add to My Circles + Opening Hours */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <button
          type="button"
          onClick={onAddToCircles}
          className="w-full bg-primary text-slate-900 font-bold py-3 rounded-lg mb-6 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        >
          <span className="material-symbols-outlined">add_circle</span>
          Add to My Circles
        </button>
        <div className="space-y-4">
          <h4 className="font-bold border-b border-slate-100 dark:border-slate-700 pb-2">
            Opening Hours
          </h4>
          {openingHours.map(({ label, hours }) => (
            <div key={label} className="flex justify-between text-sm">
              <span className="text-slate-500">{label}</span>
              <span className="font-semibold">{hours}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Location + map */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="h-48 w-full relative">
          <img
            className="w-full h-full object-cover"
            src={mapImageUrl}
            alt="Map showing location"
          />
          <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="material-symbols-outlined text-primary text-4xl drop-shadow-md">
              location_on
            </span>
          </div>
        </div>
        <div className="p-4">
          <p className="text-sm font-semibold">{addressLine1}</p>
          <p className="text-xs text-slate-500 mb-3">{addressLine2}</p>
          <a
            href={directionsUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-xs font-bold flex items-center gap-1 hover:underline"
          >
            GET DIRECTIONS{" "}
            <span className="material-symbols-outlined text-xs">
              arrow_outward
            </span>
          </a>
        </div>
      </div>

      {/* 3. Quote */}
      <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 italic">
          {quote}
        </p>
        <p className="text-xs font-bold mt-2">{quoteAttribution}</p>
      </div>
    </aside>
  );
}

export default RightSideLooksees;
