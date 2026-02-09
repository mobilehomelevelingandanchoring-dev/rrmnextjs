/**
 * Service Entities Data
 * Semantic SEO Optimized Content for Pressure Washing Services
 * BERT/NLP Optimized | E-E-A-T Enhanced | LSI Keywords Natural
 */

export interface ServiceEntity {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  whatIs: string;
  whyNeeded: string;
  howDone: string;
  whenNeeded: string;
  problems: string[]; // Slugs of related problem entities
  surfaces: string[]; // Slugs of related surface entities
  locations: string[]; // Slugs where service available
  relatedServices: string[]; // Slugs of semantically related services
  metaTitle: string;
  metaDescription: string;
  faqs: { q: string; a: string }[];
  benefits: string[];
  safetyPoints: string[];
  lsiKeywords: string[]; // Natural semantic keywords
}

export const services: Record<string, ServiceEntity> = {
  'pressure-washing': {
    slug: 'pressure-washing',
    title: 'Professional Pressure Washing Services',
    shortTitle: 'Pressure Washing',
    description: 'High-powered cleaning for patios, pathways, and hard surfaces using advanced water jet technology.',
    longDescription: 'Professional pressure washing (also called power washing) uses controlled high-pressure water jets to effectively remove stubborn dirt, grime, moss, algae, and weathered stains from hard outdoor surfaces. Our experienced team carefully selects the appropriate pressure levels for each surface type, ensuring thorough cleaning without causing damage. Whether you\'re dealing with years of accumulated grime, unsightly moss growth, or pollution staining, pressure washing restores surfaces to their original appearance while improving safety by eliminating slipping hazards.',
    whatIs: 'Pressure washing is a professional cleaning method that uses high-velocity water jets (typically 3000+ PSI) to remove deeply embedded dirt, biological growth, and surface contaminants. Unlike manual scrubbing or simple garden hose washing, professional equipment delivers consistent, powerful results while maintaining safety for both the surface and the environment.',
    whyNeeded: 'North West England\'s damp climate creates perfect conditions for dirt, moss, and algae accumulation on outdoor surfaces. Over time, these contaminants don\'t just look unsightly—they can damage surfaces by retaining moisture, promoting algae spores, and creating slipping hazards. Professional pressure washing prevents long-term deterioration, maintains property value, and keeps outdoor areas safe and inviting for family and visitors.',
    howDone: 'Our process begins with a thorough assessment of your surfaces, identifying material type, condition, and specific challenges. We adjust pressure settings accordingly—lower pressures for delicate surfaces, higher pressures for tough concrete. Using professional-grade equipment and eco-friendly cleaning solutions where appropriate, we systematically clean entire areas, paying special attention to stains and heavily soiled spots. Each job includes pre-treatment where needed and careful post-cleaning to ensure longevity of results.',
    whenNeeded: 'Most outdoor surfaces benefit from professional pressure washing every 12-18 months, depending on exposure, shade, and environmental factors. Properties under tree coverage, in damp areas, or facing north typically need more frequent attention due to faster moss and algae growth. In the North West climate, annual cleaning is often recommended to prevent seasonal deterioration.',
    problems: ['moss-removal', 'algae-discoloration', 'grime-dirt', 'oil-stains', 'pollution-staining'],
    surfaces: ['concrete', 'block-paving', 'tarmac', 'brick', 'render'],
    locations: ['newton-le-willows', 'warrington', 'golborne', 'huyton', 'lymm', 'widnes', 'leigh', 'st-helens'],
    relatedServices: ['driveway-cleaning', 'patio-cleaning', 'render-cleaning', 'soft-washing'],
    metaTitle: 'Professional Pressure Washing Services | R.R.M External Cleaning',
    metaDescription: 'Expert pressure washing for patios, driveways, and hard surfaces. Remove moss, algae, and dirt safely. Serving Newton-le-Willows, Warrington, and Greater Manchester.',
    faqs: [
      {
        q: 'Will pressure washing damage my surfaces?',
        a: 'Professional pressure washing is safe when performed by experienced technicians who understand how to adjust pressure for different materials. We assess each surface carefully and use appropriate settings—lower for delicate materials, higher for tough concrete. Our approach prevents damage while delivering thorough cleaning.'
      },
      {
        q: 'How long does pressure washing take?',
        a: 'Time varies based on area size and condition. A typical driveway takes 2-4 hours. Patios, pathways, and larger areas may take longer. We provide accurate time estimates during your free consultation based on your specific property.'
      },
      {
        q: 'Is pressure washing environmentally friendly?',
        a: 'Our pressure washing primarily uses water without chemical cleaners. For heavily stained surfaces, we use biodegradable cleaning solutions that break down safely without harming plants, pets, or waterways. We\'re committed to environmental responsibility.'
      },
      {
        q: 'How often should I have my surfaces pressure washed?',
        a: 'In the North West climate, annual or biennial cleaning is recommended. Properties with heavy tree coverage, shaded areas, or northern exposure may need more frequent attention due to faster organic growth.'
      },
      {
        q: 'Can you remove oil stains with pressure washing?',
        a: 'Most oil stains can be significantly reduced or removed using specialized degreasing pre-treatments combined with high-pressure washing. Older, deeply set stains may lighten considerably rather than disappear completely. We assess your specific situation during the free quote.'
      }
    ],
    benefits: [
      'Restores property curb appeal and visual impact',
      'Removes slipping hazards from moss and algae growth',
      'Prevents long-term surface deterioration and damage',
      'Improves property value and marketability',
      'Maintains outdoor safety for family and visitors',
      'Protects investment in external surfaces'
    ],
    safetyPoints: [
      'Pressure adjusted specifically for each surface material',
      'Professional-grade equipment ensures consistent results',
      'Experienced team trained in safe handling procedures',
      'Eco-friendly approach protects surrounding vegetation',
      'Prevents damage to drains and gutters'
    ],
    lsiKeywords: ['power washing', 'jet washing', 'surface cleaning', 'deep cleaning', 'high-pressure cleaning', 'exterior restoration', 'grime removal', 'stain removal', 'patio cleaning', 'pathway cleaning', 'curb appeal', 'property maintenance']
  },

  'driveway-cleaning': {
    slug: 'driveway-cleaning',
    title: 'Professional Driveway Cleaning & Restoration',
    shortTitle: 'Driveway Cleaning',
    description: 'Complete driveway restoration including pressure washing, stain removal, weed treatment, and re-sanding for block paving.',
    longDescription: 'Your driveway is one of the first things visitors notice about your property. Our comprehensive driveway cleaning service goes beyond simple jet washing to completely restore your driveway\'s appearance and functionality. We handle concrete driveways, tarmac surfaces, block paving, and natural stone with specialized techniques appropriate for each material. Our process includes weed removal, pre-treatment of oil and stubborn stains, professional pressure washing, and finishing work such as re-sanding for block paving to stabilize and protect.',
    whatIs: 'Professional driveway cleaning is a comprehensive exterior maintenance service that combines pressure washing, stain treatment, weed removal, and finishing work to completely rejuvenate driveway surfaces. Unlike a quick jet wash, professional cleaning addresses multiple types of staining, organic growth, and structural issues specific to different driveway materials.',
    whyNeeded: 'A clean, well-maintained driveway significantly impacts your property\'s curb appeal and perceived value. Conversely, a dirty or stained driveway suggests poor maintenance and can negatively affect buyer perception if you decide to sell. Beyond aesthetics, moss, algae, and lichen create slip hazards, especially in wet conditions. Oil stains accumulate over time and become progressively harder to remove. Weeds growing between paving blocks damage the structure. Professional cleaning addresses all these issues while extending your driveway\'s lifespan by removing damaging organic growth and restoring protective surface properties.',
    howDone: 'We begin with a detailed inspection to identify surface material, stain types, weed growth, and any existing damage. Weeds are treated and carefully removed. Oil and rust stains receive pre-treatment with appropriate degreasing agents, left to work for optimal effect. The entire surface is then pressure washed using professional equipment with pressure levels carefully adjusted for your specific driveway type. For block paving, we finish by applying fresh kiln-dried sand between the blocks to stabilize them, prevent weed regrowth, and restore that finished appearance.',
    whenNeeded: 'Most driveways benefit from professional cleaning every 12-24 months, depending on traffic volume, weather exposure, and whether the property is shaded. High-traffic driveways, those under tree coverage, or properties in damp areas with significant shade may need more frequent attention. In the North West climate with regular rainfall and humidity, annual cleaning often prevents accumulated problems.',
    problems: ['oil-stains', 'moss-removal', 'algae-discoloration', 'grime-dirt', 'weed-growth'],
    surfaces: ['concrete', 'block-paving', 'tarmac', 'natural-stone'],
    locations: ['newton-le-willows', 'warrington', 'golborne', 'huyton', 'lymm', 'widnes', 'leigh'],
    relatedServices: ['pressure-washing', 'patio-cleaning', 'block-paving-cleaning', 'moss-removal'],
    metaTitle: 'Professional Driveway Cleaning | Block Paving & Concrete Specialists',
    metaDescription: 'Expert driveway cleaning for concrete, block paving, and tarmac. Remove oil stains, moss, and weeds. Professional restoration service in Newton-le-Willows and surrounding areas.',
    faqs: [
      {
        q: 'Can you remove oil stains from my driveway?',
        a: 'Yes, we can remove most oil and petroleum stains using specialized degreasing treatments. Fresh spills respond best to treatment, while older stains may lighten significantly even if complete removal isn\'t possible. We assess your specific situation and explain realistic outcomes before beginning work.'
      },
      {
        q: 'Will re-sanding my block paving help?',
        a: 'Absolutely. Fresh kiln-dried sand between blocks stabilizes them, prevents movement, stops weeds growing from below, and restores that finished appearance. We recommend re-sanding as part of comprehensive block paving cleaning for both aesthetic and structural benefits.'
      },
      {
        q: 'How soon can I use my driveway after cleaning?',
        a: 'You can walk on the driveway immediately after cleaning. We recommend waiting 24 hours before parking vehicles if we\'ve applied fresh sand, allowing everything to settle and dry properly for optimal stability.'
      },
      {
        q: 'Will cleaning damage plants near my driveway?',
        a: 'We take careful precautions to protect adjacent plants and flower beds. We can use barriers where needed and adjust our techniques to avoid splashing or pressure-washing near delicate plantings. Your garden remains protected throughout the process.'
      },
      {
        q: 'What\'s the difference between my driveway and professional cleaning?',
        a: 'Professional cleaning uses industrial-grade equipment with controlled pressure, specialized treatments for specific stains, professional weed removal techniques, and finishing work like re-sanding. Home equipment simply cannot match the power, consistency, and specialized knowledge that produces lasting results.'
      }
    ],
    benefits: [
      'Dramatically improves property curb appeal and first impressions',
      'Significantly increases perceived property value',
      'Removes slip hazards from moss and algae growth',
      'Extends driveway lifespan by removing damaging organic growth',
      'Prevents weed establishment between paving blocks',
      'Protects against oil stain setting and becoming permanent',
      'Creates cleaner, safer outdoor environment for family'
    ],
    safetyPoints: [
      'Pressure carefully adjusted for driveway material type',
      'Block paving protected with appropriate techniques',
      'Weeds removed safely without damaging surface structure',
      'Surrounding areas protected from overspray',
      'Re-sanding uses kiln-dried material for stability'
    ],
    lsiKeywords: ['driveway restoration', 'block paving cleaning', 'concrete cleaning', 'tarmac cleaning', 'oil stain removal', 'weed removal', 'curb appeal', 'property maintenance', 'stain treatment', 're-sanding', 'driveway maintenance']
  },

  'roof-cleaning': {
    slug: 'roof-cleaning',
    title: 'Professional Roof Cleaning & Moss Removal',
    shortTitle: 'Roof Cleaning',
    description: 'Safe removal of moss, algae, lichen, and dirt from roof tiles using professional soft washing techniques.',
    longDescription: 'Moss and algae growth on roofs is one of the most common maintenance issues in the North West, where our damp climate and frequent rain create perfect conditions for organic growth. Our professional roof cleaning service safely removes these contaminants using soft washing techniques—low-pressure water combined with specialized biocidal treatments—rather than aggressive high-pressure washing that can damage roof tiles. Beyond the aesthetic improvement, removing moss and algae protects your roof by eliminating moisture retention that causes frost damage and tile deterioration.',
    whatIs: 'Professional roof cleaning is a specialized service that removes moss, algae, lichen, and associated staining from roof tiles using soft washing methods—low-pressure water (under 100 PSI) combined with biocidal treatments designed to kill growth at the root. This gentle approach protects delicate roof tiles while delivering superior long-term results compared to pressure washing.',
    whyNeeded: 'Moss thrives in the damp North West climate, particularly on north-facing roofs and those with heavy tree coverage. While it might seem purely cosmetic, moss poses real structural risks. Moss retains moisture against tiles, promoting freeze-thaw damage in winter that can crack and displace tiles. Moss roots penetrate between tiles and can lift them, potentially causing leaks. A heavily moss-covered roof also impairs water drainage and roof ventilation, reducing energy efficiency. Professional cleaning prevents these problems while restoring your roof\'s appearance and protecting your investment for years to come.',
    howDone: 'We begin by safely accessing your roof using appropriate equipment and safety measures. For heavy moss deposits, we carefully hand-scrape buildup without damaging tiles. We then apply our professional soft washing treatment—low-pressure water combined with specialized biocidal agents—that kills moss spores and roots without forcing water under tiles. Finally, we apply a long-lasting biocide treatment that continues working for months, significantly slowing regrowth and keeping your roof cleaner longer.',
    whenNeeded: 'In the North West climate, most roofs need professional attention every 2-4 years depending on exposure. Properties under trees, facing north, or in particularly damp areas may need more frequent treatment. Early intervention when moss first appears prevents deep establishment and makes future cleaning easier and less intensive.',
    problems: ['moss-removal', 'algae-discoloration', 'lichen-removal', 'black-spots', 'weather-damage'],
    surfaces: ['roof-tiles', 'slate-roofs', 'felt-roofs', 'upvc-fascias'],
    locations: ['newton-le-willows', 'warrington', 'golborne', 'huyton', 'lymm', 'widnes', 'leigh', 'st-helels'],
    relatedServices: ['soft-washing', 'gutter-cleaning', 'moss-removal', 'render-cleaning'],
    metaTitle: 'Professional Roof Cleaning & Moss Removal | Safe Soft Washing',
    metaDescription: 'Expert roof cleaning using safe soft washing techniques. Remove moss, algae, and lichen. Protect your tiles with professional care. Free quote in Newton-le-Willows and surrounding areas.',
    faqs: [
      {
        q: 'Is roof cleaning safe for my tiles?',
        a: 'Yes, absolutely. Our soft washing method uses low pressure specifically designed to protect delicate roof tiles. We never high-pressure wash roofs, as this can cause tile damage. Our experienced technicians know exactly how to safely treat all roof types.'
      },
      {
        q: 'Will you need to access my loft?',
        a: 'Generally not. We work from outside your property using appropriate access equipment, ladders, or safety harnesses where needed. We discuss any specific requirements during your consultation.'
      },
      {
        q: 'How long does the moss prevention treatment last?',
        a: 'Our professional biocide treatment continues working for 12-18 months, significantly slowing moss regrowth. Most roofs remain substantially cleaner for 2-3 years after our service, reducing the frequency of future cleaning needs.'
      },
      {
        q: 'Can moss damage my roof tiles?',
        a: 'Yes, moss can cause damage if left long-term. Moisture retention promotes frost damage in winter. Moss roots can displace tiles and cause leaks. Early professional cleaning prevents these structural problems and extends your roof lifespan.'
      },
      {
        q: 'Is soft washing more expensive than pressure washing?',
        a: 'While soft washing may have a slightly higher cost than basic pressure washing, the superior results justify the investment. Your tiles are protected, results last longer, and you avoid the risk of damage. It\'s genuinely the better approach for roofs.'
      }
    ],
    benefits: [
      'Protects roof tiles from frost damage and deterioration',
      'Prevents moss roots from displacing tiles and causing leaks',
      'Improves roof drainage and ventilation efficiency',
      'Dramatically improves visual appearance of property',
      'Long-lasting results with biocide treatment (12-18 months)',
      'Extends overall roof lifespan and protects investment',
      'Safe for all roof types and materials'
    ],
    safetyPoints: [
      'Low-pressure soft washing protects delicate tiles',
      'No high-pressure equipment used on roof surfaces',
      'Professional biocide treatment kills moss at root',
      'Safety equipment used for all roof access',
      'No damage risk to roof structure or leaks'
    ],
    lsiKeywords: ['moss removal', 'soft washing', 'roof restoration', 'algae removal', 'lichen treatment', 'biocide treatment', 'roof maintenance', 'tile protection', 'roof preservation', 'low-pressure cleaning']
  },

  'gutter-cleaning': {
    slug: 'gutter-cleaning',
    title: 'Professional Gutter Cleaning & Maintenance',
    shortTitle: 'Gutter Cleaning',
    description: 'Complete gutter and downpipe cleaning using professional vacuum systems. Prevent water damage and foundation problems.',
    longDescription: 'Clean gutters are essential to protecting your property from water damage. Our professional gutter cleaning service removes leaves, moss, sediment, and other debris that accumulates in gutters and downpipes, ensuring proper water drainage away from your property. Blocked gutters cause water to overflow down walls, leading to damp, staining, foundation problems, and costly repairs. We use professional vacuum systems that safely remove debris from ground level, inspect the entire system for damage, and ensure everything flows freely.',
    whatIs: 'Professional gutter cleaning is a maintenance service that removes accumulated debris—leaves, moss, sediment, dirt, and other materials—from guttering systems, downpipes, and drainage outlets. Proper cleaning ensures water flows freely and drains away from your property as designed, preventing damage.',
    whyNeeded: 'In the North West with regular rainfall and surrounding trees, gutters naturally accumulate debris quickly. Blocked or partially blocked gutters cause serious problems: water overflows down walls instead of being diverted away, causing damp patches, discoloration, and damage to brickwork. In winter, blocked gutters can freeze, cracking the gutter itself. Standing water in gutters attracts insects and promotes moss growth. Foundation problems can develop from water not properly diverted away from building bases. Regular professional cleaning is far cheaper than repairing water damage.',
    howDone: 'We use professional vacuum systems with extended carbon-fiber poles that safely access gutters from ground level, removing the need for risky ladder work. These powerful vacuum systems extract all accumulated debris. We check downpipes are flowing freely, using flushing techniques where needed to clear blockages. We inspect the entire system for damage or misalignment and make recommendations for any repairs needed. All debris is collected and removed from your property, leaving everything clean.',
    whenNeeded: 'Gutters should be cleaned at least once yearly, ideally in late autumn after leaves have fallen. Properties surrounded by trees may benefit from twice-yearly cleaning—autumn and spring. After winter, inspection ensures no damage occurred and system is functioning properly.',
    problems: ['water-damage', 'debris-accumulation', 'moss-growth', 'foundation-problems'],
    surfaces: ['upvc-gutters', 'metal-gutters', 'downpipes'],
    locations: ['newton-le-willows', 'warrington', 'golborne', 'huyton', 'lymm', 'widnes', 'leigh', 'st-helens'],
    relatedServices: ['roof-cleaning', 'pressure-washing', 'render-cleaning'],
    metaTitle: 'Professional Gutter Cleaning & Maintenance | Prevent Water Damage',
    metaDescription: 'Expert gutter cleaning using professional vacuum systems. Remove leaves and debris safely. Prevent damp and water damage. Serving Newton-le-Willows and surrounding areas.',
    faqs: [
      {
        q: 'How do you access high gutters safely?',
        a: 'We use professional vacuum systems with carbon-fiber extension poles that reach up to 12 meters, allowing safe cleaning from ground level. For complex access situations, we use appropriate ladders with safety equipment. Safety is our top priority.'
      },
      {
        q: 'What do you do with the debris?',
        a: 'All debris is collected in our professional vacuum system and removed from your property. We leave your grounds clean and tidy, with no mess left behind.'
      },
      {
        q: 'Can you repair damaged gutters?',
        a: 'We can identify gutter damage and advise on repair options. Minor adjustments can often be made during the cleaning visit. We recommend appropriate contractors for major repairs if needed.'
      },
      {
        q: 'Why not just let gutters clean themselves?',
        a: 'Gutters cannot self-clean in the North West climate with regular rainfall and surrounding vegetation. Debris accumulates quickly, blocking proper drainage. Professional cleaning ensures your investment in guttering continues protecting your home.'
      },
      {
        q: 'How often should gutters be cleaned?',
        a: 'Annual cleaning in late autumn is standard. Properties with heavy tree coverage benefit from twice-yearly cleaning. We can recommend a schedule appropriate for your specific property.'
      }
    ],
    benefits: [
      'Prevents water damage to property walls and interior',
      'Protects foundation from water pooling around base',
      'Eliminates damp patches and discoloration',
      'Prevents gutter freezing and cracking in winter',
      'Reduces insect attraction and mosquito breeding',
      'Maintains proper roof ventilation and function',
      'Far cheaper than repairing water damage'
    ],
    safetyPoints: [
      'Professional vacuum systems operate from ground level',
      'No dangerous ladder work required for most properties',
      'Comprehensive system inspection included',
      'Debris safely contained and removed',
      'Extended warranties for professional systems'
    ],
    lsiKeywords: ['gutter maintenance', 'debris removal', 'gutter inspection', 'downpipe cleaning', 'water drainage', 'leaf removal', 'moss removal from gutters', 'preventive maintenance', 'drainage system', 'property protection']
  },

  'patio-cleaning': {
    slug: 'patio-cleaning',
    title: 'Professional Patio & Decking Cleaning',
    shortTitle: 'Patio & Decking Cleaning',
    description: 'Expert patio and decking cleaning for concrete, stone, brick, and wood surfaces. Restore safety and appearance.',
    longDescription: 'Your patio or decking is an extension of your home—a space for entertaining, relaxing, and enjoying outdoor living. Unfortunately, outdoor surfaces quickly accumulate moss, algae, dirt, and weathering that make them look dingy and create slip hazards. Our professional patio and decking cleaning service restores these outdoor living spaces to their original beauty while making them safe. We handle concrete patios, stone paving, brick surfaces, composite decking, and timber decking with specialized techniques appropriate for each material.',
    whatIs: 'Professional patio and decking cleaning is a comprehensive exterior restoration service that removes organic growth, staining, and weathering from outdoor living surfaces. Using appropriate techniques for different materials—pressure washing for hard surfaces, soft washing for delicate finishes, specialized wood care for timber—we restore both appearance and safety.',
    whyNeeded: 'A dirty, moss-covered patio not only looks unappealing, it\'s genuinely dangerous. Moss and algae create slipping hazards, especially when wet or in winter. Accumulated dirt and staining suggest poor maintenance. Professional cleaning restores the inviting appearance that makes you want to use your outdoor space, while eliminating safety risks. For timber decking, professional cleaning and treatment extend lifespan by protecting against weather damage, rot, and insect damage.',
    howDone: 'We assess your specific patio or decking material and choose the appropriate cleaning method. For concrete and stone, we use pressure washing at pressure levels safe for the material. For timber, we use gentle soft washing with wood-specific treatments that clean without stripping protective finishes. We remove weeds growing from between stones or boards. For timber decking, we can apply protective treatments that extend lifespan and restore weather resistance.',
    whenNeeded: 'Patios and decking benefit from professional cleaning annually, or more frequently for heavily used areas or those under tree coverage. In the North West climate with regular moisture, annual spring cleaning prevents problems before the season when you\'ll be using your outdoor space.',
    problems: ['moss-removal', 'algae-discoloration', 'grime-dirt', 'weather-damage', 'slip-hazards'],
    surfaces: ['concrete', 'brick', 'natural-stone', 'timber-wood', 'composite-decking'],
    locations: ['newton-le-willows', 'warrington', 'golborne', 'huyton', 'lymm', 'widnes', 'leigh'],
    relatedServices: ['pressure-washing', 'driveway-cleaning', 'soft-washing'],
    metaTitle: 'Professional Patio & Decking Cleaning | Restore Your Outdoor Space',
    metaDescription: 'Expert patio and decking cleaning for concrete, stone, brick, and timber. Remove moss and algae safely. Restore beauty and safety. Local service in Newton-le-Willows and surrounding areas.',
    faqs: [
      {
        q: 'Can pressure washing damage my patio?',
        a: 'Pressure washing is safe for most hard patio surfaces when performed by professionals who understand appropriate pressure levels for different materials. We assess your patio type and use suitable techniques to ensure thorough cleaning without damage.'
      },
      {
        q: 'Is it safe for timber decking?',
        a: 'We don\'t high-pressure wash timber decking, as this damages the wood grain. Instead, we use specialized soft washing and wood-specific cleaning solutions that clean effectively while protecting the wood structure.'
      },
      {
        q: 'How can you make my decking safer?',
        a: 'Cleaning removes the slippery moss and algae that create hazards. We can also apply specialized grip-enhancing treatments to timber decking, making it safer even when wet. We discuss options during your consultation.'
      },
      {
        q: 'Will cleaning harm plants near my patio?',
        a: 'We carefully protect surrounding plants and planting beds. We use biodegradable cleaning solutions where needed, and our techniques avoid splashing or damaging delicate plantings. Your garden remains protected throughout.'
      },
      {
        q: 'How long will results last?',
        a: 'Results typically last 12-18 months depending on exposure and shade. Properties under tree coverage may accumulate growth faster. We can discuss preventive treatments for longer-lasting protection.'
      }
    ],
    benefits: [
      'Transforms patio into inviting outdoor entertaining space',
      'Eliminates slip hazards from moss and algae',
      'Significantly improves property curb appeal',
      'Extends decking lifespan with proper treatment',
      'Makes outdoor spaces safe for children and elderly',
      'Protects investment in outdoor living areas',
      'Increases usable outdoor living season'
    ],
    safetyPoints: [
      'Pressure adjusted appropriately for each material',
      'Timber decking treated with wood-specific methods',
      'Grip-enhancing treatments available for safety',
      'Surrounding vegetation protected during cleaning',
      'Non-slip surfaces maintained throughout process'
    ],
    lsiKeywords: ['patio restoration', 'decking cleaning', 'outdoor space restoration', 'moss prevention', 'slip hazard removal', 'timber care', 'outdoor maintenance', 'curb appeal', 'entertaining spaces', 'garden cleanliness']
  },

  'render-cleaning': {
    slug: 'render-cleaning',
    title: 'Professional Render & Cladding Cleaning',
    shortTitle: 'Render Cleaning',
    description: 'Specialist soft washing for rendered walls and facades. Remove algae, pollution stains, and discoloration safely.',
    longDescription: 'Rendered walls and modern cladding systems are attractive but require specialized cleaning to maintain their appearance and integrity. Unlike pressure washing, which can damage render, our professional soft washing approach safely removes algae, pollution stains, and discoloration that accumulate on facades. Render is porous and prone to biological colonization, especially on north-facing walls and in damp areas. Our soft washing treatments kill this growth at the root, preventing quick regrowth and protecting your investment in your property\'s appearance.',
    whatIs: 'Professional render cleaning is a specialist service using soft washing techniques—low-pressure water combined with specialized biocidal cleaning solutions—appropriate for porous render surfaces. This gentle approach effectively removes algae, pollution stains, and discoloration without risking damage to the render finish.',
    whyNeeded: 'Render and cladding are porous materials that naturally attract biological growth—algae, moss, and lichen—particularly on north-facing walls, in shaded areas, and in the damp North West climate. Pollution deposits from traffic and industrial sources also accumulate on facades, creating unsightly discoloration. High-pressure washing risks damaging render, potentially causing water ingress and structural problems. Professional soft washing safely removes these contaminants, restoring appearance and protecting the render from damage.',
    howDone: 'We apply specialized soft wash solutions formulated for render that break down algae, lichen, and pollution deposits without damaging the finish. After allowing appropriate dwell time for the solution to work, we use low-pressure rinsing to gently remove debris and contaminants. A protective biocide treatment can be applied afterward, preventing regrowth and keeping your facade cleaner longer.',
    whenNeeded: 'Most rendered facades benefit from professional cleaning every 2-4 years depending on location, exposure, and shade. Properties facing north, under tree coverage, or in particularly damp areas accumulate growth faster and may need more frequent attention. Early treatment when staining first appears prevents deep penetration.',
    problems: ['algae-discoloration', 'pollution-staining', 'moss-removal', 'lichen-removal', 'black-spots'],
    surfaces: ['render', 'brick', 'cladding', 'stone'],
    locations: ['newton-le-willows', 'warrington', 'golborne', 'huyton', 'lymm', 'widnes', 'leigh', 'st-helens'],
    relatedServices: ['soft-washing', 'brick-cleaning', 'pressure-washing', 'roof-cleaning'],
    metaTitle: 'Professional Render Cleaning | Safe Soft Washing Specialists',
    metaDescription: 'Expert render and cladding cleaning using soft washing. Remove algae and stains safely. Protect your facade. Free quote in Newton-le-Willows and Greater Manchester.',
    faqs: [
      {
        q: 'Will soft washing damage my render?',
        a: 'No, soft washing is specifically designed to protect render. We never use high pressure on render surfaces. Our low-pressure approach combined with specialized solutions safely removes contaminants without risking water ingress or structural damage.'
      },
      {
        q: 'Why does only part of my facade look dirty?',
        a: 'Growth on render depends on moisture, shade, and exposure. North-facing walls and areas near plants or trees show more growth due to moisture and shade. East-facing walls may accumulate more pollution deposits. We can clean just affected areas or the entire property.'
      },
      {
        q: 'Can you clean painted render?',
        a: 'Yes, we can clean painted render surfaces. We assess paint condition first to ensure our soft washing method is appropriate, using gentler techniques for older or fragile paint finishes.'
      },
      {
        q: 'How long will the results last?',
        a: 'Soft washing results typically last 18-24 months. With biocide treatment, many properties stay significantly cleaner for 2-3 years. Results depend on shade, exposure, and nearby vegetation.'
      },
      {
        q: 'Is render cleaning expensive?',
        a: 'Professional render cleaning is a worthwhile investment in your property\'s appearance and protection. The cost is far less than repainting or dealing with water damage. We provide accurate quotes based on your specific facade size and condition.'
      }
    ],
    benefits: [
      'Restores facade appearance and visual appeal',
      'Protects render from water ingress and damage',
      'Removes unsightly algae and pollution stains',
      'Eliminates biological growth at the root',
      'Extends facade lifespan and protects investment',
      'Safe for all render types and finishes',
      'Long-lasting results with biocide protection'
    ],
    safetyPoints: [
      'Low-pressure soft washing protects porous surfaces',
      'Specialized solutions prevent damage to render',
      'No high-pressure equipment used',
      'Biocide treatment kills growth safely at root',
      'Water damage risk completely eliminated'
    ],
    lsiKeywords: ['facade cleaning', 'cladding restoration', 'soft washing', 'algae removal', 'biocide treatment', 'pollution stain removal', 'render restoration', 'building maintenance', 'exterior facades', 'protective cleaning']
  },

  'window-cleaning': {
    slug: 'window-cleaning',
    title: 'Professional Window Cleaning Services',
    shortTitle: 'Window Cleaning',
    description: 'Crystal-clear windows for homes and businesses using pure water technology. Streak-free results every time.',
    longDescription: 'Clean windows let natural light flood into your home and significantly impact your property\'s appearance and value. Our professional window cleaning service uses advanced pure water technology to deliver spotless, streak-free results without the chemical residue of traditional methods. We clean windows, frames, and sills for residential properties of all sizes, as well as commercial buildings, conservatories, skylights, and specialty glass.',
    whatIs: 'Professional window cleaning using pure water technology involves water that has been purified to remove all minerals and dissolved solids. When applied through specialized brushes and delivery systems, pure water attracts and removes dirt, then evaporates leaving no residue or streaks—the most effective method for achieving perfect windows.',
    whyNeeded: 'Dirty windows limit natural light, make your property look poorly maintained, and can affect perceived value. Mineral deposits from rainwater can etch glass if left too long, becoming permanent damage. Professional cleaning maintains windows in excellent condition, maximizes light, and keeps your property looking well-cared-for. For businesses, clean windows project a professional image essential to customer perception.',
    howDone: 'We use water-fed pole systems that purify water on our vehicle, then deliver pure water through specialized brushes to your windows from ground level. The soft brush gently agitates dirt while pure water rinses it away. Pure water dries naturally without leaving marks or streaks. Window frames and sills are cleaned simultaneously. For properties requiring high-reach access, we use appropriate equipment safely.',
    whenNeeded: 'Residential windows typically benefit from professional cleaning monthly or bimonthly to maintain optimal appearance and light transmission. Commercial properties often need more frequent service depending on exposure and use. We offer flexible service schedules to suit your needs.',
    problems: ['water-spots', 'dirt-accumulation', 'mineral-deposits'],
    surfaces: ['glass', 'upvc-frames', 'frames'],
    locations: ['newton-le-willows', 'warrington', 'golborne', 'huyton', 'lymm', 'widnes', 'leigh', 'st-helens'],
    relatedServices: ['conservatory-cleaning', 'pressure-washing'],
    metaTitle: 'Professional Window Cleaning | Crystal-Clear Results | Pure Water Technology',
    metaDescription: 'Expert window cleaning using pure water technology. Streak-free, spotless results. Residential and commercial service in Newton-le-Willows and surrounding areas.',
    faqs: [
      {
        q: 'Why use pure water instead of traditional methods?',
        a: 'Pure water attracts and removes dirt, then evaporates leaving zero residue—no spots or streaks. It\'s the most effective method for crystal-clear results. Traditional methods leave chemical residue and mineral deposits.'
      },
      {
        q: 'Can you clean high windows safely?',
        a: 'Yes, our water-fed pole system reaches high windows from ground level, eliminating the need for dangerous ladder work on most properties. For buildings requiring special access, we use appropriate safety equipment.'
      },
      {
        q: 'Can you clean conservatory roofs?',
        a: 'Absolutely. Our system is ideal for conservatory roof cleaning. We clean glass panels, aluminum frames, and internal guttering, leaving everything spotless.'
      },
      {
        q: 'Do you clean windows in rain?',
        a: 'Light rain doesn\'t affect pure water cleaning quality. Heavy rain may require rescheduling. We always work to deliver the best possible results—if conditions aren\'t optimal, we\'ll recommend returning another time.'
      },
      {
        q: 'How often should windows be cleaned?',
        a: 'Monthly or bimonthly cleaning maintains optimal appearance and light. We can recommend a schedule based on your location, property type, and preferences. Regular schedules receive discount pricing.'
      }
    ],
    benefits: [
      'Maximizes natural light into your property',
      'Dramatically improves property curb appeal',
      'Makes spaces feel brighter and larger',
      'Projects professional image for businesses',
      'Prevents permanent mineral etching',
      'Extends window lifespan with proper care',
      'Streak-free, crystal-clear results every time'
    ],
    safetyPoints: [
      'Pure water technology leaves zero chemical residue',
      'Safe for families and pets',
      'Ground-level access for most properties',
      'Professional safety equipment where needed',
      'Frames and sills cleaned without damage'
    ],
    lsiKeywords: ['pure water cleaning', 'streak-free cleaning', 'window restoration', 'glass clarity', 'mineral deposit removal', 'window maintenance', 'commercial cleaning', 'property appearance', 'natural light']
  },

  'conservatory-cleaning': {
    slug: 'conservatory-cleaning',
    title: 'Professional Conservatory Cleaning Services',
    shortTitle: 'Conservatory Cleaning',
    description: 'Specialist cleaning for conservatory roofs and frames. Restore light transmission and appearance.',
    longDescription: 'Conservatories are wonderful additions that extend living space and provide year-round enjoyment, but they require specialized cleaning to maintain their light transmission and appearance. Our professional conservatory cleaning service safely handles glass roof panels, aluminum frames, and internal guttering—removing algae, dirt, and mineral deposits that accumulate and reduce light transmission. We restore your conservatory to its original brightness while ensuring all components are clean and functional.',
    whatIs: 'Professional conservatory cleaning is a specialized service that comprehensively cleans glass roof panels, aluminum frames, internal guttering, and component parts using techniques appropriate for each material. This ensures maximum light transmission, improved appearance, and proper functioning of all components.',
    whyNeeded: 'Conservatory roofs quickly accumulate algae, dirt, and mineral deposits due to constant weather exposure, dramatically reducing light transmission and making the space darker and less inviting. Aluminum frames collect pollen and dirt. Internal guttering can clog with debris. Professional cleaning restores your conservatory\'s brightness and improves the entire experience of using the space. Regular maintenance extends the lifespan of components and prevents damage.',
    howDone: 'We use water-fed pole systems with soft brushes to clean glass panels gently but thoroughly, using pure water for streak-free results. Aluminum frames are cleaned to restore their finish. We clear internal guttering of accumulated debris and ensure proper drainage. All internal components are inspected and cleaned as needed. Your conservatory emerges spotless and bright.',
    whenNeeded: 'Conservatory roofs benefit from professional cleaning twice yearly—spring and autumn—to maintain optimal light transmission and prevent algae establishment. More frequent cleaning may be beneficial for properties under tree coverage or in particularly damp areas.',
    problems: ['algae-discoloration', 'dirt-accumulation', 'light-reduction', 'moss-growth'],
    surfaces: ['glass', 'aluminum-frames', 'polycarbonate'],
    locations: ['newton-le-willows', 'warrington', 'golborne', 'huyton', 'lymm', 'widnes', 'leigh'],
    relatedServices: ['window-cleaning', 'roof-cleaning', 'gutter-cleaning'],
    metaTitle: 'Professional Conservatory Cleaning | Restore Brightness & Clarity',
    metaDescription: 'Expert conservatory roof and frame cleaning. Restore light and brightness. Specialist service in Newton-le-Willows and surrounding areas.',
    faqs: [
      {
        q: 'How do you clean polycarbonate roofs safely?',
        a: 'Polycarbonate panels require gentle handling. We use soft brushes and pure water, never high-pressure washing which can damage the material. Our specialized approach safely restores clarity without damage.'
      },
      {
        q: 'Will you need access inside my conservatory?',
        a: 'We typically work from outside using extended poles and water-fed systems. For internal guttering or internal panel cleaning, we may need limited access inside, which we discuss in advance.'
      },
      {
        q: 'Can you improve light transmission?',
        a: 'Absolutely. Removing accumulated algae, dirt, and mineral deposits dramatically improves light transmission. A clean conservatory is noticeably brighter and more enjoyable.'
      },
      {
        q: 'How often should conservatories be cleaned?',
        a: 'Spring and autumn cleaning maintains optimal light and prevents algae establishment. For properties under trees or in damp areas, more frequent cleaning may be beneficial.'
      },
      {
        q: 'Is this service expensive?',
        a: 'Professional conservatory cleaning is a worthwhile investment in maintaining your property and improving your living space. The cost is far less than replacing damaged panels or dealing with water ingress from clogged gutters.'
      }
    ],
    benefits: [
      'Dramatically improves light transmission into space',
      'Restores visual clarity of glass panels',
      'Makes conservatory brighter and more inviting',
      'Extends lifespan of panels and frames',
      'Prevents algae and moss establishment',
      'Ensures proper drainage from guttering',
      'Maintains property value and appearance'
    ],
    safetyPoints: [
      'Gentle cleaning protects polycarbonate and glass',
      'No high-pressure washing on delicate panels',
      'Pure water prevents streaking and residue',
      'Aluminum frames cleaned without damage',
      'Internal components inspected and maintained'
    ],
    lsiKeywords: ['conservatory restoration', 'roof cleaning', 'light transmission', 'algae removal', 'frame cleaning', 'polycarbonate care', 'glass clarity', 'property brightness', 'gutter maintenance']
  },

  'commercial-cleaning': {
    slug: 'commercial-cleaning',
    title: 'Professional Commercial Exterior Cleaning',
    shortTitle: 'Commercial Cleaning',
    description: 'Comprehensive commercial exterior cleaning for offices, retail, and industrial properties. Professional image maintenance.',
    longDescription: 'Your building\'s exterior is the first impression customers, clients, and visitors receive. A clean, well-maintained facade projects professionalism and success, while a dirty or neglected appearance undermines confidence in your business. Our professional commercial exterior cleaning service maintains properties of all sizes—from small retail units to large office buildings—ensuring they present a professional image at all times. We understand the unique demands of commercial properties and work efficiently to minimize disruption to your operations.',
    whatIs: 'Professional commercial exterior cleaning is a comprehensive service that maintains building facades, parking areas, loading bays, signage, and other exterior elements in businesses of all types. Using appropriate techniques for each situation and material, we ensure properties present a professional appearance.',
    whyNeeded: 'Commercial properties accumulate dirt, pollution deposits, and unsightly staining quickly due to heavy foot traffic, vehicle traffic, and constant weather exposure. A clean building projects professionalism and success, suggesting quality in your products and services. Studies show that property appearance significantly impacts customer perception and purchasing decisions. Regular professional cleaning maintains the professional image essential to business success.',
    howDone: 'We assess your specific commercial property and create a customized cleaning plan addressing your unique challenges and timeline. Using professional equipment and appropriately trained staff, we clean building facades, window banks, parking areas, loading bays, and other exterior elements efficiently. We schedule work to minimize operational disruption, often working early morning, evening, or weekend hours if preferred.',
    whenNeeded: 'Commercial properties typically benefit from monthly or quarterly professional cleaning depending on location, traffic, and exposure. Seasonal deep cleaning before high-traffic seasons ensures optimal appearance. We develop customized maintenance schedules appropriate for your specific property.',
    problems: ['pollution-staining', 'grime-dirt', 'moss-growth', 'weathering', 'image-damage'],
    surfaces: ['concrete', 'brick', 'glass', 'metal-siding', 'rendering'],
    locations: ['newton-le-willows', 'warrington', 'golborne', 'huyton', 'lymm', 'widnes', 'leigh', 'st-helens', 'manchester'],
    relatedServices: ['pressure-washing', 'window-cleaning', 'render-cleaning', 'soft-washing'],
    metaTitle: 'Professional Commercial Cleaning Services | Business Image & Maintenance',
    metaDescription: 'Expert commercial exterior cleaning for businesses of all sizes. Maintain professional image. Reliable commercial service in Newton-le-Willows and Greater Manchester.',
    faqs: [
      {
        q: 'Can you work around my business hours?',
        a: 'Absolutely. We understand operational demands and can schedule cleaning during early morning, evening, or weekend hours to minimize disruption to your business.'
      },
      {
        q: 'How often should commercial properties be cleaned?',
        a: 'Most benefit from monthly or quarterly maintenance depending on location and exposure. We assess your property and recommend an appropriate schedule that maintains professional appearance.'
      },
      {
        q: 'Can you handle parking area cleaning?',
        a: 'Yes, we clean parking areas, loading bays, and other paved surfaces using appropriate equipment and pressure levels. A clean parking area is part of projecting professional image.'
      },
      {
        q: 'Do you have experience with high-rise buildings?',
        a: 'Yes, we have experience with buildings of all heights using appropriate safety equipment and procedures for high-access cleaning work.'
      },
      {
        q: 'What if building appearance isn\'t part of our current maintenance?',
        a: 'Regular professional cleaning is a worthwhile investment in business image. Studies show property appearance significantly impacts customer perception. We\'re happy to discuss how cleaning improves your professional image and business success.'
      }
    ],
    benefits: [
      'Projects professionalism and success to customers and clients',
      'Significantly impacts customer perception and purchasing decisions',
      'Maintains building value and protects investment',
      'Extends facade and surface lifespan',
      'Reduces risk of health and safety issues',
      'Demonstrates care for workplace and staff',
      'Positions business as industry leader'
    ],
    safetyPoints: [
      'Professional equipment ensures consistent results',
      'Trained staff handle all commercial situations',
      'Health and safety compliance throughout all work',
      'Minimal operational disruption',
      'Insurance and liability coverage for commercial work'
    ],
    lsiKeywords: ['business image', 'professional appearance', 'commercial maintenance', 'facade cleaning', 'parking lot cleaning', 'high-rise cleaning', 'business success', 'customer perception', 'commercial property', 'workplace maintenance']
  },

  'soft-washing': {
    slug: 'soft-washing',
    title: 'Specialist Soft Washing Services',
    shortTitle: 'Soft Washing',
    description: 'Low-pressure chemical cleaning for delicate surfaces. Safe, effective, long-lasting results.',
    longDescription: 'Soft washing is a specialist cleaning method that uses low-pressure water combined with biodegradable cleaning solutions to safely clean delicate surfaces that cannot tolerate high-pressure washing. Unlike aggressive pressure washing that can damage surfaces and cause costly repairs, soft washing gently removes biological growth and staining while preserving surface integrity. Our professional soft washing service is ideal for roofs, render, brick facades, timber, and other delicate exterior materials.',
    whatIs: 'Soft washing is a professional cleaning method using low-pressure water (typically under 100 PSI) combined with specialized biodegradable cleaning solutions formulated to break down biological growth and staining without causing surface damage. This approach is far safer and more effective for delicate materials than high-pressure washing.',
    whyNeeded: 'Many exterior surfaces—particularly roofs, render, brick, and timber—cannot safely withstand high-pressure washing. High pressure can damage surface finishes, force water beneath protective coatings, displace materials, and cause long-term structural problems. Soft washing provides professional cleaning power using chemicals that kill growth at the root rather than relying purely on water pressure. This approach prevents quick regrowth and delivers superior, longer-lasting results.',
    howDone: 'We apply specialized soft wash solutions formulated for your specific surface and problem. These solutions break down algae, moss, lichen, and staining at the root. After allowing appropriate dwell time for chemical action, we use low-pressure water to gently rinse away debris. Many treatments include a protective biocide component that continues protecting your surface for months after cleaning.',
    whenNeeded: 'Soft washing frequency depends on surface type and exposure, typically ranging from annually to every 2-3 years. With biocide protection, results last longer and regrowth is significantly slower. We recommend assessment and appropriate scheduling during your consultation.',
    problems: ['moss-removal', 'algae-discoloration', 'lichen-removal', 'black-spots', 'biological-growth'],
    surfaces: ['roof-tiles', 'render', 'brick', 'timber', 'stone'],
    locations: ['newton-le-willows', 'warrington', 'golborne', 'huyton', 'lymm', 'widnes', 'leigh', 'st-helens'],
    relatedServices: ['roof-cleaning', 'render-cleaning', 'brick-cleaning'],
    metaTitle: 'Professional Soft Washing | Safe Cleaning for Delicate Surfaces',
    metaDescription: 'Expert soft washing for roofs, render, brick, and timber. Remove moss and algae safely. Specialist service in Newton-le-Willows and surrounding areas.',
    faqs: [
      {
        q: 'How is soft washing different from pressure washing?',
        a: 'Soft washing uses low pressure (under 100 PSI) with specialized chemical solutions, while pressure washing relies on high-pressure jets (3000+ PSI). Soft washing is safer for delicate materials and more effective at killing growth at the root, preventing quick regrowth.'
      },
      {
        q: 'Is soft washing environmentally friendly?',
        a: 'Yes, we use biodegradable, environmentally-approved cleaning solutions. These break down safely without harming plants, pets, or waterways. Environmental responsibility is part of our professional approach.'
      },
      {
        q: 'How long do soft washing results last?',
        a: 'The biocidal component in our treatments continues working for 12-18 months, significantly slowing regrowth. Most surfaces stay substantially cleaner for 2-3 years compared to pressure washing alone.'
      },
      {
        q: 'Can soft washing be used on all surfaces?',
        a: 'Soft washing is appropriate for delicate surfaces like roofs, render, brick, and timber. For harder surfaces like concrete driveways, pressure washing may be more efficient. We assess each property and recommend the best approach.'
      },
      {
        q: 'Is soft washing more expensive?',
        a: 'While soft washing may cost slightly more than basic pressure washing, the superior results and longer-lasting protection justify the investment. You\'re paying for safer, more effective cleaning that protects your property investment.'
      }
    ],
    benefits: [
      'Safely cleans delicate surfaces without damage risk',
      'Kills biological growth at the root',
      'Significantly longer-lasting results than pressure washing',
      'Prevents quick regrowth with biocide protection',
      'Protects surface integrity and structural safety',
      'Environmentally friendly approach',
      'Professional results on challenging surfaces'
    ],
    safetyPoints: [
      'Low pressure eliminates damage risk',
      'Specialized solutions formulated for safety',
      'Biodegradable chemicals protect environment',
      'No water ingress or structural damage risk',
      'Protective biocide treatment included'
    ],
    lsiKeywords: ['low-pressure cleaning', 'chemical cleaning', 'moss prevention', 'algae treatment', 'biocide protection', 'surface preservation', 'specialist cleaning', 'safe cleaning methods', 'long-lasting results', 'biological growth control']
  }
};

export default services;
