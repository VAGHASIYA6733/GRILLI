// Array of Cafe names
const cafes = [
  {
    id: 7,
    name: "1990 by crazy bites",
    description:
      "Nostalgic '90s-inspired eatery serving inventive comfort foods, fostering a vibrant atmosphere with neon vibes and retro tunes.",
    image: "./assets/images/cafe image/7. 1990 by crazy bites.jpg",
  },
  {
    id: 8,
    name: "Anytime at k's cafe",
    description:
      "Anytime at K's Cafe: A cozy retreat offering diverse delights, fostering warmth, and serving up comfort in every cup.",
    image: "./assets/images/cafe image/8. anytime at k's cafe.jpg",
  },
  {
    id: 9,
    name: "Baithack Taste of Kulhad",
    description:
      "Baithack: Experience the rustic charm of Taste of Kulhad cafe—savoring culture-infused brews and flavors in a cozy, welcoming ambiance.",
    image: "./assets/images/cafe image/9. Baithack Taste of Kulhad.jpg",
  },
  {
    id: 10,
    name: "Bake walk coffee shop cafe",
    description:
      "Bake Walk Café: A cozy haven for artisanal pastries and meticulously crafted coffees in a welcoming, relaxed atmosphere.",
    image: "./assets/images/cafe image/10. bake walk coffee shop cafe.jpg",
  },
  {
    id: 11,
    name: "Baker bunch",
    description:
      "Baker Bunch: Where artisanal bakes meet creativity, offering a delightful array of treats in a warm, inviting ambiance.",
    image: "./assets/images/cafe image/11. baker bunch.jpg",
  },
  {
    id: 12,
    name: "BB socials cafe",
    description:
      "BB Socials Café: A vibrant hub merging global flavors, fostering connections through delectable dishes and welcoming spaces.",
    image: "./assets/images/cafe image/12.  bb socials cafe.jpg",
  },
  {
    id: 13,
    name: "Bite full cafe",
    description:
      "Bite Full Cafe: A cozy nook serving delectable bites and aromatic brews in a warm, inviting atmosphere for all",
    image: "./assets/images/cafe image/13. bite full cafe.jpeg",
  },
  {
    id: 14,
    name: "Blue corinder retsurant",
    description:
      "Blue Coriander Restaurant: Fusion flavors, elegance, and culinary artistry merge in a sophisticated dining experience for discerning palates.",
    image: "./assets/images/cafe image/14. blue corinder retsurant.jpeg",
  },
  {
    id: 15,
    name: "Bombay Brooklyn surat",
    description:
      "Bombay Brooklyn Surat: A fusion eatery blending Mumbai's zest with Brooklyn's flair, delivering eclectic flavors in vibrant Surat.",
    image: "./assets/images/cafe image/15. bombay brooklyn surat.jpg",
  },
  {
    id: 16,
    name: "Bring Me Coffee",
    description:
      "Bring Me Coffee: A cozy haven serving an array of expertly brewed blends in a welcoming, relaxed atmosphere for all.",
    image: "./assets/images/cafe image/16. Bring Me Coffee.jpg",
  },
  {
    id: 17,
    name: "Cafe Beats Restaurant",
    description:
      "Cafe Beats Restaurant: Fusion flavors, rhythmic ambiance, and delectable dishes create a harmonious dining experience for every palate.",
    image: "./assets/images/cafe image/17. Cafe Beats Restaurant.jpg",
  },
  {
    id: 18,
    name: "Cafe coffe day",
    description:
      "Cafe Coffee Day: A cozy retreat for aromatic brews and casual conversations in a relaxed, inviting ambiance for all.",
    image: "./assets/images/cafe image/18. cafe coffe day.jpg",
  },
  {
    id: 19,
    name: "Cafe De Meet",
    description:
      "Cafe De Meet: A cozy spot where flavors unite, offering comfort food and delightful brews in a welcoming ambiance.",
    image: "./assets/images/cafe image/19. Cafe De Meet.jpg",
  },
  {
    id: 20,
    name: "Cafe nair row",
    description:
      "Cafe Noir is a pure coffee bar, made by grinding coffee beans with our in-house organic cacao butter and minimal organic sugar.",
    image: "./assets/images/cafe image/20. cafe nair row.jpeg",
  },
  {
    id: 21,
    name: "Cafe White Eye",
    description:
      "Cafe White Eye: A serene space serving aromatic coffee and delectable pastries, offering a tranquil respite in a welcoming setting.",
    image: "./assets/images/cafe image/21. Cafe White Eye.jpg",
  },
  {
    id: 22,
    name: "Cafe-24",
    description:
      "Cafe 24: A bustling spot offering round-the-clock delights, from comforting brews to savory bites, in a vibrant, welcoming atmosphere.",
    image: "./assets/images/cafe image/22. Cafe-24.jpg",
  },
  {
    id: 23,
    name: "chaii maker by enginers pal",
    description:
      "Chaii Maker by Engineers Pal: Craft your perfect cup of chai with precision and ease, engineered for tea enthusiasts.",
    image: "./assets/images/cafe image/23. chaii maker by enginers pal.jpg",
  },
  {
    id: 24,
    name: "chai-sutta-bar",
    description:
      "Chai Sutta Bar: A vibrant spot offering chai and smokes, creating a lively ambiance perfect for socializing and unwinding.",
    image: "./assets/images/cafe image/24. chai-sutta-bar-.jpg",
  },
  {
    id: 25,
    name: "coffe beats arena",
    description:
      "Coffee Beats Arena: Where coffee melodies meet, offering rich brews and a lively atmosphere, creating a harmonious coffee experience.",
    image: "./assets/images/cafe image/25. coffe beats arena.jpg",
  },
  {
    id: 26,
    name: "cafe beats arena",
    description:
      "Coffee Cafe N' Snacks: A cozy spot offering a variety of brews and delicious snacks in a welcoming, relaxed setting.",
    image: "./assets/images/cafe image/26. Coffe Cafe N' Snacks.jpg",
  },
  {
    id: 27,
    name: "coffe castle cafe",
    description:
      "Coffee Castle Cafe: A cozy retreat serving aromatic brews and delightful pastries, offering a welcoming haven for coffee enthusiasts.",
    image: "./assets/images/cafe image/27. coffe castle cafe.jpg",
  },
  {
    id: 28,
    name: "Coffee Culture - The Ristorante Lounge",
    description:
      "Coffee Culture - The Ristorante Lounge: A sophisticated blend of gourmet coffee, culinary finesse, and inviting lounge ambiance.",
    image: "./assets/images/cafe image/28. Coffee Culture - The Ristorante Lounge.jpg",
  },
  {
    id: 29,
    name: "Coffee King",
    description:
      "Coffee King - Adajan: A local hotspot offering a variety of aromatic brews in a cozy, welcoming atmosphere for all.",
    image: "./assets/images/cafe image/29. Coffee King - Adajan.jpg",
  },
  {
    id: 30,
    name: "Coffee King - vesu",
    description:
      "Coffee King - Vesu: A vibrant hub serving an array of aromatic coffees in a welcoming, lively ambiance for all.",
    image: "./assets/images/cafe image/30. Coffee King - vesu.jpg",
  },
  {
    id: 31,
    name: "crazy cafe dhosa",
    description:
      "Crazy Cafe Dosa: A quirky eatery crafting inventive dosas with creative fillings, promising a flavorful and unique dining experience.",
    image: "./assets/images/cafe image/31. crazy cafe dhosa.jpg",
  },
  {
    id: 32,
    name: "Cream 'N' Crust Cafe",
    description:
      "Cream 'N' Crust Cafe: A cozy spot offering delectable desserts and savory treats in a warm, inviting ambiance.",
    image: "./assets/images/cafe image/32. Cream 'N' Crust Cafe.jpg",
  },
  {
    id: 33,
    name: "Deck 9 Restaurant",
    description:
      "Deck 9 Restaurant: A waterfront dining experience with panoramic views, offering exquisite cuisine and a relaxing atmosphere by the sea.",
    image: "./assets/images/cafe image/33. deck 9 resturant.jpg",
  },
  {
    id: 34,
    name: "De'willa Garden Restaurant",
    description:
      "De'willa Garden Restaurant: Serene ambiance, garden-fresh cuisine, offering a tranquil dining experience amidst natural beauty and flavorful dishes.",
    image: "./assets/images/cafe image/34. De'willa garden Restaurant.jpg",
  },
  {
    id: 35,
    name: "Dugout Turf & Sundowners Cafe",
    description:
      "Dugout Turf: A vibrant sports bar nestled beside Sundowners Cafe, offering a lively atmosphere, great drinks, and delicious bites.",
    image: "./assets/images/cafe image/35. Dugout Turf & Sundowners Cafe.jpg",
  },
  {
    id: 36,
    name: "eatailor's cafe",
    description:
      "eatailor's cafe: A trendy spot where custom flavors meet cozy ambiance, offering personalized dishes and a welcoming atmosphere.",
    image: "./assets/images/cafe image/36. eatailor's cafe.jpg",
  },
  {
    id: 37,
    name: "Engine cafe",
    description:
      "Engine Cafe: A vibrant hub serving up artisanal brews and delectable bites in a dynamic atmosphere fused with industrial charm.",
    image: "./assets/images/cafe image/37. Engine cafe.jpg",
  },
  {
    id: 38,
    name: "EPICURE THE VEGAN CAFE",
    description:
      "EPICURE THE VEGAN CAFE: A plant-based haven offering flavorful dishes in a welcoming space, promoting sustainability and delicious dining.",
    image: "./assets/images/cafe image/38. EPICURE THE VEGAN CAFE.jpg",
  },
  {
    id: 39,
    name: "Gate to Goa",
    description:
      "Gate to Goa: A culinary journey offering authentic Goan cuisine, vibrant spices, and a taste of India's coastal flavors.",
    image: "./assets/images/cafe image/39. gate to goa.jpg",
  },
  {
    id: 40,
    name: "Get In Cafe",
    description:
      "Get In Cafe: A cozy spot serving delicious brews and snacks, inviting patrons to relax and savor in a welcoming ambiance.",
    image: "./assets/images/cafe image/40. get in cafe.jpg",
  },
  {
    id: 41,
    name: "Ghalib and Company Cafe",
    description:
      "Ghalib and Company Cafe: A cultural rendezvous where aromatic teas and flavorsome bites converge, offering a cozy retreat for enthusiasts of literature and conversation.",
    image: "./assets/images/cafe image/41. ghalib and company cafe.jpg",
  },
  {
    id: 42,
    name: "Grill Bar",
    description:
      "Grill Bar: A sizzling hotspot offering an array of grilled delicacies, vibrant cocktails, and a lively atmosphere for social gatherings.",
    image: "./assets/images/cafe image/42. grill bar.jpg",
  },
  {
    id: 43,
    name: "HUBER AND HOLLY",
    description:
      "Huber and Holly: A whimsical ice cream parlor crafting playful flavors and colorful desserts, offering a delightful sweet escape.",
    image: "./assets/images/cafe image/43. HUBER AND HOLLY.jpg",
  },
  {
    id: 44,
    name: "in5nite Vr mall cafe",
    description:
      "in5nite VR Mall Cafe: A modern oasis serving refreshments, perfect for a pause while indulging in virtual reality adventures.",
    image: "./assets/images/cafe image/44. in5nite Vr mall cafe.jpg",
  },
  {
    id: 45,
    name: "It's Mirchi Surat",
    description:
      "It's Mirchi Surat: A spicy haven celebrating vibrant Indian flavors, offering an array of zesty dishes in a lively atmosphere.",
    image: "./assets/images/cafe image/45. It's Mirchi Surat.jpg",
  },
  {
    id: 46,
    name: "jungle cafe and resturant",
    description:
      "Jungle Cafe & Restaurant: A lush retreat serving delectable cuisine amidst a nature-inspired setting, offering a serene dining experience.",
    image: "./assets/images/cafe image/46. jungle cafe and resturant.jpg",
  },
  {
    id: 47,
    name: "kandeel resturant",
    description:
      "Kandeel Restaurant: A cultural haven offering authentic cuisine in a welcoming ambiance, celebrating tradition through flavorful dishes and warm hospitality.",
    image: "./assets/images/cafe image/47. kandeel resturant.jpg",
  },
  {
    id: 48,
    name: "kezik cakes cafe",
    description:
      "Kezik Cakes Cafe offers delightful homemade treats in a cozy atmosphere. Indulge in artisanal pastries, cakes, and specialty coffee creations with warm hospitality.",
    image: "./assets/images/cafe image/48. kezik cakes cafe.jpg",
  },
  {
    id: 49,
    name: "Kinaara The Café",
    description:
      "Kinaara The Café: A vibrant spot serving fusion cuisine with global flavors, fostering community in a relaxed, inviting ambiance.",
    image: "./assets/images/cafe image/49. Kinaara The Café.jpg",
  },
  {
    id: 50,
    name: "koffe 143 cafe",
    description:
      "Koffe 143 Cafe: A trendy spot serving premium coffee blends alongside light bites in a cozy, modern ambiance for all.",
    image: "./assets/images/cafe image/50. koffe 143 cafe.jpg",
  },
  {
    id: 51,
    name: "Koselig",
    description:
      "Koselig: A charming nook exuding warmth, inviting patrons to unwind in cozy comfort with delightful comfort food and ambiance.",
    image: "./assets/images/cafe image/51. Koselig.jpg",
  },
  {
    id: 52,
    name: "K's Charcoal",
    description:
      "K's Charcoal: A culinary hotspot renowned for its exquisite grilled specialties, infusing bold flavors through charcoal-infused creations.",
    image: "./assets/images/cafe image/52. k's charcoal.jpg",
  },
  {
    id: 53,
    name: "K's Verandah",
    description:
      "K's Verandah: An elegant retreat offering sophisticated cuisine and a serene ambiance, inviting guests to relish fine dining delights.",
    image: "./assets/images/cafe image/53. k's verandah.jpg",
  },
  {
    id: 54,
    name: "K'tealy",
    description:
      "K-levels. amputee activity levels is determined using the Medicare Functional Classification Level (MFCL), also known as K-levels.",
    image: "./assets/images/cafe image/54. K'tealy.jpg",
  },
  {
    id: 55,
    name: "La Casa Lucido Cafe",
    description:
      "La Casa Lucido: A culinary haven offering delectable cuisine, cozy ambiance, and warm hospitality for an unforgettable dining experience.",
    image: "./assets/images/cafe image/55. la casa lucdio cafe and resturant.jpg",
  },
  {
    id: 56,
    name: "La'Dude Cafe",
    description:
      "La'Dude Cafe: A trendy hotspot blending great coffee, delectable bites, and a vibrant atmosphere for a chic urban experience.",
    image: "./assets/images/cafe image/56. la'dude cafe.jpg",
  },
  {
    id: 57,
    name: "Leonard's Italians",
    description:
      "Leonard's Italians: A culinary treasure trove offering authentic Italian flavors, rich aromas, and a cozy ambiance for a memorable dining affair.",
    image: "./assets/images/cafe image/57. leonards italians.jpg",
  },
  {
    id: 58,
    name: "Let's Eat Cafe & Restro",
    description:
      "Let's Eat Cafe & Restro: A vibrant dining spot offering diverse cuisines, friendly service, and a welcoming ambiance for delightful culinary experiences.",
    image: "./assets/images/cafe image/58. lets eat cafe and restro.jpg",
  },
  {
    id: 59,
    name: "Let's Meet Cafe",
    description:
      "Let's Meet Cafe: A cozy rendezvous spot, serving aromatic brews, delectable bites, and fostering warm conversations in a relaxed setting.",
    image: "./assets/images/cafe image/59. Let's Meet Cafe.jpg",
  },
  {
    id: 60,
    name: "Levvel 3 Cafe",
    description:
      "Levvel 3 Cafe: A chic, elevated space offering gourmet coffee, delectable bites, and a stylish ambiance for a sophisticated urban retreat.",
    image: "./assets/images/cafe image/60. levvel 3 cafe.jpg",
  },
  {
    id: 61,
    name: "Live Cafe",
    description:
      "Live Cafe: A vibrant hotspot blending live music, delectable bites, and a cozy ambiance for unforgettable evenings of entertainment.",
    image: "./assets/images/cafe image/61. live cafe.jpg",
  },
  {
    id: 62,
    name: "Livestram Cafe Bpipload",
    description:
      "Apologies, it seems like there might be a typo or a misunderstanding in your request. Could you please clarify or provide more information about livestram cafe bpipload ?",
    image: "./assets/images/cafe image/62. livestram cafe bpipload.jpg",
  },
  {
    id: 63,
    name: "Livestram Cafe",
    description:
      "Livestram Cafe: Where streaming meets coffee, offering tech-savvy ambiance, aromatic brews, and a cozy space for digital gatherings.",
    image: "./assets/images/cafe image/63. livestram cafe.jpg",
  },
  {
    id: 64,
    name: "Mahual Cafe",
    description:
      "Mahual Cafe: A charming retreat serving aromatic brews and delectable bites in a cozy setting, embracing relaxation and community.",
    image: "./assets/images/cafe image/64. mahual cafe.jpg",
  },
  {
    id: 65,
    name: "Meraki The Coffee House",
    description:
      "Meraki The Coffee House: A cozy haven where exceptional brews meet creative ambiance, inviting you to savor moments of inspiration.",
    image: "./assets/images/cafe image/65. Meraki The Coffee House.jpeg",
  },
  {
    id: 66,
    name: "MOJAVA",
    description:
      "Nescafe Parlor, a chic space blending Nescafe delights, trendy ambiance, and cozy comfort for delightful coffee experiences.",
    image: "./assets/images/cafe image/66. MOJAVA (Nescafe Parlor).jpg",
  },
  {
    id: 67,
    name: "Moonstruck Coffee",
    description:
      "Moonstruck Coffee: Where celestial vibes meet aromatic brews, offering a cozy haven for sipping under the starry ambiance.",
    image: "./assets/images/cafe image/67. Moonstruck Coffee.jpg",
  },
  {
    id: 68,
    name: "Mr. G Coffee Cafe:",
    description:
      "Mr. G Coffee Cafe: A trendy spot brewing up artisanal blends and fostering a laid-back ambiance perfect for coffee aficionados to unwind.",
    image: "./assets/images/cafe image/68. mr g coffe cafe.jpg",
  },
  {
    id: 69,
    name: "Mr. Cafe",
    description:
      "Mr. Cafe: A charming spot with delectable brews and a welcoming atmosphere, inviting all for delightful coffee experiences.",
    image: "./assets/images/cafe image/69. Mr. Cafe.jpg",
  },
  {
    id: 70,
    name: "Mysore Cafe",
    description:
      "Mysore Cafe: A cozy eatery offering authentic South Indian flavors, serving aromatic dishes that evoke the essence of Mysore's culinary heritage.",
    image: "./assets/images/cafe image/70. mysore-cafe-.jpg",
  },
  {
    id: 71,
    name: "Nomads cafe",
    description:
      "Nomads, wanderers of diverse cultures, roam in search of sustenance, embodying resilience, adaptability, and an intimate bond with nature.",
    image: "./assets/images/cafe image/71. Nomads.jpg",
  },
  {
    id: 72,
    name: "Nukkad - Cafe And Restro",
    description:
      "Nukkad - a vibrant café and resto, captures the essence of local flavors, fostering community in a cozy, inviting ambiance.",
    image: "./assets/images/cafe image/72. Nukkad - Cafe And Restro.jpg",
  },
  {
    id: 73,
    name: "Paan Casa",
    description:
      "Paan Casa: Where tradition meets innovation, offering delectable paan creations in a modern, inviting setting that captivates the senses.",
    image: "./assets/images/cafe image/73. paan casa.jpeg",
  },
  {
    id: 74,
    name: "Peiskos Coffee  Best Coffee Cafe In Surat",
    description:
      "Peiskos Coffee: Surat's ultimate coffee haven, serving top-notch brews in a cozy atmosphere that embodies warmth and relaxation.",
    image: "./assets/images/cafe image/74. Peiskos Coffee  Best Coffee Cafe In Surat.jpg",
  },
  {
    id: 75,
    name: "Pirates Vayoge Cafe",
    description:
      "Pirates Vayoge Cafe: Where adventure meets cuisine, a spirited maritime-themed eatery offering flavorsome delights in an immersive, nautical setting.",
    image: "./assets/images/cafe image/75. pirates vayoge cafe.jpg",
  },
  {
    id: 76,
    name: "Pizza Da Dhaba Cafe",
    description:
      "Pizza Da Dhaba Cafe: A delightful fusion, blending the essence of a dhaba with the flavorsome allure of authentic pizzas.",
    image: "./assets/images/cafe image/76. pizza da dhaba cafe.jpg",
  },
  {
    id: 77,
    name: "Pizza Wizza Cafe",
    description:
      "Pizza Wizza Cafe: A flavorful haven, crafting inventive pizzas with a dash of creativity in a vibrant, welcoming setting.",
    image: "./assets/images/cafe image/77. pizza wizza cafe.jpg",
  },
  {
    id: 78,
    name: "Pokket Cafe Astria",
    description:
      "Pokket Cafe Astria: A cozy nook offering delectable bites and warm brews, fostering relaxation and delightful conversations.",
    image: "./assets/images/cafe image/78. pokket cafe astria.jpg",
  },
  {
    id: 79,
    name: "Space 4 You co-work cafe",
    description:
      "Space 4 You: A collaborative co-work cafe fostering productivity, connectivity, and inspiration, merging workspaces with culinary delights.",
    image: "./assets/images/cafe image/79. space 4 you co-work cafe.png",
  },
  {
    id: 80,
    name: "Spice Terrace Restaurant",
    description:
      "Spice Terrace Restaurant: A culinary haven offering aromatic flavors and exquisite cuisine in a vibrant, inviting ambiance.",
    image: "./assets/images/cafe image/80. Spice Terrace Restaurant.jpeg",
  },
  {
    id: 81,
    name: "surtea cafe",
    description:
      "Surtea Cafe: A cozy oasis blending artisanal coffee, delightful pastries, and a serene ambiance for perfect moments of relaxation and indulgence.",
    image: "./assets/images/cafe image/81. surtea cafe.jpg",
  },
  {
    id: 82,
    name: "The Boho",
    description:
      "The Boho: An eclectic haven blending bohemian charm, vintage treasures, and artistic flair, offering unique finds and creative inspirations.",
    image: "./assets/images/cafe image/82. The Boho.jpg",
  },
  {
    id: 83,
    name: "The Bungalow Cafe in Adajan, Surat",
    description:
      "The Bungalow Cafe in Adajan, Surat: A cozy retreat offering delightful cuisine, warm ambiance, and inviting spaces for memorable gatherings.",
    image: "./assets/images/cafe image/83. the bunglow cafe in adajan surat.jpg",
  },
  {
    id: 84,
    name: "The Bungalow Cafe",
    description:
      "The Bungalow Cafe: A quaint, welcoming spot offering delicious fare, cozy ambiance, and a perfect setting for relaxed get-togethers.",
    image: "./assets/images/cafe image/84. the bunglow cafe.jpeg",
  },
  {
    id: 85,
    name: "The Cafe Dew",
    description:
      "Cafe Dew: A refreshing haven serving aromatic coffee, delightful bites, and fostering cozy conversations in a relaxed, inviting atmosphere.",
    image: "./assets/images/cafe image/85. the cafe dew.jpg",
  },
  {
    id: 86,
    name: "The Center Court",
    description:
      "The Center Court: A vibrant hub where sports, entertainment, and community converge, fostering lively experiences",
    image: "./assets/images/cafe image/86. the center court.jpg",
  },
  {
    id: 87,
    name: "The Chocolate Room",
    description:
      "The Chocolate Room: A decadent haven offering divine cocoa creations, indulgent treats, and a cozy ambiance for sweet enthusiasts.",
    image: "./assets/images/cafe image/87. the choclate room.jpeg",
  },
  {
    id: 88,
    name: "The Commoner’s Kitchen",
    description:
      "The Commoner’s Kitchen: A welcoming space offering hearty cuisine, communal warmth, and a cozy ambiance for shared culinary experiences.",
    image: "./assets/images/cafe image/88. The Commoner’s Kitchen.jpg",
  },
  {
    id: 89,
    name: "The Desi Wok",
    description:
      "The Desi Wok: A flavorful destination crafting vibrant, Indian-inspired wok dishes, blending tradition, spice, and contemporary flair seamlessly.",
    image: "./assets/images/cafe image/89. the desi wok.jpeg",
  },
  {
    id: 90,
    name: "The Fries Co.",
    description:
      "The Fries Co.: A tempting haven dedicated to crispy, flavorful fries served in an array of delicious, innovative styles.",
    image: "./assets/images/cafe image/90. the fries co...jpeg",
  },
  {
    id: 91,
    name: "THE GARLIC KNOT (PIZZA CAFE )",
    description:
      "The Garlic Knot: A cozy pizza cafe serving up mouthwatering pies topped with savory garlic knots baked to perfection.",
    image: "./assets/images/cafe image/91. THE GARLIC KNOT (PIZZA CAFE ).jpg",
  },
  {
    id: 92,
    name: "The Green Spice Restaurant",
    description:
      "The Green Spice Restaurant: A vibrant eatery offering a fusion of globally inspired dishes accentuated by fresh, aromatic spices.",
    image: "./assets/images/cafe image/92. the greeen spice resturant.jpg",
  },
  {
    id: 93,
    name: "The Lounge Cafe & Restro",
    description:
      "The Lounge Cafe & Restro: A chic, relaxed spot offering a blend of delectable bites, refreshing drinks, and inviting ambiance.",
    image: "./assets/images/cafe image/93. the longe cafe and restro.jpg",
  },
  {
    id: 94,
    name: "The Star Cafe",
    description:
      "The Star Cafe: A vibrant hotspot serving up delightful brews, scrumptious pastries, and a cozy ambiance beneath twinkling ligWelcome to The Star Cafe, where every sip is celestial and every bite a delight.",
    image: "./assets/images/cafe image/94. The Star Cafe.jpg",
  },
  {
    id: 95,
    name: "The Vibes Cafe",
    description:
      "The Vibes Cafe: A trendy hub where great music, flavorful brews, and inviting decor converge for a relaxing, memorable experience.",
    image: "./assets/images/cafe image/95. The Vibes Cafe.jpg",
  },
  {
    id: 96,
    name: "Theobroma Bakery and Cake Shop",
    description:
      "Theobroma Bakery & Cake Shop: A delightful haven offering heavenly pastries, artisanal bread, and decadent cakes that satisfy every craving.",
    image: "./assets/images/cafe image/96. Theobroma Bakery and Cake Shop.jpg",
  },
  {
    id: 97,
    name: "Thikana",
    description:
      "Thikana: A vibrant fusion eatery where diverse flavors collide, offering a culinary journey through an array of innovative dishes.",
    image: "./assets/images/cafe image/97. thikana.jpg",
  },
  {
    id: 98,
    name: "THS (The Hog Spot)",
    description:
      "THS (The Hog Spot): A carnivore's delight, serving up savory, succulent meats grilled to perfection, accompanied by flavorful sides.",
    image: "./assets/images/cafe image/98. THS (The Hog Spot).jpg",
  },
  {
    id: 99,
    name: "Vintage Asia Cafe",
    description:
      "Vintage Asia Cafe: A charming spot offering a fusion of nostalgic flavors, where classic dishes meet contemporary culinary twists.",
    image: "./assets/images/cafe image/99. vintage asia cafe.jpg",
  },
  {
    id: 100,
    name: "Zesr Restaurant",
    description:
      "Zesr Restaurant: A sophisticated dining destination offering a curated menu of globally inspired cuisine in an elegant atmosphere.",
    image: "./assets/images/cafe image/100. zesr resturant.jpg",
  },
  {
    id: 101,
    name: "Zest House",
    description:
      "Zest House: A vibrant culinary space where bold flavors and fresh ingredients converge to create unforgettable dining experiences.",
    image: "./assets/images/cafe image/101. zest house.jpg",
  },
  {
    id: 102,
    name: "ZORKO",
    description:
      "ZORKO: A trendy hotspot offering innovative cuisine, stylish ambiance, and a vibrant social scene for unforgettable dining experiences.",
    image: "./assets/images/cafe image/102. ZORKO.jpeg",
  },
  {
    id: 103,
    name: "Tea Post",
    description:
      "Tea Post: A cozy retreat serving an array of aromatic teas, flavorful snacks, and inviting ambiance for relaxation and conversation.",
    image: "./assets/images/cafe image/103. Tea Post.jpg",
  },
  {
    id: 104,
    name: "Shotaholic",
    description:
      "Shotaholic: A vibrant bar hotspot offering an eclectic array of expertly crafted shots, pulsating music, and energetic socializing vibes.",
    image: "./assets/images/cafe image/104. Shotaholic.jpg",
  },
  {
    id: 105,
    name: "Chai Pilla",
    description:
      "Chai Pilla: A cozy corner offering aromatic chai varieties and comforting bites, creating a warm space for relaxed conversations.",
    image: "./assets/images/cafe image/105. Chai Pilla.jpg",
  },
  {
    id: 106,
    name: "Coffee Culture",
    description:
      "Coffee Culture: A thriving community centered around the art, science, and love of coffee, fostering diverse tastes and experiences.",
    image: "./assets/images/cafe image/106. Coffee Culture.jpg",
  },
  {
    id: 107,
    name: "CookEr's Eatery",
    description:
      "CookEr's Eatery: A cozy culinary haven offering diverse, homemade delights, crafted with love, inviting patrons to savor delightful flavors.",
    image: "./assets/images/cafe image/107. CookEr's Eatery.jpg",
  },
  {
    id: 108,
    name: "Moj Ma",
    description:
      "Moj Ma embodies a spirited culinary adventure, infusing traditional flavors with a contemporary flair.",
    image: "./assets/images/cafe image/108. Moj Ma.jpg",
  },
];

// Array of Hotel names
const hotel = [
  {
      id: 7,
      name: "Amiras Restaurant",
      description: "Amira's Restaurant in Surat Sarthana Jakatnaka offers delectable cuisine, blending traditional and contemporary flavors, ensuring a delightful dining experience for all.",
      image: "./assets/images/Hotel image/7. Amiras Resturant surat sarthana jakatnaka.jpeg",
  },
  {
      id: 8,
      name: "Amor Restaurant",
      description: "Amor Restaurant in Surat offers a romantic ambiance and diverse menu, creating a delightful dining experience with exquisite flavors and charm.",
      image: "./assets/images/Hotel image/8. amor resturant surat.jpeg",
  },
  {
      id: 9,
      name: "Atithi Garden Restaurant",
      description: "Atithi Garden Restaurant in Surat offers a serene dining experience amidst lush greenery, serving delectable cuisine with impeccable hospitality.",
      image: "./assets/images/Hotel image/9. Atithi garden resturant surat.jpg",
  },
  {
      id: 10,
      name: "Avadh Family Restaurant",
      description: "Avadh Family Restaurant in Varachha, Surat, offers a warm ambiance and delectable cuisine, making it a perfect destination for family gatherings.",
      image: "./assets/images/Hotel image/10. Avadh family restaurant in Varachha, Surat.jpg",
  },
  {
      id: 11,
      name: "Baba Sai Dhosa",
      description: "Baba Sai Dosa in Surat serves flavorful and crispy dosas, offering a taste of authentic South Indian cuisine in a casual setting.",
      image: "./assets/images/Hotel image/11. baba saui dhosa surat.jpg",
  },
  {
      id: 12,
      name: "Basil Garden",
      description: "Basil Garden in Surat is a charming eatery known for its delightful ambiance and scrumptious dishes, offering a diverse culinary experience.",
      image: "./assets/images/Hotel image/12. basil garden surat.jpg",
  },
  {
      id: 13,
      name: "Bawarchi Restaurant",
      description: "Bawarchi Restaurant in Surat offers a diverse menu in a welcomin ambiance, promising a delightful dining experience with flavorful cuisines.",
      image: "./assets/images/Hotel image/13. Bawarchi resturant surat.jpeg",
  },
  {
      id: 14,
      name: "Bay leaf Restaurant and Banquet",
      description: "Bay Leaf Restaurant and Banquet in Adajan, Surat, offers a sophisticated venue for events along with delectable culinary offerings.",
      image: "./assets/images/Hotel image/14. bay-leaf-restaurant-and-banquet-adajan-surat.jpg",
  },
  {
      id: 15,
      name: "Blue Basil Restaurant",
      description: "Blue Basil Restaurant in Surat offers a chic ambiance and a diverse menu, delivering a delightful dining experience with culinary excellence.",
      image: "./assets/images/Hotel image/15. blue basil resturant surat.jpg",
  },
  {
      id: 16,
      name: "Blue Coriander",
      description: "Blue Coriander offers a diverse culinary experience with a chic ambiance in Surat, presenting a delightful fusion of flavors and cuisines.",
      image: "./assets/images/Hotel image/16. Blue Coriander.jpeg",
  },
  {
      id: 17,
      name: "Bansari Restaurant and Banquet",
      description: "Bnasri Restaurant and Banquet in Surat offers a blend of delightful cuisine and event facilities, promising a memorable experience for patrons.",
      image: "./assets/images/Hotel image/17. bnasri Resturant and banqute surat.jpg",
  },
  {
      id: 18,
      name: "Budget inn Bellevue",
      description: "Budget in Bellevue Surat offers affordable accommodations with essential amenities, providing a comfortable stay for budget-conscious travelers in a convenient location.",
      image: "./assets/images/Hotel image/18. Budget in bellevue surat.jpeg",
  },
  {
      id: 19,
      name: "Yummy Tummy Dhosa",
      description: "Yummy Tummy Dosa in Surat offers delectable dosas with a variety of fillings, providing a flavorful South Indian culinary experience.",
      image: "./assets/images/Hotel image/19. Yummy Tummy Dhosa.jpg",
  },
  {
      id: 20,
      name: "Cook Doo Cook Restaurant",
      description: "Cook Dooo Cook Restaurant in Surat offers a diverse menu with a unique twist, promising a delightful culinary experience for patrons.",
      image: "./assets/images/Hotel image/20. cook dooo cook resturant surat.jpg",
  },
  {
      id: 21,
      name: "Darshan Restaurant & Banquet",
      description: "Darshan Restaurant & Banquet in Surat offers a blend of delectable cuisine and event facilities, ensuring memorable experiences for patrons.",
      image: "./assets/images/Hotel image/21. Darshan Restaurant & Banquet.jpg",
  },
  {
      id: 22,
      name: "Dawat Restaurant",
      description: "Dawat Restaurant in Surat offers a diverse culinary experience with delectable dishes in a welcoming setting, ensuring a delightful dining experience.",
      image: "./assets/images/Hotel image/22. Dawat resturant surat.jpg",
  },
  {
      id: 23,
      name: "DB villa",
      description: "DB Villa offers luxurious accommodations in a serene environment in Surat, combining modern amenities with a touch of elegance for guests' comfort.",
      image: "./assets/images/Hotel image/23. DB villa.jpg",
  },
  {
      id: 24,
      name: "De' Villa Garden Restro Lounge",
      description: "De' Villa Garden Restro Lounge in Surat offers a picturesque terrace garden and party plot, providing a charming venue for celebrations.",
      image: "./assets/images/Hotel image/24. De' Villa Garden Restro Lounge  Terrace Garden  Party Plot surat.jpg",
  },
  {
      id: 25,
      name: "Deck 9 Restaurant",
      description: "Deck 9 Restaurant in Surat offers a scenic ambiance and diverse menu, promising a delightful dining experience with delectable culinary offerings.",
      image: "./assets/images/Hotel image/25. Deck 9 Restaurantsurat.jpg",
  },
  {
      id: 26,
      name: "Deewan E Khaas The Family Restaurant",
      description: "Deewan E Khaas in Surat offers a royal dining experience with exquisite Indian cuisine in a regal and opulent setting.",
      image: "./assets/images/Hotel image/26. deewan e khaas surat.jpeg",
  },
  {
      id: 27,
      name: "Dhakka Mukki Restaurant",
      description: "Dhakka Muki Restaurant offers a unique dining experience with its innovative menu and vibrant ambiance in Surat, promising culinary delights.",
      image: "./assets/images/Hotel image/27. dhakka muki resturant.jpg",
  },
  {
      id: 28,
      name: "Dil Se Re Restaurant",
      description: "Dil Se Re Restaurant in Surat offers a heartwarming dining experience with a diverse menu and a welcoming ambiance for patrons.",
      image: "./assets/images/Hotel image/28. Dil Se Re Restaurant surat.jpg",
  },
  {
      id: 29,
      name: "Dishoom - The Bollywood Restaurant",
      description: "Dishoom: The Bollywood Restaurant in Surat offers a vibrant dining experience with Bollywood-inspired decor and a menu of eclectic dishes.",
      image: "./assets/images/Hotel image/29. dishoom the bollywood resturant.jpg",
  },
  {
      id: 30,
      name: "DMW - Best Dimsum Momos & Wontons",
      description: "DMW Best Dimsum Moments in Surat serves delectable and authentic dim sum, offering a delightful culinary experience for dim sum enthusiasts.",
      image: "./assets/images/Hotel image/30. dmw best dimsumb momes.jpg",
  },
  {
      id: 31,
      name: "Dosa Charcoal",
      description: "Dosa Charcoal in Surat offers a delectable menu of South Indian delights with a unique charcoal twist, creating a memorable culinary experience.",
      image: "./assets/images/Hotel image/31. dosa charcoal surat.jpg",
  },
  {
      id: 32,
      name: "Dosa Sigdi",
      description: "Dosa Sigdi in Surat serves delicious South Indian dosas with a unique twist, offering a delightful culinary experience for all.",
      image: "./assets/images/Hotel image/32. dosa sigdi surat.jpg",
  },
  {
      id: 33,
      name: "Downtown Cafe and Restro",
      description: "Downtown Cafe and Restaurant in Surat offers a chic ambiance and diverse menu, combining flavors to create a memorable dining experience.",
      image: "./assets/images/Hotel image/33. Downtwon cafe and resturant surat.jpeg",
  },
  {
      id: 34,
      name: "Dream Festiva Restaurant",
      description: "Dream Festival Restaurant in Surat offers a gastronomic journey with a diverse menu, creating a dreamy dining experience for patrons.",
      image: "./assets/images/Hotel image/34. Dream festival resturant surat.jpg",
  },
  {
      id: 35,
      name: "East Asia - Veg/Jain",
      description: "East Asia Veg Jain in Surat offers a delightful vegetarian dining experience, showcasing the diverse flavors of East Asian cuisine.",
      image: "./assets/images/Hotel image/35. east asia _ veg  jain Surat.jpg",
  },
  {
      id: 36,
      name: "Egg corner Restaurant",
      description: "Egg Corner Restaurant is a delightful culinary destination, offering a diverse menu that celebrates the versatility and deliciousness of eggs.",
      image: "./assets/images/Hotel image/36. Egg corner Resturant.jpg",
  },
  {
      id: 37,
      name: "Famous Chinese Cuisine",
      description: "Famous Chinese Cuisine in Surat offers a delectable menu showcasing authentic flavors and culinary expertise for a delightful dining experience.",
      image: "./assets/images/Hotel image/37. Famous chinese cuisine surat.jpg",
  },
  {
      id: 38,
      name: "Farm to Table Cafe & Restro",
      description: "Farm to Table Cafe & Restro in Surat offers fresh, locally sourced ingredients, creating a wholesome dining experience with sustainability at its core.",
      image: "./assets/images/Hotel image/38. Farm to table cafe & restro surat.jpg",
  },
  {
      id: 39,
      name: "Galaxy Revolving Restaurant & Banquet",
      description: "Galaxy Revolving Restaurant and Banquet Hall offers a unique dining experience with panoramic views and versatile event spaces in Surat.",
      image: "./assets/images/Hotel image/39. Galaxy Revolving Restaurant and Banquet Hall.jpg",
  },
  {
      id: 40,
      name: "Gate To Goa",
      description: "Gate to Goa in Surat transports diners with its vibrant ambiance, offering a taste of Goa's exotic flavors in every dish.",
      image: "./assets/images/Hotel image/40. gate to goa.jpg",
  },
  {
      id: 41,
      name: "Geetha Restaurant",
      description: "Geeetha Restaurant in Surat offers delectable Indian cuisine with a diverse menu, impeccable service, and a welcoming ambiance for patrons.",
      image: "./assets/images/Hotel image/41. Geeetha resturant surat.jpg",
  },
  {
      id: 42,
      name: "Gk's Restaurant",
      description: "GK's Restaurant in Surat offers a delightful fusion of flavors, impeccable service, and a cozy ambiance for a memorable dining experience.",
      image: "./assets/images/Hotel image/42. GK's Resturant surat.jpg",
  },
  {
      id: 43,
      name: "Glorious Restaurant",
      description: "Glorious Restaurant in Adajan, Surat offers delicious Punjabi cuisine in a family-friendly atmosphere, suitable for functions and parties.",
      image: "./assets/images/Hotel image/43. Glorious Restaurant Surat.jpg",
  },
  {
      id: 44,
      name: "Go China Restaurant",
      description: "Go China Restaurant in Surat offers exquisite Chinese cuisine with a blend of authentic flavors, welcoming ambiance, and excellent service.",
      image: "./assets/images/Hotel image/44. Go china resturant surat.jpg",
  },
  {
      id: 45,
      name: "Govardhan Family Restaurant",
      description: "Govardhan Family Restaurant: A warm haven in Surat, serving delicious, homely meals with a touch of love and hospitality.",
      image: "./assets/images/Hotel image/45. Govardhan family resturant.jpg",
  },
  {
      id: 46,
      name: "Haldiram's Restaurant",
      description: "Haldiram's Restaurant in Surat: Indulge in a delightful culinary experience with an array of authentic Indian dishes and inviting ambiance.",
      image: "./assets/images/Hotel image/46. Haldiram's restrant surat.jpg",
  },
  {
      id: 47,
      name: "Haneez Restaurant",
      description: "Haneez Restaurant in Surat: A culinary oasis offering diverse and delectable dishes in a cozy ambiance, perfect for memorable dining experiences.",
      image: "./assets/images/Hotel image/47. haneez resturant surat.png",
  },
  {
      id: 48,
      name: "Hari Krishna Restaurant",
      description: "Harikrishna Restaurant in Surat: A culinary destination offering a blend of traditional and innovative dishes in a vibrant atmosphere.",
      image: "./assets/images/Hotel image/48. harikrishna res surat.jpg",
  },
  {
      id: 49,
      name: "Harikrushna Village Restaurant",
      description: "Harikrishna Village Hotel in Surat: A tranquil retreat offering comfortable accommodation and warm hospitality, blending modern amenities with serene surroundings.",
      image: "./assets/images/Hotel image/49. Harikrishna village hotel surat.jpg",
  },
  {
      id: 50,
      name: "Hotel Satlaj",
      description: "Hotel Saltaj in Surat: A chic haven offering comfortable lodging with modern amenities, ensuring a pleasant stay in the vibrant city.",
      image: "./assets/images/Hotel image/50. hotel saltaj surat.jpg",
  },
  {
      id: 51,
      name: "Hummus House",
      description: "Hummus House: A delightful eatery offering a variety of flavorful hummus dishes in a cozy setting, perfect for casual dining.",
      image: "./assets/images/Hotel image/51. Hummus House.jpg",
  },
  {
      id: 52,
      name: "Jalaram Khichdi Restaurant",
      description: "Jalaram Khichadi Restaurant in Surat: A culinary haven offering a delightful variety of khichadi dishes, combining flavors and comfort in every bite.",
      image: "./assets/images/Hotel image/52. jalaram khichadi resturant surat.jpg",
  },
  {
      id: 53,
      name: "Kabir Restaurant",
      description: "Kabir Restaurant: A culinary oasis in Surat, offering a diverse menu of flavorful dishes in a welcoming ambiance for memorable dining.",
      image: "./assets/images/Hotel image/53. kabir resturant.jpg",
  },
  {
      id: 54,
      name: "Kaka Ni Bhajipav & Fast-food",
      description: "Kaka Ni Bhaji in Surat: A savory delight, offering a variety of delectable bhaji dishes, capturing the essence of local flavors.",
      image: "./assets/images/Hotel image/54. kaka ni bhaji surat.jpeg",
  },
  {
      id: 55,
      name: "Kansar-Gujarati Thali",
      description: "Kansar Gujarati Thali in Nanpura, Surat: Indulge in a delightful array of authentic Gujarati dishes, showcasing the rich culinary heritage.",
      image: "./assets/images/Hotel image/55. kansar-gujarati-thali-nanpura-surat.jpg",
  },
  {
      id: 56,
      name: "King's Corner",
      description: "Kings Corner in Surat Vesu: A regal dining experience, offering a royal menu with exquisite dishes in a luxurious ambiance.",
      image: "./assets/images/Hotel image/56. kings corner surat vesu.jpg",
  },
  {
      id: 57,
      name: "KK Thali",
      description: "KK Thali in Surat: A delightful culinary experience, offering a variety of flavorsome dishes in a welcoming and vibrant atmosphere.",
      image: "./assets/images/Hotel image/57. KK thali surat.jpg",
  },
  {
      id: 58,
      name: "Krishna Restaurant",
      description: "Krishna Restaurant in Buhari, Surat: A top-notch dining destination, offering the best culinary delights with impeccable service in Surat.",
      image: "./assets/images/Hotel image/58. Krishna Restaurant in Buhari,Surat - Best Restaurants in Surat.jpg",
  },
  {
      id: 59,
      name: "Kurtosshhh...",
      description: "Kurtosshhh: Savor the delightful swirls of chimney cakes, a sweet and crispy treat, at this charming bakery. A unique indulgence awaits!",
      image: "./assets/images/Hotel image/59. kurtosshhh.jpg",
  },
  {
      id: 60,
      name: "La Festa",
      description: "La Festa: A charming spot offering a taste of Italy with delectable pizzas, pastas, and a warm ambiance in Surat.",
      image: "./assets/images/Hotel image/60. La Festa.jpg",
  },
  {
      id: 61,
      name: "La Fountain The Food Fair",
      description: "La Fountain The Food Fair in Surat offers a diverse culinary experience, featuring a variety of delicious dishes in a vibrant and inviting atmosphere.",
      image: "./assets/images/Hotel image/61. La Fountain The Food Fair, Surat.jpg",
  },
  {
      id: 62,
      name: "Lake view Restaurant",
      description: "Lake View Restaurant in Surat offers a picturesque dining experience with stunning views, complemented by a diverse menu of delectable dishes.",
      image: "./assets/images/Hotel image/62. Lake view resturant surat.jpg",
  },
  {
      id: 63,
      name: "La Pepper Dosa",
      description: "Le Pepper Dhiosa in Surat presents a tantalizing blend of flavors, offering a unique culinary experience with its diverse and exquisite dishes.",
      image: "./assets/images/Hotel image/63. le pepper dhiosa Surat.jpg",
  },
  {
      id: 64,
      name: "Lemon Grass Garden Restaurant",
      description: "Lemon Grass Garden Restaurant in Surat offers a refreshing dining experience with its vibrant ambiance and a menu featuring delightful citrus-infused dishes.",
      image: "./assets/images/Hotel image/64. lemon gravss gardeb resturant surat.jpg",
  },
  {
      id: 65,
      name: "Leonardo Italian Mediterranean Dining",
      description: "Leonardo Italian Mediterranean Dining in Surat, Gujarat, offers an exquisite blend of Italian and Mediterranean flavors in a sophisticated ambiance.",
      image: "./assets/images/Hotel image/65. leonardo italian mediterranean dining surat gujarat.jpg",
  },
  {
      id: 66,
      name: "Let's Table Talk",
      description: "Let's Table Talk Restaurant in Surat provides a cozy setting for engaging conversations over delicious meals, creating memorable dining experiences.",
      image: "./assets/images/Hotel image/66. let's table talk Resturant surat.jpg",
  },
  {
      id: 67,
      name: "London Yard Pizza",
      description: "London Yard Pizza in Surat offers a delectable slice of London with its flavorful pizzas in a vibrant and inviting ambiance.",
      image: "./assets/images/Hotel image/67. london yard pizza in surat.jpg",
  },
  {
      id: 68,
      name: "Lukmaa Multi Cuisine Restaurant",
      description: "Lukmaa Multi Cuisine Restaurant in Surat provides a diverse culinary experience, serving a variety of flavorful dishes in a welcoming setting.",
      image: "./assets/images/Hotel image/68. Lukmaa Multi Cuisine Restaurant surat.jpg",
  },
  {
      id: 69,
      name: "Mad Over Grills",
      description: "Mad Over Grills in Surat is a sizzling haven for grill enthusiasts, offering a delectable array of flavors in a lively ambiance.",
      image: "./assets/images/Hotel image/69. Mad over grills surat.jpg",
  },
  {
      id: 70,
      name: "Maharaja Palace Restaurant & Banquet",
      description: "Maharaja Palace Restaurant & Banquet in Surat offers pure vegetarian delights in a regal setting, delivering a royal culinary experience.",
      image: "./assets/images/Hotel image/70. Maharaja Palace Restaurant & Banquet  Pure Veg Restaurant.jpg",
  },
  {
      id: 71,
      name: "Malhar Dhosa",
      description: "Malhar Dosa at Lajamnio Chowk, Surat, offers delectable South Indian cuisine with a diverse menu and a pleasant dining atmosphere.",
      image: "./assets/images/Hotel image/71. Malhar dhosa Lajamnio chowk surat.jpg",
  },
  {
      id: 72,
      name: "Masala Hut",
      description: "It seems there might be a typo in your request, as you've mentioned 0 wods instead of 0 words. If you'd like a description for Masala Hut in Surat or any other specific location, please clarify, and I'll be happy to assist!",
      image: "./assets/images/Hotel image/72. Masala hut.jpg",
  },
  {
      id: 73,
      name: "Masala Mania - Best Restaurants",
      description: "Masala Mania in Surat is renowned for being the best continental, vegetarian restaurant, and cafe, offering diverse flavors and exceptional dining.",
      image: "./assets/images/Hotel image/73. Masala Mania - Best Restaurants, Continental Restaurant, Veg Restaurant, Cafe surat.jpg",
  },
  {
      id: 74,
      name: "Masala Stories - A Multi-Cuisine Restaurant",
      description: "Masala Stories in Surat: A culinary haven, offering a delightful array of flavors with a cozy ambiance for an unforgettable dining experience.",
      image: "./assets/images/Hotel image/74. Masala stories resturant surat.jpg",
  },
  {
      id: 75,
      name: "Masala Canteen",
      description: "Masala Canteen in Surat: A flavorful haven, serving diverse and    mouthwatering dishes, creating a delightful dining experience for every palate.",
      image: "./assets/images/Hotel image/75. masala-canteen Surat.jpg",
  },
  {
      id: 76,
      name: "Mad 4 Dosa",
      description: "Mad 4 Dosa: A dosa paradise in Surat, offering Mad 4 Dosa in Surat is a haven for dosa lovers, curating an extensive menu that transcends the ordinary. ",
      image: "./assets/images/Hotel image/76. Mad 4 Dosa.jpg",
  },
  {
      id: 77,
      name: "Midtown Restaurant",
      description: "Midtown Restaurant: A culinary destination in Surat, offering a diverse menu of delectable dishes in a welcoming and vibrant setting.",
      image: "./assets/images/Hotel image/77. Midtown Restaurant.jpg",
  },
  {
      id: 78,
      name: "Mykonos",
      description: "Mykonos Cafe and Restaurant in Surat: A Greek-inspired culinary retreat, offering delectable Mediterranean flavors in a charming and inviting atmosphere.",
      image: "./assets/images/Hotel image/78. mykonos cafe and resturant surat.jpg",
  },
  {
      id: 79,
      name: "Navjivan Restaurant",
      description: "Navjivan Restaurant in Surat Jakatnaka: A culinary gem offering diverse flavors, delightful dishes, and a warm ambiance for memorable dining experiences.",
      image: "./assets/images/Hotel image/79. Navjivan Resturant surat jaktnaka.jpg",
  },
  {
      id: 80,
      name: "Nature's Plate",
      description: "Nutur's Plate Surat: A culinary haven, offering a diverse and delectable  menu in a welcoming setting, promising delightful dining experiences.",
      image: "./assets/images/Hotel image/80. nutur's plate surat.jpeg",
  },
  {
      id: 81,
      name: "Only Dhosa",
      description: "I'm sorry, but your request seems unclear. It looks like there might be a typo or missing information. Could you please provide more context or clarify your question?",
      image: "./assets/images/Hotel image/81. Only dhosa sarthana jakatnaka.png",
  },
  {
      id: 82,
      name: "Oscar Pizza",
      description: "Oscar Pizza Restaurant in Surat offers delicious pizzas, pasta, and more, providing a delightful dining experience with a diverse menu and inviting ambiance.",
      image: "./assets/images/Hotel image/82. oscar pizza resturant Surat.jpg",
  },
  {
      id: 83,
      name: "Paa Roti Cafe",
      description: "Paa Roti is a traditional Indian dish featuring flatbread served with spicy chickpeas, offering a flavorful and satisfying culinary experience.",
      image: "./assets/images/Hotel image/83. Paa Roti Cafe.jpg",
  },
  {
      id: 84,
      name: "Papa Louie's Pizza",
      description: "Papa Louie's Pizza in Surat offers mouthwatering pizzas with quality ingredients, promising a delightful dining experience for pizza enthusiasts in Surat.",
      image: "./assets/images/Hotel image/84. papa louie's pizza surat.jpg",
  },
  {
      id: 85,
      name: "Pavilion Restaurant",
      description: "Pavilion Restaurant in Surat offers a diverse menu, exquisite flavors, and a pleasant ambiance, ensuring a delightful dining experience for patrons.",
      image: "./assets/images/Hotel image/85. pavilion restaurant surat.jpg",
  },
  {
      id: 86,
      name: "Punjabi Di Hatti",
      description: "Punjabi Di Hatti Restaurant in Surat offers authentic Punjabi cuisine,  featuring flavorful dishes and a welcoming ambiance for delightful dining experiences.",
      image: "./assets/images/Hotel image/86. punjabi di hatti restaurant  surat.jpg",
  },
  {
      id: 87,
      name: "Purohit Thali",
      description: "Purohit Thali Restaurant offers a delightful culinary experience with authentic flavors, diverse dishes, and warm hospitality in a vibrant ambiance.",
      image: "./assets/images/Hotel image/87. Purohit-Thali.jpg",
  },
  {
      id: 88,
      name: "Radha Krishna Restaurant",
      description: "Radha Krishna Restaurant in Surat captivates with divine flavors, offering an exquisite culinary journey through delectable dishes and warm hospitality.",
      image: "./assets/images/Hotel image/88. Radha Krishna Restaurant.jpg",
  },
  {
      id: 89,
      name: "Rangoli Garden Restaurant",
      description: "Rangoli Garden Restaurant on Canal Road, Surat, offers a delightful culinary escape with vibrant flavors and serene ambiance for all.",
      image: "./assets/images/Hotel image/89. Rangoli garden resturant cenal road surat.jpg",
  },
  {
      id: 90,
      name: "Rasna Buzz",
      description: "Rasna Buzz in Surat offers a vibrant atmosphere, delicious bites, and refreshing drinks, creating a lively experience for all.",
      image: "./assets/images/Hotel image/90. Rasna Buzz surat.jpeg",
  },
  {
      id: 91,
      name: "Real Restaurant",
      description: "Real Restaurant offers an authentic dining experience with flavorful dishes, attentive service, and a welcoming ambiance for all guests.",
      image: "./assets/images/Hotel image/91. real resturant.jpg",
  },
  {
      id: 92,
      name: "Revolving Restaurant",
      description: "Revolving Restaurant in Surat offers a unique dining experience with panoramic views, gourmet cuisine, and a captivating ambiance for patrons.",
      image: "./assets/images/Hotel image/92. revoliing resturant surat.jpg",
  },
  {
      id: 93,
      name: "Richie Rich Restaurant",
      description: "Richie Rich in Surat is a chic destination offering premium experiences with luxurious ambiance, delectable cuisine, and attentive service.",
      image: "./assets/images/Hotel image/93. richie rich surat.jpg",
  },
  {
      id: 94,
      name: "RIO Carnival",
      description: "Rio Carnival Restaurant: A vibrant culinary carnival awaits, featuring  bold flavors, lively atmosphere, and a celebration of Brazilian cuisine in every dish.",
      image: "./assets/images/Hotel image/94. Rio carnival Resturant.jpg",
  },
  {
      id: 95,
      name: "Royal Dine Pal RTO",
      description: "Royal Dine Pal RTO: An exquisite dining experience awaits, featuring regal ambiance, impeccable service, and a diverse, flavorful menu for patrons.",
      image: "./assets/images/Hotel image/95. royal dine pal rto.jpg",
  },
  {
      id: 96,
      name: "GJ-5 Fancy Dhosa",
      description: "Royal Dine Surat: A regal dining experience with exquisite cuisine, elegant ambiance, and versatile banquet facilities for special celebrations.",
      image: "./assets/images/Hotel image/96. gj-5 fancy dhosa.jpg",
  },
  {
      id: 97,
      name: "Sarvottam The Restaurant",
      description: "Sarvottam The Restaurant in Udhna Village, Surat: Culinary excellence, warm hospitality, and a diverse menu await discerning patrons.",
      image: "./assets/images/Hotel image/97. Sarvottam The Restaurant udhna village surat.jpg",
  },
  {
      id: 98,
      name: "Sasumaa Gujarati Thali",
      description: "Sasumaa Gujarati Thali in Surat: Authentic Gujarati flavors, diverse  thali offerings, and warm hospitality create a delightful dining experience.",
      image: "./assets/images/Hotel image/98. Sasumaa Gujarati Thali surat.jpg",
  },
  {
      id: 99,
      name: "Satkar Restaurant",
      description: "Satkar Restaurant in Surat: Culinary excellence, inviting ambiance, and a diverse menu, creating a delightful experience for discerning patrons.",
      image: "./assets/images/Hotel image/99. Satkar Restaurant surat.jpg",
  },
  {
      id: 100,
      name: "Shiva Garden Restaurant",
      description: "Shiva Garden Restaurant in Surat: A tranquil dining spot with delightful  cuisine, lush surroundings, and warm hospitality for all patrons.",
      image: "./assets/images/Hotel image/100. shiva garden res surat.jpeg",
  },
  {
      id: 101,
      name: "Shree Sainath Snacks And Juices",
      description: " Shree Sainath Snacks And Juices offers a delightful menu of snacks and  refreshing juices, satisfying your cravings with flavorful options.",
      image: "./assets/images/Hotel image/101. Shree Sainath Snacks And Juices.jpg",
  },
  {
      id: 102,
      name: "Sigdi Restaurant",
      description: "Sigdi Restaurant in Surat is a culinary gem, offering a spectrum of delightful dishes that capture the essence of authentic flavors.",
      image: "./assets/images/Hotel image/102. sigdi res surat.jpg",
  },
  {
      id: 103,
      name: "Silvernest Restaurant",
      description: "Silver Nest Restaurant in Surat is a popular dining destination known  for its delicious and flavorful Indian cuisine.",
      image: "./assets/images/Hotel image/103. silver  nest resturant surat.jpg",
  },
  {
      id: 104,
      name: "Simply South By Taste Of Bhagwati",
      description: "it operates under the brand name “The Grand Bhagwati” also known as TGB across India.",
      image: "./assets/images/Hotel image/104. Simply South By Taste Of Bhagwati surat.jpg",
  },
  {
      id: 105,
      name: "Smokey Chilly",
      description: "Smokey Chilly in Surat brings a fiery twist to flavors, offering a tantalizing fusion of smokiness and spice in every dish.",
      image: "./assets/images/Hotel image/105. Smokey chilly surat.jpg",
  },
  {
      id: 106,
      name: "Spice Delight Restaurant",
      description: "Spice Delight in Surat offers a palate-pleasing experience, crafting  delectable dishes with a harmonious blend of aromatic spices and flavors.",
      image: "./assets/images/Hotel image/106. Spice Delight Restaurant surat.jpg",
  },
  {
      id: 107,
      name: "Spice Heritage",
      description: "Spice Heritage Restaurant in Surat offers a cultural culinary  experience, showcasing a rich heritage of flavors through its diverse menu.",
      image: "./assets/images/Hotel image/107. spice heritage resturant surat.jpg",
  },
  {
      id: 108,
      name: "Spice Terrace Restaurant",
      description: "Spice Terrace Restaurant in Surat offers a delightful dining experience, combining aromatic spices with a serene outdoor ambiance for patrons.",
      image: "./assets/images/Hotel image/108. Spice Terrace Restaurant.jpeg",
  },
  {
      id: 109,
      name: "Spice Villa Restaurant",
      description: "Spice Villa Restaurant in Surat offers a flavorful escape with its  diverse menu, showcasing a culinary journey through aromatic spices.",
      image: "./assets/images/Hotel image/109. spice vila resturant surat.jpg",
  },
  {
      id: 110,
      name: "Spice Petals - Fine Dine Restro & Banquet",
      description: "Spruce Petals, a fine-dining restaurant, in Surat offers an exquisite culinary experience with a blend of elegance, flavors, and sophistication.",
      image: "./assets/images/Hotel image/110. spuce petals - fine dine restro.jpg",
  },
  {
      id: 111,
      name: "Status Café & Restaurant",
      description: "Status Café & Restaurant in Surat offers a delightful fusion of flavors, impeccable service, and a chic ambiance for a memorable dining experience.",
      image: "./assets/images/Hotel image/111. Status Café & Restaurant surat.jpg",
  },
  {
      id: 112,
      name: "Steam Restaurant",
      description: "Steam Restaurant in Surat: A culinary haven where delectable flavors and  stylish ambiance come together, promising an unforgettable dining experience.",
      image: "./assets/images/Hotel image/112. steam-restaurant Surat.jpg",
  },
  {
      id: 113,
      name: "Bhanu Na Khaman",
      description: "Suart Restaurant in Surat: A culinary destination offering diverse  flavors and warm hospitality, creating a memorable dining experience for all patrons.",
      image: "./assets/images/Hotel image/113. bhanu na khaman.jpg",
  },
  {
      id: 114,
      name: "Sugar N Spice",
      description: "Sugar n' Spice in Surat: A sweet escape offering delectable treats and  delightful bites in a cozy setting for indulgent moments.",
      image: "./assets/images/Hotel image/114. Sugar n' spice  surat.jpg",
  },
  {
      id: 115,
      name: "Taaza Restaurant",
      description: "Taaza Restaurant in Surat: Fresh flavors, impeccable service, and a  welcoming ambiance create a delightful dining experience for all patrons.",
      image: "./assets/images/Hotel image/115. Taaza Resturant Surat.jpg",
  },
  {
      id: 116,
      name: "Table 101",
      description: "Table 101 Restaurant in Surat: Exquisite cuisine, elegant setting, and personalized service create a memorable dining experience for all guests.",
      image: "./assets/images/Hotel image/116. Table 101 resturant surat.jpg",
  },
  {
      id: 117,
      name: "Taste Of Bhagwati",
      description: "Taste of Bhagwati in Surat: A culinary haven offering a delightful blend of traditional and contemporary flavors in a cozy setting.",
      image: "./assets/images/Hotel image/117. taste of bhagwati  surat.jpg",
  },
  {
      id: 118,
      name: "Taste of India",
      description: "Taste of India in Surat: A culinary voyage through authentic flavors and spices, creating a memorable dining experience for patrons.",
      image: "./assets/images/Hotel image/118. taste-of-india-Surat.jpg",
  },
  {
      id: 119,
      name: "The Ropeway Restaurant",
      description: "The Ropeway Restaurant in Surat: Elevated dining with panoramic views, offering delectable cuisine and a unique experience in a charming setting.",
      image: "./assets/images/Hotel image/119. the ropeway resturant surat.png",
  },
  {
      id: 120,
      name: "Thalaivaa South Indian Restaurant",
      description: "Thalaivyaa South Indian Restaurant in Surat: Authentic flavors, diverse   dishes, and a cultural ambiance for a true South Indian culinary experience.",
      image: "./assets/images/Hotel image/120. thalaivyaa south indian resturant surat.jpg",
  },
  {
      id: 121,
      name: "The Commoner’s Kitchen",
      description: "The Commoner's Kitchen: A culinary haven where simplicity meets  excellence, offering a diverse menu and warm hospitality in a cozy setting.",
      image: "./assets/images/Hotel image/121. The Commoner’s Kitchen.jpg",
  },
  {
      id: 122,
      name: "The Green Restaurant & Cafe",
      description: "The Green Restaurant in Surat: A culinary oasis embracing freshness, offering a vibrant menu and eco-friendly practices in a serene setting.",
      image: "./assets/images/Hotel image/122. the green resturant surat.jpg",
  },
  {
      id: 123,
      name: "The Lime Tree Restaurant",
      description: "The Lime Tree Restaurant in Surat: A citrus-inspired culinary  experience, blending refreshing flavors and a cozy atmosphere for memorable dining.",
      image: "./assets/images/Hotel image/123. the lime tree restaurant in surat.jpg",
  },
  {
      id: 124,
      name: "The Secret Kitchen",
      description: "The Secret Kitchen in Surat: A culinary sanctuary where mystery and  exquisite flavors converge, creating a unique and memorable dining experience.",
      image: "./assets/images/Hotel image/124. the secret kitchen surat.jpg",
  },
  {
      id: 125,
      name: "The Surya Dhosa",
      description: "The Surya Dosa in Surat: A haven for dosa lovers, offering a diverse  menu of crispy delights and savory fillings in a lively setting.",
      image: "./assets/images/Hotel image/125. the surya dhosa surat.jpeg",
  },
  {
      id: 126,
      name: "The Tasty Garden Restaurant",
      description: "The Tasty Garden in Surat: A culinary oasis with a delightful menu,  offering diverse flavors in a serene and inviting atmosphere.",
      image: "./assets/images/Hotel image/126. the tasty garden surat.jpg",
  },
  {
      id: 127,
      name: "The Village Rangoli Restaurant",
      description: "The Village Rangoli Restaurant in Surat: A cultural culinary experience  with traditional flavors and vibrant ambiance for an authentic dining journey.",
      image: "./assets/images/Hotel image/127. the village rangoli Resturant surat.jpg",
  },
  {
      id: 128,
      name: "The Wan Nestz Resto & Cafe",
      description: "The Wan Nestz Restaurant in Surat: A culinary haven with a diverse menu,  promising delightful flavors in a warm and welcoming ambiance.",
      image: "./assets/images/Hotel image/128. the wan nestz resturant surat.jpg",
  },
  {
      id: 129,
      name: "Tit Bit Culture Multi Cuisine Restaurant & Banquet Hall",
      description: "Tit Bit Culture: Surat's multi-cuisine gem, offering delectable bites  and a banquet hall for memorable celebrations in a vibrant setting.",
      image: "./assets/images/Hotel image/129. Tit Bit Culture Multi Cuisine Restaurant & Banquet Hall surat.jpg",
  },
  {
      id: 130,
      name: "Trishiv Chinese",
      description: "Trishiv Chinese in Surat: A delightful culinary journey with authentic  Chinese flavors in a cozy setting, promising a memorable dining experience.",
      image: "./assets/images/Hotel image/130. trishiv chines surat.jpg",
  },
  {
      id: 131,
      name: "Tulsi Restaurant Banquet & Rooms",
      description: "Tulsi Restaurant Banquet & Rooms in Lal Darwaja, Surat offers exquisite dining, event hosting, and comfortable accommodations in a vibrant atmosphere.",
      image: "./assets/images/Hotel image/131. Tulsi Restaurant Banquet & Rooms in Lal Darwaja,Surat.jpg",
  },
  {
      id: 132,
      name: "UNNATI RESTAURANT",
      description: "Unnati Restaurant in Surat offers a culinary delight with a diverse   menu, ensuring a memorable dining experience in a vibrant ambiance.",
      image: "./assets/images/Hotel image/132. UNNATI RESTAURANT, Surat.jpg",
  },
  {
      id: 133,
      name: "Urban Punjab",
      description: "Urban Punjab in Surat offers an authentic taste of Punjabi cuisine,   blending traditional flavors with a contemporary dining experience.",
      image: "./assets/images/Hotel image/133. Urban punjab Surat.jpg",
  },
  {
      id: 134,
      name: "Vintage Asia",
      description: "Vintage Asia in Surat offers an exquisite culinary journey with a menu  inspired by the rich and diverse flavors of Asian cuisine.",
      image: "./assets/images/Hotel image/134. vintage asia surat.jpg",
  },
  {
      id: 135,
      name: "VRINDAVAN RESTAURANT",
      description: "Vrudavan Restaurant in Surat offers a serene dining experience with  delectable vegetarian cuisine, creating a perfect blend of taste and tranquility.",
      image: "./assets/images/Hotel image/135. vrudavan resturant surat.jpg",
  },
  {
      id: 136,
      name: "Way Wait Restaurant",
      description: "Way Wait Restaurant in Surat offers a unique dining experience with a  diverse menu, blending flavors and culinary creativity in a welcoming atmosphere.",
      image: "./assets/images/Hotel image/136. Way wait resturant surat.jpg",
  },
  {
      id: 137,
      name: "William John's Pizza Pal Sura",
      description: "William John's Pizza Pal in Surat serves delicious pizzas with a variety of toppings, providing a tasty and satisfying dining experience. ",
      image: "./assets/images/Hotel image/137. William John's Pizza Pal Surat surat.jpg",
  },
  {
      id: 138,
      name: "Wok On Fire",
      description: "Wok On Fire Restaurant in Surat serves flavorful wok dishes, offering a unique culinary experience with a blend of Asian spices.",
      image: "./assets/images/Hotel image/138. wok on fire resturant surat.jpg",
  },
  {
      id: 139,
      name: "Zaitoon Restaurant",
      description: "Zaitoon Restaurant in Surat, India offers delicious and authentic Middle Eastern cuisine, known for its rich flavors and aromatic spices.",
      image: "./assets/images/Hotel image/139. Zaitoon Restaurant surat.jpg",
  },
  {
      id: 140,
      name: "ZERO The restaurant",
      description: "Zeero is a new restaurant in Surat that specializes in Cantonese cuisine with contemporary twists. Located in Gaysorn Village, it is headed by renowned Chinese cooking maestro Chan Kwok Hung.",
      image: "./assets/images/Hotel image/140. zeero the resturant surat.jpg",
  },
  {
      id: 141,
      name: "Zest Restaurant",
      description: "The Zest restaurant in Surat, India offers a variety of Indian dishes, particularly Punjabi food, at reasonable prices. It is known for its tasty Paneer Laziz, Dal, and soups.",
      image: "./assets/images/Hotel image/141. Zest resturant surat.jpg",
  },
  {
      id: 142,
      name: "Zhingalala Restaurant",
      description: "Zhingalala Restaurant in Surat, Gujarat, is a Pesco-Vegetarian establishment that offers a wide variety of prawn, fish, and vegetarian dishes.",
      image: "./assets/images/Hotel image/142. Zhingalala resturant Surat.jpg",
  },
  {
      id: 143,
      name: "Ziyafat Restaurant Pure Veg & Crystal Banquet Hall",
      description: "Ziyafat Restaurant Pure Veg & Crystal Banquet Hall is a highly recommended vegetarian restaurant that offers delicious and high-quality food.",
      image: "./assets/images/Hotel image/143. Ziyafat Restaurant Pure Veg & Crystal Banquet Hall.png",
  },
  {
      id: 144,
      name: "Hotel Aatithya",
      description: "Hotel Aatithya is a hotel located in Bhubaneshwar, India, near Bhubaneswar Station and Biju Patnaik International Airport.",
      image: "./assets/images/Hotel image/144. atithya.jpg",
  },

];

 // Cafe SearchBar

function suggestcafes() {
  const input = document.getElementById("searchBar").value;
  const data = cafes.map((data) => data.name);
  const suggestions = data
    .filter((hotel) => hotel.toLowerCase().includes(input.toLowerCase()))
    .slice(0, 5);
  const suggestionsList = document.getElementById("suggestions");
  suggestionsList.innerHTML = "";

  if (suggestions.length > 0 && input !== "") {
    suggestionsList.style.display = "block";
    suggestions.forEach((hotel) => {
      const listItem = document.createElement("li");
      listItem.textContent = hotel;
      listItem.onclick = () => selectcafes(hotel);
      suggestionsList.appendChild(listItem);
    });
  } else {
    suggestionsList.style.display = "none";
  }
}

$(document).ready(function () {
  $(".search_bar").click(function () {
    $(".suggestions").hide();
  });
});


$(document).ready(function () {
  $("#searchBar").click(function () {
    $(".arrow_img").hide();
  });
});

function selectcafes(name) {
  document.getElementById("cafecard").innerHTML = `${name}`;
  const data = cafes.find((data) => data.name == name);
  const description = data.description;
  const images = data.image;
  console.log(images);

  document.getElementById("suggestions").style.display = "none";
  document.getElementById("cafe_descriptioncard").innerHTML = `${description}`;
  var imgsrc = (document.getElementById("cafe_firstimg").src = `${images}`);
  console.log(imgsrc);
  document.getElementById("searchBar").value = name;
}


 // Hotel SearchBar

function suggestHotels() {
  const input = document.getElementById("searchBar").value;
  const data = hotel.map((data) => data.name);
  // console.log(data);
  const suggestions = data
    .filter((hotel) => hotel.toLowerCase().includes(input.toLowerCase()))
    .slice(0, 5);
  const suggestionsList = document.getElementById("suggestions");
  suggestionsList.innerHTML = "";

  if (suggestions.length > 0 && input !== "") {
    suggestionsList.style.display = "block";
    suggestions.forEach((hotel) => {
      const listItem = document.createElement("li");
      listItem.textContent = hotel;
      listItem.onclick = () => selectHotel(hotel);
      suggestionsList.appendChild(listItem);
    });
  } else {
    suggestionsList.style.display = "none";
  }
}

function selectHotel(name) {
  document.getElementById("hotelCard").innerHTML = `${name}`;
  const data = hotel.find((data) => data.name == name);
  const description = data.description;
  const images = data.image;
  console.log(images);

  document.getElementById("suggestions").style.display = "none";
  document.getElementById("hotel_descriptioncard").innerHTML = `${description}`;
  var imgsrc = (document.getElementById("hotel_firstimg").src = `${images}`);
  console.log(imgsrc);
  document.getElementById("searchBar").value = name;
}

