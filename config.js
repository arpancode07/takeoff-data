/*
  TAKEOFF DASHBOARD SETTINGS
  Everything on the page comes from this file. Edit it (on GitHub: open the file, press the pencil, commit),
  and the hosted page updates on the next reload. Keep the quotes, commas and brackets as they are.
*/
window.DASHBOARD = {

  /* ---------- Page ---------- */
  page: {
    browserTab: "Takeoff Pass Activity",
    title: "Takeoff pass activity,",
    titleAccent: "so far",            // shown in the primary colour after the title; use "" for none
    logo: "logos/takeoff.png",         // swap the file in /logos or change the path
    showControls: true                 // false hides the "Show or hide fields" panel for viewers
  },

  /* ---------- Colours ---------- */
  colors: {
    primary: "#3D8BEA",                // accents, title highlight
    tileNumber: "#1C58B8",             // big numbers in the tiles
    departure: "#3D8BEA",
    arrival: "#1C58B8",
    otherOffers: "#E0C200"
  },

  /* ---------- Headline numbers (type them in) ---------- */
  numbers: {
    total_purchase: 29,
    tp_olp_purchase: 23,
    takeoff_app_purchase: 6,
    tp_olp_revenue: 19577,
    takeoff_app_revenue: 4194,
    total_revenue: 23771,
    total_app_installs: 315,
    passes_activated: 15
    // offers_redeemed, users_redeemed and routes are counted from the redemptions below.
    // Add offers_redeemed: 40 here to override the count.
  },
  currency: "\u20b9",

  /* ---------- Pass plans: shown when you hover the Passes purchased tile ---------- */
  // passes: how many of this plan were sold through each channel (names must match "channels" below)
  // When plans are listed, Passes purchased, Total revenue and the channel table are worked out from them
  // (price x passes). Remove this whole block to use the typed numbers above instead.
  plans: [
    { name: "Pass 1", price: 699,  passes: { "Times Prime OLP": 14, "Takeoff in-app": 6 } },
    { name: "Pass 2", price: 999,  passes: { "Times Prime OLP": 7 } },
    { name: "Pass 2", price: 1399, passes: { "Times Prime OLP": 2 } }
  ],

  /* ---------- Tiles at the top: order here = order on the page ---------- */
  // value: a name from "numbers" above, or offers_redeemed / users_redeemed / routes
  // format: "number" or "money"
  tiles: [
    { label: "Passes purchased", value: "total_purchase",     format: "number", show: true, planHover: true },
    { label: "Passes activated", value: "passes_activated",   format: "number", show: true },
    { label: "Offers redeemed",  value: "offers_redeemed",    format: "number", show: true },
    { label: "Total revenue",    value: "total_revenue",      format: "money",  show: true },
    { label: "App installs",     value: "total_app_installs", format: "number", show: true }
  ],

  /* ---------- Sections: order here = default priority ---------- */
  sections: [
    { id: "headline",    label: "Headline tiles", show: true },
    { id: "channels",    title: "Purchases by channel", subtitle: "", showRevenue: false, show: true },
    { id: "travel",      title: "Redemptions by travel leg", subtitle: "", showShare: false, show: true },
    { id: "airports",    title: "Airport Wise Redemptions",
                         subtitle: "Departure offers count at the from airport and arrival offers at the to airport. Other Offers count at the from airport of the trip.",
                         show: true },
    { id: "offers",      title: "Brand wise offer redemption", subtitle: "Each bar is split by travel type.", show: true },
    { id: "definitions", title: "How each number is defined", show: true }
  ],

  /* ---------- Purchases by channel table ---------- */
  channels: [
    { name: "Times Prime OLP", passes: "tp_olp_purchase",      revenue: "tp_olp_revenue",      color: "#3D8BEA" },
    { name: "Takeoff in-app",  passes: "takeoff_app_purchase", revenue: "takeoff_app_revenue", color: "#1C58B8" }
  ],

  /* ---------- Names shown for each travel type in the export ---------- */
  travelTypes: { "Departure": "Departure", "Arrival": "Arrival", "Common": "Other Offers (Uber, Sony LIV)" },
  countAtDestination: ["Arrival"],     // these travel types count at the "to" airport; all others at the "from" airport

  /* ---------- Brands: logo and tick colour ---------- */
  brands: {
    "Starbucks": { logo: "logos/starbucks.png", color: "#00704A" },
    "Uber":      { logo: "logos/uber.png",      color: "#111111" },
    "Sony LIV":  { logo: "logos/sonyliv.png",   color: "#6B2BD9" },
    "Smoor":     { logo: "logos/smoor.png",     color: "#B08D57" },
    "Cococart":  { logo: "logos/cococart.png",  color: "#8A4B2F" }
  },

  /* ---------- Offer names: matched against the offer code, first match wins ---------- */
  // "match" is a pattern (case does not matter); ".*" means "anything in between"
  offers: [
    { match: "^SubOfferStarbucks.*Shortlatte",       brand: "Starbucks", name: "Short latte" },
    { match: "^SubOfferStarbucks.*Shortcappuccino",  brand: "Starbucks", name: "Short cappuccino" },
    { match: "^SubOfferSmoor.*Cappucino",            brand: "Smoor",     name: "Cappuccino and croissant" },
    { match: "^SubOfferUber.*premier",               brand: "Uber",      name: "Premier 20%" },
    { match: "^SubOfferUber.*reserve",               brand: "Uber",      name: "Reserve 30%" },
    { match: "^SubOfferSonyliv3month",               brand: "Sony LIV",  name: "3-month subscription" },
    { match: "^SubOfferCococart",                    brand: "Cococart",  name: "\u20b9350 gift voucher" }
  ],

  /* ---------- Airport codes ---------- */
  airports: {
    "Indira Gandhi International Airport": "DEL",
    "Pune International Airport": "PNQ",
    "Kempegowda International Airport": "BLR",
    "Rajiv Gandhi International Airport": "HYD",
    "Chhatrapati Shivaji Maharaj International Airport": "BOM",
    "Lokpriya Gopinath Bordoloi International Airport": "GAU",
    "Cochin International Airport": "COK",
    "Sardar Vallabhbhai Patel International Airport": "AMD",
    "Jay Prakash Narayan Airport": "PAT"
  },

  /* ---------- Definitions shown at the bottom ---------- */
  definitions: [
    ["Passes purchased", "Times Prime OLP purchases plus Takeoff in-app purchases."],
    ["Passes activated", "Purchased passes that have been activated."],
    ["Offers redeemed", "One row in the redemption export is one offer redeemed."],
    ["Brand and benefit", "Read from the offer code. City variants of the same offer are combined."],
    ["Not yet included", "Passes expired is not in this data yet."]
  ],

  /* ---------- Column names in the redemption export ---------- */
  columns: {
    user: "original_user_id",
    time: "created",
    offer: "Offer_type",
    travelType: "Travel Type",
    fromAirport: "From Airport Name",
    fromTerminal: "From Terminal no.",
    toAirport: "To Airport Name",
    toTerminal: "To Terminal No."
  },

  /* ---------- Redemption export: paste a new CSV between the backticks ---------- */
  redemptionsCsv: `
original_user_id,created,Offer_type,Travel Type,From Airport Name,From Terminal no.,To Airport Name,To Terminal No.
7323285,2026-11-15 6:32:23,SubOfferStarbucksdelhiShortlatteTakeoff,Departure,Indira Gandhi International Airport,T3,Pune International Airport,T1
7323285,2026-11-15 18:42:30,SubOfferStarbucksdelhiShortcappuccinoTakeoff,Departure,Indira Gandhi International Airport,T3,Pune International Airport,T1
7323285,2026-11-15 19:54:04,SubOfferUberNewpremierTakeoff,Common,Indira Gandhi International Airport,T3,Pune International Airport,T1
7191238,2026-10-20 10:35:47,SubOfferStarbuckscopyShortcappuccinoTakeoff,Departure,Kempegowda International Airport,T1,Rajiv Gandhi International Airport,T2
7191238,2026-10-20 10:36:46,SubOfferSmoor2Cappucino&croissantTakeoff,Departure,Kempegowda International Airport,T1,Rajiv Gandhi International Airport,T2
6698581,2026-11-23 6:05:14,SubOfferStarbuckscopyShortlatteTakeoff,Departure,Chhatrapati Shivaji Maharaj International Airport,T2,Indira Gandhi International Airport,T1
6698581,2026-11-23 6:06:17,SubOfferStarbuckscopyShortcappuccinoTakeoff,Departure,Chhatrapati Shivaji Maharaj International Airport,T2,Indira Gandhi International Airport,T1
6698581,2026-11-23 6:07:03,SubOfferStarbuckscopyShortlatteTakeoff,Departure,Chhatrapati Shivaji Maharaj International Airport,T2,Indira Gandhi International Airport,T1
6698581,2026-11-23 6:07:57,SubOfferStarbuckscopyShortcappuccinoTakeoff,Departure,Chhatrapati Shivaji Maharaj International Airport,T2,Indira Gandhi International Airport,T1
7319428,2026-11-17 8:14:17,SubOfferStarbucksShortcappuccinoTakeoff,Arrival,Indira Gandhi International Airport,T1,Lokpriya Gopinath Bordoloi International Airport,T2
7121523,2026-11-14 16:45:26,SubOfferStarbuckscopyShortcappuccinoTakeoff,Departure,Chhatrapati Shivaji Maharaj International Airport,T2,Kempegowda International Airport,T2
7121523,2026-11-14 19:57:37,SubOfferSmoorCappucino&croissantTakeoff,Arrival,Chhatrapati Shivaji Maharaj International Airport,T2,Kempegowda International Airport,T2
7214393,2026-10-19 18:27:12,SubOfferStarbuckscopyShortlatteTakeoff,Departure,Indira Gandhi International Airport,T1,Chhatrapati Shivaji Maharaj International Airport,T2
6628743,2026-11-16 12:39:49,SubOfferStarbuckscopyShortlatteTakeoff,Departure,Kempegowda International Airport,T1,Chhatrapati Shivaji Maharaj International Airport,T1
6628743,2026-11-16 16:24:18,SubOfferStarbuckscopyShortcappuccinoTakeoff,Departure,Kempegowda International Airport,T1,Chhatrapati Shivaji Maharaj International Airport,T1
6628743,2026-11-16 18:52:36,SubOfferUberNewpremierTakeoff,Common,Kempegowda International Airport,T1,Chhatrapati Shivaji Maharaj International Airport,T1
6628743,2026-11-16 18:52:52,SubOfferUberNewreserveTakeoff,Common,Kempegowda International Airport,T1,Chhatrapati Shivaji Maharaj International Airport,T1
7312307,2026-11-11 6:16:02,SubOfferUberNewpremierTakeoff,Common,Cochin International Airport,T1,Kempegowda International Airport,T1
7312307,2026-11-11 8:05:22,SubOfferStarbucksShortcappuccinoTakeoff,Arrival,Cochin International Airport,T1,Kempegowda International Airport,T1
6726304,2026-10-17 4:34:47,SubOfferUberNewpremierTakeoff,Common,Indira Gandhi International Airport,T3,Kempegowda International Airport,T2
6726304,2026-10-17 4:35:10,SubOfferSonyliv3monthTakeoff,Common,Indira Gandhi International Airport,T3,Kempegowda International Airport,T2
6901018,2026-09-26 12:31:09,SubOfferSonyliv3monthTakeoff,Common,Kempegowda International Airport,T1,Kempegowda International Airport,T2
6711282,2026-10-16 1:01:52,SubOfferUberNewpremierTakeoff,Common,Kempegowda International Airport,T2,Indira Gandhi International Airport,T1
6711282,2026-10-16 3:01:37,SubOfferStarbuckscopyShortlatteTakeoff,Departure,Kempegowda International Airport,T2,Indira Gandhi International Airport,T1
6628743,2026-11-02 3:14:29,SubOfferStarbucksdelhiShortcappuccinoTakeoff,Departure,Indira Gandhi International Airport,T3,Chhatrapati Shivaji Maharaj International Airport,T1
6628743,2026-11-02 3:58:03,SubOfferStarbucksdelhiShortlatteTakeoff,Departure,Indira Gandhi International Airport,T3,Chhatrapati Shivaji Maharaj International Airport,T1
7279089,2026-11-01 14:17:53,SubOfferCococart2NewofferTakeoff,Departure,Chhatrapati Shivaji Maharaj International Airport,T1,Cochin International Airport,T1
7279089,2026-11-01 14:19:12,SubOfferCococart2NewofferTakeoff,Departure,Chhatrapati Shivaji Maharaj International Airport,T1,Cochin International Airport,T1
7338040,2026-11-21 20:05:58,SubOfferUberNewreserveTakeoff,Common,Indira Gandhi International Airport,T1,Sardar Vallabhbhai Patel International Airport,T1
7338040,2026-11-21 20:09:18,SubOfferUberNewpremierTakeoff,Common,Indira Gandhi International Airport,T1,Sardar Vallabhbhai Patel International Airport,T1
7338040,2026-11-22 17:32:29,SubOfferStarbucksShortcappuccinoTakeoff,Arrival,Indira Gandhi International Airport,T1,Sardar Vallabhbhai Patel International Airport,T1
6858925,2026-10-15 2:15:49,SubOfferStarbuckscopyShortcappuccinoTakeoff,Departure,Rajiv Gandhi International Airport,T1,Jay Prakash Narayan Airport,T1
6858925,2026-10-15 2:35:36,SubOfferSonyliv3monthTakeoff,Common,Rajiv Gandhi International Airport,T1,Jay Prakash Narayan Airport,T1
6858925,2026-10-15 2:37:27,SubOfferUberNewpremierTakeoff,Common,Rajiv Gandhi International Airport,T1,Jay Prakash Narayan Airport,T1
6858925,2026-10-15 4:56:21,SubOfferStarbuckscopyShortlatteTakeoff,Departure,Rajiv Gandhi International Airport,T1,Jay Prakash Narayan Airport,T1
`
};
