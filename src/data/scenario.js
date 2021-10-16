
const chapters = [
  {
    id: 1,
    name: "The beginning",
    event: [
      {
        id: 1,
        text: "Vous vous approchez de la planète NH-781. Voulez-vous tenter de les contacter ?",
        img: "",
        location: "A bord du vaisseau",
        endOfChapter: false,
        answers: [
          {
            text: "Oui",
            gaugeType: "fuel",
            mod: -5,
            nextEvent: 2
          },
          {
            text: "Non",
            gaugeType: "fuel",
            mod: -5,
            nextEvent: 2
          }
        ]
      },
      {
        id: 2,
        text: "Pas de réponses, voulez vous retenter votre chance ?",
        img: "",
        location: "",
        answers: [
          {
            id: 2.1,
            text: "Insister",
            gaugeType: "health",
            mod: 20,
          }, {
            id: 2.2,
            text: "Continuer de survoler la zone en cherchant des indices",
            gaugeType: "fuel",
            mod: -10,
          }]
      },
      {
        id: 3,
        text: "...",
        img: "",
        location: "",
        answers: [
          {
            id: 3.1,
            text: "...",
            gaugeType: "oxygen",
            mod: -30,
          }, {
            id: 3.2,
            text: "...",
            gaugeType: "health",
            mod: 0,
          }]
      }
    ]
  },
]