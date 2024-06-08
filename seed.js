const recipes = [
      {
        "name": "Spaghetti Carbonara",
        "description": "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
        "cuisine": "Italian",
        "servings": 4,
        "prep_time": 15,
        "cook_time": 20,
        "ingredients": [
          { "amount": 200, "unit": "g", "ingredient": "pancetta" },
          { "amount": 4, "unit": "large", "ingredient": "eggs" },
          { "amount": 100, "unit": "g", "ingredient": "Pecorino cheese" },
          { "amount": 100, "unit": "g", "ingredient": "Parmesan" },
          { "amount": 400, "unit": "g", "ingredient": "spaghetti" },
          { "amount": 2, "unit": "cloves", "ingredient": "garlic" },
          { "amount": null, "unit": "", "ingredient": "Black pepper" },
          { "amount": null, "unit": "", "ingredient": "Salt" }
        ],
        "instructions": [
          "Cook the spaghetti.",
          "Fry the pancetta with the garlic.",
          "Beat the eggs and mix with the cheeses.",
          "Combine spaghetti, pancetta, and egg mixture.",
          "Season with pepper and serve."
        ],
        "image": "spaghetti_carbonara.jpg"
      },
      {
        "name": "Chicken Tikka Masala",
        "description": "A popular Indian curry dish made with marinated chicken cooked in a spiced tomato sauce.",
        "cuisine": "Indian",
        "servings": 4,
        "prep_time": 30,
        "cook_time": 40,
        "ingredients": [
          { "amount": 500, "unit": "g", "ingredient": "chicken breast" },
          { "amount": 200, "unit": "ml", "ingredient": "yogurt" },
          { "amount": 2, "unit": "tbsp", "ingredient": "lemon juice" },
          { "amount": 2, "unit": "tsp", "ingredient": "ground cumin" },
          { "amount": 2, "unit": "tsp", "ingredient": "paprika" },
          { "amount": 1, "unit": "tsp", "ingredient": "ground turmeric" },
          { "amount": 2, "unit": "tsp", "ingredient": "garam masala" },
          { "amount": 1, "unit": "tsp", "ingredient": "chili powder" },
          { "amount": 200, "unit": "ml", "ingredient": "tomato puree" },
          { "amount": 200, "unit": "ml", "ingredient": "cream" },
          { "amount": 2, "unit": "pieces", "ingredient": "onions" },
          { "amount": 3, "unit": "cloves", "ingredient": "garlic" },
          { "amount": 1, "unit": "inch", "ingredient": "ginger" },
          { "amount": null, "unit": "", "ingredient": "Salt" },
          { "amount": null, "unit": "", "ingredient": "Fresh coriander" }
        ],
        "instructions": [
          "Marinate the chicken with yogurt, lemon juice, and spices.",
          "Cook onions, garlic, and ginger.",
          "Add tomato puree and cook.",
          "Add marinated chicken and cook through.",
          "Stir in cream and simmer.",
          "Garnish with coriander and serve."
        ],
        "image": "chicken_tikka_masala.jpg"
      },
      {
        "name": "Beef Tacos",
        "description": "A Mexican staple, these tacos are filled with seasoned beef, fresh vegetables, and a variety of toppings.",
        "cuisine": "Mexican",
        "servings": 4,
        "prep_time": 20,
        "cook_time": 15,
        "ingredients": [
          { "amount": 500, "unit": "g", "ingredient": "ground beef" },
          { "amount": 1, "unit": "packet", "ingredient": "taco seasoning" },
          { "amount": 8, "unit": "", "ingredient": "taco shells" },
          { "amount": 1, "unit": "cup", "ingredient": "shredded lettuce" },
          { "amount": 1, "unit": "cup", "ingredient": "diced tomatoes" },
          { "amount": 1, "unit": "cup", "ingredient": "shredded cheese" },
          { "amount": null, "unit": "", "ingredient": "Salsa" },
          { "amount": null, "unit": "", "ingredient": "Sour cream" }
        ],
        "instructions": [
          "Cook the ground beef with taco seasoning.",
          "Heat taco shells as per packet instructions.",
          "Fill taco shells with beef, lettuce, tomatoes, and cheese.",
          "Top with salsa and sour cream.",
          "Serve immediately."
        ],
        "image": "beef_tacos.jpg"
      },
      {
        "name": "Caprese Salad",
        "description": "A simple Italian salad made with tomatoes, mozzarella, and fresh basil, drizzled with olive oil and balsamic glaze.",
        "cuisine": "Italian",
        "servings": 4,
        "prep_time": 10,
        "cook_time": 0,
        "ingredients": [
          { "amount": 4, "unit": "large", "ingredient": "tomatoes" },
          { "amount": 250, "unit": "g", "ingredient": "fresh mozzarella" },
          { "amount": 1, "unit": "bunch", "ingredient": "fresh basil" },
          { "amount": 3, "unit": "tbsp", "ingredient": "olive oil" },
          { "amount": 2, "unit": "tbsp", "ingredient": "balsamic glaze" },
          { "amount": null, "unit": "", "ingredient": "Salt" },
          { "amount": null, "unit": "", "ingredient": "Black pepper" }
        ],
        "instructions": [
          "Slice tomatoes and mozzarella.",
          "Arrange on a platter alternating slices of tomato, mozzarella, and basil leaves.",
          "Drizzle with olive oil and balsamic glaze.",
          "Season with salt and pepper.",
          "Serve immediately."
        ],
        "image": "caprese_salad.jpg"
      },
      {
        "name": "Vegetable Stir Fry",
        "description": "A quick and easy stir fry with a variety of fresh vegetables and a savory sauce.",
        "cuisine": "Asian",
        "servings": 4,
        "prep_time": 15,
        "cook_time": 10,
        "ingredients": [
          { "amount": 1, "unit": "cup", "ingredient": "broccoli florets" },
          { "amount": 1, "unit": "cup", "ingredient": "sliced bell peppers" },
          { "amount": 1, "unit": "cup", "ingredient": "sliced carrots" },
          { "amount": 1, "unit": "cup", "ingredient": "snap peas" },
          { "amount": 3, "unit": "cloves", "ingredient": "garlic" },
          { "amount": 1, "unit": "tbsp", "ingredient": "ginger" },
          { "amount": 3, "unit": "tbsp", "ingredient": "soy sauce" },
          { "amount": 1, "unit": "tbsp", "ingredient": "hoisin sauce" },
          { "amount": 2, "unit": "tbsp", "ingredient": "sesame oil" },
          { "amount": 1, "unit": "tbsp", "ingredient": "cornstarch" },
          { "amount": 0.5, "unit": "cup", "ingredient": "water" }
        ],
        "instructions": [
          "Heat sesame oil in a large skillet.",
          "Add garlic and ginger, cook for 1 minute.",
          "Add broccoli, bell peppers, carrots, and snap peas. Stir fry for 5 minutes.",
          "In a small bowl, mix soy sauce, hoisin sauce, cornstarch, and water.",
          "Pour sauce into the skillet and cook until thickened.",
          "Serve immediately with rice or noodles."
        ],
        "image": "vegetable_stir_fry.jpg"
      },
      {
        "name": "Chocolate Chip Cookies",
        "description": "Classic chocolate chip cookies with a chewy center and crispy edges.",
        "cuisine": "American",
        "servings": 24,
        "prep_time": 15,
        "cook_time": 12,
        "ingredients": [
          { "amount": 1, "unit": "cup", "ingredient": "unsalted butter" },
          { "amount": 1, "unit": "cup", "ingredient": "white sugar" },
          { "amount": 1, "unit": "cup", "ingredient": "brown sugar" },
          { "amount": 2, "unit": "large", "ingredient": "eggs" },
          { "amount": 2, "unit": "tsp", "ingredient": "vanilla extract" },
          { "amount": 3, "unit": "cup", "ingredient": "all-purpose flour" },
          { "amount": 1, "unit": "tsp", "ingredient": "baking soda" },
          { "amount": 2, "unit": "tsp", "ingredient": "hot water" },
          { "amount": 0.5, "unit": "tsp", "ingredient": "salt" },
          { "amount": 2, "unit": "cup", "ingredient": "chocolate chips" }
        ],
        "instructions": [
          "Preheat oven to 350°F (175°C).",
          "Cream together the butter and sugars until smooth.",
          "Beat in the eggs one at a time, then stir in the vanilla.",
          "Dissolve baking soda in hot water, then add to batter along with salt.",
          "Stir in flour and chocolate chips.",
          "Drop by large spoonfuls onto ungreased pans.",
          "Bake for about 10 minutes, or until edges are nicely browned."
        ],
        "image": "chocolate_chip_cookies.jpg"
      },
      {
        "name": "Caesar Salad",
        "description": "A classic salad with romaine lettuce, Parmesan cheese, croutons, and a creamy Caesar dressing.",
        "cuisine": "American",
        "servings": 4,
        "prep_time": 15,
        "cook_time": 0,
        "ingredients": [
          { "amount": 1, "unit": "large", "ingredient": "romaine lettuce" },
          { "amount": 1, "unit": "cup", "ingredient": "croutons" },
          { "amount": 0.5, "unit": "cup", "ingredient": "Parmesan cheese" },
          { "amount": 0.5, "unit": "cup", "ingredient": "Caesar dressing" },
          { "amount": null, "unit": "", "ingredient": "Salt" },
          { "amount": null, "unit": "", "ingredient": "Black pepper" }
        ],
        "instructions": [
          "Chop the romaine lettuce.",
          "In a large bowl, combine lettuce, croutons, and Parmesan cheese.",
          "Add Caesar dressing and toss to coat.",
          "Season with salt and pepper to taste.",
          "Serve immediately."
        ],
        "image": "caesar_salad.jpg"
      },
      {
        "name": "Miso Soup",
        "description": "A traditional Japanese soup made with miso paste, tofu, seaweed, and green onions.",
        "cuisine": "Japanese",
        "servings": 4,
        "prep_time": 10,
        "cook_time": 10,
        "ingredients": [
          { "amount": 4, "unit": "cups", "ingredient": "dashi stock" },
          { "amount": 3, "unit": "tbsp", "ingredient": "miso paste" },
          { "amount": 200, "unit": "g", "ingredient": "tofu" },
          { "amount": 1, "unit": "sheet", "ingredient": "nori (seaweed)" },
          { "amount": 2, "unit": "tbsp", "ingredient": "green onions" }
        ],
        "instructions": [
          "Bring dashi stock to a simmer.",
          "Add miso paste and stir until dissolved.",
          "Add tofu and nori, cook for 3-4 minutes.",
          "Add green onions and serve immediately."
        ],
        "image": "miso_soup.jpg"
      },
      {
        "name": "Guacamole",
        "description": "A creamy avocado dip mixed with lime, cilantro, tomatoes, and onions.",
        "cuisine": "Mexican",
        "servings": 4,
        "prep_time": 10,
        "cook_time": 0,
        "ingredients": [
          { "amount": 3, "unit": "large", "ingredient": "avocados" },
          { "amount": 1, "unit": "small", "ingredient": "lime" },
          { "amount": 1, "unit": "cup", "ingredient": "diced tomatoes" },
          { "amount": 0.5, "unit": "cup", "ingredient": "chopped cilantro" },
          { "amount": 0.5, "unit": "cup", "ingredient": "diced onions" },
          { "amount": 1, "unit": "tsp", "ingredient": "salt" }
        ],
        "instructions": [
          "Mash the avocados in a bowl.",
          "Add lime juice, tomatoes, cilantro, onions, and salt.",
          "Mix well and serve immediately."
        ],
        "image": "guacamole.jpg"
      },
      {
        "name": "Banana Bread",
        "description": "A moist and delicious banana bread made with ripe bananas, walnuts, and a hint of cinnamon.",
        "cuisine": "American",
        "servings": 8,
        "prep_time": 15,
        "cook_time": 60,
        "ingredients": [
          { "amount": 2, "unit": "cups", "ingredient": "all-purpose flour" },
          { "amount": 1, "unit": "tsp", "ingredient": "baking soda" },
          { "amount": 0.25, "unit": "tsp", "ingredient": "salt" },
          { "amount": 0.5, "unit": "cup", "ingredient": "butter" },
          { "amount": 0.75, "unit": "cup", "ingredient": "brown sugar" },
          { "amount": 2, "unit": "large", "ingredient": "eggs" },
          { "amount": 2.5, "unit": "cups", "ingredient": "mashed overripe bananas" },
          { "amount": 0.5, "unit": "cup", "ingredient": "chopped walnuts" },
          { "amount": 1, "unit": "tsp", "ingredient": "vanilla extract" }
        ],
        "instructions": [
          "Preheat oven to 350°F (175°C).",
          "In a large bowl, mix flour, baking soda, and salt.",
          "In another bowl, cream butter and brown sugar.",
          "Stir in eggs, bananas, and vanilla.",
          "Gradually add the flour mixture to the banana mixture.",
          "Fold in walnuts.",
          "Pour batter into a greased loaf pan.",
          "Bake for 60 minutes or until a toothpick inserted into the center comes out clean.",
          "Let cool in pan for 10 minutes, then transfer to a wire rack to cool completely."
        ],
        "image": "banana_bread.jpg"
      },
      {
        "name": "Greek Salad",
        "description": "A refreshing salad with tomatoes, cucumbers, olives, and feta cheese, dressed with olive oil and oregano.",
        "cuisine": "Greek",
        "servings": 4,
        "prep_time": 15,
        "cook_time": 0,
        "ingredients": [
          { "amount": 4, "unit": "large", "ingredient": "tomatoes" },
          { "amount": 1, "unit": "large", "ingredient": "cucumber" },
          { "amount": 1, "unit": "cup", "ingredient": "kalamata olives" },
          { "amount": 200, "unit": "g", "ingredient": "feta cheese" },
          { "amount": 1, "unit": "small", "ingredient": "red onion" },
          { "amount": 3, "unit": "tbsp", "ingredient": "olive oil" },
          { "amount": 1, "unit": "tsp", "ingredient": "dried oregano" },
          { "amount": null, "unit": "", "ingredient": "Salt" },
          { "amount": null, "unit": "", "ingredient": "Black pepper" }
        ],
        "instructions": [
          "Chop tomatoes, cucumber, and red onion.",
          "In a large bowl, combine tomatoes, cucumber, olives, red onion, and feta cheese.",
          "Drizzle with olive oil and sprinkle with oregano.",
          "Season with salt and pepper.",
          "Toss gently and serve immediately."
        ],
        "image": "greek_salad.jpg"
      },
      {
        "name": "Pancakes",
        "description": "Fluffy pancakes perfect for a weekend breakfast, served with syrup and fresh fruit.",
        "cuisine": "American",
        "servings": 4,
        "prep_time": 10,
        "cook_time": 20,
        "ingredients": [
          { "amount": 1.5, "unit": "cups", "ingredient": "all-purpose flour" },
          { "amount": 3.5, "unit": "tsp", "ingredient": "baking powder" },
          { "amount": 1, "unit": "tsp", "ingredient": "salt" },
          { "amount": 1, "unit": "tbsp", "ingredient": "white sugar" },
          { "amount": 1.25, "unit": "cups", "ingredient": "milk" },
          { "amount": 1, "unit": "large", "ingredient": "egg" },
          { "amount": 3, "unit": "tbsp", "ingredient": "butter" }
        ],
        "instructions": [
          "In a large bowl, sift together the flour, baking powder, salt, and sugar.",
          "Make a well in the center and pour in the milk, egg, and melted butter.",
          "Mix until smooth.",
          "Heat a lightly oiled griddle or frying pan over medium-high heat.",
          "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.",
          "Brown on both sides and serve hot."
        ],
        "image": "pancakes.jpg"
      },
      {
        "name": "Tom Yum Soup",
        "description": "A spicy and sour Thai soup with shrimp, mushrooms, and fresh herbs.",
        "cuisine": "Thai",
        "servings": 4,
        "prep_time": 15,
        "cook_time": 20,
        "ingredients": [
          { "amount": 4, "unit": "cups", "ingredient": "chicken broth" },
          { "amount": 1, "unit": "cup", "ingredient": "water" },
          { "amount": 1, "unit": "stalk", "ingredient": "lemongrass" },
          { "amount": 3, "unit": "slices", "ingredient": "galangal" },
          { "amount": 4, "unit": "pieces", "ingredient": "kaffir lime leaves" },
          { "amount": 200, "unit": "g", "ingredient": "shrimp" },
          { "amount": 1, "unit": "cup", "ingredient": "mushrooms" },
          { "amount": 2, "unit": "tbsp", "ingredient": "fish sauce" },
          { "amount": 2, "unit": "tbsp", "ingredient": "lime juice" },
          { "amount": 2, "unit": "tbsp", "ingredient": "Thai chili paste" },
          { "amount": 1, "unit": "tsp", "ingredient": "sugar" },
          { "amount": 1, "unit": "cup", "ingredient": "cherry tomatoes" },
          { "amount": null, "unit": "", "ingredient": "Cilantro" }
        ],
        "instructions": [
          "Bring chicken broth and water to a boil.",
          "Add lemongrass, galangal, and kaffir lime leaves. Simmer for 5 minutes.",
          "Add shrimp and mushrooms. Cook until shrimp are pink.",
          "Add fish sauce, lime juice, Thai chili paste, and sugar.",
          "Add cherry tomatoes and cook for 2 more minutes.",
          "Garnish with cilantro and serve hot."
        ],
        "image": "tom_yum_soup.jpg"
      },
      {
        "name": "Egg Fried Rice",
        "description": "A quick and easy fried rice with eggs, vegetables, and soy sauce.",
        "cuisine": "Chinese",
        "servings": 4,
        "prep_time": 10,
        "cook_time": 15,
        "ingredients": [
          { "amount": 2, "unit": "cups", "ingredient": "cooked rice" },
          { "amount": 2, "unit": "large", "ingredient": "eggs" },
          { "amount": 1, "unit": "cup", "ingredient": "mixed vegetables" },
          { "amount": 2, "unit": "tbsp", "ingredient": "soy sauce" },
          { "amount": 1, "unit": "tbsp", "ingredient": "vegetable oil" },
          { "amount": 2, "unit": "cloves", "ingredient": "garlic" },
          { "amount": 1, "unit": "tsp", "ingredient": "sesame oil" },
          { "amount": null, "unit": "", "ingredient": "Green onions" }
        ],
        "instructions": [
          "Heat vegetable oil in a large skillet.",
          "Add garlic and cook until fragrant.",
          "Add mixed vegetables and cook until tender.",
          "Push vegetables to the side and add eggs. Scramble until fully cooked.",
          "Add cooked rice and soy sauce. Stir to combine.",
          "Drizzle with sesame oil and garnish with green onions.",
          "Serve immediately."
        ],
        "image": "egg_fried_rice.jpg"
      },
      {
        "name": "Clam Chowder",
        "description": "A creamy New England clam chowder with potatoes, clams, and bacon.",
        "cuisine": "American",
        "servings": 6,
        "prep_time": 20,
        "cook_time": 30,
        "ingredients": [
          { "amount": 4, "unit": "slices", "ingredient": "bacon" },
          { "amount": 1, "unit": "cup", "ingredient": "onion" },
          { "amount": 1, "unit": "cup", "ingredient": "celery" },
          { "amount": 2, "unit": "cups", "ingredient": "potatoes" },
          { "amount": 3, "unit": "cups", "ingredient": "clam juice" },
          { "amount": 2, "unit": "cups", "ingredient": "clams" },
          { "amount": 1, "unit": "cup", "ingredient": "heavy cream" },
          { "amount": 3, "unit": "tbsp", "ingredient": "all-purpose flour" },
          { "amount": null, "unit": "", "ingredient": "Salt" },
          { "amount": null, "unit": "", "ingredient": "Black pepper" },
          { "amount": null, "unit": "", "ingredient": "Fresh parsley" }
        ],
        "instructions": [
          "Cook bacon until crisp. Remove and crumble.",
          "In the same pot, sauté onion and celery until tender.",
          "Add potatoes and clam juice. Bring to a boil, then simmer until potatoes are tender.",
          "In a small bowl, whisk flour and cream until smooth. Add to pot and stir until thickened.",
          "Add clams and cook for 5 minutes.",
          "Season with salt and pepper.",
          "Garnish with parsley and bacon crumbles.",
          "Serve hot."
        ],
        "image": "clam_chowder.jpg"
      },
      {
        "name": "Pesto Pasta",
        "description": "Pasta tossed in a fresh basil pesto sauce with Parmesan cheese and pine nuts.",
        "cuisine": "Italian",
        "servings": 4,
        "prep_time": 10,
        "cook_time": 15,
        "ingredients": [
          { "amount": 400, "unit": "g", "ingredient": "pasta" },
          { "amount": 2, "unit": "cups", "ingredient": "fresh basil leaves" },
          { "amount": 0.5, "unit": "cup", "ingredient": "Parmesan cheese" },
          { "amount": 0.5, "unit": "cup", "ingredient": "olive oil" },
          { "amount": 0.25, "unit": "cup", "ingredient": "pine nuts" },
          { "amount": 3, "unit": "cloves", "ingredient": "garlic" },
          { "amount": null, "unit": "", "ingredient": "Salt" },
          { "amount": null, "unit": "", "ingredient": "Black pepper" }
        ],
        "instructions": [
          "Cook pasta according to package instructions.",
          "In a food processor, combine basil, Parmesan, pine nuts, and garlic. Blend until smooth.",
          "Gradually add olive oil while blending.",
          "Season with salt and pepper to taste.",
          "Drain pasta and toss with pesto sauce.",
          "Serve immediately."
        ],
        "image": "pesto_pasta.jpg"
      },
      {
        "name": "Chicken Noodle Soup",
        "description": "A comforting chicken noodle soup with tender chicken, vegetables, and egg noodles.",
        "cuisine": "American",
        "servings": 6,
        "prep_time": 20,
        "cook_time": 30,
        "ingredients": [
          { "amount": 1, "unit": "tbsp", "ingredient": "olive oil" },
          { "amount": 1, "unit": "cup", "ingredient": "onion" },
          { "amount": 1, "unit": "cup", "ingredient": "carrots" },
          { "amount": 1, "unit": "cup", "ingredient": "celery" },
          { "amount": 2, "unit": "cups", "ingredient": "shredded chicken" },
          { "amount": 8, "unit": "cups", "ingredient": "chicken broth" },
          { "amount": 2, "unit": "cups", "ingredient": "egg noodles" },
          { "amount": 2, "unit": "tbsp", "ingredient": "fresh parsley" },
          { "amount": null, "unit": "", "ingredient": "Salt" },
          { "amount": null, "unit": "", "ingredient": "Black pepper" }
        ],
        "instructions": [
          "Heat olive oil in a large pot.",
          "Sauté onion, carrots, and celery until tender.",
          "Add chicken and chicken broth. Bring to a boil.",
          "Add egg noodles and cook until tender.",
          "Season with salt and pepper.",
          "Stir in fresh parsley.",
          "Serve hot."
        ],
        "image": "chicken_noodle_soup.jpg"
      }
    ]
    




const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/recipe-picker")
    .then(() => console.log("connection with database success"))
    .catch(() => console.log("connection with database failed"))

    const Recipe = require("./models/Recipe")
    const seedRecipes = async () => {
      await Recipe.deleteMany({})
      await Recipe.insertMany(recipes)
}

seedRecipes()
      .then(() => mongoose.disconnect())