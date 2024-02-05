const cafes = [
  {
    id: 1,
    name: "3 story cafe",
    description:
      "A charming three-story sanctuary where aromas weave stories, flavorsdance, and patrons savor nourishment amidst captivating décor and ambiance.",
    image: "./assets/images/cafe image/1.  3 story cafe.jpg",
    otherimage: [
      "./Cafe photo/1.  3 story cafe/1.  3 story cafe_1.jpg",
      "./Cafe photo/1.  3 story cafe/1.  3 story cafe_1.jpeg",
      "./Cafe photo/1.  3 story cafe/1.  3 story cafe_1.jpeg",
      "./Cafe photo/1.  3 story cafe/1.  3 story cafe_1.jpeg",
      "./Cafe photo/1.  3 story cafe/1.  3 story cafe_1.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "12:45pm – 10:45pm",
    Review: "4.5",
    Average_cost: "500",
  },
  {
    id: 2,
    name: "5 star cafe",
    description:
      "Exquisite dining, impeccable service, and luxurious ambiance converge, defining this renowned five-star cafe's unparalleled gastronomic experience and sophistication.",
    image: "./assets/images/cafe image/2.  5 star cafe.jpg",
    otherimage: [
      "./Cafe photo/2.  5 star cafe/2.  5 star cafe_1.jpg",
      "./Cafe photo/2.  5 star cafe/2.  5 star cafe_2.jpg",
      "./Cafe photo/2.  5 star cafe/2.  5 star cafe_3.jpg",
      "./Cafe photo/2.  5 star cafe/2.  5 star cafe_4.jpg",
      "./Cafe photo/2.  5 star cafe/2.  5 star cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "9 am–9 pm",
    Review: "3.2",
    Average_cost: "100",
  },
  {
    id: 3,
    name: "14 Bean Addiction Cafe",
    description:
      "Bean Addiction Café: A java paradise brewing diverse flavors, fostering community, and fueling passions in a cozy, aromatic haven.",
    image: "./assets/images/cafe image/3. 14 Bean Addiction Cafe.jpg",
    otherimage: [
      "./Cafe photo/3. 14 Bean Addiction Cafe/3. 14 Bean Addiction Cafe_1.jpg",
      "./Cafe photo/3. 14 Bean Addiction Cafe/3. 14 Bean Addiction Cafe_2.jpeg",
      "./Cafe photo/3. 14 Bean Addiction Cafe/3. 14 Bean Addiction Cafe_3.jpg",
      "./Cafe photo/3. 14 Bean Addiction Cafe/3. 14 Bean Addiction Cafe_4.jpg",
      "./Cafe photo/3. 14 Bean Addiction Cafe/3. 14 Bean Addiction Cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11am – 11pm",
    Review: "3.5",
    Average_cost: "600",
  },

  {
    id: 4,
    name: "18.19 Cafe' Lounge",
    description:
      "18.19 Cafe' Lounge: Fusion flavors, chic ambiance, and relaxed vibes converge, creating a trendy haven for culinary delights and socializing.",
    image: "./assets/images/cafe image/4. 18.19 Cafe' Lounge.jpg",
    otherimage: [
      "./Cafe photo/4. 18.19 Cafe' Lounge/4. 18.19 Cafe' Lounge_1.jpeg",
      "./Cafe photo/4. 18.19 Cafe' Lounge/4. 18.19 Cafe' Lounge_2.jpg",
      "./Cafe photo/4. 18.19 Cafe' Lounge/4. 18.19 Cafe' Lounge_3.jpg",
      "./Cafe photo/4. 18.19 Cafe' Lounge/4. 18.19 Cafe' Lounge_4.jpg",
      "./Cafe photo/4. 18.19 Cafe' Lounge/4. 18.19 Cafe' Lounge_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: " 12noon – 11pm",
    Review: "3.9",
    Average_cost: "700",
  },
  {
    id: 5,
    name: "1210 coffe house",
    description:
      "1210 Coffee House: Cozy retreat brewing aromatic blends, fostering connections, and embracing the essence of community in every cup.",
    image: "./assets/images/cafe image/5. 1210 coffe house.jpg",
    otherimage: [
      "./Cafe photo/5. 1210 coffe house/5. 1210 coffe house_1.jpeg",
      "./Cafe photo/5. 1210 coffe house/5. 1210 coffe house_2.jpeg",
      "./Cafe photo/5. 1210 coffe house/5. 1210 coffe house_3.jpeg",
      "./Cafe photo/5. 1210 coffe house/5. 1210 coffe house_4.jpeg",
      "./Cafe photo/5. 1210 coffe house/5. 1210 coffe house_5.jpeg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11:30 am–12 am",
    Review: "5.0",
    Average_cost: "500",
  },
  {
    id: 6,
    name: "1441 Pizzeria Surat",
    description:
      "1441 Pizzeria Surat: A vibrant eatery serving authentic Italian flavors, creating a bustling haven for pizza aficionados and foodies",
    image: "./assets/images/cafe image/6. 1441 Pizzeria Surat.jpg",
    otherimage: [
      "./Cafe photo/6. 1441 Pizzeria Surat/6. 1441 Pizzeria Surat_1.jpeg",
      "./Cafe photo/6. 1441 Pizzeria Surat/6. 1441 Pizzeria Surat_2.jpg",
      "./Cafe photo/6. 1441 Pizzeria Surat/6. 1441 Pizzeria Surat_3.jpg",
      "./Cafe photo/6. 1441 Pizzeria Surat/6. 1441 Pizzeria Surat_4.jpg",
      "./Cafe photo/6. 1441 Pizzeria Surat/6. 1441 Pizzeria Surat_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11am – 12midnight",
    Review: "4.1",
    Average_cost: "600",
  },

  {
    id: 7,
    name: "1990 by crazy bites",
    description:
      "Nostalgic '90s-inspired eatery serving inventive comfort foods, fostering a vibrant atmosphere with neon vibes and retro tunes.",
    image: "./assets/images/cafe image/7. 1990 by crazy bites.jpg",
    otherimage: [
      "./Cafe photo/7. 1990 by crazy bites/7. 1990 by crazy bites_1.jpg",
      "./Cafe photo/7. 1990 by crazy bites/7. 1990 by crazy bites_2.jpg",
      "./Cafe photo/7. 1990 by crazy bites/7. 1990 by crazy bites_3.jpg",
      "./Cafe photo/7. 1990 by crazy bites/7. 1990 by crazy bites_4.jpg",
      "./Cafe photo/7. 1990 by crazy bites/7. 1990 by crazy bites_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "12–11 pm",
    Review: "4.1",
    Average_cost: "800",
  },
  {
    id: 8,
    name: "Anytime at k's cafe",
    description:
      "Anytime at K's Cafe: A cozy retreat offering diverse delights, fostering warmth, and serving up comfort in every cup.",
    image: "./assets/images/cafe image/8. anytime at k's cafe.jpg",
    otherimage: [
      "./Cafe photo/8. anytime at k's cafe/8. anytime at k's cafe_1.jpeg",
      "./Cafe photo/8. anytime at k's cafe/8. anytime at k's cafe_2.jpg",
      "./Cafe photo/8. anytime at k's cafe/8. anytime at k's cafe_3.jpg",
      "./Cafe photo/8. anytime at k's cafe/8. anytime at k's cafe_4.jpg",
      "./Cafe photo/8. anytime at k's cafe/8. anytime at k's cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "8:30 am–1 am",
    Review: "4.2",
    Average_cost: "600",
  },
  {
    id: 9,
    name: "Baithack Taste of Kulhad",
    description:
      "Baithack: Experience the rustic charm of Taste of Kulhad cafe—savoring culture-infused brews and flavors in a cozy, welcoming ambiance.",
    image: "./assets/images/cafe image/9. Baithack Taste of Kulhad.jpg",
    otherimage: [
      "./Cafe photo/9. Baithack Taste of Kulhad/9. Baithack Taste of Kulhad_1.jpeg",
      "./Cafe photo/9. Baithack Taste of Kulhad/9. Baithack Taste of Kulhad_2.jpg",
      "./Cafe photo/9. Baithack Taste of Kulhad/9. Baithack Taste of Kulhad_3.jpeg",
      "./Cafe photo/9. Baithack Taste of Kulhad/9. Baithack Taste of Kulhad_4.jpg",
      "./Cafe photo/9. Baithack Taste of Kulhad/9. Baithack Taste of Kulhad_5.jpeg",
    ],
    type: "./Cafe photo/veg.png",
    time: "8am – 12midnight ",
    Review: "3.2",
    Average_cost: "250",
  },
  {
    id: 10,
    name: "Bake walk coffee shop cafe",
    description:
      "Bake Walk Café: A cozy haven for artisanal pastries and meticulously crafted coffees in a welcoming, relaxed atmosphere.",
    image: "./assets/images/cafe image/10. bake walk coffee shop cafe.jpg",
    otherimage: [
      "./Cafe photo/10. bake walk coffee shop cafe/10. bake walk coffee shop cafe_1.jpg",
      "./Cafe photo/10. bake walk coffee shop cafe/10. bake walk coffee shop cafe_2.jpg",
      "./Cafe photo/10. bake walk coffee shop cafe/10. bake walk coffee shop cafe_3.jpg",
      "./Cafe photo/10. bake walk coffee shop cafe/10. bake walk coffee shop cafe_4.jpg",
      "./Cafe photo/10. bake walk coffee shop cafe/10. bake walk coffee shop cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "10 am–11 pm",
    Review: "4.0",
    Average_cost: "350",
  },
  {
    id: 11,
    name: "Baker bunch",
    description:
      "Baker Bunch: Where artisanal bakes meet creativity, offering a delightful array of treats in a warm, inviting ambiance.",
    image: "./assets/images/cafe image/11. baker bunch.jpg",
    otherimage: [
      "./Cafe photo/11. baker bunch/11. baker bunch_1.jpeg",
      "./Cafe photo/11. baker bunch/11. baker bunch_2.jpg",
      "./Cafe photo/11. baker bunch/11. baker bunch_3.jpg",
      "./Cafe photo/11. baker bunch/11. baker bunch_4.jpeg",
      "./Cafe photo/11. baker bunch/11. baker bunch_5.jpeg",
    ],
    type: "./Cafe photo/veg.png",
    time: "9am – 7pm",
    Review: "4.1",
    Average_cost: "400",
  },
  {
    id: 12,
    name: "BB socials cafe",
    description:
      "BB Socials Café: A vibrant hub merging global flavors, fostering connections through delectable dishes and welcoming spaces.",
    image: "./assets/images/cafe image/12.  bb socials cafe.jpg",
    otherimage: [
      "./Cafe photo/12.  bb socials cafe/12.  bb socials cafe_1.JPG",
      "./Cafe photo/12.  bb socials cafe/12.  bb socials cafe_2.JPG",
      "./Cafe photo/12.  bb socials cafe/12.  bb socials cafe_3.jpg",
      "./Cafe photo/12.  bb socials cafe/12.  bb socials cafe_4.jpg",
      "./Cafe photo/12.  bb socials cafe/12.  bb socials cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "12midnight – 1am, 11am – 12midnight",
    Review: "4.6",
    Average_cost: "700",
  },
  {
    id: 13,
    name: "Bite full cafe",
    description:
      "Bite Full Cafe: A cozy nook serving delectable bites and aromatic brews in a warm, inviting atmosphere for all",
    image: "./assets/images/cafe image/13. bite full cafe.jpeg",
    otherimage: [
      "./Cafe photo/13. bite full cafe/13. bite full cafe_1.jpg",
      "./Cafe photo/13. bite full cafe/13. bite full cafe_2.jpg",
      "./Cafe photo/13. bite full cafe/13. bite full cafe_3.jpg",
      "./Cafe photo/13. bite full cafe/13. bite full cafe_4.jpg",
      "./Cafe photo/13. bite full cafe/13. bite full cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "12midnight – 3am, 3pm – 12midnight",
    Review: "3.9",
    Average_cost: "300",
  },
  {
    id: 14,
    name: "Blue corinder retsurant",
    description:
      "Blue Coriander Restaurant: Fusion flavors, elegance, and culinary artistry merge in a sophisticated dining experience for discerning palates.",
    image: "./assets/images/cafe image/14. blue corinder retsurant.jpeg",
    otherimage: [
      "./Cafe photo/14. blue corinder retsurant/14. blue corinder retsurant_1.jpeg",
      "./Cafe photo/14. blue corinder retsurant/14. blue corinder retsurant_2.jpg",
      "./Cafe photo/14. blue corinder retsurant/14. blue corinder retsurant_3.jpg",
      "./Cafe photo/14. blue corinder retsurant/14. blue corinder retsurant_4.jpg",
      "./Cafe photo/14. blue corinder retsurant/14. blue corinder retsurant_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "7am – 10am, 12noon – 3:30pm, 7pm – 11pm",
    Review: "3.9",
    Average_cost: "1000",
  },
  {
    id: 15,
    name: "Bombay Brooklyn surat",
    description:
      "Bombay Brooklyn Surat: A fusion eatery blending Mumbai's zest with Brooklyn's flair, delivering eclectic flavors in vibrant Surat.",
    image: "./assets/images/cafe image/15. bombay brooklyn surat.jpg",
    otherimage: [
      "./Cafe photo/15. bombay brooklyn surat/15. bombay brooklyn surat_1.jpeg",
      "./Cafe photo/15. bombay brooklyn surat/15. bombay brooklyn surat_2.jpg",
      "./Cafe photo/15. bombay brooklyn surat/15. bombay brooklyn surat_3.jpg",
      "./Cafe photo/15. bombay brooklyn surat/15. bombay brooklyn surat_4.jpg",
      "./Cafe photo/15. bombay brooklyn surat/15. bombay brooklyn surat_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11am – 11pm",
    Review: "4.6",
    Average_cost: "700",
  },
  {
    id: 16,
    name: "Bring Me Coffee",
    description:
      "Bring Me Coffee: A cozy haven serving an array of expertly brewed blends in a welcoming, relaxed atmosphere for all.",
    image: "./assets/images/cafe image/16. Bring Me Coffee.jpg",
    otherimage: [
      "./Cafe photo/16. Bring Me Coffee/16. Bring Me Coffee_1.jpeg",
      "./Cafe photo/16. Bring Me Coffee/16. Bring Me Coffee_2.jpg",
      "./Cafe photo/16. Bring Me Coffee/16. Bring Me Coffee_3.jpg",
      "./Cafe photo/16. Bring Me Coffee/16. Bring Me Coffee_4.jpg",
      "./Cafe photo/16. Bring Me Coffee/16. Bring Me Coffee_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "10 am–1 am",
    Review: "4.2",
    Average_cost: "800",
  },
  {
    id: 17,
    name: "Cafe Beats Restaurant",
    description:
      "Cafe Beats Restaurant: Fusion flavors, rhythmic ambiance, and delectable dishes create a harmonious dining experience for every palate.",
    image: "./assets/images/cafe image/17. Cafe Beats Restaurant.jpg",
    otherimage: [
      "./Cafe photo/17. Cafe Beats Restaurant/17. Cafe Beats Restaurant_1.jpg",
      "./Cafe photo/17. Cafe Beats Restaurant/17. Cafe Beats Restaurant_2.jpg",
      "./Cafe photo/17. Cafe Beats Restaurant/17. Cafe Beats Restaurant_3.jpeg",
      "./Cafe photo/17. Cafe Beats Restaurant/17. Cafe Beats Restaurant_4.jpg",
      "./Cafe photo/17. Cafe Beats Restaurant/17. Cafe Beats Restaurant_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11am – 11pm",
    Review: "4.3",
    Average_cost: "1000",
  },
  {
    id: 18,
    name: "Cafe coffe day",
    description:
      "Cafe Coffee Day: A cozy retreat for aromatic brews and casual conversations in a relaxed, inviting ambiance for all.",
    image: "./assets/images/cafe image/18. cafe coffe day.jpg",
    otherimage: [
      "./Cafe photo/18. cafe coffe day/18. cafe coffe day_1.jpg",
      "./Cafe photo/18. cafe coffe day/18. cafe coffe day_2.jpg",
      "./Cafe photo/18. cafe coffe day/18. cafe coffe day_3.jpg",
      "./Cafe photo/18. cafe coffe day/18. cafe coffe day_4.jpg",
      "./Cafe photo/18. cafe coffe day/18. cafe coffe day_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: " 11:00 am - 11:30 pm",
    Review: "4.0",
    Average_cost: "750",
  },
  {
    id: 19,
    name: "Cafe De Meet",
    description:
      "Cafe De Meet: A cozy spot where flavors unite, offering comfort food and delightful brews in a welcoming ambiance.",
    image: "./assets/images/cafe image/19. Cafe De Meet.jpg",
    otherimage: [
      "./Cafe photo/19. Cafe De Meet/19. Cafe De Meet_1.jpg",
      "./Cafe photo/19. Cafe De Meet/19. Cafe De Meet_2.jpg",
      "./Cafe photo/19. Cafe De Meet/19. Cafe De Meet_3.jpg",
      "./Cafe photo/19. Cafe De Meet/19. Cafe De Meet_4.jpg",
      "./Cafe photo/19. Cafe De Meet/19. Cafe De Meet_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "12noon – 11pm",
    Review: "4.1",
    Average_cost: "700",
  },
  {
    id: 20,
    name: "Cafe nair row",
    description:
      "Cafe Noir is a pure coffee bar, made by grinding coffee beans with our in-house organic cacao butter and minimal organic sugar.",
    image: "./assets/images/cafe image/20. cafe nair row.jpeg",
    otherimage: [
      "./Cafe photo/20. cafe nair row/20. cafe nair row-1.jpg",
      "./Cafe photo/20. cafe nair row/20. cafe nair row_2.jpg",
      "./Cafe photo/20. cafe nair row/20. cafe nair row_3.jpg",
      "./Cafe photo/20. cafe nair row/_4.jpg",
      "./Cafe photo/20. cafe nair row/_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11am – 12midnight",
    Review: "4.6",
    Average_cost: "1500",
  },
  {
    id: 21,
    name: "Cafe White Eye",
    description:
      "Cafe White Eye: A serene space serving aromatic coffee and delectable pastries, offering a tranquil respite in a welcoming setting.",
    image: "./assets/images/cafe image/21. Cafe White Eye.jpg",
    otherimage: [
      "./Cafe photo/21. Cafe White Eye/21. Cafe White Eye_1.jpg",
      "./Cafe photo/21. Cafe White Eye/21. Cafe White Eye_2.jpg",
      "./Cafe photo/21. Cafe White Eye/21. Cafe White Eye_3.jpg",
      "./Cafe photo/21. Cafe White Eye/21. Cafe White Eye_4.jpg",
      "./Cafe photo/21. Cafe White Eye/21. Cafe White Eye_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "12–11:30 pm",
    Review: "4.4",
    Average_cost: "310",
  },
  {
    id: 22,
    name: "Cafe-24",
    description:
      "Cafe 24: A bustling spot offering round-the-clock delights, from comforting brews to savory bites, in a vibrant, welcoming atmosphere.",
    image: "./assets/images/cafe image/22. Cafe-24.jpg",
    otherimage: [
      "./Cafe photo/22. Cafe-24/22. Cafe-24_1.jpg",
      "./Cafe photo/22. Cafe-24/22. Cafe-24_2.jpg",
      "./Cafe photo/22. Cafe-24/22. Cafe-24_3.jpeg",
      "./Cafe photo/22. Cafe-24/22. Cafe-24_4.jpg",
      "./Cafe photo/22. Cafe-24/22. Cafe-24_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "12:00 am - 11:59 pm",
    Review: "4.3",
    Average_cost: "500",
  },
  {
    id: 23,
    name: "chaii maker by enginers pal",
    description:
      "Chaii Maker by Engineers Pal: Craft your perfect cup of chai with precision and ease, engineered for tea enthusiasts.",
    image: "./assets/images/cafe image/23. chaii maker by enginers pal.jpg",
    otherimage: [
      "./Cafe photo/23. chaii maker by enginers pal/23. chaii maker by enginers pal_1.jpg",
      "./Cafe photo/23. chaii maker by enginers pal/23. chaii maker by enginers pal_2.jpg",
      "./Cafe photo/23. chaii maker by enginers pal/23. chaii maker by enginers pal_3.jpg",
      "./Cafe photo/23. chaii maker by enginers pal/23. chaii maker by enginers pal_4.jpg",
      "./Cafe photo/23. chaii maker by enginers pal/23. chaii maker by enginers pal_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11am – 11pm",
    Review: "3.9",
    Average_cost: "300",
  },
  {
    id: 24,
    name: "chai-sutta-bar",
    description:
      "Chai Sutta Bar: A vibrant spot offering chai and smokes, creating a lively ambiance perfect for socializing and unwinding.",
    image: "./assets/images/cafe image/24. chai-sutta-bar-.jpg",
    otherimage: [
      "./Cafe photo/24. chai-sutta-bar-/24. chai-sutta-bar--5.jpg",
      "./Cafe photo/24. chai-sutta-bar-/24. chai-sutta-bar-1.jpg",
      "./Cafe photo/24. chai-sutta-bar-/24. chai-sutta-bar-2.jpg",
      "./Cafe photo/24. chai-sutta-bar-/24. chai-sutta-bar-3.jpg",
      "./Cafe photo/24. chai-sutta-bar-/24. chai-sutta-bar-4.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "7:00 am - 12:00 am",
    Review: "4.8",
    Average_cost: "500",
  },
  {
    id: 25,
    name: "coffe beats arena",
    description:
      "Coffee Beats Arena: Where coffee melodies meet, offering rich brews and a lively atmosphere, creating a harmonious coffee experience.",
    image: "./assets/images/cafe image/25. coffe beats arena.jpg",
    otherimage: [
      "./Cafe photo/25. coffe beats arena/-3.jpg",
      "./Cafe photo/25. coffe beats arena/25. coffe beats arena_1.jpg",
      "./Cafe photo/25. coffe beats arena/4.jpg",
      "./Cafe photo/25. coffe beats arena/5.jpg",
      "./Cafe photo/25. coffe beats arena/_2.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11am – 10pm",
    Review: "3.4",
    Average_cost: "800",
  },
  {
    id: 26,
    name: "cafe beats arena",
    description:
      "Coffee Cafe N' Snacks: A cozy spot offering a variety of brews and delicious snacks in a welcoming, relaxed setting.",
    image: "./assets/images/cafe image/26. Coffe Cafe N' Snacks.jpg",
    otherimage: [
      "./Cafe photo/26. Coffe Cafe N' Snacks/26. Coffe Cafe N' Snacks_1.jpg",
      "./Cafe photo/26. Coffe Cafe N' Snacks/26. Coffe Cafe N' Snacks_2.jpg",
      "./Cafe photo/26. Coffe Cafe N' Snacks/26. Coffe Cafe N' Snacks_3.jpg",
      "./Cafe photo/26. Coffe Cafe N' Snacks/26. Coffe Cafe N' Snacks_4.jpg",
      "./Cafe photo/26. Coffe Cafe N' Snacks/26. Coffe Cafe N' Snacks_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11am – 10pm",
    Review: "4.3",
    Average_cost: "800",
  },
  {
    id: 27,
    name: "coffe castle cafe",
    description:
      "Coffee Castle Cafe: A cozy retreat serving aromatic brews and delightful pastries, offering a welcoming haven for coffee enthusiasts.",
    image: "./assets/images/cafe image/27. coffe castle cafe.jpg",
    otherimage: [
      "./Cafe photo/27. coffe castle cafe/27. coffe castle cafe-5.jpg",
      "./Cafe photo/27. coffe castle cafe/27. coffe castle cafe_1.jpeg",
      "./Cafe photo/27. coffe castle cafe/27. coffe castle cafe_2.jpg",
      "./Cafe photo/27. coffe castle cafe/27. coffe castle cafe_3.jpeg",
      "./Cafe photo/27. coffe castle cafe/27. coffe castle cafe_4.jpeg",
    ],
    type: "./Cafe photo/veg.png",
    time: "8:30 am–8:30 pm",
    Review: "4.9",
    Average_cost: "500",
  },
  {
    id: 28,
    name: "Coffee Culture - The Ristorante Lounge",
    description:
      "Coffee Culture - The Ristorante Lounge: A sophisticated blend of gourmet coffee, culinary finesse, and inviting lounge ambiance.",
    image:
      "./assets/images/cafe image/28. Coffee Culture - The Ristorante Lounge.jpg",
    otherimage: [
      "./Cafe photo/29. Coffee King - Adajan/29. Coffee King - Adajan_1.jpg",
      "./Cafe photo/29. Coffee King - Adajan/29. Coffee King - Adajan_2.jpg",
      "./Cafe photo/29. Coffee King - Adajan/29. Coffee King - Adajan_3.jpg",
      "./Cafe photo/29. Coffee King - Adajan/4.JPG",
      "./Cafe photo/29. Coffee King - Adajan/5.JPG",
    ],
    type: "./Cafe photo/veg.png",
    time: "10am – 11pm",
    Review: "4.1",
    Average_cost: "1000",
  },
  {
    id: 29,
    name: "Coffee King",
    description:
      "Coffee King - Adajan: A local hotspot offering a variety of aromatic brews in a cozy, welcoming atmosphere for all.",
    image: "./assets/images/cafe image/29. Coffee King - Adajan.jpg",
    otherimage: [
      "./Cafe photo/29. Coffee King - Adajan/29. Coffee King - Adajan_1.jpg",
      "./Cafe photo/29. Coffee King - Adajan/29. Coffee King - Adajan_2.jpg",
      "./Cafe photo/29. Coffee King - Adajan/29. Coffee King - Adajan_3.jpg",
      "./Cafe photo/29. Coffee King - Adajan/4.JPG",
      "./Cafe photo/29. Coffee King - Adajan/5.JPG",
    ],
    type: "./Cafe photo/veg.png",
    time: "11am – 11pm",
    Review: "4.3",
    Average_cost: "800",
  },
  {
    id: 30,
    name: "Coffee King - vesu",
    description:
      "Coffee King - Vesu: A vibrant hub serving an array of aromatic coffees in a welcoming, lively ambiance for all.",
    image: "./assets/images/cafe image/30. Coffee King - vesu.jpg",
    otherimage: [
      "./Cafe photo/30. Coffee King - vesu/30. Coffee King - vesu_1.jpeg",
      "./Cafe photo30. Coffee King - vesu/30. Coffee King - vesu_2.jpg",
      "./Cafe photo30. Coffee King - vesu/30. Coffee King - vesu_3.jpg",
      "./Cafe photo30. Coffee King - vesu/30. Coffee King - vesu_4.jpg",
      "./Cafe photo30. Coffee King - vesu/30. Coffee King - vesu_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11am – 11pm",
    Review: "4.3",
    Average_cost: "800",
  },
  {
    id: 31,
    name: "crazy cafe dhosa",
    description:
      "Crazy Cafe Dosa: A quirky eatery crafting inventive dosas with creative fillings, promising a flavorful and unique dining experience.",
    image: "./assets/images/cafe image/31. crazy cafe dhosa.jpg",
    otherimage: [
      "./Cafe photo/31. crazy cafe dhosa/31. crazy cafe dhosa_1.jpg",
      "./Cafe photo/31. crazy cafe dhosa/31. crazy cafe dhosa_2.jpg",
      "./Cafe photo/31. crazy cafe dhosa/31. crazy cafe dhosa_3.jpg",
      "./Cafe photo/31. crazy cafe dhosa/31. crazy cafe dhosa_4.jpg",
      "./Cafe photo/31. crazy cafe dhosa/31. crazy cafe dhosa_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "5:00 pm - 12:00 am",
    Review: "4.4",
    Average_cost: "450",
  },
  {
    id: 32,
    name: "Cream 'N' Crust Cafe",
    description:
      "Cream 'N' Crust Cafe: A cozy spot offering delectable desserts and savory treats in a warm, inviting ambiance.",
    image: "./assets/images/cafe image/32. Cream 'N' Crust Cafe.jpg",
    otherimage: [
      "./Cafe photo/32. Cream 'N' Crust Cafe/32. Cream 'N' Crust Cafe_1.jpeg",
      "./Cafe photo/32. Cream 'N' Crust Cafe/32. Cream 'N' Crust Cafe_2.jpeg",
      "./Cafe photo/32. Cream 'N' Crust Cafe/32. Cream 'N' Crust Cafe_3.jpeg",
      "./Cafe photo/32. Cream 'N' Crust Cafe/32. Cream 'N' Crust Cafe_4.jpg",
      "./Cafe photo/32. Cream 'N' Crust Cafe/32. Cream 'N' Crust Cafe_5.jpeg",
    ],
    type: "./Cafe photo/veg.png",
    time: "12:30pm – 11pm",
    Review: "4.2",
    Average_cost: "800",
  },
  {
    id: 33,
    name: "Deck 9 Restaurant",
    description:
      "Deck 9 Restaurant: A waterfront dining experience with panoramic views, offering exquisite cuisine and a relaxing atmosphere by the sea.",
    image: "./assets/images/cafe image/33. deck 9 resturant.jpg",
    otherimage: [
      "./Cafe photo/33. deck 9 resturant/33. deck 9 resturant_1.jpg",
      "./Cafe photo/33. deck 9 resturant/33. deck 9 resturant_2.jpg",
      "./Cafe photo/33. deck 9 resturant/33. deck 9 resturant_3.jpg",
      "./Cafe photo/33. deck 9 resturant/33. deck 9 resturant_4.jpg",
      "./Cafe photo/33. deck 9 resturant/33. deck 9 resturant_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "12–11 pm",
    Review: "4.2",
    Average_cost: "1500",
  },
  {
    id: 34,
    name: "De'willa Garden Restaurant",
    description:
      "De'willa Garden Restaurant: Serene ambiance, garden-fresh cuisine, offering a tranquil dining experience amidst natural beauty and flavorful dishes.",
    image: "./assets/images/cafe image/34. De'willa garden Restaurant.jpg",
    otherimage: [
      "./Cafe photo/34. De'willa garden Restaurant/34. De'willa garden Restaurant_1.jpg",
      "./Cafe photo/34. De'willa garden Restaurant/34. De'willa garden Restaurant_2.jpg",
      "./Cafe photo/34. De'willa garden Restaurant/34. De'willa garden Restaurant_3.jpg",
      "./Cafe photo/34. De'willa garden Restaurant/34. De'willa garden Restaurant_4.jpg",
      "./Cafe photo/34. De'willa garden Restaurant/34. De'willa garden Restaurant_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "Opens at 6:30pm",
    Review: "3.4",
    Average_cost: "1000",
  },
  {
    id: 35,
    name: "Dugout Turf & Sundowners Cafe",
    description:
      "Dugout Turf: A vibrant sports bar nestled beside Sundowners Cafe, offering a lively atmosphere, great drinks, and delicious bites.",
    image: "./assets/images/cafe image/35. Dugout Turf & Sundowners Cafe.jpg",
    otherimage: [
      "./Cafe photo/35. Dugout Turf & Sundowners Cafe/35. Dugout Turf & Sundowners Cafe_1.jpg",
      "./Cafe photo/35. Dugout Turf & Sundowners Cafe/35. Dugout Turf & Sundowners Cafe_2.jpg",
      "./Cafe photo/35. Dugout Turf & Sundowners Cafe/35. Dugout Turf & Sundowners Cafe_3.jpg",
      "./Cafe photo/35. Dugout Turf & Sundowners Cafe/35. Dugout Turf & Sundowners Cafe_4.jpg",
      "./Cafe photo/35. Dugout Turf & Sundowners Cafe/35. Dugout Turf & Sundowners Cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "10am – 10:30am",
    Review: "4.4",
    Average_cost: "500",
  },
  {
    id: 36,
    name: "eatailor's cafe",
    description:
      "eatailor's cafe: A trendy spot where custom flavors meet cozy ambiance, offering personalized dishes and a welcoming atmosphere.",
    image: "./assets/images/cafe image/36. eatailor's cafe.jpg",
    otherimage: [
      "./Cafe photo/36. eatailor's cafe/36. eatailor's cafe_1.jpg",
      "./Cafe photo/36. eatailor's cafe/36. eatailor's cafe_2.jpg",
      "./Cafe photo/36. eatailor's cafe/36. eatailor's cafe_3.jpg",
      "./Cafe photo/36. eatailor's cafe/36. eatailor's cafe_4.jpg",
      "./Cafe photo/36. eatailor's cafe/36. eatailor's cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "12:00 am - 11:59 pm",
    Review: "4.9",
    Average_cost: "300",
  },
  {
    id: 37,
    name: "Engine cafe",
    description:
      "Engine Cafe: A vibrant hub serving up artisanal brews and delectable bites in a dynamic atmosphere fused with industrial charm.",
    image: "./assets/images/cafe image/37. Engine cafe.jpg",
    otherimage: [
      "./Cafe photo/37. Engine cafe/37. Engine cafe_1.jpg",
      "./Cafe photo/37. Engine cafe/37. Engine caf_2.jpg",
      "./Cafe photo/37. Engine cafe/37. Engine caf_3.jpeg",
      "./Cafe photo/37. Engine cafe/37. Engine caf_4.jpeg",
      "./Cafe photo/37. Engine cafe/37. Engine caf_5.jpeg",
    ],
    type: "./Cafe photo/veg.png",
    time: "12noon – 3am",
    Review: "4.0",
    Average_cost: "500",
  },
  {
    id: 38,
    name: "EPICURE THE VEGAN CAFE",
    description:
      "EPICURE THE VEGAN CAFE: A plant-based haven offering flavorful dishes in a welcoming space, promoting sustainability and delicious dining.",
    image: "./assets/images/cafe image/38. EPICURE THE VEGAN CAFE.jpg",
    otherimage: [
      "./Cafe photo/38. EPICURE THE VEGAN CAFE/38. EPICURE THE VEGAN CAFE_1.jpg",
      "./Cafe photo/38. EPICURE THE VEGAN CAFE/38. EPICURE THE VEGAN CAFE_2.jpg",
      "./Cafe photo/38. EPICURE THE VEGAN CAFE/38. EPICURE THE VEGAN CAFE_3.jpg",
      "./Cafe photo/38. EPICURE THE VEGAN CAFE/38. EPICURE THE VEGAN CAFE_4.jpg",
      "./Cafe photo/38. EPICURE THE VEGAN CAFE/38. EPICURE THE VEGAN CAFE_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11:30am – 11pm",
    Review: "5.0",
    Average_cost: "400",
  },
  {
    id: 39,
    name: "Gate to Goa",
    description:
      "Gate to Goa: A culinary journey offering authentic Goan cuisine, vibrant spices, and a taste of India's coastal flavors.",
    image: "./assets/images/cafe image/39. gate to goa.jpg",
    otherimage: [
      "./Cafe photo/39. gate to goa/39. gate to goa_1.png",
      "./Cafe photo/39. gate to goa/39. gate to goa_2.jpg",
      "./Cafe photo/39. gate to goa/39. gate to goa_3.jpg",
      "./Cafe photo/39. gate to goa/39. gate to goa_4.jpg",
      "./Cafe photo/39. gate to goa/39. gate to goa_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "2pm – 11:30pm",
    Review: "3.8",
    Average_cost: "1000",
  },
  {
    id: 40,
    name: "Get In Cafe",
    description:
      "Get In Cafe: A cozy spot serving delicious brews and snacks, inviting patrons to relax and savor in a welcoming ambiance.",
    image: "./assets/images/cafe image/40. get in cafe.jpg",
    otherimage: [
      "./Cafe photo/40. get in cafe/40. get in cafe_1.jpeg",
      "./Cafe photo/40. get in cafe/40. get in cafe_2.jpg",
      "./Cafe photo/40. get in cafe/40. get in cafe_3.jpg",
      "./Cafe photo/40. get in cafe/40. get in cafe_4.jpeg",
      "./Cafe photo/40. get in cafe/40. get in cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "9 am–10 pm",
    Review: "4.8",
    Average_cost: "500",
  },
  {
    id: 41,
    name: "Ghalib and Company Cafe",
    description:
      "Ghalib and Company Cafe: A cultural rendezvous where aromatic teas and flavorsome bites converge, offering a cozy retreat for enthusiasts of literature and conversation.",
    image: "./assets/images/cafe image/41. ghalib and company cafe.jpg",
    otherimage: [
      "./Cafe photo/41. ghalib and company cafe/41. ghalib and company cafe_1.jpeg",
      "./Cafe photo/41. ghalib and company cafe/41. ghalib and company cafe_2.jpg",
      "./Cafe photo/41. ghalib and company cafe/41. ghalib and company cafe_3.jpg",
      "./Cafe photo/41. ghalib and company cafe/41. ghalib and company cafe_4.jpg",
      "./Cafe photo/41. ghalib and company cafe/41. ghalib and company cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11:00pm – 11:00pm",
    Review: "4.2",
    Average_cost: "450",
  },
  {
    id: 42,
    name: "Grill Bar",
    description:
      "Grill Bar: A sizzling hotspot offering an array of grilled delicacies, vibrant cocktails, and a lively atmosphere for social gatherings.",
    image: "./assets/images/cafe image/42. grill bar.jpg",
    otherimage: [
      "./Cafe photo/42. grill bar/42. grill bar_1.jpg",
      "./Cafe photo/42. grill bar/42. grill bar_2.jpg",
      "./Cafe photo/42. grill bar/42. grill bar_3.jpg",
      "./Cafe photo/42. grill bar/42. grill bar_4.jpg",
      "./Cafe photo/42. grill bar/42. grill bar_4.jpg_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11:15am – 11:30pm",
    Review: "4.6",
    Average_cost: "500",
  },
  {
    id: 43,
    name: "HUBER AND HOLLY",
    description:
      "Huber and Holly: A whimsical ice cream parlor crafting playful flavors and colorful desserts, offering a delightful sweet escape.",
    image: "./assets/images/cafe image/43. HUBER AND HOLLY.jpg",
    otherimage: [
      "./Cafe photo/43. HUBER AND HOLLY/43. HUBER AND HOLLY_1.jpg",
      "./Cafe photo/43. HUBER AND HOLLY/43. HUBER AND HOLLY_2.jpg",
      "./Cafe photo/43. HUBER AND HOLLY/43. HUBER AND HOLLY_3.jpg",
      "./Cafe photo/43. HUBER AND HOLLY/43. HUBER AND HOLLY_4.jpg",
      "./Cafe photo/43. HUBER AND HOLLY/43. HUBER AND HOLLY_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11am – 12midnight",
    Review: "3.7",
    Average_cost: "600",
  },
  {
    id: 44,
    name: "in5nite Vr mall cafe",
    description:
      "in5nite VR Mall Cafe: A modern oasis serving refreshments, perfect for a pause while indulging in virtual reality adventures.",
    image: "./assets/images/cafe image/44. in5nite Vr mall cafe.jpg",
    otherimage: [
      "./Cafe photo/44. in5nite Vr mall cafe/44. in5nite Vr mall cafe_1.jpeg",
      "./Cafe photo/44. in5nite Vr mall cafe/44. in5nite Vr mall cafe_2.jpg",
      "./Cafe photo/44. in5nite Vr mall cafe/44. in5nite Vr mall cafe_3.jpg",
      "./Cafe photo/44. in5nite Vr mall cafe/44. in5nite Vr mall cafe_4.jpg",
      "./Cafe photo/44. in5nite Vr mall cafe/44. in5nite Vr mall cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11:30am – 12midnight",
    Review: "4.0",
    Average_cost: "300",
  },
  {
    id: 45,
    name: "It's Mirchi Surat",
    description:
      "It's Mirchi Surat: A spicy haven celebrating vibrant Indian flavors, offering an array of zesty dishes in a lively atmosphere.",
    image: "./assets/images/cafe image/45. It's Mirchi Surat.jpg",
    otherimage: [
      "./Cafe photo/45. It's Mirchi Surat/45. It's Mirchi Surat_1.jpeg",
      "./Cafe photo/45. It's Mirchi Surat/45. It's Mirchi Surat_2.jpg",
      "./Cafe photo/45. It's Mirchi Surat/45. It's Mirchi Surat_3.jpg",
      "./Cafe photo/45. It's Mirchi Surat/45. It's Mirchi Surat_4.jpg",
      "./Cafe photo/45. It's Mirchi Surat/45. It's Mirchi Surat_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "12noon – 11pm",
    Review: "4.5",
    Average_cost: "1350",
  },
  {
    id: 46,
    name: "jungle cafe and resturant",
    description:
      "Jungle Cafe & Restaurant: A lush retreat serving delectable cuisine amidst a nature-inspired setting, offering a serene dining experience.",
    image: "./assets/images/cafe image/46. jungle cafe and resturant.jpg",
    otherimage: [
      "./Cafe photo/46. jungle cafe and resturant/46. jungle cafe and resturant_1.jpg",
      "./Cafe photo46. jungle cafe and resturant/46. jungle cafe and resturant_2.jpg",
      "./Cafe photo46. jungle cafe and resturant/46. jungle cafe and resturant_3.png",
      "./Cafe photo46. jungle cafe and resturant/46. jungle cafe and resturant_4.jpg",
      "./Cafe photo46. jungle cafe and resturant/46. jungle cafe and resturant_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11am – 8pm",
    Review: "4.3",
    Average_cost: "1000",
  },
  {
    id: 47,
    name: "kandeel resturant",
    description:
      "Kandeel Restaurant: A cultural haven offering authentic cuisine in a welcoming ambiance, celebrating tradition through flavorful dishes and warm hospitality.",
    image: "./assets/images/cafe image/47. kandeel resturant.jpg",
    otherimage: [
      "./Cafe photo/47. kandeel resturant/_3.jpg",
      "./Cafe photo/47. kandeel resturant/47. kandeel resturant_1.jpeg",
      "./Cafe photo/47. kandeel resturant/47. kandeel resturant_1.jpeg",
      "./Cafe photo/47. kandeel resturant/4.jpg",
      "./Cafe photo/47. kandeel resturant/5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "7am – 11:30pm",
    Review: "4.0",
    Average_cost: "700",
  },
  {
    id: 48,
    name: "kezik cakes cafe",
    description:
      "Kezik Cakes Cafe offers delightful homemade treats in a cozy atmosphere. Indulge in artisanal pastries, cakes, and specialty coffee creations with warm hospitality.",
    image: "./assets/images/cafe image/48. kezik cakes cafe.jpg",
    otherimage: [
      "./Cafe photo/48. kezik cakes cafe/48. kezik cakes cafe_1.jpg",
      "./Cafe photo/48. kezik cakes cafe/48. kezik cakes cafe_2.jpg",
      "./Cafe photo/48. kezik cakes cafe/48. kezik cakes cafe_3.jpg",
      "./Cafe photo/48. kezik cakes cafe/48. kezik cakes cafe_4.jpg",
      "./Cafe photo/48. kezik cakes cafe/48. kezik cakes cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "9:00 am - 10:30 pm",
    Review: "3.8",
    Average_cost: "200",
  },
  {
    id: 49,
    name: "Kinaara The Café",
    description:
      "Kinaara The Café: A vibrant spot serving fusion cuisine with global flavors, fostering community in a relaxed, inviting ambiance.",
    image: "./assets/images/cafe image/49. Kinaara The Café.jpg",
    otherimage: [
      "./Cafe photo/49. Kinaara The Café/49. Kinaara The Café_1.jpg",
      "./Cafe photo/49. Kinaara The Café/49. Kinaara The Café_2.jpg",
      "./Cafe photo/49. Kinaara The Café/49. Kinaara The Café_3.jpg",
      "./Cafe photo/49. Kinaara The Café/49. Kinaara The Café_4.jpg",
      "./Cafe photo/49. Kinaara The Café/49. Kinaara The Café_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "2pm – 12midnight",
    Review: "4.0",
    Average_cost: "500",
  },
  {
    id: 50,
    name: "koffe 143 cafe",
    description:
      "Koffe 143 Cafe: A trendy spot serving premium coffee blends alongside light bites in a cozy, modern ambiance for all.",
    image: "./assets/images/cafe image/50. koffe 143 cafe.jpg",
    otherimage: [
      "./Cafe photo/50. koffe 143 cafe/50. koffe 143 cafe_1.jpg",
      "./Cafe photo50. koffe 143 cafe/50. koffe 143 cafe_2.jpg",
      "./Cafe photo50. koffe 143 cafe/50. koffe 143 cafe_3.jpg",
      "./Cafe photo50. koffe 143 cafe/50. koffe 143 cafe_4.jpg",
      "./Cafe photo50. koffe 143 cafe/50. koffe 143 cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "10:30am – 11:30pm",
    Review: "3.9",
    Average_cost: "500",
  },
  {
    id: 51,
    name: "Koselig",
    description:
      "Koselig: A charming nook exuding warmth, inviting patrons to unwind in cozy comfort with delightful comfort food and ambiance.",
    image: "./assets/images/cafe image/51. Koselig.jpg",
    otherimage: [
      "./Cafe photo/51. Koselig/51. Koselig.jpg",
      "./Cafe photo/51. Koselig/51. Koselig_2.jpg",
      "./Cafe photo/51. Koselig/51. Koselig_3.jpg",
      "./Cafe photo/51. Koselig/51. Koselig_4.jpg",
      "./Cafe photo/51. Koselig/51. Koselig_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "12noon – 11:30pm",
    Review: "3.9",
    Average_cost: "1200",
  },
  {
    id: 52,
    name: "K's Charcoal",
    description:
      "K's Charcoal: A culinary hotspot renowned for its exquisite grilled specialties, infusing bold flavors through charcoal-infused creations.",
    image: "./assets/images/cafe image/52. k's charcoal.jpg",
    otherimage: [
      "./Cafe photo/52. k's charcoal/52. k's charcoal_1.jpg",
      "./Cafe photo/52. k's charcoal/52. k's charcoal_2.jpeg",
      "./Cafe photo/52. k's charcoal/52. k's charcoal_3.jpg",
      "./Cafe photo/52. k's charcoal/52. k's charcoal_4.jpg",
      "./Cafe photo/52. k's charcoal/52. k's charcoal_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "12noon – 11pm",
    Review: "4.3",
    Average_cost: "600",
  },
  {
    id: 53,
    name: "K's Verandah",
    description:
      "K's Verandah: An elegant retreat offering sophisticated cuisine and a serene ambiance, inviting guests to relish fine dining delights.",
    image: "./assets/images/cafe image/53. k's verandah.jpg",
    otherimage: [
      "./Cafe photo/53. k's verandah/53. k's verandah_1.jpg",
      "./Cafe photo/53. k's verandah/53. k's verandah_2.jpg",
      "./Cafe photo/53. k's verandah/53. k's verandah_3.jpg",
      "./Cafe photo/53. k's verandah/53. k's verandah_4.jpg",
      "./Cafe photo/53. k's verandah/53. k's verandah_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "12noon – 11pm",
    Review: "4.4",
    Average_cost: "500",
  },
  {
    id: 54,
    name: "K'tealy",
    description:
      "K-levels. amputee activity levels is determined using the Medicare Functional Classification Level (MFCL), also known as K-levels.",
    image: "./assets/images/cafe image/54. K'tealy.jpg",
    otherimage: [
      "./Cafe photo/54. K'tealy/54. K'tealy_1.jpg",
      "./Cafe photo/54. K'tealy/54. K'tealy_2.jpg",
      "./Cafe photo/54. K'tealy/54. K'tealy_3.jpg",
      "./Cafe photo/54. K'tealy/_4.jpg",
      "./Cafe photo/54. K'tealy/_4.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11:30am – 10:30pm",
    Review: "4.4",
    Average_cost: "300",
  },
  {
    id: 55,
    name: "La Casa Lucido Cafe",
    description:
      "La Casa Lucido: A culinary haven offering delectable cuisine, cozy ambiance, and warm hospitality for an unforgettable dining experience.",
    image:
      "./assets/images/cafe image/55. la casa lucdio cafe and resturant.jpg",
    otherimage: [
      "./Cafe photo/55. la casa lucdio cafe and resturant/55. la casa lucdio cafe and resturant_1.jpg",
      "./Cafe photo/55. la casa lucdio cafe and resturant/55. la casa lucdio cafe and resturant_2.jpg",
      "./Cafe photo/55. la casa lucdio cafe and resturant/55. la casa lucdio cafe and resturant_3.jpg",
      "./Cafe photo/55. la casa lucdio cafe and resturant/55. la casa lucdio cafe and resturant_4.jpg",
      "./Cafe photo/55. la casa lucdio cafe and resturant/55. la casa lucdio cafe and resturant_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "8:00am – 6:00pm",
    Review: "4.4",
    Average_cost: "500",
  },
  {
    id: 56,
    name: "La'Dude Cafe",
    description:
      "La'Dude Cafe: A trendy hotspot blending great coffee, delectable bites, and a vibrant atmosphere for a chic urban experience.",
    image: "./assets/images/cafe image/56. la'dude cafe.jpg",
    otherimage: [
      "./Cafe photo/56. la'dude cafe/56. la'dude cafe_1.jpg",
      "./Cafe photo56. la'dude cafe/56. la'dude cafe_2.jpg",
      "./Cafe photo56. la'dude cafe/56. la'dude cafe_3.jpg",
      "./Cafe photo56. la'dude cafe/56. la'dude cafe_4.jpg",
      "./Cafe photo56. la'dude cafe/56. la'dude cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11am – 10pm",
    Review: "4.4",
    Average_cost: "1000",
  },
  {
    id: 57,
    name: "Leonard's Italians",
    description:
      "Leonard's Italians: A culinary treasure trove offering authentic Italian flavors, rich aromas, and a cozy ambiance for a memorable dining affair.",
    image: "./assets/images/cafe image/57. leonards italians.jpg",
    otherimage: [
      "./Cafe photo/57. leonards italians/57. leonards italians_1.jpg",
      "./Cafe photo/57. leonards italians/57. leonards italians_2.jpg",
      "./Cafe photo/57. leonards italians/57. leonards italians_3.jpg",
      "./Cafe photo/57. leonards italians/57. leonards italians_4.jpg",
      "./Cafe photo/57. leonards italians/57. leonards italians_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "12noon – 11:30pm",
    Review: "4.3",
    Average_cost: "1400",
  },
  {
    id: 58,
    name: "Let's Eat Cafe & Restro",
    description:
      "Let's Eat Cafe & Restro: A vibrant dining spot offering diverse cuisines, friendly service, and a welcoming ambiance for delightful culinary experiences.",
    image: "./assets/images/cafe image/58. lets eat cafe and restro.jpg",
    otherimage: [
      "./Cafe photo/58. lets eat cafe and restro/58. lets eat cafe and restro_1.jpg",
      "./Cafe photo/58. lets eat cafe and restro/58. lets eat cafe and restro_2.jpg",
      "./Cafe photo/58. lets eat cafe and restro/58. lets eat cafe and restro_3.jpeg",
      "./Cafe photo/58. lets eat cafe and restro/58. lets eat cafe and restro_4.jpg",
      "./Cafe photo/58. lets eat cafe and restro/58. lets eat cafe and restro_5.jpeg",
    ],
    type: "./Cafe photo/veg.png",
    time: "7am – 11pm",
    Review: "4.2",
    Average_cost: "350",
  },
  {
    id: 59,
    name: "Let's Meet Cafe",
    description:
      "Let's Meet Cafe: A cozy rendezvous spot, serving aromatic brews, delectable bites, and fostering warm conversations in a relaxed setting.",
    image: "./assets/images/cafe image/59. Let's Meet Cafe.jpg",
    otherimage: [
      "./Cafe photo/59. Let's Meet Cafe/59. Let's Meet Cafe_1.jpg",
      "./Cafe photo/59. Let's Meet Cafe/59. Let's Meet Cafe_2.jpg",
      "./Cafe photo/59. Let's Meet Cafe/59. Let's Meet Cafe_3.jpg",
      "./Cafe photo/59. Let's Meet Cafe/59. Let's Meet Cafe_4.jpg",
      "./Cafe photo/59. Let's Meet Cafe/59. Let's Meet Cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11:30am – 11pm",
    Review: "4.4",
    Average_cost: "300",
  },
  {
    id: 60,
    name: "Levvel 3 Cafe",
    description:
      "Levvel 3 Cafe: A chic, elevated space offering gourmet coffee, delectable bites, and a stylish ambiance for a sophisticated urban retreat.",
    image: "./assets/images/cafe image/60. levvel 3 cafe.jpg",
    otherimage: [
      "./Cafe photo/60. levvel 5 cafe/60. levvel 5cafe_1.jpg",
      "./Cafe photo/60. levvel 5 cafe/60. levvel 5 cafe_2.jpg",
      "./Cafe photo/60. levvel 5 cafe/60. levvel 5 cafe_3.png",
      "./Cafe photo/60. levvel 5 cafe/60. levvel 5 cafe_4.png",
      "./Cafe photo/60. levvel 5 cafe/60. levvel 5 cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11:30 am–11 pm",
    Review: "4.4",
    Average_cost: "500",
  },
  {
    id: 61,
    name: "Live Cafe",
    description:
      "Live Cafe: A vibrant hotspot blending live music, delectable bites, and a cozy ambiance for unforgettable evenings of entertainment.",
    image: "./assets/images/cafe image/61. live cafe.jpg",
    otherimage: [
      "./Cafe photo/61. live cafe/61. live cafe_1.jpg",
      "./Cafe photo/61. live cafe/61. live cafe_2.jpg",
      "./Cafe photo/61. live cafe/61. live cafe_3.jpg",
      "./Cafe photo/61. live cafe/61. live cafe_4.jpg",
      "./Cafe photo/61. live cafe/61. live cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "7am–11 pm",
    Review: "4.3",
    Average_cost: "500",
  },
  {
    id: 62,
    name: "Livestram Cafe Bpipload",
    description:
      "Apologies, it seems like there might be a typo or a misunderstanding in your request. Could you please clarify or provide more information about livestram cafe bpipload ?",
    image: "./assets/images/cafe image/62. livestram cafe bpipload.jpg",
    otherimage: [
      "./Cafe photo/62. livestram cafe bpipload/62. livestram cafe bpipload_1.jpg",
      "./Cafe photo/62. livestram cafe bpipload/62. livestram cafe bpipload_2.jpg",
      "./Cafe photo/62. livestram cafe bpipload/62. livestram cafe bpipload_3.jpg",
      "./Cafe photo/62. livestram cafe bpipload/62. livestram cafe bpipload_4.jpg",
      "./Cafe photo/62. livestram cafe bpipload/62. livestram cafe bpipload_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "8 am–1 am",
    Review: "3.5",
    Average_cost: "500",
  },
  {
    id: 63,
    name: "Livestram Cafe",
    description:
      "Livestram Cafe: Where streaming meets coffee, offering tech-savvy ambiance, aromatic brews, and a cozy space for digital gatherings.",
    image: "./assets/images/cafe image/63. livestram cafe.jpg",
    otherimage: [
      "./Cafe photo/1.  3 story cafe/1.  3 story cafe_1.jpg",
      "./Cafe photo/1.  3 story cafe/1.  3 story cafe_2.jpg",
      "./Cafe photo/1.  3 story cafe/1.  3 story cafe_3.jpg",
      "./Cafe photo/1.  3 story cafe/1.  3 story cafe_4.jpg",
      "./Cafe photo/1.  3 story cafe/1.  3 story cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "9 am–12 am",
    Review: "4.5",
    Average_cost: "500",
  },
  {
    id: 64,
    name: "Mahual Cafe",
    description:
      "Mahual Cafe: A charming retreat serving aromatic brews and delectable bites in a cozy setting, embracing relaxation and community.",
    image: "./assets/images/cafe image/64. mahual cafe.jpg",
    otherimage: [
      "./Cafe photo/64. mahual cafe/64. mahual cafe_1.jpg",
      "./Cafe photo/64. mahual cafe/64. mahual cafe_2.jpg",
      "./Cafe photo/64. mahual cafe/64. mahual cafe_3.jpg",
      "./Cafe photo/64. mahual cafe/64. mahual cafe_4.jpg",
      "./Cafe photo/64. mahual cafe/64. mahual cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11:00 AM to 11:00 PM",
    Review: "4.1",
    Average_cost: "300",
  },
  {
    id: 65,
    name: "Meraki The Coffee House",
    description:
      "Meraki The Coffee House: A cozy haven where exceptional brews meet creative ambiance, inviting you to savor moments of inspiration.",
    image: "./assets/images/cafe image/65. Meraki The Coffee House.jpeg",
    otherimage: [
      "./Cafe photo/65. Meraki The Coffee House/65. Meraki The Coffee House_1.jpg",
      "./Cafe photo/65. Meraki The Coffee House/_2.jpg",
      "./Cafe photo/65. Meraki The Coffee House/_2.jpg",
      "./Cafe photo/65. Meraki The Coffee House/_2.jpg",
      "./Cafe photo/65. Meraki The Coffee House/_2.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "8:00AM-10:00PM",
    Review: "4.6",
    Average_cost: "500",
  },
  {
    id: 66,
    name: "MOJAVA",
    description:
      "Nescafe Parlor, a chic space blending Nescafe delights, trendy ambiance, and cozy comfort for delightful coffee experiences.",
    image: "./assets/images/cafe image/66. MOJAVA (Nescafe Parlor).jpg",
    otherimage: [
      "./Cafe photo/66. MOJAVA (Nescafe Parlor)/66. MOJAVA (Nescafe Parlor)_1.jpg",
      "./Cafe photo/66. MOJAVA (Nescafe Parlor)/66. MOJAVA (Nescafe Parlor)_2.jpg",
      "./Cafe photo/66. MOJAVA (Nescafe Parlor)/66. MOJAVA (Nescafe Parlor)_3.jpg",
      "./Cafe photo/66. MOJAVA (Nescafe Parlor)/66. MOJAVA (Nescafe Parlor)_4.jpg",
      "./Cafe photo/66. MOJAVA (Nescafe Parlor)/66. MOJAVA (Nescafe Parlor)_2.jpeg",
    ],
    type: "./Cafe photo/veg.png",
    time: "8 am–11:10 pm",
    Review: "4.0",
    Average_cost: "300",
  },
  {
    id: 67,
    name: "Moonstruck Coffee",
    description:
      "Moonstruck Coffee: Where celestial vibes meet aromatic brews, offering a cozy haven for sipping under the starry ambiance.",
    image: "./assets/images/cafe image/67. Moonstruck Coffee.jpg",
    otherimage: [
      "./Cafe photo/67. Moonstruck Coffee/67. Moonstruck Coffee_1.jpg",
      "./Cafe photo/67. Moonstruck Coffee/67. Moonstruck Coffee_2.jpg",
      "./Cafe photo/67. Moonstruck Coffee/67. Moonstruck Coffee_3.jpg",
      "./Cafe photo/67. Moonstruck Coffee/67. Moonstruck Coffee_4.jpg",
      "./Cafe photo/67. Moonstruck Coffee/67. Moonstruck Coffee_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "10:15am – 11pm",
    Review: "3.9",
    Average_cost: "400",
  },
  {
    id: 68,
    name: "Mr. G Coffee Cafe:",
    description:
      "Mr. G Coffee Cafe: A trendy spot brewing up artisanal blends and fostering a laid-back ambiance perfect for coffee aficionados to unwind.",
    image: "./assets/images/cafe image/68. mr g coffe cafe.jpg",
    otherimage: [
      "./Cafe photo/68. mr g coffe cafe/68. mr g coffe cafe_1.png",
      "./Cafe photo/68. mr g coffe cafe/68. mr g coffe cafe_2.jpeg",
      "./Cafe photo/68. mr g coffe cafe/68. mr g coffe cafe_3.jpeg",
      "./Cafe photo/68. mr g coffe cafe/68. mr g coffe cafe_4.jpeg",
      "./Cafe photo/68. mr g coffe cafe/68. mr g coffe cafe_5.jpeg",
    ],
    type: "./Cafe photo/veg.png",
    time: "8 am–9 pm",
    Review: "4.9",
    Average_cost: "500",
  },
  {
    id: 69,
    name: "Mr. Cafe",
    description:
      "Mr. Cafe: A charming spot with delectable brews and a welcoming atmosphere, inviting all for delightful coffee experiences.",
    image: "./assets/images/cafe image/69. Mr. Cafe.jpg",
    otherimage: [
      "./Cafe photo/69. Mr. Cafe/69. Mr. Cafe_1.jpg",
      "./Cafe photo/69. Mr. Cafe/69. Mr. Cafe_2.jpg",
      "./Cafe photo/69. Mr. Cafe/69. Mr. Cafe_3.jpg",
      "./Cafe photo/69. Mr. Cafe/69. Mr. Cafe_4.jpg",
      "./Cafe photo/69. Mr. Cafe/69. Mr. Cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11 am–12:30 am",
    Review: "4.2",
    Average_cost: "1200",
  },
  {
    id: 70,
    name: "Mysore Cafe",
    description:
      "Mysore Cafe: A cozy eatery offering authentic South Indian flavors, serving aromatic dishes that evoke the essence of Mysore's culinary heritage.",
    image: "./assets/images/cafe image/70. mysore-cafe-.jpg",
    otherimage: [
      "./Cafe photo/70. mysore-cafe-/70. mysore-cafe-_1.jpeg",
      "./Cafe photo/70. mysore-cafe-/70. mysore-cafe-_2.jpg",
      "./Cafe photo/70. mysore-cafe-/_3.jpg",
      "./Cafe photo/70. mysore-cafe-/_3.jpg",
      "./Cafe photo/70. mysore-cafe-/_3.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "8 am–10:30 pm",
    Review: "4.3",
    Average_cost: "250",
  },
  {
    id: 71,
    name: "Nomads cafe",
    description:
      "Nomads, wanderers of diverse cultures, roam in search of sustenance, embodying resilience, adaptability, and an intimate bond with nature.",
    image: "./assets/images/cafe image/71. Nomads.jpg",
    otherimage: [
      "./Cafe photo/71. Nomads/71. Nomads_1.jpg",
      "./Cafe photo/71. Nomads/71. Nomads_2.jpg",
      "./Cafe photo/71. Nomads/71. Nomads_3.jpg",
      "./Cafe photo/71. Nomads/71. Nomads_4.jpg",
      "./Cafe photo/71. Nomads/71. Nomads_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "1–11:30 pm",
    Review: "4.5",
    Average_cost: "400",
  },
  {
    id: 72,
    name: "Nukkad - Cafe And Restro",
    description:
      "Nukkad - a vibrant café and resto, captures the essence of local flavors, fostering community in a cozy, inviting ambiance.",
    image: "./assets/images/cafe image/72. Nukkad - Cafe And Restro.jpg",
    otherimage: [
      "./Cafe photo/72. Nukkad - Cafe And Restro/nukkad_1.jpeg",
      "./Cafe photo/72. Nukkad - Cafe And Restro/72. Nukkad - Cafe And Restro_2.jpg",
      "./Cafe photo/72. Nukkad - Cafe And Restro/72. Nukkad - Cafe And Restro_3.jpg",
      "./Cafe photo/72. Nukkad - Cafe And Restro/72. Nukkad - Cafe And Restro_4.jpg",
      "./Cafe photo/72. Nukkad - Cafe And Restro/72. Nukkad - Cafe And Restro_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "9 am–11 pm",
    Review: "3.9",
    Average_cost: "600",
  },
  {
    id: 73,
    name: "Paan Casa",
    description:
      "Paan Casa: Where tradition meets innovation, offering delectable paan creations in a modern, inviting setting that captivates the senses.",
    image: "./assets/images/cafe image/73. paan casa.jpeg",
    otherimage: [
      "./Cafe photo/73. paan casa/73. paan casa_1.jpeg",
      "./Cafe photo/73. paan casa/73. paan casa_2.jpg",
      "./Cafe photo/73. paan casa/73. paan casa_3.jpg",
      "./Cafe photo/73. paan casa/73. paan casa_4.jpg",
      "./Cafe photo/73. paan casa/73. paan casa_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "10am – 10pm",
    Review: "4.3",
    Average_cost: "650",
  },
  {
    id: 74,
    name: "Peiskos Coffee  Best Coffee Cafe In Surat",
    description:
      "Peiskos Coffee: Surat's ultimate coffee haven, serving top-notch brews in a cozy atmosphere that embodies warmth and relaxation.",
    image:
      "./assets/images/cafe image/74. Peiskos Coffee  Best Coffee Cafe In Surat.jpg",
    otherimage: [
      "./Cafe photo/74. Peiskos Coffee  Best Coffee Cafe In Surat/74. Peiskos Coffee  Best Coffee Cafe In Surat_1.jpg",
      "./Cafe photo/74. Peiskos Coffee  Best Coffee Cafe In Surat/74. Peiskos Coffee  Best Coffee Cafe In Surat_2.jpg",
      "./Cafe photo/74. Peiskos Coffee  Best Coffee Cafe In Surat/74. Peiskos Coffee  Best Coffee Cafe In Surat_3.jpg",
      "./Cafe photo/74. Peiskos Coffee  Best Coffee Cafe In Surat/74. Peiskos Coffee  Best Coffee Cafe In Surat_4.jpg",
      "./Cafe photo/74. Peiskos Coffee  Best Coffee Cafe In Surat/74. Peiskos Coffee  Best Coffee Cafe In Surat_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "12noon – 11:30pm",
    Review: "4.2",
    Average_cost: "1200",
  },
  {
    id: 75,
    name: "Pirates Vayoge Cafe",
    description:
      "Pirates Vayoge Cafe: Where adventure meets cuisine, a spirited maritime-themed eatery offering flavorsome delights in an immersive, nautical setting.",
    image: "./assets/images/cafe image/75. pirates vayoge cafe.jpg",
    otherimage: [
      "./Cafe photo/75. pirates vayoge cafe/75. pirates vayoge cafe_1.jpg",
      "./Cafe photo/75. pirates vayoge cafe/75. pirates vayoge cafe_2.jpg",
      "./Cafe photo/75. pirates vayoge cafe/75. pirates vayoge cafe_3.jpg",
      "./Cafe photo/75. pirates vayoge cafe/75. pirates vayoge cafe_4.jpg",
      "./Cafe photo/75. pirates vayoge cafe/75. pirates vayoge cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11am – 11pm",
    Review: "3.4",
    Average_cost: "600",
  },
  {
    id: 76,
    name: "Pizza Da Dhaba Cafe",
    description:
      "Pizza Da Dhaba Cafe: A delightful fusion, blending the essence of a dhaba with the flavorsome allure of authentic pizzas.",
    image: "./assets/images/cafe image/76. pizza da dhaba cafe.jpg",
    otherimage: [
      "./Cafe photo/76. pizza da dhaba cafe/76. pizza da dhaba caf_1e.jpg",
      "./Cafe photo/76. pizza da dhaba cafe/76. pizza da dhaba caf_1e_2.jpg",
      "./Cafe photo/76. pizza da dhaba cafe/76. pizza da dhaba caf_1e_3.jpg",
      "./Cafe photo/76. pizza da dhaba cafe/76. pizza da dhaba caf_1e_4.jpg",
      "./Cafe photo/76. pizza da dhaba cafe/76. pizza da dhaba caf_1e_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "10:30am – 10:30pm",
    Review: "3.7",
    Average_cost: "1000",
  },
  {
    id: 77,
    name: "Pizza Wizza Cafe",
    description:
      "Pizza Wizza Cafe: A flavorful haven, crafting inventive pizzas with a dash of creativity in a vibrant, welcoming setting.",
    image: "./assets/images/cafe image/77. pizza wizza cafe.jpg",
    otherimage: [
      "./Cafe photo/77. pizza wizza cafe/77. pizza wizza cafe_1.jpg",
      "./Cafe photo/77. pizza wizza cafe/77. pizza wizza cafe_2.jpg",
      "./Cafe photo/77. pizza wizza cafe/77. pizza wizza cafe_3.jpg",
      "./Cafe photo/77. pizza wizza cafe/77. pizza wizza cafe_4.jpg",
      "./Cafe photo/77. pizza wizza cafe/77. pizza wizza cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "10am – 10pm",
    Review: "4.6",
    Average_cost: "400",
  },
  {
    id: 78,
    name: "Pokket Cafe Astria",
    description:
      "Pokket Cafe Astria: A cozy nook offering delectable bites and warm brews, fostering relaxation and delightful conversations.",
    image: "./assets/images/cafe image/78. pokket cafe astria.jpg",
    otherimage: [
      "./Cafe photo/78. pokket cafe astria/78. pokket cafe astria_1.jpg",
      "./Cafe photo/78. pokket cafe astria/78. pokket cafe astria_2.jpg",
      "./Cafe photo/78. pokket cafe astria/78. pokket cafe astria_3.jpg",
      "./Cafe photo/78. pokket cafe astria/78. pokket cafe astria_4.jpeg",
      "./Cafe photo/78. pokket cafe astria/78. pokket cafe astria_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "10:30 am–11 pm",
    Review: "4.5",
    Average_cost: "500",
  },
  {
    id: 79,
    name: "Space 4 You co-work cafe",
    description:
      "Space 4 You: A collaborative co-work cafe fostering productivity, connectivity, and inspiration, merging workspaces with culinary delights.",
    image: "./assets/images/cafe image/79. space 4 you co-work cafe.png",
    otherimage: [
      "./Cafe photo/79. space 4 you co-work cafe/79. space 4 you co-work cafe_1.png",
      "./Cafe photo/79. space 4 you co-work cafe/79. space 4 you co-work cafe_2.png",
      "./Cafe photo/79. space 4 you co-work cafe/79. space 4 you co-work cafe_3.png",
      "./Cafe photo/79. space 4 you co-work cafe/79. space 4 you co-work cafe_4.jpg",
      "./Cafe photo/79. space 4 you co-work cafe/79. space 4 you co-work cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "12:45pm – 10:45pm",
    Review: "4.9",
    Average_cost: "500",
  },
  {
    id: 80,
    name: "Spice Terrace Restaurant",
    description:
      "Spice Terrace Restaurant: A culinary haven offering aromatic flavors and exquisite cuisine in a vibrant, inviting ambiance.",
    image: "./assets/images/cafe image/80. Spice Terrace Restaurant.jpeg",
    otherimage: [
      "./Cafe photo/80. Spice Terrace Restaurant/80. Spice Terrace Restaurant_1.jpeg",
      "./Cafe photo/80. Spice Terrace Restaurant/80. Spice Terrace Restaurant_2.jpg",
      "./Cafe photo/80. Spice Terrace Restaurant/80. Spice Terrace Restaurant_3.jpeg",
      "./Cafe photo/80. Spice Terrace Restaurant/80. Spice Terrace Restaurant_4.jpg",
      "./Cafe photo/80. Spice Terrace Restaurant/80. Spice Terrace Restaurant+_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "7pm – 11pm",
    Review: "4.8",
    Average_cost: "4300",
  },
  {
    id: 81,
    name: "surtea cafe",
    description:
      "Surtea Cafe: A cozy oasis blending artisanal coffee, delightful pastries, and a serene ambiance for perfect moments of relaxation and indulgence.",
    image: "./assets/images/cafe image/81. surtea cafe.jpg",
    otherimage: [
      "./Cafe photo/81. surTEA cafe/81. surtea cafe_1.jpg",
      "./Cafe photo/81. surTEA cafe/81. surtea cafe_1.jpg_2.jpg",
      "./Cafe photo/81. surTEA cafe/surtea_3.jpg",
      "./Cafe photo/81. surTEA cafe/surtea_5.jpg",
      "./Cafe photo/81. surTEA cafe/surtea-4.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "10 am–10 pm",
    Review: "4.0",
    Average_cost: "200",
  },
  {
    id: 82,
    name: "The Boho",
    description:
      "The Boho: An eclectic haven blending bohemian charm, vintage treasures, and artistic flair, offering unique finds and creative inspirations.",
    image: "./assets/images/cafe image/82. The Boho.jpg",
    otherimage: [
      "./Cafe photo/82. the boho/the boho _2.jpg",
      "./Cafe photo/82. the boho/the boho_1.jpg",
      "./Cafe photo/82. the boho/the boho_3.jpg",
      "./Cafe photo/82. the boho/the boho_4.jpg",
      "./Cafe photo/82. the boho/the boho_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "12–11 pm",
    Review: "4.4",
    Average_cost: "500",
  },
  {
    id: 83,
    name: "The Bungalow Cafe in Adajan, Surat",
    description:
      "The Bungalow Cafe in Adajan, Surat: A cozy retreat offering delightful cuisine, warm ambiance, and inviting spaces for memorable gatherings.",
    image:
      "./assets/images/cafe image/83. the bunglow cafe in adajan surat.jpg",
    otherimage: [
      "./Cafe photo/83. the bunglow cafe in adajan surat/83. the bunglow cafe in adajan surat_1.jpg",
      "./Cafe photo/83. the bunglow cafe in adajan surat/83. the bunglow cafe in adajan surat_2.jpg",
      "./Cafe photo/83. the bunglow cafe in adajan surat/83. the bunglow cafe in adajan surat_3.jpg",
      "./Cafe photo/83. the bunglow cafe in adajan surat/83. the bunglow cafe in adajan surat_4.jpg",
      "./Cafe photo/83. the bunglow cafe in adajan surat/83. the bunglow cafe in adajan surat_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11 am–11 pm",
    Review: "3.9",
    Average_cost: "500",
  },
  {
    id: 84,
    name: "The Bungalow Cafe",
    description:
      "The Bungalow Cafe: A quaint, welcoming spot offering delicious fare, cozy ambiance, and a perfect setting for relaxed get-togethers.",
    image: "./assets/images/cafe image/84. the bunglow cafe.jpeg",
    otherimage: [
      "./Cafe photo/84. the bunglow cafe/84. the bunglow cafe_1.jpg",
      "./Cafe photo/84. the bunglow cafe/84. the bunglow cafe_2.jpg",
      "./Cafe photo/84. the bunglow cafe/84. the bunglow cafe_3.jpg",
      "./Cafe photo/84. the bunglow cafe/84. the bunglow cafe_4.jpg",
      "./Cafe photo/84. the bunglow cafe/84. the bunglow cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "12:15am – 2:30am, 11am – 11pm, 11:15pm",
    Review: "3.9",
    Average_cost: "500",
  },
  {
    id: 85,
    name: "The Cafe Dew",
    description:
      "Cafe Dew: A refreshing haven serving aromatic coffee, delightful bites, and fostering cozy conversations in a relaxed, inviting atmosphere.",
    image: "./assets/images/cafe image/85. the cafe dew.jpg",
    otherimage: [
      "./Cafe photo/85. the cafe dew/85. the cafe dew_1.png",
      "./Cafe photo/85. the cafe dew/85. the cafe dew_2.jpg",
      "./Cafe photo/85. the cafe dew/85. the cafe dew_3.jpg",
      "./Cafe photo/85. the cafe dew/85. the cafe dew_4.jpg",
      "./Cafe photo/85. the cafe dew/85. the cafe dew_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "2–10 pm",
    Review: "3.9",
    Average_cost: "500",
  },
  {
    id: 86,
    name: "The Center Court",
    description:
      "The Center Court: A vibrant hub where sports, entertainment, and community converge, fostering lively experiences",
    image: "./assets/images/cafe image/86. the center court.jpg",
    otherimage: [
      "./Cafe photo/86. the center court/86. the center court_1.jpeg",
      "./Cafe photo/86. the center court/86. the center court_2.jpg",
      "./Cafe photo/86. the center court/86. the center court_3.jpg",
      "./Cafe photo/86. the center court/86. the center court_4.jpg",
      "./Cafe photo/86. the center court/86. the center court_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "10:30 am–11:30 pm",
    Review: "4.3",
    Average_cost: "100",
  },
  {
    id: 87,
    name: "The Chocolate Room",
    description:
      "The Chocolate Room: A decadent haven offering divine cocoa creations, indulgent treats, and a cozy ambiance for sweet enthusiasts.",
    image: "./assets/images/cafe image/87. the choclate room.jpeg",
    otherimage: [
      "./Cafe photo/87. the choclate room/87. the choclate room_1.jpeg",
      "./Cafe photo/87. the choclate room/87. the choclate room_2.jpg",
      "./Cafe photo/87. the choclate room/87. the choclate room_3.jpg",
      "./Cafe photo/87. the choclate room/87. the choclate room_4.jpg",
      "./Cafe photo/87. the choclate room/87. the choclate room_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11am – 11:30pm",
    Review: "3.8",
    Average_cost: "850",
  },
  {
    id: 88,
    name: "The Commoner’s Kitchen",
    description:
      "The Commoner’s Kitchen: A welcoming space offering hearty cuisine, communal warmth, and a cozy ambiance for shared culinary experiences.",
    image: "./assets/images/cafe image/88. The Commoner’s Kitchen.jpg",
    otherimage: [
      "./Cafe photo/88. The Commoner’s Kitchen/88. The Commoner’s Kitchen_1.jpeg",
      "./Cafe photo/88. The Commoner’s Kitchen/88. The Commoner’s Kitchen_2.jpg",
      "./Cafe photo/88. The Commoner’s Kitchen/88. The Commoner’s Kitchen_3.jpg",
      "./Cafe photo/88. The Commoner’s Kitchen/88. The Commoner’s Kitchen_4.jpg",
      "./Cafe photo/88. The Commoner’s Kitchen/88. The Commoner’s Kitchen_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "12–11 pm",
    Review: "3.2",
    Average_cost: "1200",
  },
  {
    id: 89,
    name: "The Desi Wok",
    description:
      "The Desi Wok: A flavorful destination crafting vibrant, Indian-inspired wok dishes, blending tradition, spice, and contemporary flair seamlessly.",
    image: "./assets/images/cafe image/89. the desi wok.jpeg",
    otherimage: [
      "./Cafe photo/89. the desi wok/89. the desi wok_1.jpeg",
      "./Cafe photo/89. the desi wok/89. the desi wok_2.jpg",
      "./Cafe photo/89. the desi wok/89. the desi wok_3.jpg",
      "./Cafe photo/89. the desi wok/89. the desi wok_4.jpg",
      "./Cafe photo/89. the desi wok/89. the desi wok_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "10 am–11:30 pm",
    Review: "4.8",
    Average_cost: "1300",
  },
  {
    id: 90,
    name: "The Fries Co.",
    description:
      "The Fries Co.: A tempting haven dedicated to crispy, flavorful fries served in an array of delicious, innovative styles.",
    image: "./assets/images/cafe image/90. the fries co...jpeg",
    otherimage: [
      "./Cafe photo/90. the fries co/90. the fries co.._1.jpeg",
      "./Cafe photo/90. the fries co/90. the fries co.._2.jpg",
      "./Cafe photo/90. the fries co/90. the fries co.._3.jpg",
      "./Cafe photo/90. the fries co/90. the fries co.._4.jpg",
      "./Cafe photo/90. the fries co/90. the fries co.._5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "10:30 am–11 pm",
    Review: "3.8",
    Average_cost: "500",
  },
  {
    id: 91,
    name: "THE GARLIC KNOT (PIZZA CAFE )",
    description:
      "The Garlic Knot: A cozy pizza cafe serving up mouthwatering pies topped with savory garlic knots baked to perfection.",
    image: "./assets/images/cafe image/91. THE GARLIC KNOT (PIZZA CAFE ).jpg",
    otherimage: [
      "./Cafe photo/91. THE GARLIC KNOT (PIZZA CAFE )/91. THE GARLIC KNOT (PIZZA CAFE )_1.jpg",
      "./Cafe photo/91. THE GARLIC KNOT (PIZZA CAFE )/91. THE GARLIC KNOT (PIZZA CAFE )_2.jpg",
      "./Cafe photo/91. THE GARLIC KNOT (PIZZA CAFE )/91. THE GARLIC KNOT (PIZZA CAFE )_3.jpg",
      "./Cafe photo/91. THE GARLIC KNOT (PIZZA CAFE )/91. THE GARLIC KNOT (PIZZA CAFE )_4.jpg",
      "./Cafe photo/91. THE GARLIC KNOT (PIZZA CAFE )/91. THE GARLIC KNOT (PIZZA CAFE )_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11:15am – 10:45pm",
    Review: "4.1",
    Average_cost: "500",
  },
  {
    id: 92,
    name: "The Green Spice Restaurant",
    description:
      "The Green Spice Restaurant: A vibrant eatery offering a fusion of globally inspired dishes accentuated by fresh, aromatic spices.",
    image: "./assets/images/cafe image/92. the greeen spice resturant.jpg",
    otherimage: [
      "./Cafe photo/92. the greeen spice resturant/92. the greeen spice resturant.jpg",
      "./Cafe photo/92. the greeen spice resturant/92. the greeen spice resturant_2.jpg",
      "./Cafe photo/92. the greeen spice resturant/92. the greeen spice resturant_3.jpg",
      "./Cafe photo/92. the greeen spice resturant/92. the greeen spice resturant_4.jpeg",
      "./Cafe photo/92. the greeen spice resturant/92. the greeen spice resturant_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11 am–12 am",
    Review: "3.2",
    Average_cost: "500",
  },
  {
    id: 93,
    name: "The Lounge Cafe & Restro",
    description:
      "The Lounge Cafe & Restro: A chic, relaxed spot offering a blend of delectable bites, refreshing drinks, and inviting ambiance.",
    image: "./assets/images/cafe image/93. the longe cafe and restro.jpg",
    otherimage: [
      "./Cafe photo/93. the longe cafe and restro/93. the longe cafe and restro_1.jpeg",
      "./Cafe photo/93. the longe cafe and restro/93. the longe cafe and restro_2.jpg",
      "./Cafe photo/93. the longe cafe and restro/93. the longe cafe and restro_3.jpg",
      "./Cafe photo/93. the longe cafe and restro/93. the longe cafe and restro_4.jpg",
      "./Cafe photo/93. the longe cafe and restro/93. the longe cafe and restro_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11 am–12:30 am",
    Review: "4.0",
    Average_cost: "800",
  },
  {
    id: 94,
    name: "The Star Cafe",
    description:
      "The Star Cafe: A vibrant hotspot serving up delightful brews, scrumptious pastries, and a cozy ambiance beneath twinkling ligWelcome to The Star Cafe, where every sip is celestial and every bite a delight.",
    image: "./assets/images/cafe image/94. The Star Cafe.jpg",
    otherimage: [
      "./Cafe photo/94. The Star Cafe/94. The Star Cafe_1.jpg",
      "./Cafe photo/94. The Star Cafe/94. The Star Cafe_2.jpg",
      "./Cafe photo/94. The Star Cafe/94. The Star Cafe_3.jpg",
      "./Cafe photo/94. The Star Cafe/94. The Star Cafe_4.jpg",
      "./Cafe photo/94. The Star Cafe/94. The Star Cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "12:45pm – 10:45pm",
    Review: "4.5",
    Average_cost: "500",
  },
  {
    id: 95,
    name: "The Vibes Cafe",
    description:
      "The Vibes Cafe: A trendy hub where great music, flavorful brews, and inviting decor converge for a relaxing, memorable experience.",
    image: "./assets/images/cafe image/95. The Vibes Cafe.jpg",
    otherimage: [
      "./Cafe photo/95. The Vibes Cafe/95. The Vibes Cafe_1.jpg",
      "./Cafe photo/95. The Vibes Cafe/95. The Vibes Cafe_2.jpg",
      "./Cafe photo/95. The Vibes Cafe/95. The Vibes Cafe_3.jpg",
      "./Cafe photo/95. The Vibes Cafe/95. The Vibes Cafe_4.jpg",
      "./Cafe photo/95. The Vibes Cafe/95. The Vibes Cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11am – 11pm",
    Review: "4.0",
    Average_cost: "700",
  },
  {
    id: 96,
    name: "Theobroma Bakery and Cake Shop",
    description:
      "Theobroma Bakery & Cake Shop: A delightful haven offering heavenly pastries, artisanal bread, and decadent cakes that satisfy every craving.",
    image: "./assets/images/cafe image/96. Theobroma Bakery and Cake Shop.jpg",
    otherimage: [
      "./Cafe photo/96. Theobroma Bakery and Cake Shop/96. Theobroma Bakery and Cake Shop_1.jpeg",
      "./Cafe photo/96. Theobroma Bakery and Cake Shop/96. Theobroma Bakery and Cake Shop_2.jpg",
      "./Cafe photo/96. Theobroma Bakery and Cake Shop/96. Theobroma Bakery and Cake Shop_3.jpg",
      "./Cafe photo/96. Theobroma Bakery and Cake Shop/96. Theobroma Bakery and Cake Shop_4.jpg",
      "./Cafe photo/96. Theobroma Bakery and Cake Shop/96. Theobroma Bakery and Cake Shop_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11am – 11pm",
    Review: "4.5",
    Average_cost: "500",
  },
  {
    id: 97,
    name: "Thikana",
    description:
      "Thikana: A vibrant fusion eatery where diverse flavors collide, offering a culinary journey through an array of innovative dishes.",
    image: "./assets/images/cafe image/97. thikana.jpg",
    otherimage: [
      "./Cafe photo/97. thikana/_2.jpg",
      "./Cafe photo/97. thikana/97. thikana_1.jpg",
      "./Cafe photo/97. thikana/97. thikana_4.jpg",
      "./Cafe photo/97. thikana/97. thikana_5.jpg",
      "./Cafe photo/97. thikana/_3.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "2pm – 11pm",
    Review: "4.0",
    Average_cost: "500",
  },
  {
    id: 98,
    name: "THS (The Hog Spot)",
    description:
      "THS (The Hog Spot): A carnivore's delight, serving up savory, succulent meats grilled to perfection, accompanied by flavorful sides.",
    image: "./assets/images/cafe image/98. THS (The Hog Spot).jpg",
    otherimage: [
      "./Cafe photo/98. THS (The Hog Spot)/_2.jpg",
      "./Cafe photo/98. THS (The Hog Spot)/98. THS (The Hog Spot)_1.jpg",
      "./Cafe photo/98. THS (The Hog Spot)/98. THS (The Hog Spot)_3.jpeg",
      "./Cafe photo/98. THS (The Hog Spot)/98. THS (The Hog Spot)_4.jpg",
      "./Cafe photo/98. THS (The Hog Spot)/98. THS (The Hog Spot)_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11:30am – 11:30pm",
    Review: "4.2",
    Average_cost: "600",
  },
  {
    id: 99,
    name: "Vintage Asia Cafe",
    description:
      "Vintage Asia Cafe: A charming spot offering a fusion of nostalgic flavors, where classic dishes meet contemporary culinary twists.",
    image: "./assets/images/cafe image/99. vintage asia cafe.jpg",
    otherimage: [
      "./Cafe photo/99. vintage asia cafe/_3.jpg",
      "./Cafe photo/99. vintage asia cafe/99. vintage asia cafe_1.jpg",
      "./Cafe photo/99. vintage asia cafe/99. vintage asia cafe_2.jpg",
      "./Cafe photo/99. vintage asia cafe/99. vintage asia cafe_5.jpg",
      "./Cafe photo/99. vintage asia cafe/99. vintage asia cafe_54.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "7pm – 11pm",
    Review: "4.4",
    Average_cost: "2000",
  },
  {
    id: 100,
    name: "Zesr Restaurant",
    description:
      "Zesr Restaurant: A sophisticated dining destination offering a curated menu of globally inspired cuisine in an elegant atmosphere.",
    image: "./assets/images/cafe image/100. zesr resturant.jpg",
    otherimage: [
      "./Cafe photo/100. zero rsturant/100. zero rsturant_1.jpeg",
      "./Cafe photo/100. zero rsturant/100. zero rsturant_2.jpg",
      "./Cafe photo/100. zero rsturant/100. zero rsturant_3.jpg",
      "./Cafe photo/100. zero rsturant/100. zero rsturant_4.jpg",
      "./Cafe photo/100. zero rsturant/100. zero rsturant_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11:00 am - 3:30 pm",
    Review: "4.3",
    Average_cost: "400",
  },
  {
    id: 101,
    name: "Zest House",
    description:
      "Zest House: A vibrant culinary space where bold flavors and fresh ingredients converge to create unforgettable dining experiences.",
    image: "./assets/images/cafe image/101. zest house.jpg",
    otherimage: [
      "./Cafe photo/101. zest house/101. zest house_1.jpeg",
      "./Cafe photo/101. zest house/101. zest house_2.jpg",
      "./Cafe photo/101. zest house/101. zest house_3.jpg",
      "./Cafe photo/101. zest house/101. zest house_4.jpg",
      "./Cafe photo/101. zest house/_5.JPG",
    ],
    type: "./Cafe photo/veg.png",
    time: "12midnight – 2am, 12noon – 11:45pm",
    Review: "4.3",
    Average_cost: "500",
  },
  {
    id: 102,
    name: "ZORKO",
    description:
      "ZORKO: A trendy hotspot offering innovative cuisine, stylish ambiance, and a vibrant social scene for unforgettable dining experiences.",
    image: "./assets/images/cafe image/102. ZORKO.jpeg",
    otherimage: [
      "./Cafe photo/102. ZORKO/102. ZORKO_1.jpg",
      "./Cafe photo/102. ZORKO/102. ZORKO_2.jpg",
      "./Cafe photo/102. ZORKO/102. ZORKO_3.jpg",
      "./Cafe photo/102. ZORKO/102. ZORKO_4.jpg",
      "./Cafe photo/102. ZORKO/102. ZORKO_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11am – 10:45pm",
    Review: "3.1",
    Average_cost: "500",
  },
  {
    id: 103,
    name: "Tea Post",
    description:
      "Tea Post: A cozy retreat serving an array of aromatic teas, flavorful snacks, and inviting ambiance for relaxation and conversation.",
    image: "./assets/images/cafe image/103. Tea Post.jpg",
    otherimage: [
      "./Cafe photo/103. Tea Post/103. Tea Post.jpg",
      "./Cafe photo/103. Tea Post/103. Tea Post_2.jpg",
      "./Cafe photo/103. Tea Post/103. Tea Post_3.jpg",
      "./Cafe photo/103. Tea Post/103. Tea Post_4.jpg",
      "./Cafe photo/103. Tea Post/103. Tea Post_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11:30am – 11:30pm",
    Review: "4.0",
    Average_cost: "300",
  },
  {
    id: 104,
    name: "Shotaholic",
    description:
      "Shotaholic: A vibrant bar hotspot offering an eclectic array of expertly crafted shots, pulsating music, and energetic socializing vibes.",
    image: "./assets/images/cafe image/104. Shotaholic.jpg",
    otherimage: [
      "./Cafe photo/104. Shotaholic/104. Shotaholic_1.jpeg",
      "./Cafe photo/104. Shotaholic/104. Shotaholic_2.jpg",
      "./Cafe photo/104. Shotaholic/104. Shotaholic_3.jpg",
      "./Cafe photo/104. Shotaholic/104. Shotaholic_4.jpg",
      "./Cafe photo/104. Shotaholic/104. Shotaholic_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11am – 12midnight",
    Review: "4.0",
    Average_cost: "200",
  },
  {
    id: 105,
    name: "Chai Pilla",
    description:
      "Chai Pilla: A cozy corner offering aromatic chai varieties and comforting bites, creating a warm space for relaxed conversations.",
    image: "./assets/images/cafe image/105. Chai Pilla.jpg",
    otherimage: [
      "./Cafe photo/105. Chai Pilla/105. Chai Pilla_1.jpeg",
      "./Cafe photo/105. Chai Pilla/105. Chai Pilla_2.jpg",
      "./Cafe photo/105. Chai Pilla/105. Chai Pilla_3.jpg",
      "./Cafe photo/105. Chai Pilla/105. Chai Pilla_4.jpg",
      "./Cafe photo/105. Chai Pilla/105. Chai Pilla_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "8:30 am–11:30 pm",
    Review: "4.6",
    Average_cost: "500",
  },
  {
    id: 106,
    name: "Coffee Culture",
    description:
      "Coffee Culture: A thriving community centered around the art, science, and love of coffee, fostering diverse tastes and experiences.",
    image: "./assets/images/cafe image/106. Coffee Culture.jpg",
    otherimage: [
      "./Cafe photo/106. Coffee Culture/106. Coffee Culture_1.jpg",
      "./Cafe photo/106. Coffee Culture/106. Coffee Culture_2.jpg",
      "./Cafe photo/106. Coffee Culture/106. Coffee Culture_3.jpg",
      "./Cafe photo/106. Coffee Culture/106. Coffee Culture_4.jpg",
      "./Cafe photo/106. Coffee Culture/106. Coffee Culture_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "10am – 11pm",
    Review: "4.1",
    Average_cost: "1000",
  },
  {
    id: 107,
    name: "CookEr's Eatery",
    description:
      "CookEr's Eatery: A cozy culinary haven offering diverse, homemade delights, crafted with love, inviting patrons to savor delightful flavors.",
    image: "./assets/images/cafe image/107. CookEr's Eatery.jpg",
    otherimage: [
      "./Cafe photo/107. CookEr's Eatery/107. CookEr's Eatery_1.PNG",
      "./Cafe photo/107. CookEr's Eatery/107. CookEr's Eatery_2.jpg",
      "./Cafe photo/107. CookEr's Eatery/107. CookEr's Eatery_3.jpg",
      "./Cafe photo/107. CookEr's Eatery/107. CookEr's Eatery_4.jpg",
      "./Cafe photo/107. CookEr's Eatery/107. CookEr's Eatery_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "10:30am – 11:30pm",
    Review: "4.9",
    Average_cost: "100",
  },
  {
    id: 108,
    name: "Moj Ma",
    description:
      "Moj Ma embodies a spirited culinary adventure, infusing traditional flavors with a contemporary flair.",
    image: "./assets/images/cafe image/108. Moj Ma.jpg",
    otherimage: [
      "./Cafe photo/1.  3 story cafe/1.  3 story cafe_1.jpg",
      "./Cafe photo/1.  3 story cafe/1.  3 story cafe_2.jpg",
      "./Cafe photo/1.  3 story cafe/1.  3 story cafe_3.jpg",
      "./Cafe photo/1.  3 story cafe/1.  3 story cafe_4.jpg",
      "./Cafe photo/1.  3 story cafe/1.  3 story cafe_5.jpg",
    ],
    type: "./Cafe photo/veg.png",
    time: "11:00 AM to 11:00 PM",
    Review: "4.6",
    Average_cost: "400",
  },
];

// Get cafe ID from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const cafeId = parseInt(urlParams.get("id"));

// Find the selected cafe by ID
const selectedCafe = cafes.find((cafe) => cafe.id === cafeId);

// Display detailed information on the page
const container = document.getElementById("cafeDetailContainer");
const detailCard = document.createElement("div");
detailCard.classList.add();
detailCard.innerHTML = `
  <div class="back_btn">
  <a href="../../cafe_menu.html" class="back" id="back_home">
    <div></div>
    <h4>Span & Bite</h4>
    <span>Back to home</span>
    </a>
</div>
<section class="background-section">
  <div class="container">   
    <div class="row mt-5 mb-5">
      <div class="card main_card col-8">
        <div class="shoeBackground">
          <div class="gradients">
            <div class="gradient second" color="blue"></div>
            <div class="gradient" color="red"></div>
            <div class="gradient" color="green"></div>
            <div class="gradient" color="orange"></div>
            <div class="gradient" color="black"></div>
          </div>
          <a href="#" class="share">
            <button class="like-button">
              <div class="like-wrapper">
                <div class="ripple"></div>
                <svg
                  class="heart"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                  ></path>
                </svg>
                <div class="particles" style="--total-particles: 6">
                  <div
                    class="particle"
                    style="--i: 1; --color: #7642f0"
                  ></div>
                  <div
                    class="particle"
                    style="--i: 2; --color: #afd27f"
                  ></div>
                  <div
                    class="particle"
                    style="--i: 3; --color: #de8f4f"
                  ></div>
                  <div
                    class="particle"
                    style="--i: 4; --color: #d0516b"
                  ></div>
                  <div
                    class="particle"
                    style="--i: 5; --color: #5686f2"
                  ></div>
                  <div
                    class="particle"
                    style="--i: 6; --color: #d53ef3"
                  ></div>
                </div>
              </div>
            </button>
          </a>

          <img
            src="${selectedCafe.otherimage[0]}"
            alt=""
            class="shoe show"
            color="blue"
          />
          <img
            src="${selectedCafe.otherimage[1]}"
            alt=""
            class="shoe"
            color="red"
          />
          <img
            src="${selectedCafe.otherimage[2]}"
            alt=""
            class="shoe"
            color="green"
          />
          <img
            src="${selectedCafe.otherimage[3]}"
            alt=""
            class="shoe"
            color="orange"
          />
          <img
            src="${selectedCafe.otherimage[4]}"
            alt=""
            class="shoe"
            color="black"
          />
        </div>
        <div class="info mt-5 mb-5">
          <div class="shoeName">
            <div>
              <h1 class="big">${selectedCafe.name}</h1>
            </div>
            <h3 class="small">
              Titaanium The Business Hub, G-17, Bhimrad Rd, opp. Aakash
              Empire, beside White Temple, Surat
            </h3>
          </div>
          <div class="description">
            <h3 class="title">Description</h3>
            <p class="text">
             ${selectedCafe.description}
            </p>
          </div>
          <div class="color-container">
            <h3 class="title">IMAGE</h3>
            <div class="colors">
              <span class="color active" color="blue"
                ><img src="${selectedCafe.otherimage[0]}" alt=""
              /></span>
              <span class="color color_2" color="red"
                ><img src="${selectedCafe.otherimage[1]}" alt=""
              /></span>
              <span class="color color_3" color="green"
                ><img src="${selectedCafe.otherimage[2]}" alt=""
              /></span>
              <span class="color color_4" color="orange"
                ><img src="${selectedCafe.otherimage[3]}" alt=""
              /></span>
              <span class="color color_5" color="black"
                ><img src="${selectedCafe.otherimage[4]}" alt=""
              /></span>
            </div>
          </div>
          <div class="buy-price">
            <a href="#" class="buy"><span class="menu_btn">Menu</span></a>
            <div class="price">
              <a
                href="#"
                class="buy_2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <span class="menu_btn_2">Table Book</span></a
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-4 p-4 mt-5 mb-5 Ads"
        style="background-color: blueviolet"
      >
        <p>Ads</p>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header" style="border: none">
            <h1 class="modal-title fw-bolder fs-5" id="exampleModalLabel">
              Table Book
            </h1>
            <button
              type="button"
              id="btn-close_button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form class="row g-3 needs-validation" novalidate>
              <div class="col-md-4">
                <label for="validationCustom01" class="form-label"
                  >Name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  value=""
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-4">
                <label for="validationCustom04" class="form-label"
                  >Person</label
                >
                <select
                  class="form-select"
                  id="validationCustom04"
                  required
                >
                  <option selected value="">Min - 2</option>
                  <option>5 - 10</option>
                  <option>10 - 15</option>
                  <option>15 - 20</option>
                </select>
              </div>
              <div class="col-md-4">
                <label for="validationCustom04" class="form-label"
                  >Select D & L</label
                >
                <select class="form-select" id="validationCustom04">
                  <option selected value="">Dinner</option>
                  <option>Lunch</option>
                </select>
              </div>
              <div class="col-md-6">
                <label for="validationCustom03" class="form-label"
                  >Phone Number</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  required
                />
                <div class="invalid-feedback">
                  Please provide a valid number.
                </div>
              </div>
              <div class="col-md-6">
                <label for="validationCustom03" class="form-label"
                  >Email</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  required
                />
                <div class="invalid-feedback">
                  Please provide a valid email.
                </div>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label class="form-check-label" for="invalidCheck">
                    Agree to Terms and Conditions
                  </label>
                  <div class="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal End -->

    <!-- Details -->
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5">
      <div class="col">
        <div class="card h-100">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body text-center">
            <h5 class="card-title text-center"><lord-icon
              src="https://cdn.lordicon.com/wsdieofl.json"
              trigger="loop"
              state="loop-oscillate"
              class="p-2 pe-5"
              style="width:30px;height:30px">
          </lord-icon><span class="me-4">Time</span></h5>
            <p class="card-text">Monday - Sunday</p>
            <p class="card-text" style="margin-top: -10px">
            ${selectedCafe.time}
            </p>
            <h5 class="card-title">Facilities</h5>
            <p class="card-text">Wifi, TV, AC, Parking</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card-body text-center">
            <h5 class="card-title"><lord-icon
              src="https://cdn.lordicon.com/hgqdtxby.json"
              trigger="loop"
              state="morph-select"
              class="p-2 pe-5"
              style="width:30px;height:30px">
          </lord-icon> <span class="me-5">Ratings</span></h5>
            <p class="card-text">${selectedCafe.Review}</p>

            <h5 class="card-title"><lord-icon
              src="https://cdn.lordicon.com/dypzookn.json"
              trigger="loop"
              class="p-2 pe-5" 
              style="width:30px;height:30px">
          </lord-icon> <span class="me-5">Average Cost</span></h5>
            <p class="card-text">
              ₹<span>${selectedCafe.Average_cost}</span> for two people (approx.)
            </p>
            <p class="card-text text-muted" style="margin-top: -10px">
              Exclusive of applicable taxes and charges, if any
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card-body text-center">
            <p class="card-text">
              <h5 class="card-title"><lord-icon
                src="https://cdn.lordicon.com/kiynvdns.json"
                trigger="loop"
                class="p-2 pe-5"
                style="width:30px;height:30px">
            </lord-icon> <span class="me-5">Feedback</span></h5>
              We value your feedback! If you've had the pleasure of dining
              at our restaurant, we would love to hear about your
              experience. Your opinion helps us improve and ensures that we
              continue to provide excellent service.
            </p>
            
          </div>
        </div>
      </div>
    </div>
    <!-- Details End -->
  </div>
</section>
  `;

container.appendChild(detailCard);

function goBack() {
  // Navigate back to the previous page
  window.history.back();
}
