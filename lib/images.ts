/**
 * Central image registry. All images are now self-hosted in /public/images, so
 * the site has NO remote dependency — they render on any host (static export,
 * shared hosting, Vercel, Netlify) and can't be broken by Unsplash hotlink
 * blocking or a missing image optimizer.
 *
 * To swap in the client's own photography, replace the file in /public/images
 * (keep the same filename) — every page references images through this map.
 */
export const IMAGES = {
  // Hero / cinematic
  heroPenthouse: '/images/heroPenthouse.jpg',
  heroNight: '/images/heroNight.jpg',
  servicesHero: '/images/servicesHero.jpg',
  heritageHero: '/images/heritageHero.jpg',
  contactBackdrop: '/images/contactBackdrop.jpg',

  // Property exteriors
  villaSaadiyat: '/images/villaSaadiyat.jpg',
  estateNurai: '/images/estateNurai.jpg',
  palaceMansion: '/images/palaceMansion.jpg',
  villaPalm: '/images/villaPalm.jpg',
  villaYas: '/images/villaYas.jpg',

  // Interiors / penthouses
  penthouseReem: '/images/penthouseReem.jpg',
  skyResidence: '/images/skyResidence.jpg',
  interiorLiving: '/images/interiorLiving.jpg',
  interiorWarm: '/images/interiorWarm.jpg',
  interiorStair: '/images/interiorStair.jpg',
  interiorKitchen: '/images/interiorKitchen.jpg',
  interiorSuite: '/images/interiorSuite.jpg',
  interiorLounge: '/images/interiorLounge.jpg',
  interiorMinimal: '/images/interiorMinimal.jpg',
  interiorDining: '/images/interiorDining.jpg',

  // Architectural detail / texture
  detailFacade: '/images/detailFacade.jpg',
  detailLines: '/images/detailLines.jpg',
  detailMarble: '/images/detailMarble.jpg',
  detailVilla2: '/images/detailVilla2.jpg',

  // UAE context / aerials
  abuDhabiSkyline: '/images/abuDhabiSkyline.jpg',
  abuDhabiCorniche: '/images/abuDhabiCorniche.jpg',
  sheikhZayedMosque: '/images/sheikhZayedMosque.jpg',
  dubaiSkyline: '/images/dubaiSkyline.jpg',

  // People / advisory
  advisoryBoardroom: '/images/advisoryBoardroom.jpg',
  portraitMan1: '/images/portraitMan1.jpg',
  portraitWoman1: '/images/portraitWoman1.jpg',
  portraitMan2: '/images/portraitMan2.jpg',
  portraitMan3: '/images/portraitMan3.jpg',
} as const;

export type ImageKey = keyof typeof IMAGES;
