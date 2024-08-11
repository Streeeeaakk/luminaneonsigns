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
      sizeMap: "Buttercup",
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
      sizeMap: "Neontrace",
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
    Buttercup: (value) => updateFont("Buttercup", value),
  };

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

  textInput.addEventListener("input", function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null; // Reset the reference
    }
  });
});
