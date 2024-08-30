window.addEventListener("option:changed", function (e) {
  var option = e.detail;
  var timeoutId;
  var areaElement = document.querySelector('[data-option="area"]');
  var fontElement = document.querySelector('[name="properties[font]"]');

  var inputX = areaElement.querySelector('[name="properties[_area_x]"]');
  var inputY = areaElement.querySelector('[name="properties[_area_y]"]');
  var textInput = document.querySelector('[name="properties[text]"]');

  inputX.disabled = true;
  inputY.disabled = true;
  const fontConfigs = {
    Alexander: {
      sizeMap: "sizeAlexa",
      sizeMultipliers: {
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        extrasmall: 4.5,
        small: 5.5,
        medium: 6.5,
        large: 8.5,
        xlarge: 10.5,
        xxlarge: 14,
        supersized: 18.5,
      },
    },
    Sorrento: {
      sizeMap: "sizeSorrento",
      sizeMultipliers: {
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        extrasmall: 6,
        small: 7.5,
        medium: 9,
        large: 11,
        xlarge: 13.5,
        xxlarge: 19,
        supersized: 25,
      },
    },
    Chelsea: {
      sizeMap: "sizeChelsea",
      sizeMultipliers: {
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        extrasmall: 7,
        small: 8.5,
        medium: 10.5,
        large: 12.5,
        xlarge: 16,
        xxlarge: 22,
        supersized: 29,
      },
    },
    Amsterdam: {
      sizeMap: "sizeAmsterdam",
      sizeMultipliers: {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        mini: 4,
        extrasmall: 4.5,
        small: 6,
        medium: 7,
        large: 8.5,
        xlarge: 10.5,
        xxlarge: 14.5,
        supersized: 19,
      },
    },
    Buttercup: {
      sizeMap: "sizeButtercup",
      sizeMultipliers: {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        mini: 6,
        extrasmall: 7.5,
        small: 10.5,
        medium: 12,
        large: 15,
        xlarge: 18,
        xxlarge: 23.5,
        supersized: 32.5,
      },
    },
    Freespirit: {
      sizeMap: "sizeFreespirit",
      sizeMultipliers: {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        mini: 3.5,
        extrasmall: 4,
        small: 5,
        medium: 6,
        large: 8,
        xlarge: 10,
        xxlarge: 13.5,
        supersized: 18,
      },
    },
    MARQUEE: {
      sizeMap: "sizeMarquee",
      sizeMultipliers: {
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        medium: 7.5,
        large: 9.5,
        xlarge: 12,
        xxlarge: 16,
        supersized: 21.5,
      },
    },
    NeonRetro: {
      sizeMap: "sizeNeonRetro",
      sizeMultipliers: {
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        medium: 4.5,
        large: 6,
        xlarge: 7.5,
        xxlarge: 10,
        supersized: 13,
      },
    },
    LOVENEON: {
      sizeMap: "sizeLoveneon",
      sizeMultipliers: {
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        medium: 4.5,
        large: 6,
        xlarge: 7.5,
        xxlarge: 10,
        supersized: 13,
      },
    },
    Typewriter: {
      sizeMap: "sizeTypewriter",
      sizeMultipliers: {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        mini: 2.5,
        extrasmall: 3.5,
        small: 4.5,
        medium: 5.5,
        large: 6.5,
        xlarge: 8,
        xxlarge: 11,
        supersized: 19,
      },
    },
    Avante: {
      sizeMap: "sizeAvante",
      sizeMultipliers: {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        mini: 3,
        extrasmall: 4,
        small: 5.5,
        medium: 6,
        large: 7.5,
        xlarge: 9,
        xxlarge: 12,
        supersized: 16.5,
      },
    },
    Barcelona: {
      sizeMap: "sizeBarcelona",
      sizeMultipliers: {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        mini: 5,
        extrasmall: 6,
        small: 7.5,
        medium: 9,
        large: 11.5,
        xlarge: 14.5,
        xxlarge: 19.5,
        supersized: 26,
      },
    },
    SCIFI: {
      sizeMap: "sizeScifi",
      sizeMultipliers: {
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
    },
    Mayfair: {
      sizeMap: "sizeMayfair",
      sizeMultipliers: {
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        medium: 5,
        large: 6.5,
        xlarge: 7.5,
        xxlarge: 10,
        supersized: 14,
      },
    },
    Neontrace: {
      sizeMap: "sizeNeontrace",
      sizeMultipliers: {
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        small: 4,
        medium: 5,
        large: 6.5,
        xlarge: 8.5,
        xxlarge: 11,
        supersized: 14.5,
      },
    },
    Photogenic: {
      sizeMap: "sizePhotogenic",
      sizeMultipliers: {
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        extrasmall: 7,
        small: 9,
        medium: 11,
        large: 13,
        xlarge: 16.5,
        xxlarge: 23,
        supersized: 30.5,
      },
    },
    NeoTokyo: {
      sizeMap: "sizeNeotokyo",
      sizeMultipliers: {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        mini: 3,
        extrasmall: 3.5,
        small: 4.5,
        medium: 5,
        large: 6,
        xlarge: 8,
        xxlarge: 11,
        supersized: 14.5,
      },
    },
    NeonGlow: {
      sizeMap: "sizeNeonglow",
      sizeMultipliers: {
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        medium: 5.5,
        large: 6.5,
        xlarge: 8.5,
        xxlarge: 11.5,
        supersized: 15.5,
      },
    },
    Nevada: {
      sizeMap: "sizeNevada",
      sizeMultipliers: {
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        medium: 6.5,
        large: 8,
        xlarge: 10.5,
        xxlarge: 14,
        supersized: 18.5,
      },
    },
    Greenworld: {
      sizeMap: "sizeGreenworld",
      sizeMultipliers: {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        mini: 4,
        extrasmall: 4.5,
        small: 6,
        medium: 7,
        large: 8.5,
        xlarge: 10.5,
        xxlarge: 14.5,
        supersized: 19,
      },
    },
    Waikiki: {
      sizeMap: "sizeWaikiki",
      sizeMultipliers: {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        mini: 3,
        extrasmall: 3.5,
        small: 4.5,
        medium: 6,
        large: 7.5,
        xlarge: 9,
        xxlarge: 12,
        supersized: 16.5,
      },
    },
    Melbourne: {
      sizeMap: "sizeMelbourne",
      sizeMultipliers: {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        mini: 3,
        extrasmall: 3.5,
        small: 4.5,
        medium: 6,
        large: 7.5,
        xlarge: 9,
        xxlarge: 12,
        supersized: 16.5,
      },
    },
    ClassicType: {
      sizeMap: "sizeClassicType",
      sizeMultipliers: {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        mini: 3,
        extrasmall: 3.5,
        small: 4.5,
        medium: 6,
        large: 7.5,
        xlarge: 9,
        xxlarge: 12,
        supersized: 16.5,
      },
    },
    NorthShore: {
      sizeMap: "sizeNorthShore",
      sizeMultipliers: {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        mini: 5.5,
        extrasmall: 7,
        small: 9,
        medium: 10.5,
        large: 12.5,
        xlarge: 16,
        xxlarge: 22,
        supersized: 29,
      },
    },
    Freehand: {
      sizeMap: "sizeFreehand",
      sizeMultipliers: {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        mini: 5.5,
        extrasmall: 6.5,
        small: 8.5,
        medium: 10,
        large: 12.5,
        xlarge: 15.5,
        xxlarge: 21.5,
        supersized: 28.5,
      },
    },
    WildScript: {
      sizeMap: "sizeWildScript",
      sizeMultipliers: {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        mini: 5.5,
        extrasmall: 6.5,
        small: 8.5,
        medium: 10,
        large: 12.5,
        xlarge: 15.5,
        xxlarge: 21.5,
        supersized: 28.5,
      },
    },
    NeonScript: {
      sizeMap: "sizeNeonScript",
      sizeMultipliers: {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        mini: 3.5,
        extrasmall: 4,
        small: 5,
        medium: 6,
        large: 8,
        xlarge: 10,
        xxlarge: 13.5,
        supersized: 18,
      },
    },
    Amanda: {
      sizeMap: "sizeAmanda",
      sizeMultipliers: {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        mini: 3.5,
        extrasmall: 4,
        small: 5,
        medium: 6,
        large: 8,
        xlarge: 10,
        xxlarge: 13.5,
        supersized: 18,
      },
    },
    Austin: {
      sizeMap: "sizeAustin",
      sizeMultipliers: {
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        extrasmall: 7.5,
        small: 10.5,
        medium: 12,
        large: 15,
        xlarge: 18,
        xxlarge: 23.5,
        supersized: 32.5,
      },
    },
    Bayview: {
      sizeMap: "sizeBayview",
      sizeMultipliers: {
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        small: 9,
        medium: 11,
        large: 13,
        xlarge: 16.5,
        xxlarge: 23,
        supersized: 30.5,
      },
    },
    NewCursive: {
      sizeMap: "sizeNewCursive",
      sizeMultipliers: {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        mini: 4,
        extrasmall: 4.5,
        small: 6,
        medium: 7,
        large: 8.5,
        xlarge: 10.5,
        xxlarge: 14.5,
        supersized: 19,
      },
    },
    Vintage: {
      sizeMap: "sizeVintage",
      sizeMultipliers: {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        mini: 5.5,
        extrasmall: 6.5,
        small: 8.5,
        medium: 10,
        large: 12.5,
        xlarge: 15.5,
        xxlarge: 21.5,
        supersized: 28.5,
      },
    },
    Venetian: {
      sizeMap: "sizeVenetian",
      sizeMultipliers: {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        mini: 5.5,
        extrasmall: 6.5,
        small: 8.5,
        medium: 10,
        large: 12.5,
        xlarge: 15.5,
        xxlarge: 21.5,
        supersized: 28.5,
      },
    },
    Beachfront: {
      sizeMap: "sizeBeachfront",
      sizeMultipliers: {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        mini: 4,
        extrasmall: 4.5,
        small: 6,
        medium: 7,
        large: 8.5,
        xlarge: 10.5,
        xxlarge: 14.5,
        supersized: 19,
      },
    },
    Lovenote: {
      sizeMap: "sizeLovenote",
      sizeMultipliers: {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        mini: 4,
        extrasmall: 4.5,
        small: 6,
        medium: 7,
        large: 8.5,
        xlarge: 10.5,
        xxlarge: 14.5,
        supersized: 19,
      },
    },
    Royalty: {
      sizeMap: "sizeRoyalty",
      sizeMultipliers: {
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        extrasmall: 4.5,
        small: 6,
        medium: 7,
        large: 8.5,
        xlarge: 10.5,
        xxlarge: 14.5,
        supersized: 19,
      },
    },
    Rocket: {
      sizeMap: "sizeRocket",
      sizeMultipliers: {
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        extrasmall: 4.5,
        small: 6,
        medium: 7,
        large: 8.5,
        xlarge: 10.5,
        xxlarge: 14.5,
        supersized: 19,
      },
    },
    Signature: {
      sizeMap: "sizeSignature",
      sizeMultipliers: {
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        extrasmall: 4.5,
        small: 5.5,
        medium: 6.5,
        large: 8.5,
        xlarge: 10.5,
        xxlarge: 14,
        supersized: 18.5,
      },
    },
    Monaco: {
      sizeMap: "sizeMonaco",
      sizeMultipliers: {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        mini: 3,
        extrasmall: 4,
        small: 5.5,
        medium: 6,
        large: 7.5,
        xlarge: 9,
        xxlarge: 12,
        supersized: 16.5,
      },
    },
    Neonlite: {
      sizeMap: "sizeNeonlite",
      sizeMultipliers: {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      },
      yValues: {
        mini: 2.5,
        extrasmall: 3.5,
        small: 4.5,
        medium: 5.5,
        large: 6.5,
        xlarge: 8,
        xxlarge: 11,
        supersized: 19,
      },
    },
  };
  
  const updateMap = {
    sizeAlexa: (value) => updateFont("Alexander", value),
    sizeAmsterdam: (value) => updateFont("Amsterdam", value),
    sizeMarquee: (value) => updateFont("MARQUEE", value),
    sizeNeonRetro: (value) => updateFont("NeonRetro", value),
    sizeTypewriter: (value) => updateFont("Typewriter", value),
    sizeAvante: (value) => updateFont("Avante", value),
    sizeBarcelona: (value) => updateFont("Barcelona", value),
    sizeScifi: (value) => updateFont("SCIFI", value),
    sizeMayfair: (value) => updateFont("Mayfair", value),
    sizeFreespirit: (value) => updateFont("Freespirit", value),
    sizeButtercup: (value) => updateFont("Buttercup", value),
    sizeNeontrace: (value) => updateFont("Neontrace", value),
    sizePhotogenic: (value) => updateFont("Photogenic", value),
    sizeNeotokyo: (value) => updateFont("NeoTokyo", value),
    sizeNeonglow: (value) => updateFont("NeonGlow", value),
    sizeSorrento: (value) => updateFont("Sorrento", value),
    sizeNevada: (value) => updateFont("Nevada", value),
    sizeGreenworld: (value) => updateFont("Greenworld", value),
    sizeChelsea: (value) => updateFont("Chelsea", value),
    sizeLoveneon: (value) => updateFont("LOVENEON", value),
    sizeWaikiki: (value) => updateFont("Waikiki", value),
    sizeMelbourne: (value) => updateFont("Melbourne", value),
    sizeClassicType: (value) => updateFont("ClassicType", value),
    sizeNorthShore: (value) => updateFont("NorthShore", value),
    sizeFreehand: (value) => updateFont("Freehand", value),
    sizeWildScript: (value) => updateFont("WildScript", value),
    sizeNeonScript: (value) => updateFont("NeonScript", value),
    sizeAmanda: (value) => updateFont("Amanda", value),
    sizeAustin: (value) => updateFont("Austin", value),
    sizeBayview: (value) => updateFont("Bayview", value),
    sizeNewCursive: (value) => updateFont("NewCursive", value),
    sizeVintage: (value) => updateFont("Vintage", value),
    sizeVenetian: (value) => updateFont("Venetian", value),
    sizeBeachfront: (value) => updateFont("Beachfront", value),
    sizeLovenote: (value) => updateFont("Lovenote", value),
    sizeRoyalty: (value) => updateFont("Royalty", value),
    sizeRocket: (value) => updateFont("Rocket", value),
    sizeSignature: (value) => updateFont("Signature", value),
    sizeMonaco: (value) => updateFont("Monaco", value),
    sizeNeonlite: (value) => updateFont("Neonlite", value),
  };

  function updateFont(fontName, currentSizeValue) {
    const config = fontConfigs[fontName];
    if (!config) return;

    inputX.disabled = false;
    inputY.disabled = false;

    const currentLength = textInput.value.length;
    const multiplier = config.sizeMultipliers[currentSizeValue];

    if (multiplier !== undefined) {
      const newValue = currentLength * multiplier;
      inputX.value = newValue;
      inputX.dispatchEvent(new Event("input"));

      const yValue = config.yValues[currentSizeValue];
      if (yValue !== undefined) {
        inputY.value = yValue;
        inputY.dispatchEvent(new Event("input"));
      } else {
        console.warn("Unknown size:", currentSizeValue);
      }
    } else {
      console.warn("Invalid size value:", currentSizeValue);
    }

    inputX.disabled = true;
    inputY.disabled = true;
  }

  if (updateMap[option.name]) {
    setTimeout(updateMap[option.name], 0, option.value);
  }

  if (option.name === "text") {
    const fontName = fontElement.value;
    const config = fontConfigs[fontName];
    if (!config) return;

    const sizeValue = document.querySelector(
      `input[name="properties[${config.sizeMap}]"]:checked`
    ).value;

    setTimeout(() => updateFont(fontName, sizeValue), 0);
  }

  if (option.name === "font") {
    const config = fontConfigs[option.value];

    if (!config) return;

    setTimeout(() => {
      const sizeValue = document.querySelector(
        `input[name="properties[${config.sizeMap}]"]:checked`
      ).value;

      setTimeout(() => updateFont(option.value, sizeValue), 0);
    });
    
  }

  textInput.addEventListener("input", function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null; // Reset the reference
    }
  });
});
