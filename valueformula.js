var basePricePerSqInch = 1.7;

var size = options.value("sizeNeonlite");

var discountTiers = {
  mini: [
    { area: 5, discount: 1.7 },
    { area: 15, discount: 0.5 },
    { area: 20, discount: 0.1 },
    { area: 25, discount: -0.2 },
    { area: 30, discount: -0.4 },
    { area: 35, discount: -0.5 },
    { area: 40, discount: -0.6 },
    { area: 50, discount: -0.65 },
  ],
  extrasmall: [
    { area: 8, discount: 1.7 },
    { area: 20, discount: 0.9 },
    { area: 35, discount: 0.6 },
    { area: 40, discount: 0.4 },
    { area: 50, discount: 0.3 },
    { area: 60, discount: 0.2 },
    { area: 70, discount: 0.13 },
    { area: 78, discount: 0.1 },
    { area: 80, discount: 0.1 },
  ],
  small: [
    { area: 13, discount: 1.7 },
    { area: 40, discount: 0.92 },
    { area: 50, discount: 0.67 },
    { area: 60, discount: 0.52 },
    { area: 80, discount: 0.44 },
    { area: 90, discount: 0.4 },
    { area: 100, discount: 0.33 },
    { area: 130, discount: 0.3 },
    { area: 200, discount: 0.31 },
  ],
  medium: [
    { area: 20, discount: 1.7 },
    { area: 60, discount: 1.15 },
    { area: 80, discount: 0.95 },
    { area: 110, discount: 0.85 },
    { area: 130, discount: 0.78 },
    { area: 150, discount: 0.73 },
    { area: 170, discount: 0.7 },
    { area: 220, discount: 0.68 },
    { area: 300, discount: 0.69 },
  ],
  large: [
    { area: 30, discount: 1.7 },
    { area: 97, discount: 1.25 },
    { area: 130, discount: 1.1 },
    { area: 160, discount: 1 },
    { area: 190, discount: 0.95 },
    { area: 220, discount: 0.92 },
    { area: 260, discount: 0.89 },
    { area: 290, discount: 0.87 },
    { area: 350, discount: 0.85 },
    { area: 420, discount: 0.84 },
  ],
  xlarge: [
    { area: 48, discount: 1.7 },
    { area: 140, discount: 1.33 },
    { area: 190, discount: 1.18 },
    { area: 240, discount: 1.12 },
    { area: 280, discount: 1.07 },
    { area: 330, discount: 1.038 },
    { area: 380, discount: 1.025 },
    { area: 430, discount: 1.015 },
    { area: 520, discount: 1.01 },
  ],
  xxlarge: [
    { area: 80, discount: 1.7 },
    { area: 260, discount: 1.49 },
    { area: 350, discount: 1.38 },
    { area: 440, discount: 1.32 },
    { area: 520, discount: 1.28 },
    { area: 600, discount: 1.26 },
    { area: 700, discount: 1.245 },
    { area: 790, discount: 1.235 },
    { area: 880, discount: 1.225 },
    { area: 1050, discount: 1.22 },
  ],
  supersized: [
    { area: 160, discount: 1.7 },
    { area: 600, discount: 1.6 },
    { area: 800, discount: 1.535 },
    { area: 1000, discount: 1.5 },
    { area: 1200, discount: 1.48 },
    { area: 1400, discount: 1.475 },
    { area: 1600, discount: 1.465 },
    { area: 1800, discount: 1.46 },
    { area: 2200, discount: 1.455 },
    { area: 2500, discount: 1.453 },
    { area: 2900, discount: 1.45 },
  ],
};

var basePrices = {
  mini: 60,
  extrasmall: 68,
  small: 85,
  medium: 95,
  large: 121,
  xlarge: 129,
  xxlarge: 151,
  supersized: 201,
};

function calculateDiscount(area, size) {
  const tiers = discountTiers[size];
  return (
    tiers.reduce(
      (maxDiscount, tier) => (area >= tier.area ? tier.discount : maxDiscount),
      0
    ) * area
  );
}

var area = options.controller("area").x * options.controller("area").y;
var priceArea = area * basePricePerSqInch;
var discount = calculateDiscount(area, size);
var discountedPrice = priceArea - discount;
var finalValue = Math.ceil(basePrices[size] + discountedPrice);

return finalValue;
