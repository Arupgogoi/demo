// Price list data for ShreeJii Tours & Travels
export const priceList = {
  "KAMAKHYA TEMPLE": { days: 1, actualPrice: 3500.0, discountPrice: 3000.0 },
  KAZIRANGA: { days: 3, actualPrice: 13500.0, discountPrice: 12000.0 },
  MANAS: { days: 3, actualPrice: 11500.0, discountPrice: 10500.0 },
  TAWANG: { days: 5, actualPrice: 25000.0, discountPrice: 22000.0 },
  CHERRAPUNJI: { days: 3, actualPrice: 13500.0, discountPrice: 11499.0 },
  "LOKTAK LAKE": { days: 5, actualPrice: 36450.0, discountPrice: 34450.0 },
  "ZIRO VALLEY": { days: 5, actualPrice: 25000.0, discountPrice: 22000.0 },
  MAJULI: { days: 3, actualPrice: 14999.0, discountPrice: 13499.0 },
  "NOHKALIKAI FALLS": { days: 3, actualPrice: 13500.0, discountPrice: 11499.0 },
  "UMIAM LAKE": { days: 3, actualPrice: 13580.0, discountPrice: 11480.0 },
  "DZUKOU VALLEY": { days: 3, actualPrice: 18530.0, discountPrice: 16600.0 },
  ARUNACHAL: { days: 5, actualPrice: 25320.0, discountPrice: 22220.0 },
  SHIIONG: { days: 3, actualPrice: 13430.0, discountPrice: 11430.0 },
  DAWKI: { days: 3, actualPrice: 13300.0, discountPrice: 11320.0 },
  DARJEELING: { days: 5, actualPrice: 32400.0, discountPrice: 29110.0 },
  GANGTOK: { days: 9, actualPrice: 36450.0, discountPrice: 34450.0 },
  SIKIM: { days: 9, actualPrice: 36450.0, discountPrice: 34450.0 },
  // Transportation services prices
  "AIRPORT PICK UP": { days: 1, actualPrice: 1200.0, discountPrice: 1200.0 },
  "AIRPORT DROP": { days: 1, actualPrice: 1000.0, discountPrice: 1000.0 },
  "GUWAHATI LOCAL": { days: 1, actualPrice: 3500.0, discountPrice: 3000.0 },
  "OUT SIDE GUWAHATI(UPTO 100 KM)": {
    days: 1,
    actualPrice: 3500.0,
    discountPrice: 3000.0,
  },
  "OUT SIDE GUWAHATI AFTER 100KM": {
    days: 1,
    actualPrice: "PER KM 18.00",
    discountPrice: "PER KM 15.00",
  },
  "PART TIME DRIVER": {
    days: 1,
    actualPrice: 2500.0,
    discountPrice: 2000.0,
  },
};

// Function to get price for a place
export const getPriceForPlace = (placeName: string) => {
  if (!placeName) return null;

  // Special handling for misspelled destinations
  if (placeName.toUpperCase() === "SHILLONG") {
    return priceList["SHIIONG"];
  }
  if (placeName.toUpperCase() === "SIKKIM") {
    return priceList["SIKIM"];
  }

  // Map place names to price list keys
  const priceKey = Object.keys(priceList).find(
    (key) =>
      placeName.toUpperCase().includes(key) ||
      key.includes(placeName.toUpperCase())
  );

  return priceKey ? priceList[priceKey] : null;
};
