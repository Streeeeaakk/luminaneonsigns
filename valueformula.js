var basePricePerSqInch = 1;

var size = options.value("sizeNeonglow");

var discountTiers = {
  medium: [
    { area: 20, discount: 1 },
    { area: 60, discount: 0.15 },
    { area: 80, discount: -0.2 },
    { area: 100, discount: -0.35 },
    { area: 130, discount: -0.44 },
    { area: 150, discount: -0.5 },
    { area: 170, discount: -0.53 },
    { area: 190, discount: -0.54 },
    { area: 220, discount: -0.55 },
    { area: 240, discount: -0.56 },
  ],
  large: [
    { area: 30, discount: 1 },
    { area: 90, discount: 0.35 },
    { area: 130, discount: 0.1 },
    { area: 160, discount: -0.05 },
    { area: 190, discount: -0.15 },
    { area: 220, discount: -0.2 },
    { area: 260, discount: -0.25 },
    { area: 290, discount: -0.27 },
    { area: 350, discount: -0.3 },
    { area: 420, discount: -0.315 },
  ],
  xlarge: [
    { area: 30, discount: 1 },
    { area: 150, discount: 0.5 },
    { area: 200, discount: 0.26 },
    { area: 250, discount: 0.16 },
    { area: 300, discount: 0.1 },
    { area: 350, discount: 0.05 },
    { area: 400, discount: 0.02 },
    { area: 500, discount: 0 },
  ],
  xxlarge: [
    { area: 10, discount: 1 },
    { area: 270, discount: 0.68 },
    { area: 300, discount: 0.53 },
    { area: 400, discount: 0.44 },
    { area: 500, discount: 0.385 },
    { area: 600, discount: 0.35 },
    { area: 700, discount: 0.33 },
    { area: 800, discount: 0.32 },
    { area: 900, discount: 0.305 },
    { area: 1000, discount: 0.3 },
    { area: 1100, discount: 0.295 },
  ],
  supersized: [
    { area: 20, discount: 1 },
    { area: 500, discount: 0.79 },
    { area: 600, discount: 0.69 },
    { area: 800, discount: 0.625 },
    { area: 1000, discount: 0.59 },
    { area: 1100, discount: 0.57 },
    { area: 1300, discount: 0.558 },
    { area: 1500, discount: 0.55 },
    { area: 1700, discount: 0.543 },
    { area: 1800, discount: 0.538 },
    { area: 2200, discount: 0.533 },
    { area: 2300, discount: 0.53 },
  ],
};

var basePrices = {
  medium: 153,
  large: 195,
  xlarge: 207,
  xxlarge: 243,
  supersized: 323,
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
