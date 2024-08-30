const formulas = {
  Alexander: "alexaFormula",         // 1
  Amsterdam: "amsterdamFormula",     // 2
  Avante: "avanteFormula",           // 3
  Barcelona: "barcelonaFormula",     // 4
  Buttercup: "buttercupFormula",     // 5
  Chelsea: "chelseaFormula",         // 6
  ClassicType: "classictypeFormula", // 7
  Freespirit: "freespiritFormula",   // 8
  Freehand: "freehandFormula",       // 9
  Greenworld: "greenworldFormula",   // 10
  LOVENEON: "loveneonFormula",       // 11
  MARQUEE: "marqueeFormula",         // 12
  Mayfair: "mayfairFormula",         // 13
  Melbourne: "melbourneFormula",     // 14
  NeonGlow: "neonglowFormula",       // 15
  NeonRetro: "neonretroFormula",     // 16
  NeonScript: "neonscriptFormula",   // 17
  Neontrace: "neontraceFormula",     // 18
  NeoTokyo: "neotokyoFormula",       // 19
  Nevada: "nevadaFormula",           // 20
  NorthShore: "northshoreFormula",   // 21
  Photogenic: "photogenicFormula",   // 22
  SCIFI: "scifiFormula",             // 23
  Sorrento: "sorrentoFormula",       // 24
  Typewriter: "typewriterFormula",   // 25
  Waikiki: "waikikiFormula",         // 26
  WildScript: "wildscriptFormula",   // 27
};

const font = options.value("font");
const finalvalue = options.value(formulas[font]);

return finalvalue;
