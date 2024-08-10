var basePricePerSqInch = 1.7,
  baseIncrease = 0,
  basePrice = 64;
var size = options.value("sizeBarcelona"),
  font = options.value("font");

var miniDiscountTiers = [
  { area: 5, discount: 1.7 },
  { area: 15, discount: 0.6 },
  { area: 20, discount: 0.2 },
  { area: 30, discount: 0 },
  { area: 35, discount: -0.1 },
  { area: 40, discount: -0.25 },
  { area: 50, discount: -0.3 },
  { area: 70, discount: -0.33 },
];

var extraSmallDiscountTiers = [
  { area: 8, discount: 1.7 },
  { area: 30, discount: 0.9 },
  { area: 40, discount: 0.68 },
  { area: 50, discount: 0.55 },
  { area: 60, discount: 0.4 },
  { area: 70, discount: 0.35 },
  { area: 80, discount: 0.3 },
  { area: 90, discount: 0.28 },
  { area: 100, discount: 0.25 },
  { area: 150, discount: 0.27 },
];

var smallDiscountTiers = [
  { area: 13, discount: 1.7 },
  { area: 40, discount: 1.05 },
  { area: 60, discount: 0.87 },
  { area: 80, discount: 0.71 },
  { area: 90, discount: 0.65 },
  { area: 110, discount: 0.6 },
  { area: 130, discount: 0.599 },
  { area: 140, discount: 0.55 },
  { area: 160, discount: 0.53 },
  { area: 190, discount: 0.52 },
  { area: 230, discount: 0.53 },
];

var mediumDiscountTiers = [
  { area: 20, discount: 1.7 },
  { area: 60, discount: 1.15 },
  { area: 80, discount: 0.95 },
  { area: 120, discount: 0.88 },
  { area: 140, discount: 0.83 },
  { area: 160, discount: 0.8 },
  { area: 190, discount: 0.76 },
  { area: 240, discount: 0.74 },
];

var largeDiscountTiers = [
  { area: 30, discount: 1.7 },
  { area: 110, discount: 1.32 },
  { area: 150, discount: 1.15 },
  { area: 180, discount: 1.08 },
  { area: 220, discount: 1.028 },
  { area: 260, discount: 1 },
  { area: 300, discount: 0.98 },
  { area: 330, discount: 0.96 },
  { area: 370, discount: 0.95 },
  { area: 450, discount: 0.94 },
  { area: 520, discount: 0.93 },
];

var xlargeDiscountTiers = [
  { area: 48, discount: 1.7 },
  { area: 160, discount: 1.38 },
  { area: 210, discount: 1.25 },
  { area: 270, discount: 1.17 },
  { area: 320, discount: 1.12 },
  { area: 360, discount: 1.1 },
  { area: 430, discount: 1.08 },
  { area: 540, discount: 1.07 },
  { area: 800, discount: 1.068 },
];
var xxlargeDiscountTiers = [
  { area: 80, discount: 1.7 },
  { area: 260, discount: 1.49 },
  { area: 350, discount: 1.4 },
  { area: 480, discount: 1.337 },
  { area: 570, discount: 1.305 },
  { area: 670, discount: 1.286 },
  { area: 760, discount: 1.27 },
  { area: 860, discount: 1.26 },
  { area: 960, discount: 1.255 },
  { area: 1050, discount: 1.25 },
  { area: 1300, discount: 1.248 },
];
var supersizedDiscountTiers = [
  { area: 160, discount: 1.7 },
  { area: 540, discount: 1.57 },
  { area: 720, discount: 1.502 },
  { area: 900, discount: 1.465 },
  { area: 1000, discount: 1.44 },
  { area: 1200, discount: 1.418 },
  { area: 1400, discount: 1.422 },
  { area: 1600, discount: 1.417 },
  { area: 1800, discount: 1.412 },
  { area: 1900, discount: 1.41 },
  { area: 2100, discount: 1.408 },
  { area: 2300, discount: 1.405 },
];

var discountTiers = {
  mini: miniDiscountTiers,
  extrasmall: extraSmallDiscountTiers,
  small: smallDiscountTiers,
  medium: mediumDiscountTiers,
  large: largeDiscountTiers,
  xlarge: xlargeDiscountTiers,
  xxlarge: xxlargeDiscountTiers,
  supersized: supersizedDiscountTiers,
};
if (size == "mini") {
  basePrice = 64;
} else if (size == "extrasmall") {
  basePrice = 73;
} else if (size == "small") {
  basePrice = 91;
} else if (size == "medium") {
  basePrice = 102;
} else if (size == "large") {
  basePrice = 130;
} else if (size == "xlarge") {
  basePrice = 138;
} else if (size == "xxlarge") {
  basePrice = 162;
} else if (size == "supersized") {
  basePrice = 216;
}

function calculateDiscount(area, size) {
  var largestDiscount = 0;

  const tiers = discountTiers[size];
  if (!tiers) {
    return 0;
  }

  for (var tier of tiers) {
    if (area >= tier.area) {
      largestDiscount = tier.discount;
    } else break;
  }
  return area * largestDiscount;
}

var area = options.controller("area").x * options.controller("area").y;

var priceArea = area * basePricePerSqInch;

var discount = calculateDiscount(area, size);

var discountedPrice = priceArea - discount;

var finalValue = Math.ceil(basePrice + discountedPrice);

return finalValue;
