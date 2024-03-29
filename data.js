var APP_DATA = {
  "scenes": [
    {
      "id": "0-hall-dentre",
      "name": "Hall d'entrée",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.485552669608735,
          "pitch": 0.18496902838578677,
          "rotation": 0,
          "target": "1-espace-dtente"
        },
        {
          "yaw": -3.0960623996161374,
          "pitch": 0.05753399501223555,
          "rotation": 0,
          "target": "2-salle-de-runion"
        },
        {
          "yaw": -2.3234511131116253,
          "pitch": -0.69474856250811,
          "rotation": 0,
          "target": "3-zone-de-travail"
        },
        {
          "yaw": -2.6337115217379363,
          "pitch": -0.16341584615472016,
          "rotation": 0,
          "target": "4-filet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-espace-dtente",
      "name": "Espace détente",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0436884936368056,
          "pitch": -0.5601441850230486,
          "rotation": 0,
          "target": "4-filet"
        },
        {
          "yaw": -1.16382268821242,
          "pitch": 0.2172383378067213,
          "rotation": 0,
          "target": "2-salle-de-runion"
        },
        {
          "yaw": -2.726268268462677,
          "pitch": 0.1678258211294512,
          "rotation": 0,
          "target": "0-hall-dentre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-salle-de-runion",
      "name": "Salle de réunion",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.17585255813047773,
          "pitch": 0.13523963044345777,
          "rotation": 0,
          "target": "0-hall-dentre"
        },
        {
          "yaw": -1.1973506472324367,
          "pitch": 0.2617587864554487,
          "rotation": 0,
          "target": "1-espace-dtente"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-zone-de-travail",
      "name": "Zone de travail",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7220685153724284,
          "pitch": 0.285315413006737,
          "rotation": 0,
          "target": "4-filet"
        },
        {
          "yaw": -0.10751730997042763,
          "pitch": 0.7599483074499016,
          "rotation": 0,
          "target": "0-hall-dentre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-filet",
      "name": "Filet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2496844044032347,
          "pitch": 0.17371427071913104,
          "rotation": 0,
          "target": "3-zone-de-travail"
        },
        {
          "yaw": -0.2974899545778271,
          "pitch": 1.0359378756094486,
          "rotation": 0,
          "target": "1-espace-dtente"
        },
        {
          "yaw": 0.024181315699030037,
          "pitch": 0.38277522833031163,
          "rotation": 0,
          "target": "0-hall-dentre"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BONTOUX-BUREAUX",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
