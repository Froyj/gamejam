
export const scenario = [
  // A LA FIN DU CHAPITRE 1 SOIT :
  //  PLUS DE 60 DE VIE ET PLUS DE 60 DE FUEL
  //  PLUS DE 60 DE VIE ET MOINS DE 60 DE FUEL
  //  MOINS DE 60 PV 
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
            gaugeType: null,
            mod: null,
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
      // event.id = 0 ==> le point de depart si on s'est crash
      {
        id: 0,
        text: "Vous reprenez péniblement vos esprits, votre vaisseau n'est que faiblement endommagé, cependant vous vous êtes blessé pendant le crash.",
        img: "/assets/PlanetLanding.png",
        location: "Coordonnées inconnues sur NH-781",
        answers: [
          {
            text: "Regarder les informations fournies par votre vaisseau",
            gaugeType: "contamination",
            mod: 10,
            nextEvent: 2
          },
        ]
      },
      {
        id: 2,
        text: "Après avoir regardé les indicateurs Tout indique que l'atmosphère à l'air respirable. Tout à coup vous apercevez une personne en combinaison qui s'approche",
        img: "/assets/FirstContact.png",
        location: "Coordonnées inconnues sur NH-781",
        answers: [
          {
            text: "Se cacher",
            gaugeType: null,
            mod: null,
            nextEvent: 6
          },
          {
            text: "Rester dans le vaisseau",
            gaugeType: "health",
            mod: 20,
            nextEvent: 4
          }
        ]
      },
      {
        id: 4,
        text: "Une personne s'approche du vaisseau et ouvre le cockpit, elle vous regarde longuement jusqu'au moment ou elle vous injecte une mysterieuse substance au moyen d'une seringue",
        img: "/assets/Sirynge.png",
        location: "Coordonnées inconnues sur NH-781",
        answers: [
          {
            text: "Vous vous évanouissez",
            gaugeType: "health",
            mod: 20,
            nextEvent: 8
          },
        ]
      },
      {
        id: 6,
        text: "Vous vous extirpez de votre vaisseau sans que l'inconnu ne vous repère au prix d'une douleur violente",
        img: "/assets/CrashPain.png",
        location: "Coordonnées inconnues sur NH-781",
        answers: [
          {
            text: "Vous restez cachés un long moment, jusqu'à ce que ou l'inconnu se désinteresse de votre vaisseau",
            gaugeType: null,
            mod: null,
            nextEvent: 10
          },
        ]
      },
      {
        id: 8,
        text: "Vous reprenez connaissance doucement, vous ne savez pas ou vous vous trouvez mais la blessure provoqué par le crash semble moins vous faire souffrir",
        img: "/assets/game_background_2.png",
        location: "Une habitation sur NH-781",
        answers: [
          {
            text: "Vous inspectez la pièce",
            gaugeType: null,
            mod: null,
            nextEvent: 10
          },
        ]
      },
      {
        id: 10,
        text: "En regardant autour de vous, vous vous apercevez soudainement que quelqu'un est assis à côté de vous, ce qui vous fait sursauter",
        img: "/assets/Jackilyn.png",
        location: "Une habitation sur NH-781",
        answers: [
          {
            text: "Qui êtes-vous ?",
            gaugeType: null,
            mod: null,
            nextEvent: 12
          },
          {
            text: "Rester silencieux",
            gaugeType: null,
            mod: null,
            nextEvent: 12
          },
        ]
      },
      {
        id: 12,
        text: "Bonjour, Je suis Jackilyn. Je vous ai trouvé après le crash de votre vaisseau. J'ai peur que vous soyez infecté par le virus qui s'est répandu ces dernières semaines. Une maladie d'origine inconnue a sévi ici, et a décimé la population, nous ne sommes plus qu'une dizaine sur les milliers qui vivaient ici",
        img: "/assets/JackilynTalking.png",
        location: "Une habitation sur NH-781",
        answers: [
          {
            text: "Continuer d'écouter",
            gaugeType: null,
            mod: null,
            nextEvent: 14
          },
        ]
      },
      {
        id: 14,
        text: "Apres moults explications, vous comprenez que suite à une invasion d'écureuils la maladie s'est rapidement répandue",
        img: "/assets/JackilynTalking.png",
        location: "Une habitation sur NH-781",
        answers: [
          {
            text: "Vous decidez d'aller inspecter la forêt pour trouver l'origine de l'épidémie. Vous vous mettez en route",
            gaugeType: "contamination",
            mod: 10,
            nextEvent: 18
          },
          {
            text: "Vous continuez de l'écouter",
            gaugeType: "contamination",
            mod: 30,
            nextEvent: 16
          },
        ]
      },
      {
        id: 16,
        text: "Jackilyn commence à vous raconter ses anectotes de jeunesse, et rapidement vous sentez la vie vous quitter. A force d'attendre ici l'infection se répand",
        img: "/assets/JackilynTalking.png",
        location: "Une habitation sur NH-781",
        answers: [
          {
            text: "Vous décidez d'enfiler ",
            gaugeType: "contamination",
            mod: 10,
            nextEvent: 16
          },
        ]
      },
      {
        id: 18,
        text: "Apres quelques heures de marche vous atteignez enfin la forêt ou tout a commencé",
        img: "/assets/Cartoon_Forest_BG_01.png",
        location: "Une habitation sur NH-781",
        answers: [
          {
            text: "Vous decidez d'aller inspecter la forêt pour trouver l'origine de l'épidémie",
            gaugeType: "contamination",
            mod: 10,
            nextEvent: 16
          },
          {
            text: "Vous decidez d'aller inspecter la forêt pour trouver l'origine de l'épidémie",
            gaugeType: "contamination",
            mod: 10,
            nextEvent: 18
          },
        ]
      },
      // event.id = 1 ==> le point de depart si on a atterri en douceur
      {
        id: 1,
        text: "Après avoir atterri dans une zone degagée, vous sortez sur la planête NH-781. Vous détectez au loin un signal",
        img: "/assets/FirstSignal.png",
        location: "Sur NH-781",
        answers: [
          {
            text: "Enfiler la combinaison",
            gaugeType: null,
            mod: null,
            nextEvent: 3
          },
          {
            text: "Sortir sans la combinaison",
            gaugeType: "virus",
            mod: 10,
            nextEvent: 3
          },
        ]
      },
      {
        id: 3,
        text: "Une bouche de métro est à quelques pas.",
        img: "/assets/City1.png",
        location: "Grande rue, ville déserte",
        answers: [
          {
            text: "Explorer la station",
            gaugeType: "oxygen",
            mod: -5,
            nextEvent: 5
          },
          {
            text: "Aller ailleurs",
            gaugeType: null,
            mod: null,
            nextEvent: 21
          },
        ]
      },
      {
        id: 5,
        text: "Vous descendez les marches, un fracas au loin se fait entendre, sur les rails du métro plonger dans la pénombre.",
        img: "/assets/postapocalypse4.png",
        location: "Quai de la station",
        answers: [
          {
            text: "Chercher la source du bruit",
            gaugeType: null,
            mod: null,
            nextEvent: 7
          },
          {
            text: "Fouiller le quai de la station",
            gaugeType: null,
            mod: null,
            nextEvent: 11
          },
        ]
      },
      {
        id: 7,
        text: "Vous vous rapprocher de l'agitation. Vous attrapez une page de journal volante, en rouge sont notés les mots: THE END IS NEAR",
        img: "/assests/RedPaper.png",
        location: "Le tunnel",
        answers: [
          {
            text: "Fuir",
            gaugeType: null,
            mod: null,
            nextEvent: 11
          },
          {
            text: "Continuer d'avancer",
            gaugeType: "health",
            mod: -5,
            nextEvent: 9
          },
        ]
      },
      {
        id: 9,
        text: "Une ombre derrière un wagon accidenté attire votre oeil. Vous le contournez et découvrez un drap flottant entourant un campement abandonné.",
        img: "/assets/postapocalypse4.png",
        location: "Le tunnel",
        answers: [
          {
            text: "Ne rien toucher et repartir",
            gaugeType: null,
            mod: null,
            nextEvent: 11
          },
          {
            text: "Fouiller les affaires et revenir sur le quai",
            gaugeType: "health",
            mod: 15,
            nextEvent: 11
          },
        ]
      },
      {
        id: 11,
        text: "Vous observez le quai. Une porte du personnel est entrouverte, vous fouillez cette pièce et trouvez des seringues usagées. Il n'y a rien d'autre à voir ici.",
        img: "/assets/Syringe-Underground.png",
        location: "Quai de la station",
        answers: [
          {
            text: "Retourner dans la rue",
            gaugeType: null,
            mod: null,
            nextEvent: 21
          },
          {
            text: "Lire les composants de la seringue",
            gaugeType: "virus",
            mod: 10,
            nextEvent: 13
          },
        ]
      },
      {
        id: 13,
        text: "A BASE DE MOLECULES DE WCS-33 ET DE ZESPLIOL",
        img: "/assets/Syringe-Underground-Notice.png",
        location: "Quai de la station",
        answers: [
          {
            text: "Retourner dans la rue",
            gaugeType: null,
            mod: null,
            nextEvent: 21
          },
        ]
      },
      {
        id: 21,
        text: "Vous voyez au loin un bâtiment qui ressemble à une station essence",
        img: "/assets/Petrol-Station.png",
        location: "Grande Rue",
        answers: [
          {
            text: "Ignorer et s'enfoncer dans la ville",
            gaugeType: null,
            mod: null,
            nextEvent: 31
          },
          {
            text: "Se diriger vers le bâtiment",
            gaugeType: "health",
            mod: -5,
            nextEvent: 23
          }
        ]
      },
      {
        id: 23,
        text: "Une fois à la station, vous constatez qu'il y a des pompes à essence mais elles sont vides.",
        img: "/assets/Petrol-Station.png",
        location: "Station essence",
        answers: [
          {
            text: "Vous retournez dans la rue",
            gaugeType: null,
            mod: null,
            nextEvent: 41
          },
          {
            text: "Explorer le bâtiment",
            gaugeType: health,
            mod: -5,
            nextEvent: 25
          }
        ]
      },
      
      {
        id: 25,
        text: "A l'intérieur du bâtiment vous trouvez un tube en plastique sur le sol",
        img: "/assets/Petrol-Station-Tube.png",
        location: "Station essence",
        answers: [
          {
            text: "Ne pas ramasser et retourner dans la rue",
            gaugeType: health,
            mod: -5,
            nextEvent: 31
          },
          {
            text: "Ramasser",
            gaugeType: null,
            mod: null,
            nextEvent: 27
          }
        ]
      },
      {
      id: 10,
      text: "Il s'agit d'un tube pour syphonner les voitures. Vous testez plusieurs voitures, elles sont à sec.",
      img: "/assets/Petrol-Station-Tube.png",
      location: "Station essence",
      answers: [
        {
          text: "Continuer ?",
          gaugeType: "fuel",
          mod: 20,
          nextEvent: 31
        },
        {
          text: "Tant pis revenir dans la rue",
          gaugeType: null,
          mod: null,
          nextEvent: 31
        }
      ]
    },
      {
        id: 31,
        text: "Quelques rues plus loin, vous remarquez une école primaire délabrée dont le mur ébréché permet une intrusion.",
        img: "/assets/War.png",
        location: "Avenue détruite",
        answers: [
          {
            text: "Retourner au vaisseau",
            gaugeType: null,
            mod: null,
            nextEvent: 51
          },
          {
            text: "Entrer dans l'école",
            gaugeType: "health",
            mod: -5,
            nextEvent: 33
          }
        ]
      },
      {
        id: 33,
        text: "La salle de classe est couverte de poussière et de déchets. Une étrange boite scellée est posée sur une table au centre de la pièce.",
        img: "/assets/box-school.png",
        location: "Salle de classe",
        answers: [
          {
            text: "L'ouvrir",
            gaugeType: "virus",
            mod: 10,
            nextEvent: 35
          },
          {
            text: "Déguerpir",
            gaugeType: null,
            mod: null,
            nextEvent: 51
          }
        ]
      },
      {
        id: 35,
        text: "La boite est vide, mais une odeur inconnue s'en dégage. Vous sentez votre tête tourner.",
        img: "/assets/box-school-open.png",
        location: "Salle de classe",
        answers: [
          {
            text: "Rentrer au vaisseau",
            gaugeType: null,
            mod: null,
            nextEvent: 51
          },
          {
            text: "Continuer l'exploration",
            gaugeType: "virus",
            mod: 10,
            nextEvent: 37
          }
        ]
      },
      {
        id: 37,
        text: "Vous entrez dans un couloir mais vous peinez à avancer tant l'odeur persiste. Deux portes se trouvent au fond de ce couloir.",
        img: "/assets/doors-school.png",
        location: "Couloir de l'école",
        answers: [
          {
            text: "Entrer dans la porte 1",
            gaugeType: "health",
            mod: -5,
            nextEvent: 41
          },
          {
            text: "Entrer dans la porte 2",
            gaugeType: "virus",
            mod: 5,
            nextEvent: 39
          }
        ]
      },
      {
        id: 41,
        text: "L'odeur se dissipe et vous reprenez vos esprits. Vous trouvez une note manuscrite presque illisible, vous parvenez à déchiffrer les lettres B, K, R.",
        img: "/assets/doors-school-1.png",
        location: "Porte 1 dans l'école",
        answers: [
          {
            text: "Retourner au vaisseau",
            gaugeType: null,
            mod: null,
            nextEvent: 51
          },
        ]
      },
      {
        id: 39,
        text: "C'est un cul-de-sac, l'odeur se fait de plus en plus entêtante, vous manquez de vous évanouir, vous ne pouvez rester plus longtemps ici.",
        img: "/assets/doors-school-2.png",
        location: "Porte 2 dans l'école",
        answers: [
          {
            text: "Entrer tout de même dans la porte 1",
            gaugeType: "health",
            mod: -5,
            nextEvent: 41
          },
          {
            text: "Fuir",
            gaugeType: "virus",
            mod: 5,
            nextEvent: 51
          }
        ]
      },
    ]
  },
]