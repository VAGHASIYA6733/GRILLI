function viewmore() {
    console.log("hello world");
    // const container = document.getElementById('restaurantCardsContainer');
const restaurants = [
    {
        id: 7,
        name: "1990 by crazy bites",
        description:
          "Nostalgic '90s-inspired eatery serving inventive comfort foods, fostering a vibrant atmosphere with neon vibes and retro tunes.",
        image: "./assets/images/cafe image/7. 1990 by crazy bites.jpg",
      otherimage: [
        "./Cafe photo/1.  3 story cafe/1.  3 story cafe_1.jpg",
        "./Cafe photo/1.  3 story cafe/1.  3 story cafe_1.jpeg",
        "./Cafe photo/1.  3 story cafe/1.  3 story cafe_1.jpeg",
        "./Cafe photo/1.  3 story cafe/1.  3 story cafe_1.jpeg",
        "./Cafe photo/1.  3 story cafe/1.  3 story cafe_1.jpg"
      ],
      type: "veg",
      fecilitys: "Wifi, TV, AC, Parking",
      time: "12:45pm – 10:45pm",
      menu: "",
      Review: "4.5"
    },
    {
      id: 2,
      name: "Another Restaurant",
      description: "Description of another restaurant.",
      image: "./img/Hotel image/2. another-restaurant.jpg",
      otherimage: [
        "./Cafe photo/2. another-cafe/2. another-cafe_1.jpg",
        "./Cafe photo/2. another-cafe/2. another-cafe_1.jpeg",
        "./Cafe photo/2. another-cafe/2. another-cafe_1.jpeg",
        "./Cafe photo/2. another-cafe/2. another-cafe_1.jpeg",
        "./Cafe photo/2. another-cafe/2. another-cafe_1.jpg"
      ],
      type: "non-veg",
      fecilitys: "Wifi, Parking",
      time: "1:00pm – 11:00pm",
      menu: "",
      Review: "4.2"
    },
    // Add more restaurant objects as needed
  ];
  const container = document.getElementById('hotelDetailsContainer');
  
  // Retrieve the restaurant ID from the URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const restaurantId = urlParams.get('id');
  
  // Find the restaurant with the matching ID
  const selectedRestaurant = restaurants.find(restaurant => restaurant.id === parseInt(restaurantId));
  
  if (selectedRestaurant) {
    // Create a detailed card for the selected restaurant
    const card = document.createElement('div');
    card.classList.add('restaurant-card');
  
    const name = document.createElement('h2');
    name.textContent = selectedRestaurant.name;
    card.appendChild(name);
  
    const description = document.createElement('p');
    description.textContent = selectedRestaurant.description;
    card.appendChild(description);
  
    const rating = document.createElement('div');
    rating.textContent = selectedRestaurant.Review;
    card.appendChild(rating);
  
    container.appendChild(card);
  } else {
    // Handle the case where the restaurant ID is not found
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Restaurant not found.';
    container.appendChild(errorMessage);
  }
  
}