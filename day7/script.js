const rootElement = document.querySelector('.root'); 
const sortElement = document.getElementById('sort')

const electronicsBtn = document.getElementById('electronics')
const homeKitchenBtn = document.getElementById('homeKitchen')
const fashionBtn    = document.getElementById('fashion')
const sportsBtn = document.getElementById('sports')
const toysBtn = document.getElementById('toys')
const beautyBtn = document.getElementById('homeKitchen')

const productsArr = [
    {
      "id": 1,
      "product_name": "Wireless Bluetooth Headphones",
      "category": "Electronics",
      "price": 49.99,
      "rating": 4.5,
      "description": "Immerse yourself in your favorite music with these wireless headphones. Enjoy crisp, clear sound and convenient Bluetooth connectivity.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Wireless+Headphones"
    },
    {
      "id": 2,
      "product_name": "Stainless Steel Kitchen Knife Set",
      "category": "Home & Kitchen",
      "price": 39.95,
      "rating": 4.8,
      "description": "Upgrade your kitchen with this durable and stylish knife set. Made from high-quality stainless steel, these knives are designed to handle all your slicing and dicing needs.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Kitchen+Knife+Set"
    },
    {
      "id": 3,
      "product_name": "Men's Classic Leather Wallet",
      "category": "Fashion",
      "price": 29.99,
      "rating": 4.7,
      "description": "Keep your cards and cash organized in style with this classic leather wallet. Sleek and sophisticated, it's the perfect accessory for any man on the go.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Leather+Wallet"
    },
    {
      "id": 4,
      "product_name": "Women's Athletic Sneakers",
      "category": "Fashion",
      "price": 59.99,
      "rating": 4.6,
      "description": "Step up your workout game with these comfortable and stylish athletic sneakers. Designed for performance and durability, they'll take you from the gym to the track with ease.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Athletic+Sneakers"
    },
    {
      "id": 5,
      "product_name": "Smart Home Security Camera",
      "category": "Electronics",
      "price": 79.99,
      "rating": 4.4,
      "description": "Keep an eye on your home from anywhere with this smart security camera. With high-definition video and motion detection capabilities, you can rest easy knowing your home is protected.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Security+Camera"
    },
    {
      "id": 6,
      "product_name": "Portable Outdoor Camping Stove",
      "category": "Outdoor & Sports",
      "price": 49.99,
      "rating": 4.6,
      "description": "Enjoy hot meals on your camping trips with this portable outdoor stove. Compact and lightweight, it's perfect for backpacking and picnics.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Camping+Stove"
    },
    {
      "id": 7,
      "product_name": "Digital SLR Camera",
      "category": "Electronics",
      "price": 599.99,
      "rating": 4.9,
      "description": "Capture stunning photos with this professional-grade digital SLR camera. Whether you're a beginner or a seasoned photographer, you'll love the versatility and performance of this camera.",
      "img": "https://dummyimage.com/300x300/000/fff&text=SLR+Camera"
    },
    {
      "id": 8,
      "product_name": "Queen Size Memory Foam Mattress",
      "category": "Home & Kitchen",
      "price": 399.99,
      "rating": 4.7,
      "description": "Get the ultimate in comfort and support with this memory foam mattress. Designed to relieve pressure points and promote proper spinal alignment, it'll help you get the best night's sleep of your life.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Memory+Foam+Mattress"
    },
    {
      "id": 9,
      "product_name": "Wireless Charging Pad",
      "category": "Electronics",
      "price": 19.99,
      "rating": 4.3,
      "description": "Say goodbye to tangled cords with this wireless charging pad. Simply place your compatible device on the pad to enjoy fast and convenient charging.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Charging+Pad"
    },
    {
      "id": 10,
      "product_name": "Classic Wooden Chess Set",
      "category": "Toys & Games",
      "price": 29.99,
      "rating": 4.8,
      "description": "Challenge your friends to a game of chess with this classic wooden chess set. Crafted from high-quality materials, it's the perfect addition to any game night.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Chess+Set"
    },
    {
      "id": 11,
      "product_name": "Professional Hair Dryer",
      "category": "Beauty & Personal Care",
      "price": 49.99,
      "rating": 4.6,
      "description": "Achieve salon-quality results at home with this professional hair dryer. With multiple heat and speed settings, it's perfect for all hair types and styles.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Hair+Dryer"
    },
    {
      "id": 12,
      "product_name": "Men's Stainless Steel Watch",
      "category": "Fashion",
      "price": 99.99,
      "rating": 4.7,
      "description": "Make a statement with this stylish stainless steel watch. With its sleek design and precision craftsmanship, it's the perfect accessory for any occasion.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Stainless+Steel+Watch"
    },
    {
      "id": 13,
      "product_name": "Women's Leather Crossbody Bag",
      "category": "Fashion",
      "price": 79.99,
      "rating": 4.5,
      "description": "Stay organized in style with this chic leather crossbody bag. With multiple pockets and compartments, it's perfect for keeping your essentials close at hand.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Crossbody+Bag"
    },
    {
      "id": 14,
      "product_name": "Bluetooth Portable Speaker",
      "category": "Electronics",
      "price": 29.99,
      "rating": 4.4,
      "description": "Take your music anywhere with this Bluetooth portable speaker. With its compact design and long-lasting battery, it's perfect for outdoor adventures and indoor gatherings alike.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Bluetooth+Speaker"
    },
    {
      "id": 15,
      "product_name": "Non-Stick Cooking Pan Set",
      "category": "Home & Kitchen",
      "price": 49.99,
      "rating": 4.6,
      "description": "Upgrade your kitchen with this non-stick cooking pan set. Perfect for frying, sautéing, and simmering, these pans make cooking a breeze.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Cooking+Pan+Set"
    },
    {
      "id": 16,
      "product_name": "Fitness Tracker Watch",
      "category": "Health & Fitness",
      "price": 39.99,
      "rating": 4.5,
      "description": "Stay on top of your fitness goals with this sleek fitness tracker watch. With built-in heart rate monitoring and activity tracking, it's the perfect companion for your workouts.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Fitness+Tracker"
    },
    {
      "id": 17,
      "product_name": "HD LED TV",
      "category": "Electronics",
      "price": 499.99,
      "rating": 4.8,
      "description": "Enjoy your favorite shows and movies in stunning clarity with this HD LED TV. With its slim design and crisp display, it's the perfect addition to any living room.",
      "img": "https://dummyimage.com/300x300/000/fff&text=HD+LED+TV"
    },
    {
      "id": 18,
      "product_name": "Portable Power Bank",
      "category": "Electronics",
      "price": 24.99,
      "rating": 4.3,
      "description": "Never run out of battery power again with this portable power bank. Compact and lightweight, it's perfect for charging your devices on the go.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Power+Bank"
    },
    {
      "id": 19,
      "product_name": "Reusable Stainless Steel Water Bottle",
      "category": "Outdoor & Sports",
      "price": 19.99,
      "rating": 4.7,
      "description": "Stay hydrated in style with this reusable stainless steel water bottle. With its durable construction and leak-proof design, it's perfect for outdoor adventures and everyday use.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Water+Bottle"
    },
    {
      "id": 20,
      "product_name": "Home Espresso Machine",
      "category": "Home & Kitchen",
      "price": 129.99,
      "rating": 4.6,
      "description": "Start your day off right with a delicious cup of espresso from this home espresso machine. With its easy-to-use design and powerful steam wand, you'll be a barista in no time.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Espresso+Machine"
    },
    {
      "id": 21,
      "product_name": "Wireless Gaming Mouse",
      "category": "Electronics",
      "price": 34.99,
      "rating": 4.5,
      "description": "Gain a competitive edge with this wireless gaming mouse. With its high-precision optical sensor and customizable buttons, it's perfect for gamers of all skill levels.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Gaming+Mouse"
    },
    {
      "id": 22,
      "product_name": "Yoga Mat with Carrying Strap",
      "category": "Health & Fitness",
      "price": 19.99,
      "rating": 4.7,
      "description": "Take your yoga practice to the next level with this comfortable and durable yoga mat. With its non-slip surface and included carrying strap, it's perfect for yoga enthusiasts on the go.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Yoga+Mat"
    },
    {
      "id": 23,
      "product_name": "Men's Casual Leather Belt",
      "category": "Fashion",
      "price": 24.99,
      "rating": 4.6,
      "description": "Complete your look with this stylish and versatile leather belt. With its classic design and durable construction, it's the perfect accessory for any outfit.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Leather+Belt"
    },
    {
      "id": 24,
      "product_name": "Women's Classic Tote Bag",
      "category": "Fashion",
      "price": 39.99,
      "rating": 4.8,
      "description": "Carry all your essentials in style with this classic tote bag. With its spacious interior and durable construction, it's perfect for work, travel, and everyday use.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Tote+Bag"
    },
    {
      "id": 25,
      "product_name": "Wireless Noise-Canceling Earbuds",
      "category": "Electronics",
      "price": 99.99,
      "rating": 4.9,
      "description": "Escape into your own world with these wireless noise-canceling earbuds. With their immersive sound and comfortable fit, they're perfect for commuting, working out, or just relaxing at home.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Noise-Canceling+Earbuds"
    },
    {
      "id": 26,
      "product_name": "Stainless Steel French Press Coffee Maker",
      "category": "Home & Kitchen",
      "price": 29.99,
      "rating": 4.7,
      "description": "Brew delicious coffee at home with this stainless steel French press coffee maker. With its durable construction and fine mesh filter, it extracts the full flavor of your favorite coffee beans.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Coffee+Maker"
    },
    {
      "id": 27,
      "product_name": "Compact Folding Umbrella",
      "category": "Fashion",
      "price": 14.99,
      "rating": 4.5,
      "description": "Stay dry on rainy days with this compact folding umbrella. With its sturdy construction and wind-resistant design, it's perfect for keeping in your bag or car for unexpected showers.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Folding+Umbrella"
    },
    {
      "id": 28,
      "product_name": "Wireless Ergonomic Keyboard and Mouse Combo",
      "category": "Electronics",
      "price": 49.99,
      "rating": 4.6,
      "description": "Work more comfortably with this wireless ergonomic keyboard and mouse combo. With its split keyboard design and adjustable mouse sensitivity, it's perfect for long hours of typing and clicking.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Keyboard+Mouse+Combo"
    },
    {
      "id": 29,
      "product_name": "Travel Neck Pillow",
      "category": "Travel & Accessories",
      "price": 19.99,
      "rating": 4.4,
      "description": "Rest comfortably during long flights and road trips with this travel neck pillow. With its plush memory foam padding and adjustable closure, it provides personalized support wherever you go.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Neck+Pillow"
    },
    {
      "id": 30,
      "product_name": "Digital Kitchen Food Scale",
      "category": "Home & Kitchen",
      "price": 14.99,
      "rating": 4.7,
      "description": "Get precise measurements for your recipes with this digital kitchen food scale. With its easy-to-read LCD display and accurate sensors, it's perfect for baking, cooking, and portion control.",
      "img": "https://dummyimage.com/300x300/000/fff&text=Food+Scale"
    }
  ]
  

  let showData = (arr) => {
    rootElement.innerHTML = ""
      arr.forEach((product, i) => {

        const contentElement = document.createElement('div')
        contentElement.className = "box";

        const productImg = document.createElement('img')
        productImg.src = product.img;
       
        const productName = document.createElement('h3')
        productName.textContent = product.product_name;
       
        const productPrice = document.createElement('p')
        productPrice.textContent = ` Price :  ${product.price}`;
       
        const productCategory = document.createElement('p')
        productCategory.textContent = `Category : ${product.category}`;
        
        const productRating = document.createElement('p')
        productRating.textContent = `Rating : ${product.rating}`;
        
        // const productDesc = document.createElement('p')
        // productDesc.textContent = product.description;

        contentElement.append(
            productImg ,
            productName,
            productPrice ,
            productCategory ,
            productRating ,
        )

        rootElement.appendChild(
            contentElement
        )

    });
    
};

showData(productsArr)

// Sortig Logic
sortElement.addEventListener('change' , ()=> {
    
    if(sortElement.value === "asc") {
        productsArr.sort((a, b) => a.price - b.price);  // Here a and b are the object inside an array
         showData(productsArr)       
    }
    else if(sortElement.value === "desc") {
        productsArr.sort((a, b) => b.price - a.price);  // Here a and b are the object inside an array
        showData(productsArr)  
    }
    else   {
        showData(productsArr)  
    }

    console.log(sortElement.value)
})

electronicsBtn.addEventListener('click' , ()=> {
    
    const newProductArr = productsArr.filter((element , i) => {
        return element.category = "Electronics";
    })
    showData(newProductArr)
})
homeKitchenBtn.addEventListener('click' , ()=> {
    
    const newProductArr = productsArr.filter((element , i) => {
        return element.category = "Home & Kitchen";
    })
    showData(newProductArr)
})
fashionBtn.addEventListener('click' , ()=> {
    
    const newProductArr = productsArr.filter((element , i) => {
        return element.category = "Fashion";
    })
    showData(newProductArr)
})

