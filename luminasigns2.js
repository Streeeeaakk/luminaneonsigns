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

  if (fontElement.value == "Alexander") {
    function updateAlexa(currentSizeValue) {
      inputX.disabled = false;
      inputY.disabled = false;
      var currentLength = textInput.value.length;
      sizeValue = currentSizeValue;
      var sizeMultipliers = {
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      };
      var multiplier = sizeMultipliers[currentSizeValue];

      if (multiplier !== undefined) {
        var newValue = currentLength * multiplier;
        inputX.value = newValue;
        inputX.dispatchEvent(new Event("input"));

        switch (currentSizeValue) {
          case "extrasmall":
            inputY.value = 4.5;
            break;
          case "small":
            inputY.value = 5.5;
            break;
          case "medium":
            inputY.value = 6.5;
            break;
          case "large":
            inputY.value = 8.5;
            break;
          case "xlarge":
            inputY.value = 10.5;
            break;
          case "xxlarge":
            inputY.value = 14;
            break;
          case "supersized":
            inputY.value = 18.5;
            break;
          default:
            console.warn("Unknown size:", currentSizeValue);
        }
        inputY.dispatchEvent(new Event("input"));
      } else {
        console.warn("Invalid size value:", currentSizeValue);
      }
      inputX.disabled = true;
      inputY.disabled = true;
    } //Function End
  } //Alexander
  else if (fontElement.value == "Amsterdam") {
    function updateAmsterdam(currentSizeValue) {
      inputX.disabled = false;
      inputY.disabled = false;
      var currentLength = textInput.value.length;
      sizeValue = currentSizeValue;
      var sizeMultipliers = {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      };
      var multiplier = sizeMultipliers[currentSizeValue];

      if (multiplier !== undefined) {
        var newValue = currentLength * multiplier;
        inputX.value = newValue;
        inputX.dispatchEvent(new Event("input"));

        switch (currentSizeValue) {
          case "mini":
            inputY.value = 4;
            break;
          case "extrasmall":
            inputY.value = 4.5;
            break;
          case "small":
            inputY.value = 6;
            break;
          case "medium":
            inputY.value = 7;
            break;
          case "large":
            inputY.value = 8.5;
            break;
          case "xlarge":
            inputY.value = 10.5;
            break;
          case "xxlarge":
            inputY.value = 14.5;
            break;
          case "supersized":
            inputY.value = 19;
            break;
          default:
            console.warn("Unknown size:", currentSizeValue);
        }
        inputY.dispatchEvent(new Event("input"));
      } else {
        console.warn("Invalid size value:", currentSizeValue);
      }
      inputX.disabled = true;
      inputY.disabled = true;
    } //Function End
  } //Amsterdam
  else if (fontElement.value == "MARQUEE") {
    function updateMarquee(currentSizeValue) {
      var currentLength = textInput.value.length;
      sizeValue = currentSizeValue;
      var sizeMultipliers = {
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      };
      var multiplier = sizeMultipliers[currentSizeValue];

      if (multiplier !== undefined) {
        var newValue = currentLength * multiplier;
        inputX.value = newValue;
        inputX.dispatchEvent(new Event("input"));

        switch (currentSizeValue) {
          case "medium":
            inputY.value = 7.5;
            break;
          case "large":
            inputY.value = 9.5;
            break;
          case "xlarge":
            inputY.value = 12;
            break;
          case "xxlarge":
            inputY.value = 16;
            break;
          case "supersized":
            inputY.value = 21.5;
            break;
          default:
            console.warn("Unknown size:", currentSizeValue);
        }
        inputY.dispatchEvent(new Event("input"));
      } else {
        console.warn("Invalid size value:", currentSizeValue);
      }
    } //Function End
  } //MARQUEE
  else if (fontElement.value == "NeonRetro") {
    function updateNeonRetro(currentSizeValue) {
      inputX.disabled = false;
      inputY.disabled = false;
      var currentLength = textInput.value.length;
      sizeValue = currentSizeValue;
      var sizeMultipliers = {
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      };
      var multiplier = sizeMultipliers[currentSizeValue];

      if (multiplier !== undefined) {
        var newValue = currentLength * multiplier;
        inputX.value = newValue;
        inputX.dispatchEvent(new Event("input"));

        switch (currentSizeValue) {
          case "medium":
            inputY.value = 4.5;
            break;
          case "large":
            inputY.value = 6;
            break;
          case "xlarge":
            inputY.value = 7.5;
            break;
          case "xxlarge":
            inputY.value = 10;
            break;
          case "supersized":
            inputY.value = 13;
            break;
          default:
            console.warn("Unknown size:", currentSizeValue);
        }
        inputY.dispatchEvent(new Event("input"));
      } else {
        console.warn("Invalid size value:", currentSizeValue);
      }
      inputX.disabled = true;
      inputY.disabled = true;
    } //Function End
  } //NeonRetro
  else if (fontElement.value == "Typewriter") {
    function updateTypewriter(currentSizeValue) {
      inputX.disabled = false;
      inputY.disabled = false;
      var currentLength = textInput.value.length;
      sizeValue = currentSizeValue;
      var sizeMultipliers = {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      };
      var multiplier = sizeMultipliers[currentSizeValue];

      if (multiplier !== undefined) {
        var newValue = currentLength * multiplier;
        inputX.value = newValue;
        inputX.dispatchEvent(new Event("input"));

        switch (currentSizeValue) {
          case "mini":
            inputY.value = 2.5;
            break;
          case "extrasmall":
            inputY.value = 3.5;
            break;
          case "small":
            inputY.value = 4.5;
            break;
          case "medium":
            inputY.value = 5.5;
            break;
          case "large":
            inputY.value = 6.5;
            break;
          case "xlarge":
            inputY.value = 8;
            break;
          case "xxlarge":
            inputY.value = 11;
            break;
          case "supersized":
            inputY.value = 19;
            break;
          default:
            console.warn("Unknown size:", currentSizeValue);
        }
        inputY.dispatchEvent(new Event("input"));
      } else {
        console.warn("Invalid size value:", currentSizeValue);
      }
      inputX.disabled = true;
      inputY.disabled = true;
    } //Function End
  } //Typewriter
  else if (fontElement.value == "Avante") {
    function updateAvante(currentSizeValue) {
      inputX.disabled = false;
      inputY.disabled = false;
      var currentLength = textInput.value.length;
      sizeValue = currentSizeValue;
      var sizeMultipliers = {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      };
      var multiplier = sizeMultipliers[currentSizeValue];

      if (multiplier !== undefined) {
        var newValue = currentLength * multiplier;
        inputX.value = newValue;
        inputX.dispatchEvent(new Event("input"));

        switch (currentSizeValue) {
          case "mini":
            inputY.value = 3;
            break;
          case "extrasmall":
            inputY.value = 4;
            break;
          case "small":
            inputY.value = 5.5;
            break;
          case "medium":
            inputY.value = 6;
            break;
          case "large":
            inputY.value = 7.5;
            break;
          case "xlarge":
            inputY.value = 9;
            break;
          case "xxlarge":
            inputY.value = 12;
            break;
          case "supersized":
            inputY.value = 16.5;
            break;
          default:
            console.warn("Unknown size:", currentSizeValue);
        }
        inputY.dispatchEvent(new Event("input"));
      } else {
        console.warn("Invalid size value:", currentSizeValue);
      }
      inputX.disabled = true;
      inputY.disabled = true;
    } //Function End
  } //Avante
  else if (fontElement.value == "Barcelona") {
    function updateBarcelona(currentSizeValue) {
      inputX.disabled = false;
      inputY.disabled = false;
      var currentLength = textInput.value.length;
      sizeValue = currentSizeValue;
      var sizeMultipliers = {
        mini: 2,
        extrasmall: 2.5,
        small: 3,
        medium: 4,
        large: 5,
        xlarge: 6,
        xxlarge: 8,
        supersized: 11,
      };
      var multiplier = sizeMultipliers[currentSizeValue];

      if (multiplier !== undefined) {
        var newValue = currentLength * multiplier;
        inputX.value = newValue;
        inputX.dispatchEvent(new Event("input"));

        switch (currentSizeValue) {
          case "mini":
            inputY.value = 5;
            break;
          case "extrasmall":
            inputY.value = 6;
            break;
          case "small":
            inputY.value = 7.5;
            break;
          case "medium":
            inputY.value = 9;
            break;
          case "large":
            inputY.value = 11.5;
            break;
          case "xlarge":
            inputY.value = 14.5;
            break;
          case "xxlarge":
            inputY.value = 19.5;
            break;
          case "supersized":
            inputY.value = 26;
            break;
          default:
            console.warn("Unknown size:", currentSizeValue);
        }
        inputY.dispatchEvent(new Event("input"));
      } else {
        console.warn("Invalid size value:", currentSizeValue);
      }
      inputX.disabled = true;
      inputY.disabled = true;
    } //Function End
  } //Barcelona

  console.log("test");

  const updateMap = {
    sizeAlexa: updateAlexa,
    sizeAmsterdam: updateAmsterdam,
    sizeMarquee: updateMarquee,
    sizeNeonRetro: updateNeonRetro,
    sizeTypewriter: updateTypewriter,
    sizeAvante: updateAvante,
    sizeBarcelona: updateBarcelona,
  };

  if (updateMap[option.name]) {
    console.log("updateMap test");
    setTimeout(updateMap[option.name], 0, option.value);
  }

  if (option.name === "text") {
    console.log("test new text input");
    const fontMap = {
      Alexander: "sizeAlexa",
      Amsterdam: "sizeAmsterdam",
      MARQUEE: "sizeMarquee",
      NeonRetro: "sizeNeonRetro",
      Typewriter: "sizeTypewriter",
      Avante: "sizeAvante",
      Barcelona: "sizeBarcelona",
    };

    const updateMap = {
      Alexander: updateAlexa,
      Amsterdam: updateAmsterdam,
      MARQUEE: updateMarquee,
      NeonRetro: updateNeonRetro,
      Typewriter: updateTypewriter,
      Avante: updateAvante,
      Barcelona: updateBarcelona,
    };

    const fontName = fontElement.value;
    const sizeValue = document.querySelector(
      `input[name="properties[${fontMap[fontName]}]"]:checked`
    ).value;

    timeoutId = setTimeout(updateMap[fontName], 0, sizeValue);
  }

  textInput.addEventListener("input", function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null; // Reset the reference
    }
  });
});
