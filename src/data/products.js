const products = [
  {
    id: 1,
    slug: "culture-vulture",
    name: "culture vulture",
    subtitle: "pin",
    category: "pins",
    price: 18,
    image: "/images/products/culturevulture.jpg",

    description: [
      "because we know who set the trends.",
      "black girls invented your fave’s cornrows, baby hairs, edges, acrylics, hoop earrings, and the whole vibe — period.",
      "a piece for the gatekeepers, the originators, the blueprint.",
    ],

    featured: true,
  },

  {
    id: 2,
    slug: "black-girl-magic",
    name: "black girl magic",
    category: "pins",
    image: "/images/products/blkgrlmgic.jpg",

    variants: [
      {
        id: "black-girl-magic-sticker",
        name: "Sticker",
        price: 6,
      },
      {
        id: "black-girl-magic-pin",
        name: "Pin",
        price: 15,
      },
    ],

    description: [
      "because black girl magic isn't just a phrase — it's a legacy.",
      "a wearable affirmation for everyday protection & joy.",
      "add her to your denim jacket, tote, journal, or anywhere you carry your light.",
    ],

    details: [
      "PIN — metal, premium finish, wearable art",
      "STICKER — durable vinyl, waterproof & great for bottles / laptops / journals",
    ],

    closing:
      "for the bl(ac)k girl who deserves to take up sp(a)c(e).",

    featured: true,
  },

  {
    id: 3,
    slug: "my-body-my-space",
    name: "my body, my space",
    subtitle: "pin",
    category: "pins",
    price: 14,
    image: "/images/products/mybodymyspace.jpg",

    description: [
      "black girls are not mules. not default caretakers. not your labor, not your fantasy.",
      "my body is mine. my space is sacred — not up for negotiation.",
      "a reminder for whoever forgot.",
    ],

    featured: true,
  },

  {
    id: 4,
    slug: "cici-says",
    name: "cici says...",
    subtitle: "pin",
    category: "pins",
    price: 12,
    image: "/images/products/Cicisays.jpg",

    description: [
      "bc your space = sacred. society = dumpster fire.",
      "a reminder piece for your jean jacket, tote, or altar.",
    ],

    details: [
      "soft enamel pin",
      "1.5 in",
      "glossy finish",
      "limited run — no restocks",
    ],

    featured: true,
  },

  {
    id: 5,
    slug: "black-girl-magic-tote",
    name: "blk grl magic tote",
    subtitle: "accessory",
    category: "accessories",
    price: 25,
    image: "/images/products/blkgrlspcbag.jpg",
    imagePosition: "center 35%",

    description: [
      '19.5" × 15" — Black Girl Magic on the go. Sturdy, roomy, everyday carry.',
      "Final archive stock. No restocks — once she’s gone, she’s gone.",
    ],

    featured: true,
  },
];

export default products;
