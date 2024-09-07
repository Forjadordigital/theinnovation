

export interface Producto {
    slug: string;
    marca: string;
    titulo: string;
    label: string;
    detalles: string;
    calorias: string;
    sweetnerSystem: string;
    info: string[];
    paises: string[];
    fotos: any[];
    sabores: string[];
}

export interface Marca {
    id: string;
    grupo: string;
    titulo: string;
    slug: string;
    productos: Producto[];
}


export const marcas: Marca[] = [
  {
      "id": "1",
      "grupo": "Gatorade",
      "titulo":"Gatorade",
      "slug": "gatorade",
      "productos": [
          {
            "slug": "gatorlit",
            "marca": "Gatorade",
            "titulo": "Gatorlit",
            "label": "Gatorade",
            "detalles": "Gatorade the hydration expert, created the new Glatorlit for you, to provide rapid and effective hydration, giving your body what it needs to recover. Gatorlit's formula combines a higher electrolyte load, less sugar, and a rich flavor. Get the rehydration your body needs with Gatorlit.",
            "calorias": "47 kcal per 591 mL",
            "sweetnerSystem": "Sucrose, Sucralose & Acesulfame-K",
            "info": [
              "Sodium 490 mg per 591 mL",
              "Potassium 350 mg per 591 mL",
              "Calcium 120 mg per 591 mL",
              "Magnesium 105 mg per 591 mL",
              "Chloride 1040 mg per 591 mL"
            ],
            "paises": ["mexico"],
            "fotos": ["gatorlit-cherry", "gatorlit-watermelon", ""],
            "sabores": ["Cherry lime", "Watermelon"]
          },
          {
            "slug": "energy-by-g",
            "marca": "Gatorade",
            "titulo": "Energy by G",
            "label": "Gatorade",
            "detalles": "From the creators of Gatorade, the world's #1 sports drink, comes ENERGY by Gatorade. The first energy drink in the world designed and developed for athletes. Energy by Gatorade gives you that boost of energy you need to start performing at your maximum from minute zero, thanks to it’s formula developed specifically for sports practitioners. Without sugar or carbonation, and the right level of caffeine, vitamins and electrolytes.",
            "calorias": "0 kcal",
            "sweetnerSystem": "Sucralose & Acesulfame-K",
            "info": [
              "Sodium 46 mg per 100 mL",
              "Potassium 14 mg per 100 mL",
              "Vitamin B3",
              "B5 and B6",
              "Caffeine 32 mg/ 100 mL"
            ],
            "paises": ["brasil"],
            "fotos": ["energy-orange", "energy-watermelon", ""],
            "sabores": ["Orange", "Watermelon"]
          }
        ]
  },
  {
      "id": "2",
      "grupo": "Pepsi",
      "titulo":"Pepsi",
      "slug": "pepsi",
      "productos": [
          {
            "slug": "pepsi-black",
            "marca": "Pepsi",
            "titulo": "Pepsi Black",
            "label": "Pepsi",
            "detalles": "Establish Black Can as core No Sugar Cola and scale up through flavor line extensions to drive sales, engage the next generation of cola drinkers, and deliver product centered awareness that can provide incremental sales. Flavors available: Lime, Cherry, Vanilla, Ginger, Raspberry, Cream Soda, Lime & Mint, Mango, Tropical, Orange Tangerine, Forrest Berries, Pineapple Mint & Pineapple Coconut",
            "calorias": "0 kcal (12oz)",
            "sweetnerSystem": "Aspartame & Acesulfame-K",
            "info": [],
            "paises": ["brasil"],
            "fotos": ["pepsi-black", "", ""],
            "sabores": ["Lime"]
          }
        ]
  },
  {
      "id": "3",
      "grupo": "Rockstar",
      "titulo":"Rockstar",
      "slug": "rockstar",
      "productos": [
          {
            "slug": "rockstar-flavors",
            "marca": "Rockstar",
            "titulo": "New Flavors",
            "label": "Rockstar",
            "detalles": "Rockstar helps you stay awake, perform better, and achieve what you want at school, work or home, and achieve what you want. Add Rockstar to your day!",
            "calorias": "69 kcal per 591 mL",
            "sweetnerSystem": "Sucrose, Sucralose & Acesulfame-K",
            "info": [
              "Caffeine (~30.10mg/100 ml), guarana, taurine, vitamin B (B3, B5, and B6), ginseng.",
              "*Ingredients according to country's regulation."
            ],
            "paises": ["argentina", "chile"],
            "fotos": ["rs-mango", "rs-watermelon", "rs-passion"],
            "sabores": ["Rockstar Mango", "Rockstar Watermelon Kiwi", "Rockstar Passionfruit"]
          },
          {
            "slug": "7up-h2oh-mirinda",
            "marca": "Rockstar",
            "titulo": "Rockstar (no sugar)",
            "label": "Rockstar",
            "detalles": "For those moments of the day where you seek for focus and stamina, we present Rockstar. A rich and refreshing energy drink with just the right amount of caffeine and ingredients that will help you recharge to give your best in those moments when you need it most and achieve your goals for the day with a positive attitude.",
            "calorias": "0 kcal",
            "sweetnerSystem": "Sucralose & Acesulfame-K",
            "info": [
              "Caffeine (~30.10mg/100 ml), guarana, taurine, vitamin B (B3, B5, and B6), ginseng.",
              "*Ingredients according to country's regulation."
            ],
            "paises": [],
            "fotos": ["rs-peach", "rs-strawberry", ""],
            "sabores": ["Rockstar White Peach", "Rockstar Strawberry-lime"]
          }
        ]
  },
  {
      "id": "4",
      "grupo": "Mix",
      "titulo":"7UP, H2OH! & Mirinda",
      "slug": "mix",
      "productos": [
          {
            "slug": "mirinda-flavors",
            "marca": "Mirinda",
            "titulo": "Mirinda",
            "label": "Flavors",
            "detalles": "Variety & exciting different new flavors which will not only bring fruity taste & refreshment but also deliver unique taste experience at gathering together & snacking occasions.",
            "calorias": "0 kcal (12oz)",
            "sweetnerSystem": "Aspartame & Acesulfame-K",
            "info": [],
            "paises": ["costarica"],
            "fotos": ["mirinda-blue", "mirinda-pome", ""],
            "sabores": ["Mirinda Blueberry", "Mirinda Pomegranate grape"]
          },
          {
            "slug": "7up-citrus",
            "marca": "7UP",
            "titulo": "7Up Citrus",
            "label": "Flavors",
            "detalles": "7up Flavor platform that allows us to connect with the consumer through unique, fun and social connection experiences.",
            "calorias": "0 kcal (12oz)",
            "sweetnerSystem": "Aspartame & Acesulfame-K",
            "info": [],
            "paises": ["costarica"],
            "fotos": ["7up-citrus", "", ""],
            "sabores": ["7UP Citrus"]
          },
          {
            "slug": "7up-hard",
            "marca": "7UP",
            "titulo": "7Up Hard",
            "label": "Flavors",
            "detalles": "The 7UP Lemon-Lime flavor you love with a kick of alcohol. Perfect for when you want to have a good time, reconnect and unwind after a long day. All naturally flavoured. Cheers to the good vibes, reconnecting and making the most of moments.",
            "calorias": "100 kcal (12oz)",
            "sweetnerSystem": "ASK/Sucralose 5% Alcohol",
            "info": [],
            "paises": ["costarica"],
            "fotos": ["7up-hard", "", ""],
            "sabores": ["7UP Hard"]
          },
          {
            "slug": "h2oh-flavors",
            "marca": "H2OH!",
            "titulo": "H2OH!",
            "label": "Flavors",
            "detalles": "H2OH! is a no sugar, lightly carbonated (2.0 CO2) beverage with true-to-fruit flavors launched in 2006 in Argentina under the 7UP brand, the brand expanded to other countries and organically developed as a healthier alternative to CSDs. Contains juice and vitamins B in Brazil and some Argentina formulas.",
            "calorias": "0 kcal (12oz)",
            "sweetnerSystem": "Aspartame & Acesulfame-K",
            "info": [
              "Watermelon lime: no juice, no vitamins",
              "Dragon fruit lime: vitamin B and 2.5% lemon juice",
              "Pitaya Limon: Vitamin B and 2.5% lemon juice."
            ],
            "paises": ["brasil", "colombia"],
            "fotos": ["h2oh", "h2-pitaya", "h2-sandia"],
            "sabores": ["Limonada de Coco", "Pitaya Limón", "Sandia Limón"]
          }
        ]
  },
];
