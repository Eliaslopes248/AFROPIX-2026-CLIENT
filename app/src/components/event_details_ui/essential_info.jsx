/**
 * Essential Info section for event/space detail pages.
 * Matches mockup: app/src/assets/mockups/afropix/event-details/code.html (lines 79–114)
 * - Section heading with info icon
 * - 2x2 grid of cards: What it is, Who it's for, How to join, What to expect
 */

const DEFAULT_ITEMS = [
  {
    icon: "question_mark",
    title: "What it is",
    description:
      "A vibrant third space where premium coffee meets live performance. We host local acoustic acts every evening and provide open-mic slots for emerging talent.",
  },
  {
    icon: "groups",
    title: "Who it's for",
    description:
      "All ages welcome! Perfect for music lovers, digital nomads seeking vibe, and neighborhood families looking for a relaxed evening out.",
  },
  {
    icon: "login",
    title: "How to join",
    description:
      "Just walk in! No membership required. If you want to perform, sign up at the bar between 4 PM and 5 PM daily.",
  },
  {
    icon: "visibility",
    title: "What to expect",
    description:
      "Mellow acoustic tunes, the smell of freshly roasted beans, communal seating, and a strictly no-judgment atmosphere.",
  },
];

export function EssentialInfo({ items = DEFAULT_ITEMS }) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <span className="material-symbols-outlined text-primary">info</span>
        <h2 className="text-2xl font-bold">Essential Info</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800"
          >
            <h3 className="text-primary font-bold mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">
                {item.icon}
              </span>
              {item.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EssentialInfo;
