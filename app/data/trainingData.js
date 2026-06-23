export const races = [
  {
    id: "midnattsloppet",
    name: "Midnattsloppet Stockholm",
    date: "2026-08-15",
    distance: "10 km",
    icon: "🏃",
    color: "#FF6B35",
    description: "Stockholms ikoniska nattlopp genom city",
    tips: [
      "Värm upp 15–20 min innan start",
      "Starta lugnt – första 3 km ska kännas lätt",
      "Drick vid alla vätskestationer",
      "Pusha de sista 2 km när du vet att du klarar det"
    ]
  },
  {
    id: "vansbro",
    name: "Vansbrosimmet",
    date: "2027-07-06",
    distance: "1 km",
    icon: "🏊",
    color: "#00B4D8",
    description: "Simning 1 km i Vanån",
    tips: [
      "Crawl är mest effektivt – satsa på tekniken",
      "Öva öppet vatten innan – pool och sjö skiljer sig",
      "Andas varannan eller var tredje tag",
      "Våtdräkt rekommenderas vid kallt vatten"
    ]
  },
  {
    id: "lidingo",
    name: "Lidingöloppet",
    date: "2027-09-27",
    distance: "30 km",
    icon: "🏔️",
    color: "#2D6A4F",
    description: "30 km terränglöpning på Lidingö",
    tips: [
      "Terräng kräver starkare anklar – träna på ojämnt underlag",
      "Gå uppförsbackarna, spring nedförsbackarna",
      "Energigel efter 15 km",
      "Träna på 25+ km långa pass minst 3 ggr innan"
    ]
  },
  {
    id: "vasaloppet",
    name: "Vasaloppet",
    date: "2028-03-01",
    distance: "90 km",
    icon: "⛷️",
    color: "#4361EE",
    description: "Världens längsta skidlopp, 90 km",
    tips: [
      "Klassisk stil – börja lära dig tekniken tidigt",
      "Rullskidor på sommaren ger enorm fördel",
      "Nutrition är A och O – träna på att äta under rörelse",
      "Klä dig i lager – det blir varmt"
    ]
  },
  {
    id: "vatternrundan",
    name: "Vätternrundan",
    date: "2028-06-14",
    distance: "300 km",
    icon: "🚴",
    color: "#7B2D8B",
    description: "300 km cykling runt Vättern",
    tips: [
      "Sadelpositionen är kritisk – justera noggrant",
      "Bygg upp milen gradvis – öka 10% per vecka",
      "Träna på att äta och dricka på cykeln",
      "Nattcykling kräver bra belysning och vinterkläder"
    ]
  }
];

export const users = {
  user1: {
    id: "user1",
    name: "Anton",
    avatar: "🏃",
    races: ["midnattsloppet", "vansbro", "lidingo", "vasaloppet", "vatternrundan"],
    setup: true
  },
  user2: {
    id: "user2",
    name: "Peter",
    avatar: "💪",
    races: ["vansbro", "lidingo", "vasaloppet", "vatternrundan"],
    setup: false
  }
};

export const workoutTypes = {
  running: { label: "Löpning", color: "#FF6B35", icon: "🏃" },
  gym: { label: "Gym", color: "#E63946", icon: "💪" },
  swimming: { label: "Simning", color: "#00B4D8", icon: "🏊" },
  cycling: { label: "Cykling", color: "#7B2D8B", icon: "🚴" },
  rollerskis: { label: "Rullskidor", color: "#4361EE", icon: "⛷️" },
  mobility: { label: "Rörlighet", color: "#2D6A4F", icon: "🧘" },
  rest: { label: "Vila", color: "#6c757d", icon: "😴" }
};

export const trainingPlan = {

  // ─── FAS 1: GRUNDBYGGE ───────────────────────────────────────────────────────
  // Vecka 24 (9–15 jun 2026)
  "2026-W24": {
    monday: {
      type: "running",
      title: "Lätt löpning",
      duration: 40,
      detail: {
        distance: 5,
        pace: "Lugnt – ska kunna föra ett samtal",
        zone: "Pulszon 2 (60–70% max)",
        passType: "Grundpass",
        description: "Lätt joggingpass för att aktivera benen. Fokus på avslappnad löpstil.",
        warmup: "5 min promenad",
        cooldown: "5 min promenad + stretching"
      }
    },
    wednesday: {
      type: "gym",
      title: "Gympass – Underkropp & Core",
      duration: 60,
      detail: {
        passType: "Styrka",
        description: "Fokus på löparrelevant styrka. Inga tunga bänkpressar idag.",
        exercises: [
          { name: "Knäböj", sets: 3, reps: "12–15", note: "Kontrollerat, djupt" },
          { name: "Rumänsk marklyft", sets: 3, reps: "10–12", note: "Håll ryggen rak" },
          { name: "Utfall", sets: 3, reps: "10 per ben", note: "Alternerade" },
          { name: "Vadpress", sets: 3, reps: "20", note: "" },
          { name: "Planka", sets: 3, reps: "45 sek", note: "" },
          { name: "Höftlyft (glute bridge)", sets: 3, reps: "15", note: "Pressa upp ordentligt" },
          { name: "Sidoliggande benlyft", sets: 3, reps: "15 per sida", note: "Höftabduktorer" }
        ]
      }
    },
    friday: {
      type: "running",
      title: "Tempopass",
      duration: 45,
      detail: {
        distance: 6,
        pace: "Kontrollerat tempo – känns ansträngande men hållbart",
        zone: "Pulszon 3 (70–80% max)",
        passType: "Tempopass",
        description: "Värm upp 10 min, sedan 25 min i jämnt tempo, varv ned 10 min.",
        warmup: "10 min lätt jogg",
        cooldown: "10 min lätt jogg + stretching"
      }
    },
    sunday: {
      type: "running",
      title: "Långpass",
      duration: 70,
      detail: {
        distance: 8,
        pace: "Lugnt – hela vägen ska kännas kontrollerat",
        zone: "Pulszon 2 (60–70% max)",
        passType: "Långdistans",
        description: "Veckans viktigaste pass. Bygg uthållighet. Spring med en känsla av att du har mer kvar.",
        warmup: "5 min promenad",
        cooldown: "5 min promenad + lång stretching"
      }
    }
  },

  // Vecka 25 (16–22 jun 2026)
  "2026-W25": {
    tuesday: {
      type: "running",
      title: "Intervallpass",
      duration: 45,
      detail: {
        distance: 6,
        pace: "Hög intensitet på intervallerna, lugnt i vila",
        zone: "Pulszon 4–5 på intervaller",
        passType: "Intervallträning",
        description: "400m x 6 med 90 sek vila. Bygg fart och syreupptagning.",
        warmup: "10 min lätt jogg",
        cooldown: "10 min lätt jogg",
        intervals: "6 x 400m med 90 sek joggvila"
      }
    },
    thursday: {
      type: "gym",
      title: "Gympass – Överkropp & Core",
      duration: 55,
      detail: {
        passType: "Styrka",
        description: "Överkropp med fokus på rörlighetsvänliga övningar.",
        exercises: [
          { name: "Hantelpress (liggande)", sets: 3, reps: "12", note: "Kontrollerat" },
          { name: "Sittande rodd", sets: 3, reps: "12", note: "Håll axlarna nere" },
          { name: "Facepull", sets: 3, reps: "15", note: "Viktigt för hållning" },
          { name: "Bicepscurl", sets: 3, reps: "12", note: "" },
          { name: "Tåhävning med hantel", sets: 3, reps: "15", note: "" },
          { name: "Ryggextension", sets: 3, reps: "12", note: "" },
          { name: "Planka med rotation", sets: 3, reps: "10 per sida", note: "" }
        ]
      }
    },
    saturday: {
      type: "mobility",
      title: "Rörlighetspass",
      duration: 40,
      detail: {
        passType: "Rörlighet & återhämtning",
        description: "Yoga-inspirerat rörlighetspass. Fokus på höfter, hamstrings och rygg.",
        exercises: [
          { name: "Nedåtvänd hund", sets: 1, reps: "60 sek", note: "Andas djupt" },
          { name: "Lunge med rotation", sets: 1, reps: "8 per sida", note: "" },
          { name: "Sittsträck", sets: 1, reps: "60 sek per sida", note: "" },
          { name: "Piriformissträck (figur-4)", sets: 1, reps: "60 sek per sida", note: "Viktigt för löpare" },
          { name: "Kattkossa", sets: 1, reps: "10", note: "" },
          { name: "Bröstöppnare", sets: 1, reps: "8", note: "Mot stelheten från gym" },
          { name: "Höftvippa (liggande)", sets: 1, reps: "10 per sida", note: "" }
        ]
      }
    },
    sunday: {
      type: "running",
      title: "Långpass",
      duration: 80,
      detail: {
        distance: 9,
        pace: "Lugnt och kontrollerat",
        zone: "Pulszon 2",
        passType: "Långdistans",
        description: "Lite längre än förra veckan. Fokus på tid på benen, inte tempo.",
        warmup: "5 min promenad",
        cooldown: "Lång stretching efteråt"
      }
    }
  },

  // Vecka 26 (23–29 jun 2026)
  "2026-W26": {
    monday: {
      type: "running",
      title: "Lätt återhämtningsjogg",
      duration: 35,
      detail: {
        distance: 4,
        pace: "Mycket lugnt",
        zone: "Pulszon 1–2",
        passType: "Återhämtning",
        description: "Lätt pass för att hålla igång benen. Inget krav på tid eller tempo.",
        warmup: "Ingen särskild",
        cooldown: "Stretching"
      }
    },
    wednesday: {
      type: "gym",
      title: "Gympass – Underkropp & Core",
      duration: 55,
      detail: {
        passType: "Styrka",
        description: "Fokus på explosivitet och stabilitet.",
        exercises: [
          { name: "Hopputfall", sets: 3, reps: "8 per ben", note: "Explosivt" },
          { name: "Sumo knäböj", sets: 3, reps: "12", note: "" },
          { name: "Step-up på bänk", sets: 3, reps: "10 per ben", note: "" },
          { name: "Enbensdödlyft", sets: 3, reps: "10 per ben", note: "Balans och stabilitet" },
          { name: "Benpressmaskin", sets: 3, reps: "15", note: "Lätta vikter" },
          { name: "Planka sidoplanka", sets: 3, reps: "30 sek per sida", note: "" }
        ]
      }
    },
    friday: {
      type: "running",
      title: "Progressionslopp",
      duration: 50,
      detail: {
        distance: 7,
        pace: "Börja lugnt, avsluta snabbt",
        zone: "Börja pulszon 2, avsluta pulszon 4",
        passType: "Progressionslopp",
        description: "Starta i lugnt tempo, öka gradvis varje km. Sista 2 km på tävlingstempo.",
        warmup: "Ingår i upplöpningen",
        cooldown: "10 min lätt jogg"
      }
    },
    sunday: {
      type: "running",
      title: "Långpass – Tävlingsdistansen!",
      duration: 90,
      detail: {
        distance: 10,
        pace: "Lugnt och stabilt",
        zone: "Pulszon 2",
        passType: "Långdistans",
        description: "Tävlingsdistansen! Springa 10 km utan stress. Bekräfta att du klarar sträckan.",
        warmup: "5 min promenad",
        cooldown: "Lång stretching + eventuellt isbad"
      }
    }
  },

  // ─── FAS 2: VOLYMBYGGE ────────────────────────────────────────────────────────
  // Vecka 27 (30 jun–6 jul 2026)
  "2026-W27": {
    tuesday: {
      type: "running",
      title: "Intervallpass – 800m",
      duration: 50,
      detail: {
        distance: 7,
        pace: "Hårt på intervallerna, lugnt i vila",
        zone: "Pulszon 4–5 på intervaller",
        passType: "Intervallträning",
        description: "Längre intervaller den här veckan. Bygg upp syreupptagning och löpekonomi.",
        warmup: "10 min lätt jogg",
        cooldown: "10 min lätt jogg",
        intervals: "5 x 800m med 2 min joggvila"
      }
    },
    thursday: {
      type: "gym",
      title: "Gympass – Underkropp & Core",
      duration: 55,
      detail: {
        passType: "Styrka",
        description: "1 gympass per vecka framöver – fokus på underkropp och core som stödjer löpningen.",
        exercises: [
          { name: "Knäböj", sets: 4, reps: "10", note: "Lite tyngre än förut" },
          { name: "Rumänsk marklyft", sets: 3, reps: "10", note: "Kontrollerat" },
          { name: "Utfall med hantlar", sets: 3, reps: "10 per ben", note: "" },
          { name: "Höftlyft (glute bridge)", sets: 3, reps: "15", note: "Håll uppe 2 sek" },
          { name: "Vadpress stående", sets: 3, reps: "20", note: "Förebygger skador" },
          { name: "Planka", sets: 3, reps: "60 sek", note: "" },
          { name: "Rysk twist med medicinboll", sets: 3, reps: "15 per sida", note: "" }
        ]
      }
    },
    saturday: {
      type: "mobility",
      title: "Rörlighet & lätt cykling",
      duration: 50,
      detail: {
        passType: "Rörlighet & aktiv återhämtning",
        description: "20 min lätt cykling följt av 30 min rörlighet. Perfekt helgpass.",
        exercises: [
          { name: "Cykling lugnt tempo", sets: 1, reps: "20 min", note: "Pulszon 1–2" },
          { name: "Höftsträck liggande", sets: 1, reps: "60 sek per sida", note: "" },
          { name: "Hamstringsträck", sets: 1, reps: "60 sek per sida", note: "" },
          { name: "Vadstretching mot vägg", sets: 1, reps: "45 sek per sida", note: "Viktig för löpare" },
          { name: "Bröstkorg öppnare", sets: 1, reps: "10", note: "" },
          { name: "Höftvippa", sets: 1, reps: "10 per sida", note: "" }
        ]
      }
    },
    sunday: {
      type: "running",
      title: "Långpass",
      duration: 85,
      detail: {
        distance: 10,
        pace: "Lugnt och kontrollerat hela vägen",
        zone: "Pulszon 2",
        passType: "Långdistans",
        description: "Håll 10 km igen men känn att det sitter bättre än förra gången. Fokus på löpstil.",
        warmup: "5 min promenad",
        cooldown: "Stretching + skumroller"
      }
    }
  },

  // Vecka 28 (7–13 jul 2026)
  "2026-W28": {
    monday: {
      type: "running",
      title: "Tempopass – tröskelnivå",
      duration: 50,
      detail: {
        distance: 7,
        pace: "Ansträngande men kontrollerbart – precis under tävlingstempo",
        zone: "Pulszon 3–4",
        passType: "Tröskelpass",
        description: "20 min i tröskeltempo (precis under den gräns du kan hålla i 1 tim). Bygger löpfart.",
        warmup: "10 min lätt jogg",
        cooldown: "10 min lätt jogg + stretching",
        intervals: "20 min kontinuerligt tröskeltempo"
      }
    },
    wednesday: {
      type: "gym",
      title: "Gympass – Underkropp & Core",
      duration: 55,
      detail: {
        passType: "Styrka",
        description: "Fokus på enbensstyrka och rörlighet – viktigt för löpstabilitet.",
        exercises: [
          { name: "Enbensknäböj (pistol assist)", sets: 3, reps: "8 per ben", note: "Håll i rack om det behövs" },
          { name: "Steg-upp med hantlar", sets: 3, reps: "10 per ben", note: "Kontrollerat nedåt" },
          { name: "Sumo marklyft", sets: 3, reps: "10", note: "Medelvikter" },
          { name: "Höftabduktion maskin", sets: 3, reps: "15", note: "Förebygger löparknä" },
          { name: "Vadpress en fot i taget", sets: 3, reps: "15 per fot", note: "" },
          { name: "Hängande benlyft", sets: 3, reps: "12", note: "Core" },
          { name: "Pallof press", sets: 3, reps: "10 per sida", note: "Rotationsstabilitet" }
        ]
      }
    },
    friday: {
      type: "running",
      title: "Fartlek",
      duration: 45,
      detail: {
        distance: 7,
        pace: "Varierar – lugnt med korta explosiva spurtar",
        zone: "Blandad pulszon",
        passType: "Fartlek",
        description: "Fri intervallträning i naturen. Spring lugnt och lägg in 8–10 spurter på 20–30 sek när det känns rätt.",
        warmup: "10 min lugnt",
        cooldown: "10 min lugnt + stretching"
      }
    },
    sunday: {
      type: "running",
      title: "Långpass",
      duration: 90,
      detail: {
        distance: 11,
        pace: "Lugnt – prata-tempo hela vägen",
        zone: "Pulszon 2",
        passType: "Långdistans",
        description: "Pushar lite längre än tävlingsdistansen för att bygga marginal. Ta det lugnt!",
        warmup: "5 min promenad",
        cooldown: "Lång stretching"
      }
    }
  },

  // ─── FAS 3: TOPPNING ──────────────────────────────────────────────────────────
  // Vecka 29 (14–20 jul 2026)
  "2026-W29": {
    tuesday: {
      type: "running",
      title: "Intervallpass – 1000m",
      duration: 55,
      detail: {
        distance: 8,
        pace: "Hårt på intervallerna – tävlingsfart eller lite snabbare",
        zone: "Pulszon 4–5",
        passType: "Intervallträning",
        description: "Kilometer-intervaller bygger din tävlingsfart. Håll jämnt tempo på varje.",
        warmup: "10 min lätt jogg",
        cooldown: "10 min lätt jogg",
        intervals: "5 x 1000m med 90 sek vila"
      }
    },
    thursday: {
      type: "gym",
      title: "Gympass – Underkropp & Core",
      duration: 50,
      detail: {
        passType: "Styrka",
        description: "Lite lättare vecka i gymmet – fokus på kvalitet inte kvantitet.",
        exercises: [
          { name: "Knäböj", sets: 3, reps: "10", note: "Medelvikt" },
          { name: "Utfall gående", sets: 3, reps: "12 per ben", note: "Håll tempo" },
          { name: "Höftlyft med band", sets: 3, reps: "20", note: "Aktivera gluteus" },
          { name: "Enbensdödlyft", sets: 3, reps: "10 per ben", note: "Balans" },
          { name: "Planka", sets: 3, reps: "60 sek", note: "" },
          { name: "Vadpress", sets: 3, reps: "20", note: "" }
        ]
      }
    },
    saturday: {
      type: "mobility",
      title: "Rörlighetspass",
      duration: 40,
      detail: {
        passType: "Rörlighet & återhämtning",
        description: "Viktigt rörlighetspass mitt i toppningsfasen. Låt kroppen återhämta sig.",
        exercises: [
          { name: "Nedåtvänd hund", sets: 1, reps: "60 sek", note: "" },
          { name: "Pigeon pose", sets: 1, reps: "90 sek per sida", note: "Djup höftsträck" },
          { name: "Hamstringsträck liggande", sets: 1, reps: "60 sek per sida", note: "" },
          { name: "Ryggrotation liggande", sets: 1, reps: "10 per sida", note: "" },
          { name: "Vadstretching", sets: 1, reps: "60 sek per sida", note: "" },
          { name: "Nackrullningar", sets: 1, reps: "10 vardera håll", note: "" }
        ]
      }
    },
    sunday: {
      type: "running",
      title: "Långpass – Toppning",
      duration: 95,
      detail: {
        distance: 12,
        pace: "Lugnt – testa att hålla jämt tempo hela vägen",
        zone: "Pulszon 2",
        passType: "Långdistans",
        description: "Det längsta passet i träningsplanen. Går detta bra är du redo för Midnattsloppet!",
        warmup: "5 min promenad",
        cooldown: "Lång stretching + skumroller"
      }
    }
  },

  // Vecka 30 (21–27 jul 2026)
  "2026-W30": {
    monday: {
      type: "running",
      title: "Tröskelpass",
      duration: 50,
      detail: {
        distance: 7,
        pace: "Hårt men kontrollerbart – precis under röd linje",
        zone: "Pulszon 3–4",
        passType: "Tröskelpass",
        description: "2 x 10 min tröskeltempo med 3 min joggvila. Simulerar tävlingskänslan.",
        warmup: "10 min lätt jogg",
        cooldown: "10 min lätt jogg",
        intervals: "2 x 10 min tröskeltempo, 3 min joggvila"
      }
    },
    wednesday: {
      type: "gym",
      title: "Gympass – Underkropp & Core",
      duration: 50,
      detail: {
        passType: "Styrka",
        description: "Sista tunga gympasset innan nedtrappning. Kör på med bra teknik.",
        exercises: [
          { name: "Knäböj", sets: 4, reps: "8", note: "Tyngre, explosivt uppåt" },
          { name: "Rumänsk marklyft", sets: 3, reps: "10", note: "" },
          { name: "Bulgariska utfall", sets: 3, reps: "8 per ben", note: "Bra rörlighetsövning" },
          { name: "Höftlyft", sets: 3, reps: "15", note: "" },
          { name: "Planka med benlyft", sets: 3, reps: "10 per sida", note: "" },
          { name: "Vadpress", sets: 3, reps: "20", note: "" }
        ]
      }
    },
    friday: {
      type: "running",
      title: "Lätt löpning",
      duration: 35,
      detail: {
        distance: 5,
        pace: "Mycket lugnt",
        zone: "Pulszon 1–2",
        passType: "Återhämtning",
        description: "Lätt aktiveringsjogg. Håll benen i rörelse inför veckoslutet.",
        warmup: "Ingen",
        cooldown: "Stretching"
      }
    },
    sunday: {
      type: "running",
      title: "Mellanlångpass",
      duration: 75,
      detail: {
        distance: 9,
        pace: "Lugnt",
        zone: "Pulszon 2",
        passType: "Långdistans",
        description: "Lite kortare än förra veckan – kroppen börjar trappa ned nu.",
        warmup: "5 min promenad",
        cooldown: "Stretching"
      }
    }
  },

  // ─── FAS 4: NEDTRAPPNING ─────────────────────────────────────────────────────
  // Vecka 31 (28 jul–3 aug 2026)
  "2026-W31": {
    tuesday: {
      type: "running",
      title: "Intervallpass – kortare",
      duration: 40,
      detail: {
        distance: 6,
        pace: "Snabbt på intervallerna",
        zone: "Pulszon 4–5",
        passType: "Intervallträning",
        description: "Kortare intervaller men håll farten uppe. Minska volymen, behåll intensiteten.",
        warmup: "10 min lätt jogg",
        cooldown: "10 min lätt jogg",
        intervals: "6 x 400m med 90 sek vila"
      }
    },
    thursday: {
      type: "gym",
      title: "Gympass – Underkropp & Core (lätt)",
      duration: 45,
      detail: {
        passType: "Styrka – underhåll",
        description: "Nedtrappning i gymmet. Lätta vikter, fokus på rörlighet och aktivering.",
        exercises: [
          { name: "Knäböj", sets: 3, reps: "10", note: "Lätta vikter" },
          { name: "Utfall", sets: 3, reps: "10 per ben", note: "" },
          { name: "Höftlyft", sets: 3, reps: "15", note: "" },
          { name: "Planka", sets: 3, reps: "45 sek", note: "" },
          { name: "Vadpress", sets: 3, reps: "15", note: "" }
        ]
      }
    },
    saturday: {
      type: "mobility",
      title: "Rörlighet & återhämtning",
      duration: 40,
      detail: {
        passType: "Rörlighet",
        description: "Prioritera återhämtning nu. Skumroller + yoga.",
        exercises: [
          { name: "Skumroller lår", sets: 1, reps: "2 min per sida", note: "" },
          { name: "Skumroller vader", sets: 1, reps: "2 min per sida", note: "" },
          { name: "Pigeon pose", sets: 1, reps: "90 sek per sida", note: "" },
          { name: "Nedåtvänd hund", sets: 1, reps: "60 sek", note: "" },
          { name: "Hamstringsträck", sets: 1, reps: "60 sek per sida", note: "" }
        ]
      }
    },
    sunday: {
      type: "running",
      title: "Mellanlångpass",
      duration: 60,
      detail: {
        distance: 8,
        pace: "Lugnt och kontrollerat",
        zone: "Pulszon 2",
        passType: "Långdistans",
        description: "Håll formen uppe men minska volymen. Kroppen ska vara fräsch.",
        warmup: "5 min promenad",
        cooldown: "Stretching"
      }
    }
  },

  // Vecka 32 (4–10 aug 2026)
  "2026-W32": {
    monday: {
      type: "running",
      title: "Aktiveringsjogg",
      duration: 30,
      detail: {
        distance: 4,
        pace: "Mycket lugnt",
        zone: "Pulszon 1–2",
        passType: "Återhämtning",
        description: "Lätt jogg för att hålla benen aktiva. Ingen press alls.",
        warmup: "Ingen",
        cooldown: "Stretching"
      }
    },
    wednesday: {
      type: "running",
      title: "Tempopass – tävlingsfart",
      duration: 35,
      detail: {
        distance: 5,
        pace: "Tävlingstempo – känn att det sitter!",
        zone: "Pulszon 3–4",
        passType: "Tempopass",
        description: "3 km i tävlingsfart. Sista hårda passet innan tävlingen. Kör det och känn självförtroendet!",
        warmup: "10 min lätt jogg",
        cooldown: "10 min lätt jogg",
        intervals: "3 km i tävlingsfart"
      }
    },
    friday: {
      type: "mobility",
      title: "Rörlighet & beredskap",
      duration: 30,
      detail: {
        passType: "Rörlighet",
        description: "Lätt rörlighetspass. Skumroller och stretching. Vila benen!",
        exercises: [
          { name: "Skumroller lår & vader", sets: 1, reps: "3 min totalt", note: "" },
          { name: "Höftsträck", sets: 1, reps: "60 sek per sida", note: "" },
          { name: "Hamstringsträck", sets: 1, reps: "60 sek per sida", note: "" },
          { name: "Vadstretching", sets: 1, reps: "45 sek per sida", note: "" }
        ]
      }
    }
  },

  // ─── TÄVLINGSVECKA ────────────────────────────────────────────────────────────
  // Vecka 33 (11–17 aug 2026) – Midnattsloppet lördag 15 aug
  "2026-W33": {
    tuesday: {
      type: "running",
      title: "Mycket lätt jogg",
      duration: 20,
      detail: {
        distance: 3,
        pace: "Promenадtempo nästan",
        zone: "Pulszon 1",
        passType: "Aktivering",
        description: "Håll benen lösa. Absolut inget hårt. Känn att benen är fräscha och pigga.",
        warmup: "Ingen",
        cooldown: "Lite stretching"
      }
    },
    thursday: {
      type: "running",
      title: "Aktivering inför tävling",
      duration: 20,
      detail: {
        distance: 3,
        pace: "Lugnt med 3–4 korta spurtar",
        zone: "Pulszon 1–2 + korta spurtar",
        passType: "Tävlingsförberedelse",
        description: "15 min lugnt jogg + 4 x 80m spurtar i tävlingstempo. Aktiverar benen utan att trötta ut dem.",
        warmup: "Ingen",
        cooldown: "Lätt stretching"
      }
    },
    saturday: {
      type: "running",
      title: "🏆 MIDNATTSLOPPET",
      duration: 75,
      detail: {
        distance: 10,
        pace: "Tävlingstempo – ge allt!",
        zone: "Pulszon 4–5",
        passType: "Tävling",
        description: "Det är tävlingsdag! Värm upp 15 min innan start. Starta lugnt de första 3 km, håll jämnt tempo till km 8, pusha de sista 2 km. Du är redo! 💪",
        warmup: "15 min lätt jogg + stretching 45 min innan start",
        cooldown: "Promenad + stretching efter målgång"
      }
    }
  }
};

export const monthlyStats = {
  user1: {
    "2026-06": { running: 35, gym: 3, swimming: 0, cycling: 0, mobility: 1 },
  },
  user2: {
    "2026-06": { running: 20, gym: 2, swimming: 0, cycling: 0, mobility: 0 },
  }
};

export const tipsContent = [
  {
    category: "Löpning",
    icon: "🏃",
    color: "#FF6B35",
    tips: [
      {
        title: "80/20-regeln",
        body: "80% av all träning ska vara lätt (pulszon 1–2), bara 20% hårt. De flesta springer för hårt på sina lätta pass."
      },
      {
        title: "Öka max 10% per vecka",
        body: "Öka aldrig total löpvolym med mer än 10% från en vecka till nästa. Det är den vanligaste orsaken till skador."
      },
      {
        title: "Löpsteg och kadens",
        body: "Sikta på 170–180 steg per minut. Kortare, snabbare steg minskar belastningen på knän och höfter."
      }
    ]
  },
  {
    category: "Simning",
    icon: "🏊",
    color: "#00B4D8",
    tips: [
      {
        title: "Teknik före distans",
        body: "I crawl är tekniken allt. Fokusera på hög armbåge vid simtag och rotation av kroppen. Dålig teknik kan inte kompenseras med kondition."
      },
      {
        title: "Öppet vatten vs pool",
        body: "Vansbrosimmet sker i å-vatten. Träna gärna i öppet vatten några gånger – det är psykologiskt annorlunda än pool."
      },
      {
        title: "Andningsteknik",
        body: "Andas ut under vatten, inte in. Många håller andan under vatten och det skapar stress och trötthet."
      }
    ]
  },
  {
    category: "Återhämtning",
    icon: "😴",
    color: "#2D6A4F",
    tips: [
      {
        title: "Sömn är träning",
        body: "Kroppen bygger muskler och reparerar vävnad under sömn. 7–9 timmar per natt är inte lyx – det är ett krav för progression."
      },
      {
        title: "Aktiv återhämtning",
        body: "Lätt promenad, simning eller yoga dagen efter ett hårt pass är bättre än total vila. Det ökar blodflödet och påskyndar återhämtning."
      },
      {
        title: "Skumroller",
        body: "Rulla ut lår, vader och IT-bandet 5–10 min efter långa pass. Minskar ömhet och förebygger skador."
      }
    ]
  },
  {
    category: "Kost",
    icon: "🥗",
    color: "#F4A261",
    tips: [
      {
        title: "Kolhydrater är bränsle",
        body: "Inför långa pass och tävlingar – ät mer kolhydrater. Pasta, ris och havregrynsgröt är klassiker. Testa aldrig ny mat på tävlingsdagen."
      },
      {
        title: "Protein för återhämtning",
        body: "Ät 20–30g protein inom 30 min efter träning. Quark, ägg eller proteinshake funkar utmärkt."
      },
      {
        title: "Vätskebalans",
        body: "Drick 0,5 dl vatten per 10 min löpning vid normalt väder. Urin ska vara ljusgul – mörk urin = för lite vätska."
      }
    ]
  },
  {
    category: "Skadeförebyggande",
    icon: "🩹",
    color: "#E63946",
    tips: [
      {
        title: "Lyssna på kroppen",
        body: "Skillnaden mellan träningsvärk och skadvärk: träningsvärk är symmetrisk och diffus, skadvärk är lokal och sitter kvar. Vid tvivel – vila."
      },
      {
        title: "Rörlighetsträning",
        body: "Som fd gymmare är du troligen stel i höfter och axlar. 2x10 min rörlighet per vecka gör enorm skillnad för löpteknik och skaderisk."
      },
      {
        title: "Löparskor",
        body: "Byt löparskor var 600–800 km. Gamla skor är den vanligaste orsaken till löparskador. Besök en löparspecialist för en analys."
      }
    ]
  }
];
