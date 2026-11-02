export const BUSINESS_INFO = {
  name: "Orellana’s Cleaning LLC",
  shortName: "Orellana’s Cleaning",
  founders: "Rebecca Orellana",
  keyTeam: "Rebecca, Liz & Michelle",
  tagline: "Spotless Homes. Honest Prices. Rapid Emergency Response.",
  description: "Dallas's premier women-owned and Latino-owned professional cleaning company. From rapid 2-hour emergency deep cleans and move-in rescues to dependable weekly housekeeping, Rebecca and her team bring spotless care and peace of mind.",
  category: "Professional Cleaning Services",
  phone: "+1 469-585-7283",
  phoneDisplay: "(469) 585-7283",
  phoneRaw: "+14695857283",
  address: "3621 Frankford Rd, Dallas, TX 75287, United States",
  addressShort: "3621 Frankford Rd, Dallas, TX 75287",
  plusCode: "X4WX+W6 Dallas, Texas, USA",
  hours: "Mon – Sat: 8:00 AM – 4:00 PM (Emergency Calls Accepted)",
  hoursShort: "Mon - Sat: 8am - 4pm",
  rating: 4.8,
  reviewCount: 12,
  googleMapsUrl: "https://maps.google.com/?q=3621+Frankford+Rd,+Dallas,+TX+75287",
  embedMapUrl: "https://maps.google.com/maps?q=3621%20Frankford%20Rd,%20Dallas,%20TX%2075287&t=&z=14&ie=UTF8&iwloc=&output=embed",
  attributes: [
    "Identifies as Women-Owned",
    "Identifies as Latino-Owned",
    "LGBTQ+ Friendly",
    "2-Hour Emergency Deep Cleaning Available",
    "Great Communication & Reasonable Prices"
  ],
  serviceAreas: [
    "Dallas, TX (75287)",
    "North Dallas",
    "Carrollton, TX",
    "Plano, TX",
    "Addison, TX",
    "Richardson, TX",
    "Far North Dallas"
  ]
};

// Popular review search topics from Google Listing
export const REVIEW_TOPICS = [
  { label: "All Reviews", count: 12 },
  { label: "Deep Clean", count: 3 },
  { label: "Value for Money", count: 2 },
  { label: "Promptness", count: 2 },
  { label: "Move-In Rescue", count: 2 },
  { label: "Professional Staff", count: 3 }
];

// All 12 Authentic Google Reviews with Owner Responses
export const GOOGLE_REVIEWS_ALL = [
  {
    id: 1,
    author: "Holly Bittick",
    role: "Local Guide",
    badge: "Local Guide · 40 reviews · 233 photos",
    date: "3 years ago",
    rating: 5,
    topic: ["Deep Clean", "Promptness", "Move-In Rescue"],
    quoteHighlight: "Rebecca has saved the day once again... arrived within 2 hours!",
    text: "Rebecca has saved the day once again. I had a client moving in to a rental home and the landlord did not clean the home, and when I was able to access the home with my client, it was a filthy mess. I called Rebecca, and she arrived within 2 hours and got it pristine. Unbelievable lifesaver!",
    ownerResponse: "Thank you, Holly, for your review. I appreciate that you continue to trust our quality of work. I appreciate all your comments towards me and my company.",
    verified: true
  },
  {
    id: 2,
    author: "nada Tawfic",
    role: "Local Guide",
    badge: "Local Guide · 49 reviews · 4 photos",
    date: "6 years ago",
    rating: 5,
    topic: ["Value for Money", "Professional Staff"],
    quoteHighlight: "I highly recommend this service. Cleaning started to be impossible with a new baby.",
    text: "I highly recommend this service. I used to live with my parents and they would help me with cleaning & taking caring of my new born. When I recently moved, cleaning started to be impossible with a new baby. I was very worried to try any cleaning service, but they were wonderful, trustworthy, and such a relief!",
    ownerResponse: "Thank you for your 5 stars and your kind words.",
    verified: true
  },
  {
    id: 3,
    author: "Trayce Cavanaugh",
    role: "Verified Client",
    badge: "10 reviews",
    date: "6 years ago",
    rating: 5,
    topic: ["Deep Clean", "Professional Staff"],
    quoteHighlight: "Both Liz and Michelle were very professional and did everything I asked. Very thorough.",
    text: "What more can I say that others have not already? Both Liz and Michelle were both very professional and did everything I asked. They are careful with things and very thorough. I’m disabled and can’t clean my deep bathtub, so they took extra time and made it look brand new!",
    ownerResponse: "Thank you Trayce!",
    verified: true
  },
  {
    id: 4,
    author: "Stevie Elwood",
    role: "Local Guide",
    badge: "Local Guide · 16 reviews · 2 photos",
    date: "3 years ago",
    rating: 5,
    topic: ["Deep Clean", "Promptness"],
    quoteHighlight: "Showed up within 2 hours to get an emergency deep clean in and did an amazing job!",
    text: "Showed up within 2 hours to get an emergency deep clean in and did an amazing job! Super responsive, prompt, and great quality.",
    ownerResponse: "Thank you for having placed your trust in Orellanas Cleaning.",
    verified: true
  },
  {
    id: 5,
    author: "Kat B Suarez",
    role: "Verified Client",
    badge: "6 reviews",
    date: "5 years ago",
    rating: 5,
    topic: ["Value for Money", "Promptness"],
    quoteHighlight: "Great communication, great prices, prompt and professional.",
    text: "Great communication, great prices, prompt and professional. Great job with the cleaning, we’ll be using again.",
    ownerResponse: "Thank you! For your trust it is a pleasure to work for you.",
    verified: true
  },
  {
    id: 6,
    author: "Brenda Layton",
    role: "Verified Client",
    badge: "5 reviews",
    date: "5 years ago",
    rating: 5,
    topic: ["Value for Money", "Promptness"],
    quoteHighlight: "They did a great job at a reasonable price. I would definitely use them again.",
    text: "They did a great job at a reasonable price. I would definitely use them again. Very prompt and detailed work.",
    ownerResponse: null,
    verified: true
  },
  {
    id: 7,
    author: "Chase",
    role: "Local Guide",
    badge: "Local Guide · 10 reviews",
    date: "5 years ago",
    rating: 5,
    topic: ["Value for Money"],
    quoteHighlight: "Great cleaning service! Highly worth the money.",
    text: "Great cleaning service! Highly worth the money.",
    ownerResponse: null,
    verified: true
  },
  {
    id: 8,
    author: "Alfredo Guatzin",
    role: "Verified Client",
    badge: "5 reviews",
    date: "Edited 6 years ago",
    rating: 5,
    topic: ["Professional Staff"],
    quoteHighlight: "My experience with them was the best! Super todo! I loved it! ❤",
    text: "My experience with them was the best in the world, super todo! I loved it! ❤",
    ownerResponse: "Thank you very much, Alfredo!",
    verified: true
  },
  {
    id: 9,
    author: "W Martin",
    role: "Verified Client",
    badge: "4 reviews",
    date: "6 years ago",
    rating: 4,
    topic: ["Deep Clean"],
    quoteHighlight: "Rebeca was fabulous with getting my home clean and caught up.",
    text: "After getting very behind in my cleaning Rebeca came and did a good job. Rebeca was fabulous and worked hard to get my home back in shape.",
    ownerResponse: null,
    verified: true
  },
  {
    id: 10,
    author: "Alfredo Peraza",
    role: "Verified Client",
    badge: "Verified Review",
    date: "5 years ago",
    rating: 5,
    topic: ["Professional Staff", "Promptness"],
    quoteHighlight: "Positive: Professionalism, promptness and quality cleaning.",
    text: "Positive: Professionalism, promptness, and high quality thorough cleaning.",
    ownerResponse: null,
    verified: true
  },
  {
    id: 11,
    author: "Oneida Guerrero Garcia",
    role: "Verified Client",
    badge: "Verified Review",
    date: "6 years ago",
    rating: 5,
    topic: ["Professional Staff"],
    quoteHighlight: "Excellent work and dependable cleaners.",
    text: "Excellent work and dependable cleaners. Very grateful for their service.",
    ownerResponse: "Thank you!",
    verified: true
  },
  {
    id: 12,
    author: "Esmeralda González",
    role: "Verified Client",
    badge: "1 review",
    date: "7 years ago",
    rating: 5,
    topic: ["Value for Money"],
    quoteHighlight: "Great service and trustworthy cleaning team.",
    text: "Great service and trustworthy cleaning team. Always respectful and hard working.",
    ownerResponse: "Thank you for your review!",
    verified: true
  }
];

export const SERVICES = [
  {
    id: "emergency-deep-clean",
    title: "Emergency Deep Clean (2-Hr Response)",
    popularTag: "Client Lifesaver",
    shortDesc: "Urgent same-day deep cleaning when you need immediate rescue before guests, inspections, or events.",
    fullDesc: "As praised by clients Holly Bittick and Stevie Elwood: Rebecca and her team can arrive within 2 hours to handle emergency deep cleans. Ideal when landlords leave a rental dirty, before family visits, or after major events.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    startingPrice: "$180",
    features: [
      "Rapid dispatch within 2 hours (subject to schedule)",
      "Intensive kitchen grease and appliance scrub",
      "Bathroom lime, calcium & soap scum descaling",
      "Hand-washed baseboards and door trims",
      "Trash disposal and total room sanitization"
    ],
    checklist: [
      { area: "Immediate Intensive Focus", tasks: ["Heavy kitchen stovetop and backsplash degrease", "Deep scrub of bathtubs, showers & toilets", "Hand-wash high touch areas and doorframes", "Complete floor wash & sanitization"] },
      { area: "Living Areas", tasks: ["Dusting fans, blinds & window sills", "Crevice vacuuming & clutter tidying"] }
    ]
  },
  {
    id: "move-in-out-rescue",
    title: "Move-In & Move-Out Cleaning",
    popularTag: "Landlord & Tenant Approved",
    shortDesc: "Top-to-bottom turnover cleaning for empty homes, apartments, and rental properties.",
    fullDesc: "Moving should be exciting, not exhausting. We sanitize empty rental interiors from top to bottom—inside kitchen cabinets, drawers, oven, refrigerator, deep tubs, and baseboards—ensuring full deposit refunds and spotless move-ins.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    startingPrice: "$210",
    features: [
      "Inside cabinet & drawer wipe throughout",
      "Refrigerator & oven interior degrease",
      "Deep bathtub, grout & shower glass scrub",
      "Baseboard and doorframe wash in every room",
      "Pristine vacuuming and hard floor washing"
    ],
    checklist: [
      { area: "Turnover Protocol", tasks: ["Clean inside pantries, closets & drawers", "Degrease oven racks & refrigerator crisper drawers", "Wash baseboards throughout empty home"] }
    ]
  },
  {
    id: "standard-housekeeping",
    title: "Standard House Cleaning",
    popularTag: "Most Popular",
    shortDesc: "Routine, recurring, or one-off housekeeping to keep your home tidy, clean, and fresh.",
    fullDesc: "Our reliable regular housekeeping service trusted by busy Dallas families and new parents. We dust surfaces, sanitize countertops, clean appliances, scrub bathrooms, vacuum, mop, and empty trash.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80",
    startingPrice: "$120",
    features: [
      "Surface dusting & tidy clutter",
      "Kitchen counter, sink & stove wipe-down",
      "Bathroom shower, toilet & mirror shine",
      "Thorough vacuuming and floor mopping",
      "Wastebaskets emptied & fresh scent"
    ],
    checklist: [
      { area: "Kitchen", tasks: ["Wipe & disinfect counters", "Clean exterior of appliances", "Scrub & polish sink & faucet"] },
      { area: "Bathrooms", tasks: ["Scrub shower, tub & tile", "Disinfect toilet inside/out", "Polish chrome and mirrors"] },
      { area: "Bedrooms & Living", tasks: ["Dust furniture and decor", "Vacuum carpets & wash hard floors", "Straighten pillows"] }
    ]
  },
  {
    id: "bathtub-detail",
    title: "Deep Bathtub & Bathroom Detailing",
    popularTag: "Accessibility & Deep Care",
    shortDesc: "Specialized deep scrub for soaking tubs, jacuzzi jets, heavy grout, and accessibility needs.",
    fullDesc: "As client Trayce Cavanaugh noted: 'I’m disabled and can’t clean my deep bathtub, so they took extra time and made it look brand new!' We specialize in safe, intensive bathroom and tub restorations for seniors, disabled clients, and deep soaking tubs.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    startingPrice: "$135",
    features: [
      "Deep tub basin and jet descaling",
      "Tile grout line scrub & calcium removal",
      "Glass shower door streak-free restore",
      "Faucets, drains & chrome mirror polish",
      "Hospital-grade sanitation"
    ],
    checklist: [
      { area: "Bath Sanctuary", tasks: ["Deep tub scrub with non-abrasive cleaners", "Detailed grout line scrubbing", "Shower door mineral deposit removal"] }
    ]
  },
  {
    id: "office-commercial",
    title: "Office & Small Business Cleaning",
    popularTag: "Commercial Reliability",
    shortDesc: "Hygienic workplace cleaning keeping your staff healthy and visitors impressed.",
    fullDesc: "Flexible early morning, daytime, or evening commercial cleaning for Dallas offices, retail spaces, and clinics. We sanitize workstations, meeting rooms, breakrooms, and restrooms with dependable punctuality.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    startingPrice: "$150",
    features: [
      "Workstation and phone sanitization",
      "Breakroom sink and microwave detailing",
      "Restroom replenishment and deep disinfection",
      "Commercial trash disposal and liner change",
      "Entryway glass and floor care"
    ],
    checklist: [
      { area: "Workplace", tasks: ["Disinfect conference tables and desks", "Clean coffee station and kitchenette", "Sanitize all restrooms daily"] }
    ]
  },
  {
    id: "recurring-housekeeping",
    title: "Recurring Housekeeping Plans",
    popularTag: "Save up to 20%",
    shortDesc: "Scheduled weekly, bi-weekly, or monthly cleaning with dedicated team members you know and trust.",
    fullDesc: "Enjoy effortless ongoing cleanliness. New mothers, busy professionals, and families love our consistent recurring service. Save 15% on bi-weekly visits and 20% on weekly cleaning.",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80",
    startingPrice: "From $105/visit",
    features: [
      "Same trusted cleaners (Rebecca, Liz, Michelle)",
      "Priority emergency scheduling",
      "Flexible notice for reschedules",
      "15% Off Bi-Weekly / 20% Off Weekly",
      "Safe, eco-friendly supplies provided"
    ],
    checklist: [
      { area: "Ongoing Perks", tasks: ["Consistent cleaners who know your preferences", "Rotational deep clean tasks included", "Direct mobile contact with Rebecca"] }
    ]
  }
];

export const BEFORE_AFTER_ITEMS = [
  {
    id: "rental-rescue",
    title: "Emergency Move-In Kitchen Rescue",
    subtitle: "Heavy grease and neglected oven transformed into a sparkling, sanitized kitchen in under 3 hours.",
    before: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1000&q=80",
    after: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
    area: "Kitchen & Range"
  },
  {
    id: "bathtub-restore",
    title: "Deep Bathtub & Tile Descaling",
    subtitle: "Trayce's favorite: Complete soap scum and mineral removal for a gleaming, safe soaking tub.",
    before: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
    after: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
    area: "Bathroom Suite"
  },
  {
    id: "living-clean",
    title: "Living Room Baseboards & Hardwood Wash",
    subtitle: "Detailed dust removal, hand-washed baseboards, and conditioned hardwood flooring.",
    before: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1000&q=80",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    area: "Main Living Space"
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: "Clock",
    title: "2-Hour Emergency Response",
    desc: "Holly & Stevie confirmed: 'Showed up within 2 hours to get an emergency deep clean in and did an amazing job!'"
  },
  {
    icon: "Award",
    title: "Value for Money & Fair Rates",
    desc: "Kat & Brenda noted: 'Great communication, great prices, prompt and professional. Highly worth the money!'"
  },
  {
    icon: "ShieldCheck",
    title: "Women & Latino-Owned",
    desc: "Proudly women-owned, Latino-owned, and LGBTQ+ friendly Dallas local business led with personal care."
  },
  {
    icon: "Sparkles",
    title: "Deep Bathtub & Tile Care",
    desc: "Trayce shared: 'Liz and Michelle did everything I asked. Very thorough with my deep bathtub!'"
  },
  {
    icon: "Heart",
    title: "Trusted by New Parents & Seniors",
    desc: "Nada noted: 'Cleaning started to be impossible with a new baby. They were wonderful and trustworthy!'"
  },
  {
    icon: "Briefcase",
    title: "4.8 Stars (12 Google Reviews)",
    desc: "Backed by authentic verified client feedback and personal responses directly from owner Rebecca."
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Spotless Gourmet Kitchen Scrub",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
    note: "Dallas Residence • Grease Free"
  },
  {
    id: 2,
    title: "Deep Bathtub & Tile Scrub",
    category: "Bathroom",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
    note: "Descaled & Sanitized"
  },
  {
    id: 3,
    title: "Pristine Living Room Refresh",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    note: "Baseboards & Hardwood Clean"
  },
  {
    id: 4,
    title: "Peaceful & Tidy Master Bedroom",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80",
    note: "Dusting & Carpet Care"
  },
  {
    id: 5,
    title: "Professional Safe Cleaning Equipment",
    category: "Equipment",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80",
    note: "Hospital-Grade & Pet Safe"
  },
  {
    id: 6,
    title: "Executive Office Suite Sanitation",
    category: "Office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    note: "Dallas Corporate Office"
  },
  {
    id: 7,
    title: "Move-In Rental Rescue Deep Clean",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1000&q=80",
    note: "2-Hour Arrival Lifesaver"
  },
  {
    id: 8,
    title: "Gleaming Natural Hardwood Restore",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1000&q=80",
    note: "Streak-Free Finish"
  }
];

export const FAQS = [
  {
    q: "How quickly can you arrive for an emergency clean?",
    a: "We offer emergency response within 2 hours whenever our schedule permits! As Holly Bittick and Stevie Elwood shared in their reviews, Rebecca and our crew can be on-site rapidly when landlords or movers leave a property dirty."
  },
  {
    q: "Who owns and operates Orellana’s Cleaning LLC?",
    a: "Orellana’s Cleaning LLC is proudly women-owned and Latino-owned, founded and led by Rebecca Orellana alongside trusted crew members including Liz and Michelle."
  },
  {
    q: "What areas in Dallas do you service?",
    a: "We are based at 3621 Frankford Rd, Dallas, TX 75287, and we service North Dallas, Carrollton, Plano, Addison, Richardson, and surrounding North Texas communities."
  },
  {
    q: "How do I get a price estimate or book an appointment?",
    a: "You can use our online Instant Estimate Calculator on this website, or call/text Rebecca directly at +1 (469) 585-7283. We are known for great communication and reasonable, honest prices."
  },
  {
    q: "Do you offer discounts for recurring housekeeping?",
    a: "Yes! We offer 15% off for bi-weekly visits and 20% off for weekly clients. Many of our clients have been with us for 5 to 7 years."
  }
];
