/**
 * "Why visit us?" section for event/space detail pages.
 * Matches mockup: app/src/assets/mockups/afropix/event-details/code.html (lines 115–140)
 * - Section heading
 * - List of items with check_circle icon, bold title, and description
 */

const DEFAULT_ITEMS = [
  {
    title: "Local Focus:",
    description:
      "We exclusively feature artists from within a 20-mile radius to support our local creative economy.",
  },
  {
    title: "High-Quality Gear:",
    description:
      "Pro-grade sound system and a tuned house piano available for all performers.",
  },
  {
    title: "Sustainably Sourced:",
    description:
      "Our coffee is fair-trade and our snacks are provided by local bakeries daily.",
  },
];

export function WhyVisitUs({ items = DEFAULT_ITEMS }) {
  return (
    <section>
      <h3 className="text-xl font-bold mb-6">Why visit us?</h3>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.title} className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary mt-1">
              check_circle
            </span>
            <div>
              <span className="font-bold text-lg">{item.title}</span>
              <p className="text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WhyVisitUs;
