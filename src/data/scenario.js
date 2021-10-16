
const chapters = [
  {
    id: 1,
    event: [
      {
        id: 1,
        text: "Vous vous approchez de la planète NH-781. Voulez-vous tenter de les contacter ?",
        img: "",
        location: "A bord du vaisseau",
        answers: [
          {
            id: 1.1,
            text: "Oui",
            gaugeType: "fuel",
            mod: -5
          },
          {
            id: 1.2,
            text: "Non",
            gaugeType: "fuel",
            mod: -5
          }
        ]
      },
      {
        id: 2,
        text: "",
        img: "",
        location: "",
        answers: [
          {
            id: 2.1,
            text: "...",
            gaugeType: "health",
            mod: 20,
          }, {
            id: 2.2,
            text: "...",
            gaugeType: "health",
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