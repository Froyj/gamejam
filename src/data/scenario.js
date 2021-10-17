
export const scenario = [
  {
    id: 0,
    name: "The beginning",
    events: [
      {
        id: 0,
        text: "Vous vous approchez de la planète NH-781. Voulez-vous tenter de les contacter ?",
        img: "/assets/radio.jpg",
        location: "A bord du vaisseau",
        answers: [
          {
            text: "Oui",
            gaugeType: "fuel",
            mod: -2,
            nextEvent: 2
          },
          {
            text: "Non",
            gaugeType: "fuel",
            mod: -2,
            nextEvent: 1
          }
        ]
      },
      {
        id: 1,
        text: "L'IA de votre vaisseau vous rappelle que le but de la mission est de comprendre ce qui s'est passé sur cette colonie. Voulez-vous tenter de les contacter ?",
        img: "/assets/hal.png",
        location: "A bord du vaisseau",
        answers: [
          {
            text: "Oui",
            gaugeType: "fuel",
            mod: -2,
            nextEvent: 2
          },
          {
            text: "Non",
            gaugeType: "fuel",
            mod: -5,
            nextEvent: 1
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
        img: "/assets/radio.jpg",
        location: "A bord du vaisseau",
        answers: [
          {
            text: "Tenter d'atterrir par ici",
            gaugeType: null, // si on veut pas modifier la jauge
            mod: -5,
            nextEvent: 5
          }, {
            text: "Continuer de survoler la zone",
            gaugeType: "fuel",
            mod: -15,
            nextEvent: 4
          }]
      },
      {
        id: 4,
        text: "Au bout de quelques minutes de survol de la zone, vous finissez par recevoir un signal émis par une balise de détresse",
        img: "/assets/balisededetresse.png",
        location: "A bord du vaisseau",
        answers: [
          {
            id: 3.1,
            text: "Atterrir ici",
            gaugeType: "oxygen",
            mod: -30,
            nextEvent: 7
          }, {
            id: 3.2,
            text: "...",
            gaugeType: "health",
            mod: 0,
            nextEvent: 6
          }]
      },
      {
        id: 5,
        text: "Un tir ennemi vous frole de peu !",
        img: "/assets/missile.png",
        location: "A bord du vaisseau",
        answers: [
          {
            id: 3.1,
            text: "Tenter une manoeuvre d'evitement",
            gaugeType: "health",
            mod: -50,
            nextEvent: 6
          }, {
            id: 3.2,
            text: "Scanner la zone",
            gaugeType: "health",
            mod: -50,
            nextEvent: 6
          }]
      },
      {
        id: 6,
        text: "Avant que vous n'arriviez à réagir, un tir de canon vous heurte de plein fouet.",
        img: "/assets/explosion.png",
        location: "A bord du vaisseau",
        endOfChapter: true, // si fin de chapitre
        answers: [
          {
            link: "/chapter2", // alors mettre le lien vers le prochain chapitre 
            text: "Vous perdez connaissance...",
            gaugeType: "health",
            mod: -50,
          }]
      },
      {
        id: 7,
        text: "Vous amorcez votre descente vers NH-781.",
        img: "/assets/PlanetNH-781.png",
        location: "A bord du vaisseau",
        endOfChapter: true,
        answers: [
          {
            link: "/chapter2",
            text: "Vous laissez le pilote automatique prendre le relais et profitez de vos derniers instants de repis",
            gaugeType: "fuel",
            mod: -30,
          }]
      },
    ]
  },
  {
    id: 1,
    name: "Premier contact",
    events: [
      {
        id: 0,
        text: "Vous reprenez péniblement vos esprits",
        img: "/assets/radio.jpg",
        location: "",
        endOfChapter: false,
        answers: [
          {
            text: "Oui",
            gaugeType: "fuel",
            mod: -2,
            nextEvent: 2
          },
          {
            text: "Non",
            gaugeType: "fuel",
            mod: -2,
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
            mod: -2,
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
            text: "Tenter d'atterrir par ici",
            gaugeType: null,
            mod: -5,
            nextEvent: 5
          }, {
            text: "Continuer de survoler la zone",
            gaugeType: "fuel",
            mod: -15,
            nextEvent: 4
          }]
      },
    ]
  },
]