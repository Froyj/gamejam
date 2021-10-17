
export const scenario = [
  {
    id: 1,
    name: "The beginning",
    event: [
      {
        id: 0,
        text: "Vous vous approchez de la planète NH-781. Voulez-vous tenter de les contacter ?",
        img: "/assets/radio.jpg",
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
            nextEvent: 0
          }
        ]
      },
      {
        id: 1,
        text: "L'IA de votre vaisseau vous rappelle que le but de la mission est de comprendre ce qui s'est passé sur cette colonie. Voulez-vous tenter de les contacter ?",
        img: "/assets/hal.png",
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
            nextEvent: 0
          }
        ]
      },
      {
        id: 2,
        text: "Pas de réponses, voulez vous retenter votre chance ?",
        img: "/assets/radio.jpg",
        location: "A bord du vaisseau",
        answers: [
          {
            text: "Insister",
            gaugeType: "fuel",
            mod: -5,
            nextEvent: 3
          }, {
            text: "Continuer de survoler la zone en cherchant des indices",
            gaugeType: "fuel",
            mod: -10,
            nextEvent: 4
          }]
      },
      {
        id: 3,
        text: "Le bruissement de fond émis par la radio semble s'interrompre et vous avez l'impression d'entendre quelqu'un respirer mais personne ne s'exprime",
        img: "",
        location: "A bord du vaisseau",
        answers: [
          {
            id: 3.1,
            text: "Tenter d'atterrir par ici",
            gaugeType: null,
            mod: -5,
          }, {
            id: 3.2,
            text: "Continuer de survoler la zone",
            gaugeType: "fuel",
            mod: -15,
          }]
      },
      {
        id: 4,
        text: "Au bout de quelques minutes de survol de la zone, vous finissez par recevoir un signal émis par une balise de détresse",
        img: "",
        location: "A bord du vaisseau",
        answers: [
          {
            id: 3.1,
            text: "Atterrir ici",
            gaugeType: "oxygen",
            mod: -30,
          }, {
            id: 3.2,
            text: "...",
            gaugeType: "health",
            mod: 0,
          }]
      },
    ]
  },
]