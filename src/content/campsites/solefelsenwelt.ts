import type { CampsiteConfig } from "../types";

/**
 * Camping Sole Felsen Welt — Gmünd, Waldviertel (Niederösterreich).
 * Quelle: solefelsenwelt.at (raw/digest). Camping-Areal der Sole Felsen Welt:
 * Stellplätze + beheizte Campingfässer in der Natur, direkt neben der Therme
 * mit Solebecken, Saunawelt und Ruheoasen. Preise wörtlich aus prices.md.
 */
const IMG = "/campsites/solefelsenwelt";

const solefelsenwelt: CampsiteConfig = {
  name: "Camping Sole Felsen Welt",
  shortName: "Sole Felsen",
  slug: "solefelsenwelt",
  ort: "Gmünd",
  region: "Niederösterreich",
  brandKind: "Camping an der Therme",
  regionLong: "Waldviertel · Niederösterreich · Österreich",

  heroVariant: "center",

  claim: "Frische Luft, Vogelgezwitscher und die Therme nebenan",
  claimEmphasis: "die Therme nebenan",
  emailDetail: "eure Lage direkt neben der Sole Felsen Welt",
  intro:
    "Mitten im Waldviertel campst du hier in gepflegter Natur — und die Sole Felsen Welt mit Solebecken, Saunawelt und Ruheoasen liegt direkt nebenan. Als Campinggast badest du dazu noch vergünstigt.",

  statement: {
    text: "Vom Stellplatz ins Thermalwasser sind es bei uns nur wenige Schritte.",
    emphasis: "wenige Schritte",
  },

  pillars: [
    {
      title: "Mitten in der Natur",
      text: "Rund um den Platz liegen der Asangteich und die weiten Wälder des Waldviertels — Natur zum Durchatmen.",
      image: { src: `${IMG}/gallery-5e8f304558.webp`, alt: "Paar am Asangteich in der Natur der Sole Felsen Welt" },
    },
    {
      title: "Die Therme gleich nebenan",
      text: "Solebecken, Saunawelt und Ruhe liegen direkt neben dem Platz — als Campinggast badest du vergünstigt.",
      image: { src: `${IMG}/gallery-84a4e8b03d.webp`, alt: "Solebecken mit Springbrunnen in der Sole Felsen Welt" },
    },
    {
      title: "Beheizte Campingfässer",
      text: "Übernachte einmal anders: in einem beheizten Campingfass mitten in der Natur am Sole Felsen Gelände.",
      image: { src: `${IMG}/gallery-f8e987c20b.webp`, alt: "Beheizte Campingfässer am Campingplatz der Sole Felsen Welt" },
    },
  ],

  usps: [
    "Therme & Sauna nebenan",
    "Ermäßigter Badeeintritt",
    "Beheizte Campingfässer",
    "Stellplätze mit Strom",
    "Hunde willkommen",
    "Mitten im Waldviertel",
  ],

  trust: {
    heading: "Darauf ist beim Sole Felsen Camping Verlass",
    headingEmphasis: "Verlass",
    intro:
      "Camping in der Natur und die ganze Welt einer Therme direkt vor der Tür: Solebecken, Saunawelt und Erholung — und am Abend geht es zurück ins Zelt oder ins beheizte Campingfass.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/gallery-419a9c1614.webp`, alt: "Campingplatz der Sole Felsen Welt zwischen Birken und Wiesen" },
  },

  breather: {
    image: { src: `${IMG}/gallery-dc8a850b7c.webp`, alt: "Familie im warmen Wasser der Sole Felsen Welt" },
    line: "Die ganze Sole Felsen Welt — gleich neben deinem Stellplatz.",
  },

  camping: {
    heading: "Dein Campingurlaub mit Thermenwelt",
    intro:
      "Du campst mitten in der Natur und hast die ganze Sole Felsen Welt direkt vor dem Vorzelt — vom Solebecken bis zur Saunawelt, vergünstigt für alle Campinggäste.",
    features: [
      {
        title: "Therme zum Vorteilspreis",
        text: "Als Campinggast bekommst du Ermäßigung auf die 4-Stunden- und Tageskarten der Sole Felsen Welt.",
        image: { src: `${IMG}/hero-d1fe795465.webp`, alt: "Panoramablick auf die Innenbecken der Sole Felsen Welt mit blau leuchtenden Pools und gelben Liegen" },
      },
      {
        title: "Becken für jeden Tag",
        text: "Sole, Sprudel und Sportbecken — drinnen wie draußen ist für jeden das passende Wasser dabei.",
        image: { src: `${IMG}/gallery-50dffe447b.webp`, alt: "Sprudelbecken in der Wasserwelt der Sole Felsen Welt" },
      },
      {
        title: "Ruhe und Erholung",
        text: "Großzügige Liege- und Ruhebereiche laden nach dem Baden zum Entspannen und Auftanken ein.",
        image: { src: `${IMG}/gallery-ca4acfec4b.webp`, alt: "Ruhebereich mit Liegen in der Sole Felsen Welt" },
      },
      {
        title: "Camping-Shop",
        text: "Etwas zu Hause vergessen? Im Camping-Shop findest du, was ein Camper unterwegs so braucht.",
        image: { src: `${IMG}/gallery-1dd675deb2.webp`, alt: "BADEMODENshop der Sole Felsen Welt mit Badebekleidung und Zubehör" },
      },
      {
        title: "Empfang und Check-in",
        text: "Am Empfang der Sole Felsen Welt checkst du ein und bekommst alle Infos für deinen Aufenthalt.",
        image: { src: `${IMG}/gallery-3577e65bd0.webp`, alt: "Empfangsgebäude des Campingplatzes Sole Felsen Welt mit Herzlich-Willkommen-Schild" },
      },
      {
        title: "Sportbecken und Bahnen",
        text: "Im Sportbecken ziehst du in aller Ruhe deine Bahnen — ideal für alle, die aktiv bleiben wollen.",
        image: { src: `${IMG}/activity-18431eb730.webp`, alt: "Sportbecken mit Schwimmbahnen in der Sole Felsen Welt" },
      },
    ],
  },

  kinder: {
    heading: "Planschen, rutschen, lachen",
    intro:
      "Die Sole Felsen Welt ist ein Paradies für Kinder — flache Becken, eine Rutsche und jede Menge Wasserspaß warten gleich nebenan.",
    features: [
      {
        title: "Erlebnisrutsche",
        text: "Auf der Rutsche geht es mit Schwung ins Wasser — der Lieblingsplatz vieler kleiner Gäste.",
        image: { src: `${IMG}/kids-d24927c13e.webp`, alt: "Kind auf der Erlebnisrutsche in der Sole Felsen Welt" },
      },
      {
        title: "Spaß für die Familie",
        text: "Im sonnigen Außenbecken planscht die ganze Familie gemeinsam — flach, sicher und mittendrin im Spaß.",
        image: { src: `${IMG}/gallery-167f3068fd.webp`, alt: "Familie beim Planschen im Außenbecken der Sole Felsen Welt" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Waldviertel",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Franz-Josefs-Straße (B2) bis Gmünd, dann den Schildern zur Sole Felsen Welt in der Albrechtser Straße folgen.",
      },
      {
        title: "Mit der Bahn",
        text: "Mit der Franz-Josefs-Bahn bis Bahnhof Gmünd NÖ — von dort sind es nur wenige Minuten bis zur Sole Felsen Welt.",
      },
    ],
  },

  galerie: {
    heading: "Sommertage an der Sole Felsen Welt",
    headingEmphasis: "Sole Felsen",
    intro:
      "Solebecken, Ruheoasen und Wasserspaß für alle — ein paar Eindrücke aus der Welt direkt neben deinem Stellplatz.",
    tag: "Therme · Sauna · Camping",
    moreCount: 20,
    images: [
      { src: `${IMG}/amenity-d6694168ca.webp`, alt: "Außenbecken der Sole Felsen Welt im Abendlicht" },
      { src: `${IMG}/amenity-977e3f59f4.webp`, alt: "Lachendes Paar im Außenbecken der Sole Felsen Welt" },
      { src: `${IMG}/gallery-3e7e6e6ef8.webp`, alt: "Sprudelnder Wasserspielbereich im Außenbereich" },
      { src: `${IMG}/gallery-c67de71595.webp`, alt: "Entspanntes Treiben im Thermalwasser der Sole Felsen Welt" },
    ],
  },

  booking: {
    heading: "Reserviere deinen Platz an der Sole Felsen Welt",
    headingEmphasis: "deinen Platz",
    intro:
      "Wähle Zeitraum und Personen — das Team der Sole Felsen Welt meldet sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatz € 16,50/Nacht · Strom € 5,50 · je Erwachsener € 10, Kind 6–14 J. € 6,50 · Hund € 5,50 — zzgl. Ortstaxe € 2,60 ab 15 Jahren.",
    highlight: {
      title: "Therme inklusive Vorteil",
      text: "Als Campinggast bekommst du Ermäßigung auf 4-Stunden- und Tageskarten der Sole Felsen Welt.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 16.5, perExtraGuest: 10 },
      { id: "stellplatz-strom", label: "Stellplatz mit Strom", perNight: 22, perExtraGuest: 10 },
    ],
  },

  kontakt: {
    coords: { lat: 48.75748, lng: 14.991042 },
    tel: "+43 (0) 2852 20203 1300",
    telHref: "tel:+432852202031300",
    mail: "bad@solefelsenwelt.at",
    facebook: "https://www.facebook.com/SoleFelsenWelt",
    adresse: "Albrechtser Straße 12 · 3950 Gmünd · Niederösterreich",
  },

  languages: ["DE", "EN", "CS"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Highlights", href: "#camping" },
        { label: "Campingfässer", href: "#camping" },
      ],
    },
    { label: "Familie", href: "#kinder" },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default solefelsenwelt;
