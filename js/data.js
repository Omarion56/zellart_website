// ============================================================
// ZELLART — Site configuration
// Edit everything here. No need to touch HTML or CSS.
// ============================================================

const SITE = {
  // Your WhatsApp number (international format, no +, no spaces)
  whatsapp: "212636563613",

  // Text content
  text: {
    topbar: "Made slowly in Fez, Morocco · Bespoke enquiries welcome",

    hero: {
      eyebrow: "A living craft from Fez",
      title: "Pieces<br><em>with soul.</em>",
      subtitle: "Hand-cut Zellige tables and small fountains, made one tile at a time in the old city of Fez.",
      stats: [
        { value: "1",  label: "atelier" },
        { value: "∞",  label: "patterns" },
        { value: "0",  label: "shortcuts" }
      ]
    },

    collection: {
      eyebrow: "01 / The collection",
      title: "A little<br><em>geometry.</em>",
      note: "Tables and fountains shaped by the language of Moroccan courtyards — made for rooms that value a slower rhythm."
    },

    atelier: {
      eyebrow: "02 / Inside the atelier",
      title: "The beauty is<br><em>in the making.</em>",
      body: "Zellige is never printed, poured, or perfectly uniform. Each piece is shaped by hand, set into a pattern, and allowed to keep a little of its maker in the surface.",
      caption: "In the old medina, under the sound of chisels and the afternoon light.",
      steps: [
        { n: "01", title: "Choose a pattern", text: "Start with a rhythm that feels like yours." },
        { n: "02", title: "Cut each piece",   text: "The shape is struck, not stamped." },
        { n: "03", title: "Set and seal",     text: "A patient surface, made to live with." }
      ]
    },

    patterns: {
      eyebrow: "03 / A language of pattern",
      title: "Look closer.",
      note: "Stars, knots, petals, and paths — the old vocabulary keeps finding new rooms."
    },

    bespoke: {
      eyebrow: "04 / Make it yours",
      title: "Your room,<br><em>your pattern.</em>",
      body: "Tell us the space, the colors, or simply the feeling. We will draw up something made for you, then bring it to life in Fez.",
      note: "We usually reply within one day"
    },

    footer: {
      tagline: "A small piece of Fez for a life well lived."
    }
  },

  // Products — add/remove freely
  products: [
    { name: "The Fez Round",          type: "Table",           category: "Tables",    image: "images/fez-round.jpg",     note: "A generous mosaic sun for gathering." },
    { name: "Atlas Blue",             type: "Table",           category: "Tables",    image: "images/atlas-blue.jpg",    note: "Deep cobalt, set in a quiet rhythm." },
    { name: "The Courtyard",          type: "Table",           category: "Tables",    image: "images/courtyard.jpg",     note: "An everyday table with an heirloom soul." },
    { name: "Sahara Steps",           type: "Occasional table",category: "Tables",    image: "images/sahara-steps.jpg",  note: "A small footprint, a graphic gesture." },
    { name: "Blue Star",              type: "Table",           category: "Tables",    image: "images/blue-star.jpg",     note: "A meditative pattern, cut by hand." },
    { name: "Mint Hour",              type: "Table",           category: "Tables",    image: "images/mint-hour.jpg",     note: "Soft green geometry for slow afternoons." },
    { name: "The Riad Fountain",      type: "Small fountain",  category: "Fountains", image: "images/riad-fountain.jpg", note: "A small, living piece of the courtyard." },
    { name: "Green Zellige Fountain", type: "Small fountain",  category: "Fountains", image: "images/green-fountain.jpg",note: "Water, tile, and the shade of a palm." }
  ],

  // Pattern gallery
  patterns: [
    { image: "images/pattern-1.jpg", caption: "The eight-point star" },
    { image: "images/pattern-2.jpg", caption: "A continuous knot" },
    { image: "images/pattern-3.jpg", caption: "A garden of geometry" },
    { image: "images/pattern-4.jpg", caption: "The courtyard fountain" }
  ]
};