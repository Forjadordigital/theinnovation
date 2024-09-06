

export interface Producto {
    slug: string;
    marca: string;
    titulo: string;
    label: string;
    detalles: string;
    calorias: string;
    sweetnerSystem: string;
    aditionalInfo: string[];
    paises: string[];
    imagenes: string[];
    sabores: string[];
}

export interface Marca {
    id: string;
    grupo: string;
    slug: string;
    productos: Producto[];
}


export const marcas: Marca[] = [
    {
        "id": "1",
        "grupo": "Gatorade",
        "slug": "gatorade",
        "productos": [
            {
              "slug": "energy-by-g",
              "marca": "Gatorade",
              "titulo": "Energy by G",
              "label": "Gatorade",
              "detalles": "From the creators of Gatorade...",
              "calorias": "0 kcal",
              "sweetnerSystem": "Sucralose & Acesulfame-K",
              "aditionalInfo": [
                "Sodium 46 mg per 100 mL",
                "Potassium 14 mg per 100 mL",
                "Vitamin B3",
                "B5 and B6",
                "Caffeine 32 mg/ 100 mL"
              ],
              "paises": ["brasil", "jamaica"],
              "imagenes": ["energy-orange", "energy-watermelon"],
              "sabores": ["Orange", "Watermelon"]
            },
            {
              "slug": "gatorlit",
              "marca": "Gatorade",
              "titulo": "Gatorlit",
              "label": "Gatorade",
              "detalles": "Gatorade the hydration expert...",
              "calorias": "47 kcal per 591 mL",
              "sweetnerSystem": "Sucrose, Sucralose & Acesulfame-K",
              "aditionalInfo": [
                "Sodium 490 mg per 591 mL",
                "Potassium 350 mg per 591 mL",
                "Calcium 120 mg per 591 mL",
                "Magnesium 105 mg per 591 mL",
                "Chloride 1040 mg per 591 mL"
              ],
              "paises": ["mexico"],
              "imagenes": ["gatorlit-cherry", "gatorlit-watermelon"],
              "sabores": ["Cherry lime", "Watermelon"]
            }
          ]
    },
    {
        "id": "2",
        "grupo": "Pepsi",
        "slug": "pepsi",
        "productos": [
            {
              "slug": "pepsi-black",
              "marca": "Pepsi",
              "titulo": "Pepsi Black",
              "label": "Pepsi",
              "detalles": "Establish Black Can as core No Sugar Cola...",
              "calorias": "0 kcal (12oz)",
              "sweetnerSystem": "Aspartame & Acesulfame-K",
              "aditionalInfo": [],
              "paises": ["brasil"],
              "imagenes": ["pepsi-black"],
              "sabores": ["Lime"]
            }
          ]
    },
    {
        "id": "3",
        "grupo": "Rockstar",
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
              "aditionalInfo": [
                "Caffeine (~30.10mg/100 ml), guarana, taurine, vitamin B (B3, B5, and B6), ginseng.",
                "*Ingredients according to country's regulation."
              ],
              "paises": ["argentina", "chile"],
              "imagenes": ["rs-mango", "rs-watermelon", "rs-passion"],
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
              "aditionalInfo": [
                "Caffeine (~30.10mg/100 ml), guarana, taurine, vitamin B (B3, B5, and B6), ginseng.",
                "*Ingredients according to country's regulation."
              ],
              "paises": [],
              "imagenes": ["rs-peach", "rs-strawberry"],
              "sabores": ["Rockstar White Peach", "Rockstar Strawberry-lime"]
            }
          ]
    },
    {
        "id": "4",
        "grupo": "Mix",
        "slug": "pepsi",
        "productos": [
            {
              "slug": "7up-hard",
              "marca": "7UP",
              "titulo": "7Up Hard",
              "label": "Flavors",
              "detalles": "The 7UP Lemon-Lime flavor you love with a kick of alcohol. Perfect for when you want to have a good time, reconnect and unwind after a long day. All naturally flavoured. Cheers to the good vibes, reconnecting and making the most of moments.",
              "calorias": "100 kcal (12oz)",
              "sweetnerSystem": "ASK/Sucralose 5% Alcohol",
              "aditionalInfo": [],
              "paises": ["costarica"],
              "imagenes": ["7up-hard"],
              "sabores": ["7UP Hard"]
            },
            {
              "slug": "7up-citrus",
              "marca": "7UP",
              "titulo": "7Up Citrus",
              "label": "Flavors",
              "detalles": "7up Flavor platform that allows us to connect with the consumer through unique, fun and social connection experiences.",
              "calorias": "0 kcal (12oz)",
              "sweetnerSystem": "Aspartame & Acesulfame-K",
              "aditionalInfo": [],
              "paises": ["costarica"],
              "imagenes": ["7up-citrus"],
              "sabores": ["7UP Citrus"]
            },
            {
              "slug": "h2oh-flavors",
              "marca": "H2OH!",
              "titulo": "H2OH!",
              "label": "Flavors",
              "detalles": "H2OH! is a no sugar, lightly carbonated (2.0 CO2) beverage with true-to-fruit flavors launched in 2006 in Argentina under the 7UP brand, the brand expanded to other countries and organically developed as a healthier alternative to CSDs. Contains juice and vitamins B in Brazil and some Argentina formulas.",
              "calorias": "0 kcal (12oz)",
              "sweetnerSystem": "Aspartame & Acesulfame-K",
              "aditionalInfo": [
                "Watermelon lime: no juice, no vitamins",
                "Dragon fruit lime: vitamin B and 2.5% lemon juice",
                "Pitaya Limon: Vitamin B and 2.5% lemon juice."
              ],
              "paises": ["brasil", "colombia"],
              "imagenes": ["h2oh", "h2-pitaya", "h2-sandia"],
              "sabores": ["H2OH", "Pitaya Limón", "Sandia Limón"]
            },
            {
              "slug": "mirinda-flavors",
              "marca": "Mirinda",
              "titulo": "Mirinda",
              "label": "Flavors",
              "detalles": "Variety & exciting different new flavors which will not only bring fruity taste & refreshment but also deliver unique taste experience at gathering together & snacking occasions.",
              "calorias": "0 kcal (12oz)",
              "sweetnerSystem": "Aspartame & Acesulfame-K",
              "aditionalInfo": [],
              "paises": ["costarica"],
              "imagenes": ["mirinda"],
              "sabores": ["Mirinda Lemon-Lime"]
            }
          ]
    },
];
