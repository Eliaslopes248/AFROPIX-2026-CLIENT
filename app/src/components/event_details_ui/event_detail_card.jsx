/**
 * Top detail card for event/space detail pages.
 * Matches mockup: app/src/assets/mockups/afropix/event-details/code.html + screen.png
 * - Full-bleed background image with 21/9 aspect
 * - Bottom gradient overlay with tags, title, and address
 */

export function EventDetailCard({
  imageUrl,
  imageAlt = "Event or space cover",
  tags = [],
  title,
  address,
}) {
  return (
    <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden mb-8 shadow-xl">
      <img
        className="w-full h-full object-cover"
        src={imageUrl}
        alt={imageAlt}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
        {tags?.length > 0 && (
          <div className="flex gap-2 mb-3">
            {tags.map((tag, i) => (
              <span
                key={tag}
                className={
                  i === 0
                    ? "bg-primary text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase"
                    : "bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase"
                }
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {title && (
          <h1 className="text-white text-4xl md:text-5xl font-extrabold">
            {title}
          </h1>
        )}
        {address && (
          <p className="text-slate-200 text-lg mt-2">{address}</p>
        )}
      </div>
    </div>
  );
}

export default EventDetailCard;
