/**
 * Mock third_spaces data matching Supabase schema: public.third_spaces
 * Schema: id, host_name, city, state, start_time, end_time, cover_image_url,
 * start_date, end_date, street_address, suite_apt, tags, lat, long, zip_code,
 * event_name, event_details
 *
 * mapThirdSpaceToEvent() maps a schema row to the display shape used by
 * EventFeed sidebar and EventDetails so the UI keeps working without errors.
 */

const DEFAULT_AVATARS = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBw39cTTyZlGXveLEFzPiJcQSPFZqR3M9fgCA-hiJsbYtvl1A74kEovLYvonAn6fZXSa_KG6V7AqFDbPguNtPPB4_jQERQy-h8BsB27CQoBMlEuyX4QkO829paRREVmvOiq6xfJ7epMjXxOaIvM-pg7GIjxhqdWZeLvsMvyClKZvSlqMKGmYDqUnFZ2zV0qsIwbweu22UOJHcz-dJfv0KR9WDx-lOLmteuXuhA84J3I6tQSg3OkE0tuNJzPysvvi6Hlr12yFYiCvdhB',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAq0aQg6_5M5eTr29jMUI-WyPYfesrXcAZNZRGEgfLx_2lljoE6EdaGVuJDFbgAF3NU0fPahbQ70u8YSaINgxf__RKIZf7eqhIwGSODmH6XqJ7mui5P5z9TheRpVpW3iaV8C-Ebz7ainldbtNznSPRz84tKK6hJZl0sf8iNmefoG2Tlaj-i8tEuYnrbkbKFfvHf9-yo5aFl7YkQ0PqWhN0ikALtN8iVN9LcdksYlk0VvTNnj2KkqrcXoBC7LN8Q8rDBXFlr2nLo46EB',
];

/** Fallback images by tag/category when cover_image_url is null */
export const CATEGORY_IMAGES = {
  sports: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
  arts: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800',
  tech: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
  music: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800',
  food: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
  nature: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
  gaming: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
  volunteer: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800',
  social: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800',
};

/** Raw mock rows matching Supabase third_spaces schema (lat/long as varchar per schema) */
const THIRD_SPACES_RAW = [
  {
    id: '11111111-1111-1111-1111-111111111101',
    host_name: 'Tar Heel Run Club',
    city: 'Chapel Hill',
    state: 'NC',
    start_time: '18:30:00',
    end_time: '19:30:00',
    cover_image_url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
    start_date: '2025-03-01',
    end_date: null,
    street_address: 'South Road, Bell Tower',
    suite_apt: null,
    tags: ['Sports & Fitness', 'Running'],
    lat: '35.9042',
    long: '-79.0469',
    zip_code: '27514',
    event_name: 'Tar Heel Run Club',
    event_details: 'Weekly 5K from the Bell Tower. All paces welcome.',
  },
  {
    id: '11111111-1111-1111-1111-111111111102',
    host_name: 'Downtown Chapel Hill',
    city: 'Chapel Hill',
    state: 'NC',
    start_time: '18:00:00',
    end_time: '21:00:00',
    cover_image_url: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800',
    start_date: '2025-03-07',
    end_date: null,
    street_address: 'Franklin St',
    suite_apt: null,
    tags: ['Arts & Culture', 'Gallery'],
    lat: '35.9132',
    long: '-79.0558',
    zip_code: '27516',
    event_name: 'Downtown Chapel Hill Art Walk',
    event_details: 'Local galleries and pop-up installations along Franklin St.',
  },
  {
    id: '11111111-1111-1111-1111-111111111103',
    host_name: 'Charlotte Dev Meetup',
    city: 'Charlotte',
    state: 'NC',
    start_time: '18:30:00',
    end_time: '20:30:00',
    cover_image_url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    start_date: '2025-03-11',
    end_date: null,
    street_address: 'South End',
    suite_apt: null,
    tags: ['Tech & Coding', 'Meetup'],
    lat: '35.2271',
    long: '-80.8431',
    zip_code: '28203',
    event_name: 'Charlotte Dev Meetup',
    event_details: 'Monthly talks and networking for software developers.',
  },
  {
    id: '11111111-1111-1111-1111-111111111104',
    host_name: 'Green Bean Café',
    city: 'Greensboro',
    state: 'NC',
    start_time: '20:00:00',
    end_time: '23:00:00',
    cover_image_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800',
    start_date: '2025-03-14',
    end_date: null,
    street_address: 'Elm St',
    suite_apt: null,
    tags: ['Music & Performance', 'Jazz'],
    lat: '36.0726',
    long: '-79.792',
    zip_code: '27401',
    event_name: 'Live Jazz at Green Bean',
    event_details: 'Local jazz ensemble every Friday night.',
  },
  {
    id: '11111111-1111-1111-1111-111111111105',
    host_name: 'Food Truck Friday',
    city: 'Chapel Hill',
    state: 'NC',
    start_time: '17:00:00',
    end_time: '21:00:00',
    cover_image_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    start_date: '2025-03-14',
    end_date: null,
    street_address: 'Rosemary & Henderson',
    suite_apt: null,
    tags: ['Food & Drink', 'Outdoor'],
    lat: '35.9132',
    long: '-79.0558',
    zip_code: '27516',
    event_name: 'Food Truck Friday',
    event_details: 'Rotating trucks, outdoor seating, and live acoustic sets.',
  },
  {
    id: '11111111-1111-1111-1111-111111111106',
    host_name: 'NC Botanical Garden',
    city: 'Chapel Hill',
    state: 'NC',
    start_time: '10:00:00',
    end_time: '11:00:00',
    cover_image_url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
    start_date: '2025-03-15',
    end_date: null,
    street_address: 'UNC Botanical Garden',
    suite_apt: null,
    tags: ['Nature & Outdoors', 'Garden'],
    lat: '35.9132',
    long: '-79.0558',
    zip_code: '27517',
    event_name: 'North Carolina Botanical Garden Tour',
    event_details: 'Guided walk through native plant collections.',
  },
  {
    id: '11111111-1111-1111-1111-111111111107',
    host_name: 'NC A&T Esports',
    city: 'Greensboro',
    state: 'NC',
    start_time: '14:00:00',
    end_time: '22:00:00',
    cover_image_url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
    start_date: '2025-03-10',
    end_date: null,
    street_address: 'NC A&T Student Center',
    suite_apt: null,
    tags: ['Gaming', 'Esports'],
    lat: '36.0746',
    long: '-79.775',
    zip_code: '27411',
    event_name: 'Aggie Esports Lounge',
    event_details: 'Open play and tournaments. PCs and consoles provided.',
  },
  {
    id: '11111111-1111-1111-1111-111111111108',
    host_name: 'Greensboro Parks',
    city: 'Greensboro',
    state: 'NC',
    start_time: '09:00:00',
    end_time: '12:00:00',
    cover_image_url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800',
    start_date: '2025-03-01',
    end_date: null,
    street_address: 'Country Park',
    suite_apt: null,
    tags: ['Volunteering', 'Community'],
    lat: '36.0726',
    long: '-79.792',
    zip_code: '27408',
    event_name: 'Greensboro Community Cleanup',
    event_details: 'Park and creek cleanup. Gloves and bags provided.',
  },
  {
    id: '11111111-1111-1111-1111-111111111109',
    host_name: 'Young Professionals',
    city: 'Charlotte',
    state: 'NC',
    start_time: '18:00:00',
    end_time: '20:30:00',
    cover_image_url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800',
    start_date: '2025-03-20',
    end_date: null,
    street_address: 'Uptown',
    suite_apt: null,
    tags: ['Social & Meetups', 'Networking'],
    lat: '35.2271',
    long: '-80.8431',
    zip_code: '28202',
    event_name: 'Young Professionals Mixer',
    event_details: 'Networking happy hour at a rooftop bar.',
  },
  {
    id: '11111111-1111-1111-1111-111111111110',
    host_name: 'NC A&T Fitness',
    city: 'Greensboro',
    state: 'NC',
    start_time: '17:30:00',
    end_time: '18:15:00',
    cover_image_url: null,
    start_date: '2025-03-11',
    end_date: null,
    street_address: 'NC A&T Campus Lawn',
    suite_apt: null,
    tags: ['Sports & Fitness', 'Outdoor'],
    lat: '36.0746',
    long: '-79.775',
    zip_code: '27411',
    event_name: 'Aggie Fitness Hour',
    event_details: 'Group workout on the lawn. Bring a mat and water.',
  },
  {
    id: '11111111-1111-1111-1111-111111111111',
    host_name: 'NoDa Arts',
    city: 'Charlotte',
    state: 'NC',
    start_time: '18:00:00',
    end_time: '22:00:00',
    cover_image_url: null,
    start_date: '2025-03-07',
    end_date: null,
    street_address: 'NoDa',
    suite_apt: null,
    tags: ['Arts & Culture', 'Gallery'],
    lat: '35.2271',
    long: '-80.8431',
    zip_code: '28205',
    event_name: 'NoDa Gallery Crawl',
    event_details: 'Art galleries and studios open late in NoDa.',
  },
  {
    id: '11111111-1111-1111-1111-111111111112',
    host_name: 'UNC Coding Workshop',
    city: 'Chapel Hill',
    state: 'NC',
    start_time: '10:00:00',
    end_time: '12:00:00',
    cover_image_url: null,
    start_date: '2025-03-29',
    end_date: null,
    street_address: 'UNC Davis Library',
    suite_apt: null,
    tags: ['Tech & Coding', 'Workshop'],
    lat: '35.9042',
    long: '-79.0469',
    zip_code: '27514',
    event_name: 'Coding Workshop at UNC',
    event_details: 'Hands-on Python and data viz. Laptops provided.',
  },
  {
    id: '11111111-1111-1111-1111-111111111113',
    host_name: "Cat's Cradle",
    city: 'Carrboro',
    state: 'NC',
    start_time: '20:00:00',
    end_time: '23:00:00',
    cover_image_url: null,
    start_date: '2025-03-15',
    end_date: null,
    street_address: "Cat's Cradle",
    suite_apt: null,
    tags: ['Music & Performance', 'Live'],
    lat: '35.9132',
    long: '-79.0558',
    zip_code: '27510',
    event_name: "Local Band Night at Cat's Cradle",
    event_details: "Three local acts. 21+ with ID.",
  },
  {
    id: '11111111-1111-1111-1111-111111111114',
    host_name: 'Greensboro Farmers Market',
    city: 'Greensboro',
    state: 'NC',
    start_time: '08:00:00',
    end_time: '12:00:00',
    cover_image_url: null,
    start_date: '2025-03-15',
    end_date: null,
    street_address: 'Greensboro Farmers Market',
    suite_apt: null,
    tags: ['Food & Drink', 'Market'],
    lat: '36.0726',
    long: '-79.792',
    zip_code: '27406',
    event_name: 'Greensboro Farmers Market Brunch',
    event_details: 'Fresh produce, pastries, and coffee on the plaza.',
  },
];

/** Tag prefix -> categoryId for fallback image lookup */
const TAG_TO_CATEGORY = {
  'sports': 'sports',
  'arts': 'arts',
  'tech': 'tech',
  'music': 'music',
  'food': 'food',
  'nature': 'nature',
  'gaming': 'gaming',
  'volunteer': 'volunteer',
  'social': 'social',
};

function inferCategoryId(tags) {
  if (!Array.isArray(tags) || tags.length === 0) return 'social';
  const first = (tags[0] || '').toLowerCase();
  for (const [key, categoryId] of Object.entries(TAG_TO_CATEGORY)) {
    if (first.includes(key)) return categoryId;
  }
  if (first.includes('fitness') || first.includes('running')) return 'sports';
  if (first.includes('gallery') || first.includes('art')) return 'arts';
  if (first.includes('coding') || first.includes('meetup')) return 'tech';
  if (first.includes('jazz') || first.includes('live')) return 'music';
  if (first.includes('market') || first.includes('brunch')) return 'food';
  if (first.includes('garden') || first.includes('outdoor')) return 'nature';
  if (first.includes('esports') || first.includes('gaming')) return 'gaming';
  if (first.includes('volunteer') || first.includes('community')) return 'volunteer';
  if (first.includes('meetup') || first.includes('networking')) return 'social';
  return 'social';
}

/**
 * Maps a Supabase third_spaces row to the display shape used by EventFeed and EventDetails.
 * Use this when reading from Supabase so the UI keeps working without errors.
 */
export function mapThirdSpaceToEvent(row) {
  if (!row) return null;
  const latNum = row.lat != null && row.lat !== '' ? parseFloat(row.lat) : null;
  const lngNum = row.long != null && row.long !== '' ? parseFloat(row.long) : null;
  const categoryId = inferCategoryId(row.tags);
  const addressLine = [row.street_address, row.city, row.state, row.zip_code].filter(Boolean).join(', ');
  const locationLabel = row.city && row.state ? `${row.city}, ${row.state}` : addressLine || 'TBD';

  return {
    id: row.id,
    host_name: row.host_name,
    city: row.city,
    state: row.state,
    start_time: row.start_time,
    end_time: row.end_time,
    cover_image_url: row.cover_image_url,
    start_date: row.start_date,
    end_date: row.end_date,
    street_address: row.street_address,
    suite_apt: row.suite_apt,
    tags: Array.isArray(row.tags) ? row.tags : [],
    lat: latNum,
    lng: lngNum,
    zip_code: row.zip_code,
    event_name: row.event_name,
    event_details: row.event_details,
    // Display shape for existing UI
    title: row.event_name,
    description: row.event_details ?? '',
    locationLabel,
    address: addressLine || locationLabel,
    imageUrl: row.cover_image_url || CATEGORY_IMAGES[categoryId] || CATEGORY_IMAGES.social,
    categoryId,
    distance: '0.5 mi',
    priceTag: 'FREE',
    vibeTag: 'LIVE',
    avatars: DEFAULT_AVATARS,
    extraCount: 12,
    cta: 'View Details',
    essentialInfo: [
      { icon: 'question_mark', title: 'What it is', description: row.event_details || 'A community third space event.' },
      { icon: 'groups', title: "Who it's for", description: 'Everyone welcome.' },
      { icon: 'login', title: 'How to join', description: 'Show up or register as noted.' },
      { icon: 'visibility', title: 'What to expect', description: 'See event details above.' },
    ],
    whyVisitUs: [
      { title: 'Local:', description: 'Hosted in your community.' },
      { title: 'Inclusive:', description: 'All are welcome.' },
    ],
    openingHours: row.start_time && row.end_time
      ? [{ label: 'Event', hours: `${(row.start_time || '').slice(0, 5)} - ${(row.end_time || '').slice(0, 5)}` }]
      : [{ label: 'Event', hours: 'See event details' }],
    addressLine1: row.street_address || row.city || 'TBD',
    addressLine2: [row.city, row.state, row.zip_code].filter(Boolean).join(', '),
    directionsUrl: latNum != null && lngNum != null ? `https://www.google.com/maps/dir//${latNum},${lngNum}` : '#',
    quote: '"A great place to connect."',
    quoteAttribution: '— Community',
  };
}

/** Display-shaped list for EventFeed and EventDetails (schema data run through mapper) */
export const MOCK_EVENTS = THIRD_SPACES_RAW.map(mapThirdSpaceToEvent);

/** Raw schema-shaped list for tests or Supabase comparison */
export const THIRD_SPACES_MOCK = THIRD_SPACES_RAW;
