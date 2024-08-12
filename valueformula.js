var basePricePerSqInch = 1;

var size = options.value("sizeNeotokyo");

var discountTiers = {
  mini: [
    { area: 5, discount: 1 },
    { area: 18, discount: 0.1 },
    { area: 24, discount: -0.2 },
    { area: 30, discount: -0.4 },
    { area: 36, discount: -0.6 },
    { area: 48, discount: -0.78 },
  ],
  extrasmall: [
    { area: 5, discount: 1 },
    { area: 26, discount: 0.3 },
    { area: 35, discount: 0 },
    { area: 43, discount: -0.1 },
    { area: 50, discount: -0.25 },
    { area: 60, discount: -0.4 },
    { area: 87, discount: -0.47 },
  ],
  small: [
    { area: 5, discount: 1 },
    { area: 40, discount: 0.4 },
    { area: 50, discount: 0.1 },
    { area: 60, discount: -0.05 },
    { area: 80, discount: -0.1 },
    { area: 90, discount: -0.2 },
    { area: 120, discount: -0.25 },
    { area: 140, discount: -0.28 },
    { area: 160, discount: -0.29 },
    { area: 170, discount: -0.28 },
    { area: 200, discount: -0.25 },
  ],
  medium: [
    { area: 5, discount: 1 },
    { area: 60, discount: 0.45 },
    { area: 80, discount: 0.2 },
    { area: 100, discount: 0.15 },
    { area: 120, discount: 0.05 },
    { area: 160, discount: 0 },
    { area: 200, discount: -0.02 },
  ],
  large: [
    { area: 5, discount: 1 },
    { area: 90, discount: 0.6 },
    { area: 120, discount: 0.4 },
    { area: 150, discount: 0.3 },
    { area: 180, discount: 0.25 },
    { area: 210, discount: 0.23 },
    { area: 240, discount: 0.2 },
    { area: 270, discount: 0.18 },
    { area: 330, discount: 0.155 },
  ],
  xlarge: [
    { area: 5, discount: 1 },
    { area: 140, discount: 0.68 },
    { area: 190, discount: 0.55 },
    { area: 240, discount: 0.47 },
    { area: 280, discount: 0.42 },
    { area: 330, discount: 0.4 },
    { area: 380, discount: 0.38 },
    { area: 480, discount: 0.365 },
  ],
  xxlarge: [
    { area: 5, discount: 1 },
    { area: 200, discount: 0.8 },
    { area: 300, discount: 0.7 },
    { area: 400, discount: 0.65 },
    { area: 500, discount: 0.625 },
    { area: 600, discount: 0.6 },
    { area: 700, discount: 0.58 },
    { area: 790, discount: 0.575 },
    { area: 800, discount: 0.57 },
    { area: 1000, discount: 0.564 },
  ],
  supersized: [
    { area: 5, discount: 1 },
    { area: 400, discount: 0.875 },
    { area: 600, discount: 0.8 },
    { area: 700, discount: 0.765 },
    { area: 900, discount: 0.74 },
    { area: 1000, discount: 0.73 },
    { area: 1200, discount: 0.72 },
    { area: 1400, discount: 0.715 },
    { area: 1500, discount: 0.71 },
    { area: 1700, discount: 0.705 },
    { area: 2200, discount: 0.7 },
  ],
};

var basePrices = {
  mini: 57,
  extrasmall: 65,
  small: 81,
  medium: 91,
  large: 116,
  xlarge: 123,
  xxlarge: 144,
  supersized: 193,
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
var finalValue = Math.ceil(basePrices[size] + (priceArea - discount));

return finalValue;
