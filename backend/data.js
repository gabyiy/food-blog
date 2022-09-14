import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Mihai",
      email: "user@test.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
    {
      name: "Gabi",
      email: "admin@test.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
  ],
  recipes: [
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Creamy-Shrimp-Pasta-with-Corn-1-840x1200.jpg",
      name: "Pasta",
      description: `Ugh, of COURSE we would eat pasta for every single meal if we could. But let's be reasonable, maybe just 8 times per week? Just, like, how do you choose between fork twirly or perfectly chewy or positively smothered in all the best sauces? Oh pasta, we love you so.`,
      featured: `creamy shrimp pasta with corn and tomatos`,
      recipeDetails: [
        {
          firstTextFirstImg:
            "Okay so maybe it’s not exactly what you were expecting. ",
          secondTextFirstImg:
            "It’s garlicky shrimp and creamy, silky noodles. Yes. That’s easy. You’re tracking. ",
          thirdTextFirstImg:
            "might be where you’re going, like, what? that’s… what’s going… how does this… until you take that first juicy noodle-fork-twirl bite.",
          forthTextFirtImg:
            "It’s summer meets my favorite kind of pasta. An easy, slurpy, super craveable all-in-one meal.",
          firstImg:
            "https://pinchofyum.com/wp-content/uploads/Creamy-Shrimp-Pasta-with-Corn-3.jpg",
          firstTextSecondImg:
            "This idea came from my friend Ang (of Ang’s tortellini soup fame) and I’m not really joking when I say that when I don’t know what to cook, I just ask her what she’s making and then I do the same thing.",
          secondTextSecondImg:
            "She sent me a picture of a creamy pasta bowl piled high with shrimp and cherry tomatoes from her garden – normal people text each other pictures of their dinners, right? She’s a no-recipe cook so she just kind of described it to me and I wasted no time getting after it.",
          thirdTextSecondImg: "",
          secondImg:
            "https://pinchofyum.com/wp-content/uploads/Creamy-Shrimp-Pasta-with-Corn-2.jpg",
          firstYoutubeText:
            "The tomatoes will get a little bursty and make your sauce kind of a creamy rosé situation. Your shrimp will be juicy, buttery, and delicious. Fresh corn and basil bring the summer vibes (and if you really wanna up your summer game, GRILL YOUR CORN). And your hot pile of noodles will be coated in a creamy, luxurious summer sauce. ",
          secondYoutubeTxt:
            "Good pasta and long summer days… my life is complete.",
          youtubeDescription:
            "Check Out Our Video For How To Make Creamy Shrimp Pasta:",
          youtubeLink:
            "https://i.ytimg.com/vi_webp/rNbyHGJmcJc/maxresdefault.webp",
          makingTime: "30",
          yeld: "4 generous servings",
          makingDescription:
            "Creamy Shrimp Pasta with Corn and Tomatoes! A seriously delicious fresh summer pasta. Creamy, silky noodles, garlicky shrimp, and a punch of fresh corn, cherry tomatoes, and basil.",
          firstIngredient: "8 ounces linguine, spaghetti, or similar ",
          secondIngredient: "1/2 cup reserved pasta water",
          thirdIngredient: "2 tablespoons butter, divided",
          forthIngredient:
            "1 lbs. shrimp, peeled and deveined (tail off or on, it’s up to you)",
          fifthIngredient: "1 teaspoon salt, divided",
          sixtIngredient: "1–2 cloves garlic, minced ",
          sevenIngredient: "2 cups cherry tomatoes, halved",
          eigthIngrdient:
            "2–3 ears cooked or grilled fresh sweet corn, kernels cut off the cob ",
          naineIngredient: "1 cup fresh spinach, chopped",
          tentIngredient: "squeeze of lemon juice",
          elevenIngredient: "1/2 to 3/4 cup heavy cream",
          tweleveIngredient: "fresh basil or Parmesan for topping",
          thirtenIngredient: "salt and pepper to taste",
          forteenIngredient: "",
          fifthIngredient: "",
          firstInstruction:
            "Cook pasta according to package directions. Drain, toss with oil to prevent sticking, set aside.",

          secondInstruction:
            "Heat a large nonstick skillet over medium heat. Add 1 tablespoon butter to the pan. Add shrimp and sprinkle with 1/2 teaspoon salt. Flip and cook until shrimp are cooked through. Set aside and cover to keep warm.",
          thirdInstruction:
            ",Add garlic and remaining 1 tablespoon butter. Add tomatoes and corn; sauté for 1-2 minutes. Add spinach; sauté until wilted. Add shrimp back to the pan. Add remaining 1/2 teaspoon salt and lemon juice. Add cream and bring to a low simmer.",
          forthInstruction:
            "Toss the cooked pasta with your sauce. Add reserved pasta water as needed. Top with basil, Parmesan, salt, or freshly cracked black pepper. GAH SO GOOD.",
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Elotes-Quinoa-Salad-2-840x1200.jpg",
      name: "Lunch",
      description: `Whether you're planning to meal prep for the week or you're looking for an amazing sandwich or salad to chomp on at your desk, we've gone through our recipes and gathered a bunch for lunch!`,
      featured: `elote style quinoa salad`,
      recipeDetails: [
        {
          firstTextFirstImg:
            "That’s it! Summer is on its waaaaay! And just in time for this bright, nutty, totally satisfying, creamy dream salad.",
          secondTextFirstImg: "",
          thirdTextFirstImg: "",
          firstImg:
            "https://pinchofyum.com/wp-content/uploads/Elotes-Quinoa-Salad-2.jpg",
          firstTextSecondImg:
            "It packs a real nutritional punch thanks to the quinoa and black beans, but then OH, DOES IT GET ZAZZED. Velvety peppers confit, piles of fresh juicy sweet corn, and a homemade dressing bringing the best of the best elote (Mexican street corn) flavors together like zippy lime, salty cotija cheese, and chili powder. And as always, we have big love for ALDI for having everything we need for this dream to come true, including all of the fresh (like, “it gets delivered every single day” fresh!) summery produce packed into this salad delight. ",
          secondTextSecondImg:
            "Mexican street corn, served either as elote (on the cob) or esquites (kernels in a cup), is a staple snack in Mexico, and rightly so. This beautifully savory grilled corn is either stuck on wooden sticks or shaved from the cob and served in little cups depending, painted in mayo, lime juice, cotija, and chili powder, and joyfully carried around and munched on by many. The very best of grab-and-go!",
          thirdTextSecondImg:
            "We’re taking inspiration from all those beautiful delicious flavors, shaving that fresh raw sweet corn right off the cob, and piling and tossing and mixing with some other chompable greats. Warning: highly addictive salad ahead.",
          secondImg:
            "https://pinchofyum.com/wp-content/uploads/Elotes-Quinoa-Salad-3.jpg",
          firstYoutubeText: "",
          secondYoutubeTxt: "",
          youtubeDescription: "",
          youtubeLink: "",
          makingTime: "40 minutes",
          yeld: "8 serving",
          makingDescription: `

          Elote Quinoa Salad made with velvety peppers confit, juicy sweet corn, homemade dressing, cotija cheese, lime, and spices. Perfect for summer and so, so good! 
          `,
          type: "Salad",
          firstIngredient: "1 cup Simple Nature Organic Quinoa, uncooked",
          secondIngredient: "5 ears sweet corn, cut off the cob",
          thirdIngredient: "1 can Simply Nature Organic Black Beans, rinsed",
          fifthIngredient:
            "1 package mini sweet peppers, sliced into small rings (about 2–3 cups)",
          sixtIngredient: "olive oil for cooking",
          sevenIngredient: "1 cup chopped fresh cilantro",
          eigthIngrdient: " ",
          naineIngredient: "",
          tentIngredient: "",
          elevenIngredient: "",
          tweleveIngredient: "",
          thirtenIngredient: "",
          forteenIngredient: "",
          fifthIngredient: "",
          firstInstruction: "Cook quinoa and prep ingredients. ",

          secondInstruction:
            "Drizzle a generous amount of olive oil in a skillet and add the pepper rings. Cook over medium heat, stirring occasionally, for about 20 minutes or until very soft and roasty-looking. Squeeze a little lime juice in the pan to lift all the browned bits off the bottom of the pan when you’re done! More flavor!",
          thirdInstruction:
            "Whisk up the dressing ingredients. Taste and adjust. It’s okay if it’s super salty – it’s going on a bunch of raw, unseasoned ingredients so we want it to have lots of flavor!",
          forthInstruction:
            "Toss ingredients or arrange in a bowl just before serving (quinoa, corn, beans, peppers, cilantro, and topped with dressing and cheese). Serve with grilled chicken, dip with chips, or on its own as a meal!",
        },
      ],
    },

    {
      icon: "https://pinchofyum.com/wp-content/uploads/Curry-Hummus-1-840x1200.jpg",
      name: " Snacks",
      description: `To be clear, we can make almost anything a snack around here. Spare buffalo chicken taco? Couple forkfuls of cold noodle salad from the fridge? Who put this homemade oreo here? But ok, we also have a whole slew of more traditional type snackables for you to choose from.`,
      featured: `churry hummus`,
      recipeDetails: [
        {
          firstTextFirstImg: "",
          secondTextFirstImg: "",
          thirdTextFirstImg: "",
          firstImg:
            "https://pinchofyum.com/wp-content/uploads/Curry-Hummus-1.jpg",
          firstTextSecondImg: "Curry Hummus!",
          secondTextSecondImg: "And Gluten Free May!",
          thirdTextSecondImg:
            "So here’s the deal. I am not gluten free. I am not an expert on gluten free. I acknowledge that gluten free diets aren’t just trendy but really important for some people, and I also acknowledge that gluten is not the food of the devil.",
          forthTextSecondImg:
            "All that being said, there was some nice things happened when I opted to dip my toes in the gluten-free waters a few weeks ago.",
          secondImg:
            "https://pinchofyum.com/wp-content/uploads/Curry-Hummus-3.jpg",

          makingTime: "10 min",
          yeld: " 12 servings (about 1/4 cup each) ",
          makingDescription: `

Curry Hummus! smooth, creamy, and perfect for a healthy snack or in a wrap for an awesome lunch. gluten & dairy free. YUM.
`,
          firstIngredient: "2 14–ounce cans chickpeas, drained and rinsed",
          secondIngredient: "1/2 cup coconut milk (more as needed)",
          thirdIngredient: "1 1/2 tablespoons red curry paste",
          fifthIngredient: "1 tablespoon curry powder",
          sixtIngredient: "1 clove garlic",
          sevenIngredient: "1 teaspoon sea salt",
          eigthIngrdient: " ",
          naineIngredient: "",
          tentIngredient: "",
          elevenIngredient: "",
          tweleveIngredient: "",
          thirtenIngredient: "",
          forteenIngredient: "",
          fifthIngredient: "",
          firstInstruction: "",

          secondInstruction: "Blend or pulse in a food processor until smooth.",
          thirdInstruction:
            "Add more coconut oil, olive oil, or water to loosen as needed, depending on how thick you want it. The end!",
          forthInstruction: "",
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Avocado-Shrimp-Salad-840x1200.jpg",
      name: "Avocado",
      description: `Is there anything this buttery, nutritious, delectable little green guy doesn't improve?! Full of healthy fats and creamy texture, it makes every single thing it's smushed on, chunked on, or mixed into a whole bunch more delicious.`,
      featured: `super quick avocado shrimp salad`,
      recipeDetails: [
        {
          firstTextFirstImg: `My favorite clean eating summer salad! Avocado Shrimp Salad with shrimp, avocado, cucumber, dill and chives, salt and pepp, and a big squeeze of lemon. This is such an easy recipe!
          `,
          secondTextFirstImg: "",
          thirdTextFirstImg: "",
          firstImg:
            "https://pinchofyum.com/wp-content/uploads/Avocado-Shrimp-Salad.jpg",
          firstTextSecondImg:
            "Hello, hello! This could be a weird pregnancy thing I’m loving right now, or it could be something that all people love, all the time? Time will tell. Either way:",
          secondTextSecondImg: "Avocado Shrimp Salad, comin boldly on through.",
          thirdTextSecondImg:
            "This Avo Shrimp Salad is reminding me of three other things: avocado egg salad (another swap-mayo-for-avocado salad situation), goddess curry chicken salad (another cold, creamy, healthy summer lunch), and a standard shrimp roll. Like, you know, the kind of shrimp roll you’d imagine getting on a boardwalk or something? I mean, I’ve never ACTUALLY eaten a shrimp roll on a boardwalk. But it just kind of seems like the right thing to associate this with – almost like you could stuff this cold, creamy goodness into a bun if you wanted to really go that direction, right? But you don’t even need to. It’s good enough on its own. Boardwalk not included.",
          secondImg:
            "https://pinchofyum.com/wp-content/uploads/Poached-Shrimp.jpg",
          firstYoutubeText: "",
          secondYoutubeTxt: "",
          youtubeDescription: "",
          youtubeLink: "",
          makingTime: "15 minutes",
          yeld: "1–2 servings",
          makingDescription: `

          Avocado Shrimp Salad packed with chilled poached shrimp, fresh dill, creamy avocado, and a nice big lemon drench.
          `,
          firstIngredient: "1/2 lb. shrimp (tails removed)",
          secondIngredient: "1 ripe avocado",
          thirdIngredient: "1/2 teaspoon salt",
          fifthIngredient: "a sprinkle of garlic powder (optional)",
          sixtIngredient: "squeeze of one lemon",
          sevenIngredient: "half of a small cucumber (diced)",
          eigthIngrdient: "a pinch of fresh dill ",
          naineIngredient: "a pinch of chives",
          tentIngredient: "",
          elevenIngredient: "",
          tweleveIngredient: "",
          thirtenIngredient: "",
          forteenIngredient: "",
          fifthIngredient: "",
          firstInstruction:
            "Poach the shrimp: Bring a pot of water to boil. Add the shrimp. Cook for 3-5 minutes until pink and opaque. Drain and place in a bowl of ice water to cool. When cooled, pat dry and cut into bite-sized pieces.",

          secondInstruction:
            "Avocado mixture: Mash the avocado. Season with salt, lemon, and garlic powder if you want.",
          thirdInstruction:
            "Assemble: Toss shrimp, avocado mix, cucumber, and herbs together. Season to taste. Eat on the deck in the summer with a cold coconut water and feel like a million bucks!",
          forthInstruction: "",
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Chicken-Tikka-Masala-Bowls-3-183x183.jpg",
      name: "quick and easy",
      description: `There's no tiiiiiiiiiiiiime! But is there ever? If you're feeling like you need something super quick and super easy, then you came to the right place. Let's get you eating, stat!`,
      featured: `cripsy chiken tikka bowls with mint sauce`,
      recipeDetails: [
        {
          firstTextFirstImg: `Bringing you these addicting Chicken Tikka Bowls! Crispy bits of chicken tenders, crispy cucumbers, and briny pickled onions, all on a bed of fluffy quinoa with a swoop of cool mint sauce on top. You absolutely cannot go wrong with these bowls.
          `,
          secondTextFirstImg: "",
          thirdTextFirstImg: "",
          firstImg:
            "https://pinchofyum.com/wp-content/uploads/Chicken-Tikka-Masala-Bowls-3.jpg",
          firstTextSecondImg:
            "Please make way in your tums and hearts for this terribly addicting, incredibly delicious chicken tikka bowl. Crispy chicken tenders brushed with your favorite tikka masala sauce and roasted to a perfect crisp, fresh cucumber crunch alongside a creamy slaw and some quick pickled onions, all piled on a bed of light, nutty quinoa with a fresh-made drinkable mint sauce that might make you CRY REAL HUMAN TEARS.",
          secondTextSecondImg:
            "It’s here. It’s a go-to lunch/dinner/bedtime snack. It couldn’t be easier and we simply cannot stop eating it. It’s also absolutely flexible and super easy to throw together, so it is very ready to be your new best friend.",
          thirdTextSecondImg:
            "This isn’t chicken tikka in the traditional Indian cuisine sense where pieces of marinated chicken are grilled or baked on skewers in a tandoor oven. And it isn’t even full chicken tikka masala, which is a curried version where that chicken tikka then gets simmered in a creamy spiced tomato sauce and served over rice. Instead, we’re borrowing that delicious deeply spiced flavor using our favorite jarred version of masala sauce and giving some easy crispy chicken tenders a little brush and bake. It’s definitely a bit outside the norm, but we are absolutely here for it. ",
          secondImg:
            "https://pinchofyum.com/wp-content/uploads/Chicken-Tikka-Masala-Bowls-2.jpg",
          firstYoutubeText: "",
          secondYoutubeTxt: "",
          youtubeDescription: "",
          youtubeLink: "",
          makingTime: " 30 minutes",
          yeld: "4 bowls ",
          makingDescription: `

          Bringing you these addicting Chicken Tikka Bowls! Crispy bits of chicken tenders, crispy cucumbers, and briny pickled onions, all on a bed of fluffy quinoa with a swoop of cool mint sauce on top. You absolutely cannot go wrong with these bowls. 
          `,
          firstIngredient:
            "a few pieces of crispy breaded chicken (homemade option, or store-bought)",
          secondIngredient:
            "1/2 cup tikka masala sauce (homemade option, or store-bought)",
          thirdIngredient: "cooked quinoa",
          fifthIngredient: "sliced or diced cucumbers",
          sixtIngredient: "pickled red onion",
          sevenIngredient:
            "slaw (toss a few cups of shredded cabbage and carrots tossed with mayo, vinegar, and salt, or use a store-bought slaw mix)",
          eigthIngrdient: " ",
          naineIngredient: "",
          tentIngredient: "",
          elevenIngredient: "",
          tweleveIngredient: "",
          thirtenIngredient: "",
          forteenIngredient: "",
          fifthIngredient: "",
          firstInstruction: "",

          secondInstruction: "",
          thirdInstruction: "",
          forthInstruction: "",
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Sausage-and-Peppers-6-183x183.jpg",
      name: "dinner",
      description: `"What's for dinner?" Gah! That question! Whether it's coming from your own tired brain or a family full of hungry askers, let's help you get that question answered!`,
      featured: `griled sausage and peppers with garlic aioli`,
      recipeDetails: [
        {
          firstTextFirstImg:
            "Grilled Sausages, plus onions and peppers, all grilled and juicy and tucked into a toasted (but still fluffy) brioche bun swizzled with a punchy little aioli to tie it all up. SO GOOD.",
          secondTextFirstImg: "",
          thirdTextFirstImg: "",
          firstImg:
            "https://pinchofyum.com/wp-content/uploads/Sausage-and-Peppers-6.jpg",
          firstTextSecondImg:
            "Let me just roll this out: Italian Chicken Sausages, plus onions and peppers, all grilled and juicy and tucked into a toasted (but still fluffy) brioche bun swizzled with a punchy little aioli to tie it all up. ",
          secondTextSecondImg: "Is it summer? I think it is almost summer.",
          thirdTextSecondImg:
            "I’m sending my greetings from the land where the sun now shines and grilling for dinner has once again become an option! I hope this is true for most if not all of us?! Because nothing makes quarantine life a little more exciting than taking the kitchen operations OUTSIDE. Trees. Birds. Concrete.",
          secondImg:
            "https://pinchofyum.com/wp-content/uploads/Sausage-and-Peppers-7.jpg",
          firstYoutubeText: "",
          secondYoutubeTxt: "",
          youtubeDescription: "",
          youtubeLink: "",
          makingTime: "30 min",
          yeld: "4",
          makingDescription: `

          Grilled Sausages, plus onions and peppers, all grilled and juicy and tucked into a toasted (but still fluffy) brioche bun swizzled with a punchy little aioli to tie it all up. SO GOOD.
          `,
          firstIngredient:
            "1 package Never Any! Mild Italian Style Chicken Sausages (4 individual sausages)",
          secondIngredient: "2 bell peppers, cut into slices",
          thirdIngredient: "half of an onion, cut into slices",
          fifthIngredient:
            "1/2 tablespoon Stonemill Roasted Garlic Herb Grill Seasoning",
          sixtIngredient: "olive oil, lemon juice, and salt",
          sevenIngredient: "4 Specially Selected Brioche Hot Dog Buns",
          eigthIngrdient: " ",
          naineIngredient: "",
          tentIngredient: "",
          elevenIngredient: "",
          tweleveIngredient: "",
          thirtenIngredient: "",
          forteenIngredient: "",
          fifthIngredient: "",
          firstInstruction: "Whisk aioli in a small bowl. Set aside.",

          secondInstruction:
            "Toss peppers and onions with the garlic herb seasoning (or whatever other spices you want). Drizzle with enough oil so they won’t stick on the grill.",
          thirdInstruction:
            "Place sausages directly on the grill. Place peppers and onion slices in a grill basket or a cast iron pan on the grill. Grill both until you get nice grill marks and the veggies are soft. At the end of grilling time, add the brioche buns, cut side down, to get them toasty.",
          forthInstruction:
            "Transfer peppers to a bowl and toss with lemon juice, more olive oil as needed, and salt and pepper to taste.",
          fifthInstruction:
            "Serve each grilled chicken sausage on a toasted bun with a scoop of grilled peppers and a swizzle of your aioli. YUM. At our house, extra aioli was requested for certain grown-ups for “dipping,” so just be prepared for that.",
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Spirali-1-183x183.jpg",
      name: "vegetarian",
      description: `Eating more plant-forward meals is not only great for your body but great for the planet too! Whether you're a long-time vegetarian looking for some new inspiration or someone just trying to add a few more veggie-friendly options to their menu, here's the place to find what you're looking for.`,
      featured: `creamy garlic sun-dried tomato pasta`,
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Socca-with-Whipped-Feta-3-183x183.jpg",
      name: "healthy",
      description: `Maybe you're switching up some eating habits, maybe you're coming off a week of all cookies all the time, maybe you just have a bunch of kale to use up. Whatever the reason, here's the place to search all the healthy things!`,
      featured: `soca with wipped feta and tomato salad`,
      recipeDetails: [
        {
          firstTextFirstImg:
            "Socca with Whipped Feta and Tomato Salad! HELLO. Crispy, creamy, tangy, and summery all on one plate.",
          secondTextFirstImg: "",
          thirdTextFirstImg: "",
          firstImg:
            "https://pinchofyum.com/wp-content/uploads/Socca-with-Whipped-Feta-3.jpg",
          firstTextSecondImg:
            "Let’s talk about Socca first. The origin of Socca is heavily debated between France and Italy (known as Farinata there) but one thing is certain: this simple street food made with only chickpea flour, olive oil, water, and salt is the crispy rich snacker of your dreams.",
          secondTextSecondImg:
            "And here is how you make this meal that isn’t really a meal but also is everything a meal should be: take your piping hot freshly baked socca out of the cast iron, break it into a few crispy, chewy pieces, swoop it through a tangy dollop of herby whipped feta, and top the whole thing with a spoonful of juicy, vinegary tomato and cucumber salad on top for a crunchy finish. ",
          thirdTextSecondImg: "",
          secondImg:
            "https://pinchofyum.com/wp-content/uploads/Socca-with-Whipped-Feta-1.jpg",
          firstYoutubeText: "",
          secondYoutubeTxt: "",
          youtubeDescription: "",
          youtubeLink: "",
          makingTime: "30 minutes",
          yeld: "2-4",
          makingDescription: `

          Socca with Whipped Feta and Tomato Salad! HELLO. Crispy, creamy, tangy, and summery all on one plate.
          `,
          firstIngredient: "1 cup chickpea flour (affiliate link)",
          secondIngredient: "2 tablespoons olive oil (and extra for the pan)",
          thirdIngredient: "3/4 teaspoon salt",
          fifthIngredient: "1 1/4 cups water",
          sixtIngredient: "2–3 cups cherry or grape tomatoes, halved",
          sevenIngredient:
            "1 cup cucumber slices (optional, but adds a nice crunch)",
          eigthIngrdient: "1/4 cup olive oil ",
          naineIngredient: "1–2 tablespoons white vinegar or lemon juice",
          tentIngredient: "1 small clove garlic, grated or finely minced",
          elevenIngredient: "",
          tweleveIngredient: "",
          thirtenIngredient: "",
          forteenIngredient: "",
          fifthIngredient: "",
          firstInstruction:
            "Preheat oven to 450 degrees. While oven is preheating, mix up your tomato salad so it has a little time to sit together and get real yummy.",

          secondInstruction:
            "Whisk all socca ingredients until smooth. Pour 1-2 tablespoons olive oil into a 10-inch cast iron skillet, and pop the skillet in the oven for 5 minutes to preheat. Pour half of the socca batter evenly into the pan and bake for 15-18 minutes, until golden around the edges. (Repeat with the second half of the batter.)",
          thirdInstruction:
            "While the socca is baking, blend the feta in a food processor or blender, or with a hand mixer, until smooth-ish. Add your cream cheese, yogurt, mascarpone, whatever you pick to help make the whole thing into a sort of fluffy, creamy sauce. Season with what you like – I love thyme, olive oil, and a little black pepper.",
          forthInstruction:
            "Tear off chunks of hot, crispy socca to be served / dipped / spread / topped with whipped feta and a bunch of fresh, garlicky tomato salad.",
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Hawaiian-Chicken-Tacos-5-183x183.jpg",
      name: "instant pot",
      description: `Was there ever a more magical tool in the land?! Here are a bunch of our faves using our most beloved little kitchen helper.`,
      featured: `instant pot hawaiian chicken tacos with halapeno ranch slaw`,
      recipeDetails: [
        {
          firstTextFirstImg: `These Instant Pot Hawaiian Chicken Tacos are out of this WORLD. Juicy pineapple and spiced chicken crisped under the broiler, tucked into tortillas, and rolled up with creamy jalapeño ranch slaw.
            `,
          secondTextFirstImg: "",
          thirdTextFirstImg: "",
          firstImg:
            "https://pinchofyum.com/wp-content/uploads/Hawaiian-Chicken-Tacos-5.jpg",
          firstTextSecondImg:
            "Can we just establish that my idea of a good dinner is one that starts with INSTANT POT and ends with juicy pineapple and spiced chicken crisped under the broiler, tucked into tortillas, and rolled up with creamy jalapeño ranch slaw?",
          secondTextSecondImg:
            "These tacos are springy, delicious, and just plain happy. Er, maybe it’s me that’s happy? And probably because throwing some pantry ingredients together, pressing start on the Instant Pot, taking my crew for a walk, and coming home to dinner almost done is almost the same as winning a million dollars. Almost.",
          thirdTextSecondImg: "",
          secondImg:
            "https://pinchofyum.com/wp-content/uploads/Hawaiian-Chicken-Tacos-1.jpg",
          firstYoutubeText: "",
          secondYoutubeTxt: "",
          youtubeDescription: "",
          youtubeLink: "",
          makingTime: "40 minutes",
          yeld: "4-6 servings",
          makingDescription: `

          These Instant Pot Hawaiian Chicken Tacos are out of this WORLD. Juicy pineapple and spiced chicken crisped under the broiler, tucked into tortillas, and rolled up with creamy jalapeño ranch slaw.
          `,
          firstIngredient: "1.25 lbs. boneless skinless chicken thighs",
          secondIngredient: "2 cups fresh pineapple, finely chopped",
          thirdIngredient: "half of a red onion, minced",
          fifthIngredient: "3 cloves garlic, minced",
          sixtIngredient: "1 teaspoon chili powder",
          sevenIngredient: "1 teaspoon cumin",
          eigthIngrdient: " 1 teaspoon salt",
          naineIngredient: "1 tablespoon yellow mustard",
          tentIngredient: "1/4 cup water",
          elevenIngredient: "",
          tweleveIngredient: "",
          thirtenIngredient: "",
          forteenIngredient: "",
          fifthIngredient: "",
          firstInstruction:
            "Prep: Preheat the oven to 475 degrees (broil setting).",

          secondInstruction:
            "Instant Pot: Place all chicken ingredients in the Instant Pot. Cook on high pressure for 10 minutes (20 if frozen). Release the pressure and shred chicken directly in pot.",
          thirdInstruction:
            "Broil: Transfer shredded chicken to a baking sheet lined with foil. Broil for 10-15 minutes until browned. ",
          forthInstruction:
            "Sauce: Pulse jalapeño ranch ingredients in a food processor until smooth. Toss some of the dressing with finely shredded cabbage to make a slaw.",
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/BBQ-Tofu-Bowls-4-183x183.jpg",
      name: "vegan",
      description: `This is the place to go for all the plant-based goodness. These recipes are keeping it vegan but still super satisfying and super delicious. Let's eat some plants!`,
      featured: `sheet pan bbq tofu`,
      recipeDetails: [
        {
          firstTextFirstImg: "",
          secondTextFirstImg: "",
          thirdTextFirstImg: "",
          firstImg: "",
          firstTextSecondImg: "",
          secondTextSecondImg: "",
          thirdTextSecondImg: "",
          secondImg: "",
          firstYoutubeText: "",
          secondYoutubeTxt: "",
          youtubeDescription: "",
          youtubeLink: "",
          makingTime: "",
          yeld: "",
          makingDescription: "",
          firstIngredient: "",
          secondIngredient: "",
          thirdIngredient: "",
          fifthIngredient: "",
          sixtIngredient: "",
          sevenIngredient: "",
          eigthIngrdient: " ",
          naineIngredient: "",
          tentIngredient: "",
          elevenIngredient: "",
          tweleveIngredient: "",
          thirtenIngredient: "",
          forteenIngredient: "",
          fifthIngredient: "",
          firstInstruction: "",

          secondInstruction: "",
          thirdInstruction: "",
          forthInstruction: "",
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Healthy-Summer-Salad-Jars-183x183.jpg",
      name: "meal prep",
      description: `Meal prep gets big love from us because it's so great to not even have to THINK about what to cook every day. Spend a few hours getting everything prepped and then the rest of your week is made! Now your brain space can be filled with, well...all the other stuff.`,
      featured: `summer quinoa jars with lemon dill dressing`,
      recipeDetails: [
        {
          firstTextFirstImg: "",
          secondTextFirstImg: "",
          thirdTextFirstImg: "",
          firstImg: "",
          firstTextSecondImg: "",
          secondTextSecondImg: "",
          thirdTextSecondImg: "",
          secondImg: "",
          firstYoutubeText: "",
          secondYoutubeTxt: "",
          youtubeDescription: "",
          youtubeLink: "",
          makingTime: "",
          yeld: "",
          makingDescription: "",
          firstIngredient: "",
          secondIngredient: "",
          thirdIngredient: "",
          fifthIngredient: "",
          sixtIngredient: "",
          sevenIngredient: "",
          eigthIngrdient: " ",
          naineIngredient: "",
          tentIngredient: "",
          elevenIngredient: "",
          tweleveIngredient: "",
          thirtenIngredient: "",
          forteenIngredient: "",
          fifthIngredient: "",
          firstInstruction: "",

          secondInstruction: "",
          thirdInstruction: "",
          forthInstruction: "",
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Summer-Soup-2-183x183.jpg",
      name: "soup",
      description: `Soup is the beeeeest! Honestly, it's one of our favorite food groups. There is nothing quite like curling up with a steaming cozy bowl of soup slurped by the spoonful or devoured with crusty bread dips. Yes yes and yes.`,
      featured: `clean eating instant pot  summer soup`,
      recipeDetails: [
        {
          firstTextFirstImg: "",
          secondTextFirstImg: "",
          thirdTextFirstImg: "",
          firstImg: "",
          firstTextSecondImg: "",
          secondTextSecondImg: "",
          thirdTextSecondImg: "",
          secondImg: "",
          firstYoutubeText: "",
          secondYoutubeTxt: "",
          youtubeDescription: "",
          youtubeLink: "",
          makingTime: "",
          yeld: "",
          makingDescription: "",
          firstIngredient: "",
          secondIngredient: "",
          thirdIngredient: "",
          fifthIngredient: "",
          sixtIngredient: "",
          sevenIngredient: "",
          eigthIngrdient: " ",
          naineIngredient: "",
          tentIngredient: "",
          elevenIngredient: "",
          tweleveIngredient: "",
          thirtenIngredient: "",
          forteenIngredient: "",
          fifthIngredient: "",
          firstInstruction: "",

          secondInstruction: "",
          thirdInstruction: "",
          forthInstruction: "",
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Couscous-Salad-1-3-183x183.jpg",
      name: "salads",
      description: `Traditional lettuce-chomping salads but also noodley salads, mayo-based salads, grain salads...so many ways to salad! We promise these recipes will have you feeling full and happy.`,
      featured: `couscous salad with lime basil vinaigrette`,
      recipeDetails: [
        {
          firstTextFirstImg: "",
          secondTextFirstImg: "",
          thirdTextFirstImg: "",
          firstImg: "",
          firstTextSecondImg: "",
          secondTextSecondImg: "",
          thirdTextSecondImg: "",
          secondImg: "",
          firstYoutubeText: "",
          secondYoutubeTxt: "",
          youtubeDescription: "",
          youtubeLink: "",
          makingTime: "",
          yeld: "",
          makingDescription: "",
          firstIngredient: "",
          secondIngredient: "",
          thirdIngredient: "",
          fifthIngredient: "",
          sixtIngredient: "",
          sevenIngredient: "",
          eigthIngrdient: " ",
          naineIngredient: "",
          tentIngredient: "",
          elevenIngredient: "",
          tweleveIngredient: "",
          thirtenIngredient: "",
          forteenIngredient: "",
          fifthIngredient: "",
          firstInstruction: "",

          secondInstruction: "",
          thirdInstruction: "",
          forthInstruction: "",
        },
      ],
    },

    {
      icon: "https://pinchofyum.com/wp-content/uploads/Creamy-Shrimp-Pasta-with-Corn-1-800x800.jpg",
      name: "Pasta",
      description: "Creamy Shrip Pasta with Corn and Tomatos",
      recipeDetails: [
        {
          firstTextFirstImg: "",
          secondTextFirstImg: "",
          thirdTextFirstImg: "",
          firstImg: "",
          firstTextSecondImg: "",
          secondTextSecondImg: "",
          thirdTextSecondImg: "",
          secondImg: "",
          firstYoutubeText: "",
          secondYoutubeTxt: "",
          youtubeDescription: "",
          youtubeLink: "",
          makingTime: "",
          yeld: "",
          makingDescription: "",
          firstIngredient: "",
          secondIngredient: "",
          thirdIngredient: "",
          fifthIngredient: "",
          sixtIngredient: "",
          sevenIngredient: "",
          eigthIngrdient: " ",
          naineIngredient: "",
          tentIngredient: "",
          elevenIngredient: "",
          tweleveIngredient: "",
          thirtenIngredient: "",
          forteenIngredient: "",
          fifthIngredient: "",
          firstInstruction: "",

          secondInstruction: "",
          thirdInstruction: "",
          forthInstruction: "",
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Udon-2-800x800.jpg",
      name: "Pasta",
      description: "Black Papper Stir Fried Udon",
      recipeDetails: [
        {
          firstTextFirstImg: "",
          secondTextFirstImg: "",
          thirdTextFirstImg: "",
          firstImg: "",
          firstTextSecondImg: "",
          secondTextSecondImg: "",
          thirdTextSecondImg: "",
          secondImg: "",
          firstYoutubeText: "",
          secondYoutubeTxt: "",
          youtubeDescription: "",
          youtubeLink: "",
          makingTime: "",
          yeld: "",
          makingDescription: "",
          firstIngredient: "",
          secondIngredient: "",
          thirdIngredient: "",
          fifthIngredient: "",
          sixtIngredient: "",
          sevenIngredient: "",
          eigthIngrdient: " ",
          naineIngredient: "",
          tentIngredient: "",
          elevenIngredient: "",
          tweleveIngredient: "",
          thirtenIngredient: "",
          forteenIngredient: "",
          fifthIngredient: "",
          firstInstruction: "",

          secondInstruction: "",
          thirdInstruction: "",
          forthInstruction: "",
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Homemade-Ramen-4-3-800x800.jpg",
      name: "Pasta",
      description: "Quick Homade Ramen",
      recipeDetails: [
        {
          firstTextFirstImg: "",
          secondTextFirstImg: "",
          thirdTextFirstImg: "",
          firstImg: "",
          firstTextSecondImg: "",
          secondTextSecondImg: "",
          thirdTextSecondImg: "",
          secondImg: "",
          firstYoutubeText: "",
          secondYoutubeTxt: "",
          youtubeDescription: "",
          youtubeLink: "",
          makingTime: "",
          yeld: "",
          makingDescription: "",
          firstIngredient: "",
          secondIngredient: "",
          thirdIngredient: "",
          fifthIngredient: "",
          sixtIngredient: "",
          sevenIngredient: "",
          eigthIngrdient: " ",
          naineIngredient: "",
          tentIngredient: "",
          elevenIngredient: "",
          tweleveIngredient: "",
          thirtenIngredient: "",
          forteenIngredient: "",
          fifthIngredient: "",
          firstInstruction: "",

          secondInstruction: "",
          thirdInstruction: "",
          forthInstruction: "",
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Spicy-Sausage-Rigatoni-3-2-800x800.jpg",
      name: "Pasta",
      description: "Spicy Sausage Rigatoni",
      recipeDetails: [
        {
          firstTextFirstImg: "",
          secondTextFirstImg: "",
          thirdTextFirstImg: "",
          firstImg: "",
          firstTextSecondImg: "",
          secondTextSecondImg: "",
          thirdTextSecondImg: "",
          secondImg: "",
          firstYoutubeText: "",
          secondYoutubeTxt: "",
          youtubeDescription: "",
          youtubeLink: "",
          makingTime: "",
          yeld: "",
          makingDescription: "",
          firstIngredient: "",
          secondIngredient: "",
          thirdIngredient: "",
          fifthIngredient: "",
          sixtIngredient: "",
          sevenIngredient: "",
          eigthIngrdient: " ",
          naineIngredient: "",
          tentIngredient: "",
          elevenIngredient: "",
          tweleveIngredient: "",
          thirtenIngredient: "",
          forteenIngredient: "",
          fifthIngredient: "",
          firstInstruction: "",

          secondInstruction: "",
          thirdInstruction: "",
          forthInstruction: "",
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/white-wine-linguine-shrimp-3-800x800.jpg",
      name: "Pasta",
      description: "Garlic Butter White Wine Shrimp Linguine",
      recipeDetails: [
        {
          firstTextFirstImg: "",
          secondTextFirstImg: "",
          thirdTextFirstImg: "",
          firstImg: "",
          firstTextSecondImg: "",
          secondTextSecondImg: "",
          thirdTextSecondImg: "",
          secondImg: "",
          firstYoutubeText: "",
          secondYoutubeTxt: "",
          youtubeDescription: "",
          youtubeLink: "",
          makingTime: "",
          yeld: "",
          makingDescription: "",
          firstIngredient: "",
          secondIngredient: "",
          thirdIngredient: "",
          fifthIngredient: "",
          sixtIngredient: "",
          sevenIngredient: "",
          eigthIngrdient: " ",
          naineIngredient: "",
          tentIngredient: "",
          elevenIngredient: "",
          tweleveIngredient: "",
          thirtenIngredient: "",
          forteenIngredient: "",
          fifthIngredient: "",
          firstInstruction: "",

          secondInstruction: "",
          thirdInstruction: "",
          forthInstruction: "",
        },
      ],
    },
  ],
};

export default data;
