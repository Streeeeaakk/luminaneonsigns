var basePricePerSqInch = 1.7;

var size = options.value("sizePhotogenic");

var discountTiers = {
  extrasmall: [
    { area: 10, discount: 1.7 },
    { area: 20, discount: 1.7 },
    { area: 30, discount: 0.9 },
    { area: 40, discount: 0.65 },
    { area: 50, discount: 0.6 },
    { area: 60, discount: 0.4 },
    { area: 70, discount: 0.34 },
    { area: 80, discount: 0.08 },
    { area: 90, discount: 0.3 },
    { area: 100, discount: 0.3 },
    { area: 110, discount: 0.3 },
    { area: 120, discount: 0.27 },
    { area: 130, discount: 0.27 },
    { area: 140, discount: 0.23 },
    { area: 150, discount: 0.25 },
    { area: 160, discount: 0.26 },
  ],
  small: [
    { area: 20, discount: 1.7 },
    { area: 30, discount: 1.7 },
    { area: 40, discount: 0.99 },
    { area: 60, discount: 0.77 },
    { area: 80, discount: 0.6 },
    { area: 90, discount: 0.51 },
    { area: 110, discount: 0.45 },
    { area: 130, discount: 0.41 },
    { area: 140, discount: 0.4 },
    { area: 160, discount: 0.39 },
    { area: 180, discount: 0.37 },
    { area: 200, discount: 0.372 },
    { area: 230, discount: 0.377 },
    { area: 240, discount: 0.387 },
  ],
  medium: [
    { area: 20, discount: 1.7 },
    { area: 50, discount: 1.7 },
    { area: 70, discount: 1.15 },
    { area: 100, discount: 0.95 },
    { area: 130, discount: 0.85 },
    { area: 150, discount: 0.78 },
    { area: 180, discount: 0.75 },
    { area: 200, discount: 0.73 },
    { area: 230, discount: 0.72 },
    { area: 260, discount: 0.7 },
    { area: 280, discount: 0.7 },
    { area: 300, discount: 0.7 },
    { area: 360, discount: 0.705 },
    { area: 390, discount: 0.712 },
  ],
  large: [
    { area: 40, discount: 1.7 },
    { area: 80, discount: 1.7 },
    { area: 120, discount: 1.3 },
    { area: 170, discount: 1.17 },
    { area: 210, discount: 1.09 },
    { area: 250, discount: 1.04 },
    { area: 290, discount: 1 },
    { area: 340, discount: 0.99 },
    { area: 380, discount: 0.973 },
    { area: 420, discount: 0.96 },
    { area: 460, discount: 0.95 },
    { area: 510, discount: 0.945 },
    { area: 590, discount: 0.939 },
  ],
  xlarge: [
    { area: 60, discount: 1.7 },
    { area: 180, discount: 1.38 },
    { area: 250, discount: 1.25 },
    { area: 310, discount: 1.19 },
    { area: 370, discount: 1.15 },
    { area: 440, discount: 1.12 },
    { area: 500, discount: 1.11 },
    { area: 560, discount: 1.1 },
    { area: 630, discount: 1.09 },
  ],
  xxlarge: [
    { area: 100, discount: 1.7 },
    { area: 300, discount: 1.5 },
    { area: 440, discount: 1.404 },
    { area: 550, discount: 1.35 },
    { area: 670, discount: 1.321 },
    { area: 780, discount: 1.3 },
    { area: 880, discount: 1.285 },
    { area: 1000, discount: 1.275 },
    { area: 1120, discount: 1.27 },
    { area: 1220, discount: 1.265 },
    { area: 1340, discount: 1.265 },
  ],
  supersized: [
    { area: 200, discount: 1.7 },
    { area: 600, discount: 1.57 },
    { area: 800, discount: 1.501 },
    { area: 1000, discount: 1.466 },
    { area: 1200, discount: 1.44 },
    { area: 1400, discount: 1.43 },
    { area: 1600, discount: 1.422 },
    { area: 1800, discount: 1.415 },
    { area: 2000, discount: 1.412 },
    { area: 2200, discount: 1.41 },
    { area: 2600, discount: 1.4044 },
    { area: 3000, discount: 1.4025 },
  ],
};

var basePrices = {
  extrasmall: 82, small: 102, medium: 115, large: 146,
  xlarge: 155, xxlarge: 182, supersized: 243
};

function calculateDiscount(area, size) {
  const tiers = discountTiers[size];
  return tiers.reduce((maxDiscount, tier) => (area >= tier.area ? tier.discount : maxDiscount), 0) * area;
}

var area = options.controller('area').x * options.controller('area').y;
var priceArea = area * basePricePerSqInch;
var discount = calculateDiscount(area, size);
var finalValue = Math.ceil(basePrices[size] + (priceArea - discount));

return finalValue;