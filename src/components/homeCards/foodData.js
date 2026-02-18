const foodData = {
  deals: [
    {
      id: 1,
      name: "Family Feast Deal",
      description: "2 Large Pizzas, 4 Garlic Breads, 1.5L Drink, Fries",
      price: 1499,
      imageUrl: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&q=75"
    },
    {
      id: 2,
      name: "Lunch Special",
      description: "1 Burger, Fries, Drink, Small Pizza Slice",
      price: 599,
      imageUrl: "https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FMidnight.jpg&w=400&q=75"
    },
    {
      id: 3,
      name: "Student Saver",
      description: "2 Sandwiches, 2 Fries, 2 Drinks",
      price: 699,
      imageUrl: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&q=75"
    },
    {
      id: 4,
      name: "Midnight Munchies",
      description: "2 Wraps, 4 Wings, Fries, 2 Soft Drinks",
      price: 899,
      imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=75"
    },
    {
      id: 5,
      name: "Weekend Special",
      description: "Bucket of 12 Wings, 4 Dips, Large Fries",
      price: 1299,
      imageUrl: "https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fapp-banners%2F1748254676806%2F05%2520updated%2520thumbnail%2520%25281%2529&w=400&q=75"
    },
    {
      id: 6,
      name: "Birthday Party Pack",
      description: "3 Large Pizzas, 6 Drinks, 3 Sides, Cake Slice",
      price: 2499,
      imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=75"
    }
  ],

  fries: [
    {
      id: 7,
      name: "Classic Salted Fries",
      description: "Crispy golden fries with perfect sea salt",
      price: 199,
      imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=75"
    },
    {
      id: 8,
      name: "Peri Peri Fries",
      description: "Hot & spicy peri peri seasoning on crispy fries",
      price: 249,
      imageUrl: "https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Fplain%252Bfries.webp&w=400&q=75"
    },
    {
      id: 9,
      name: "Cheese Loaded Fries",
      description: "Fries topped with melted cheddar cheese sauce",
      price: 299,
      imageUrl: "https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Fsmoky%252Bgun%252Bfries.webp&w=400&q=75"
    },
    {
      id: 10,
      name: "Garlic Parmesan Fries",
      description: "Fries tossed in garlic butter and parmesan",
      price: 279,
      imageUrl: "https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Ffrizza.webp&w=400&q=75"
    },
    {
      id: 11,
      name: "Chili Cheese Fries",
      description: "Fries with spicy chili and melted cheese",
      price: 329,
      imageUrl: "https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Francheese.webp&w=400&q=75"
    },
    {
      id: 12,
      name: "Sweet Potato Fries",
      description: "Healthy alternative with cinnamon sugar",
      price: 259,
      imageUrl: "https://images.unsplash.com/photo-1565098772267-60af42b81ef2?w=400&q=75"
    }
  ],

  pizza: [
    {
      id: 13,
      name: "Margherita Pizza",
      description: "Classic tomato sauce, fresh mozzarella, basil",
      price: 599,
      imageUrl: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&q=75"
    },
    {
      id: 14,
      name: "Pepperoni Feast",
      description: "Double pepperoni, mozzarella, tomato sauce",
      price: 799,
      imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=75"
    },
    {
      id: 15,
      name: "BBQ Chicken Pizza",
      description: "Grilled chicken, BBQ sauce, red onions, cilantro",
      price: 899,
      imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=75"
    },
    {
      id: 16,
      name: "Four Cheese Pizza",
      description: "Mozzarella, cheddar, parmesan, blue cheese",
      price: 949,
      imageUrl: "https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FmughlaiComp.webp&w=400&q=75"
    },
    {
      id: 17,
      name: "Veggie Supreme",
      description: "Bell peppers, mushrooms, olives, onions, tomatoes",
      price: 699,
      imageUrl: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?w=400&q=75"
    },
    {
      id: 18,
      name: "Meat Lovers",
      description: "Pepperoni, sausage, bacon, ham, ground beef",
      price: 1099,
      imageUrl: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=400&q=75"
    }
  ],

  chickenBurger: [
    {
      id: 19,
      name: "Crispy Chicken Burger",
      description: "Crispy fried chicken, lettuce, mayo, sesame bun",
      price: 349,
      imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=75"
    },
    {
      id: 20,
      name: "Grilled Chicken Burger",
      description: "Grilled chicken breast, avocado, lettuce, herb mayo",
      price: 399,
      imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=75"
    },
    {
      id: 21,
      name: "Spicy Zinger Burger",
      description: "Spicy crispy chicken, jalapeños, pepper jack cheese",
      price: 379,
      imageUrl: "https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FBRONCO..webp&w=400&q=75"
    },
    {
      id: 22,
      name: "Chicken BBQ Burger",
      description: "BBQ glazed chicken, onion rings, cheddar cheese",
      price: 419,
      imageUrl: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&q=75"
    },
    {
      id: 23,
      name: "Chicken Club Sandwich",
      description: "Double chicken, bacon, lettuce, tomato, toasted bread",
      price: 449,
      imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=75"
    },
    {
      id: 24,
      name: "Chicken Teriyaki Burger",
      description: "Teriyaki glazed chicken, Asian slaw, brioche bun",
      price: 429,
      imageUrl: "https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FCHEE%252BHAW%252BCHICKEN.webp&w=400&q=75"
    }
  ],

  beefBurger: [
    {
      id: 25,
      name: "Classic Beef Burger",
      description: "Angus beef patty, lettuce, tomato, onion, pickles",
      price: 449,
      imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=75"
    },
    {
      id: 26,
      name: "Double Cheese Burger",
      description: "Double beef patties, double cheese, special sauce",
      price: 599,
      imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=75"
    },
    {
      id: 27,
      name: "Bacon Cheese Burger",
      description: "Beef patty, crispy bacon, cheddar, BBQ sauce",
      price: 549,
      imageUrl: "https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FMIGHTY%252BRODEO%252BCHICKEN.webp&w=400&q=75"
    },
    {
      id: 28,
      name: "Mushroom Swiss Burger",
      description: "Sautéed mushrooms, Swiss cheese, garlic aioli",
      price: 519,
      imageUrl: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=400&q=75"
    },
    {
      id: 29,
      name: "Texas BBQ Burger",
      description: "Beef patty, onion rings, BBQ sauce, cheddar",
      price: 579,
      imageUrl: "https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FFAJTIA.webp&w=400&q=75"
    },
    {
      id: 30,
      name: "Blue Cheese Burger",
      description: "Beef patty, blue cheese crumbles, caramelized onions",
      price: 589,
      imageUrl: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?w=400&q=75"
    }
  ],

  quickBites: [
    {
      id: 31,
      name: "Chicken Wings (6 pcs)",
      description: "6 pieces of spicy buffalo wings with dip",
      price: 299,
      imageUrl: "https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Ffried%252Bchicken.webp&w=400&q=75"
    },
    {
      id: 32,
      name: "Garlic Bread Sticks",
      description: "4 pieces garlic bread with cheese dip",
      price: 179,
      imageUrl: "https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Fnuggets.webp&w=400&q=75"
    },
    {
      id: 33,
      name: "Chicken Nuggets (8 pcs)",
      description: "Crispy chicken nuggets with honey mustard",
      price: 249,
      imageUrl: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=75"
    },
    {
      id: 34,
      name: "Onion Rings",
      description: "Crispy beer-battered onion rings",
      price: 199,
      imageUrl: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&q=75"
    },
    {
      id: 35,
      name: "Caesar Salad",
      description: "Fresh romaine, croutons, parmesan, Caesar dressing",
      price: 279,
      imageUrl: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&q=75"
    },
    {
      id: 36,
      name: "Chicken Wrap",
      description: "Grilled chicken, lettuce, tomatoes, ranch in tortilla",
      price: 329,
      imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=75"
    }
  ]
};

export default foodData;