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
      icon: "https://pinchofyum.com/wp-content/uploads/Pasta-Salad-with-Italian-Dressing.jpg",
      name: "Pasta",
      description: `Ugh, of COURSE we would eat pasta for every single  meal if we could. But let's be reasonable, maybe just 8 times per week? Just, like, how do you choose between fork twirly or perfectly chewy or positively smothered in all the best sauces? Oh pasta, we love you so.`,
      featured: `Creamy Shrimp Pasta With Corn And Tomatos`,
      recipeDetails: [
        {
          firstTextFirstImg: `Creamy Shrimp Pasta with Corn and Tomatoes! A seriously delicious fresh summer pasta. Creamy, silky noodles, garlicky shrimp, and a punch of fresh corn, cherry tomatoes, and basil.
            `,
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
          makingTime: "30 minutes",
          yeld: "4 generous servings",
          makingDescription:
            "Creamy Shrimp Pasta with Corn and Tomatoes! A seriously delicious fresh summer pasta. Creamy, silky noodles, garlicky shrimp, and a punch of fresh corn, cherry tomatoes, and basil.",
          ingredients: [
            "8 ounces linguine, spaghetti, or similar ",
            "1/2 cup reserved pasta water",
            "2 tablespoons butter, divided",

            "1 lbs. shrimp, peeled and deveined (tail off or on, it’s up to you)",
            "1 teaspoon salt, divided",
            "1–2 cloves garlic, minced ",
            "2 cups cherry tomatoes, halved",

            "2–3 ears cooked or grilled fresh sweet corn, kernels cut off the cob ",
            "1 cup fresh spinach, chopped",
            "squeeze of lemon juice",
            "1/2 to 3/4 cup heavy cream",
            "fresh basil or Parmesan for topping",
            "salt and pepper to taste",
          ],
          instructions: [
            "Cook pasta according to package directions. Drain, toss with oil to prevent sticking, set aside.",

            "Heat a large nonstick skillet over medium heat. Add 1 tablespoon butter to the pan. Add shrimp and sprinkle with 1/2 teaspoon salt. Flip and cook until shrimp are cooked through. Set aside and cover to keep warm.",

            ",Add garlic and remaining 1 tablespoon butter. Add tomatoes and corn; sauté for 1-2 minutes. Add spinach; sauté until wilted. Add shrimp back to the pan. Add remaining 1/2 teaspoon salt and lemon juice. Add cream and bring to a low simmer.",

            "Toss the cooked pasta with your sauce. Add reserved pasta water as needed. Top with basil, Parmesan, salt, or freshly cracked black pepper. GAH SO GOOD.",
          ],
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Elotes-Quinoa-Salad-2.jpg",
      name: "Lunch",
      description: `Whether you're planning to meal prep for the week or you're looking for an amazing sandwich or salad to chomp on at your desk, we've gone through our recipes and gathered a bunch for lunch!`,
      featured: `Elote Style Quinoa Salad`,
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
          ingredients: [
            "1 cup Simple Nature Organic Quinoa, uncooked",
            "5 ears sweet corn, cut off the cob",
            "1 can Simply Nature Organic Black Beans, rinsed",

            "1 package mini sweet peppers, sliced into small rings (about 2–3 cups)",
            "olive oil for cooking",
            "1 cup chopped fresh cilantro",
          ],
          instructions: [
            "Cook Quinoa And Prep Ingredients. ",

            "Drizzle a generous amount of olive oil in a skillet and add the pepper rings. Cook over medium heat, stirring occasionally, for about 20 minutes or until very soft and roasty-looking. Squeeze a little lime juice in the pan to lift all the browned bits off the bottom of the pan when you’re done! More flavor!",
            "Whisk up the dressing ingredients. Taste and adjust. It’s okay if it’s super salty – it’s going on a bunch of raw, unseasoned ingredients so we want it to have lots of flavor!",

            "Toss ingredients or arrange in a bowl just before serving (quinoa, corn, beans, peppers, cilantro, and topped with dressing and cheese). Serve with grilled chicken, dip with chips, or on its own as a meal!",
          ],
        },
      ],
    },

    {
      icon: "https://pinchofyum.com/wp-content/uploads/Curry-Hummus-1.jpg",
      name: " Snacks",
      description: `To be clear, we can make almost anything a snack around here. Spare buffalo chicken taco? Couple forkfuls of cold noodle salad from the fridge? Who put this homemade oreo here? But ok, we also have a whole slew of more traditional type snackables for you to choose from.`,
      featured: `Churry Hummus`,
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
          ingredients: [
            "2 14–ounce cans chickpeas, drained and rinsed",
            "1/2 cup coconut milk (more as needed)",
            "1 1/2 tablespoons red curry paste",
            "1 tablespoon curry powder",
            "1 clove garlic",
            "1 teaspoon sea salt",
          ],
          instructions: [
            "Blend or pulse in a food processor until smooth.",

            "Add more coconut oil, olive oil, or water to loosen as needed, depending on how thick you want it. The end!",
          ],
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Avocado-Shrimp-Salad.jpg",
      name: "Avocado",
      description: `Is there anything this buttery, nutritious, delectable little green guy doesn't improve?! Full of healthy fats and creamy texture, it makes every single thing it's smushed on, chunked on, or mixed into a whole bunch more delicious.`,
      featured: `Super Quick Avocado Shrimp Salad`,
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
          ingredients: [
            "1/2 lb. shrimp (tails removed)",
            "1 ripe avocado",
            "1/2 teaspoon salt",
            "a sprinkle of garlic powder (optional)",
            "squeeze of one lemon",
            "half of a small cucumber (diced)",
            "a pinch of fresh dill ",
            "a pinch of chives",
          ],
          instructions: [
            "Poach the shrimp: Bring a pot of water to boil. Add the shrimp. Cook for 3-5 minutes until pink and opaque. Drain and place in a bowl of ice water to cool. When cooled, pat dry and cut into bite-sized pieces.",

            "Avocado mixture: Mash the avocado. Season with salt, lemon, and garlic powder if you want.",

            "Assemble: Toss shrimp, avocado mix, cucumber, and herbs together. Season to taste. Eat on the deck in the summer with a cold coconut water and feel like a million bucks!",
          ],
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Chicken-Tikka-Masala-Bowls-3.jpg",
      name: "Quick And Easy",
      description: `There's no tiiiiiiiiiiiiime! But is there ever? If you're feeling like you need something super quick and super easy, then you came to the right place. Let's get you eating, stat!`,
      featured: `Cripsy Chiken Tikka Bowls With Mint Sauce`,
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
          ingredients: [
            "a few pieces of crispy breaded chicken (homemade option, or store-bought)",

            "1/2 cup tikka masala sauce (homemade option, or store-bought)",
            "cooked quinoa",
            "sliced or diced cucumbers",
            "pickled red onion",

            "slaw (toss a few cups of shredded cabbage and carrots tossed with mayo, vinegar, and salt, or use a store-bought slaw mix)",
            "1/4 cup mint leaves",
            "1/2 cup mayo or plain Greek yogurt",
            "juice of a lime",
          ],
          instructions: [
            "Cook the chicken according to package directions. Brush with sauce and return to oven for an additional 5 minutes.",
            "While the chicken is cooking, prep all your other elements.",
            "For the mint sauce, blend or pulse the ingredients through a food processor to make a smooth-ish sauce.",
            "Serve bowls with quinoa, slaw, cucumbers, pickled red onions, and sauce over the top. It’s crispy, salty, spicy, briney, cool, and creamy. DROOL.",
          ],
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Sausage-and-Peppers-6.jpg",
      name: "Dinner",
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
          ingredients: [
            "1 package Never Any! Mild Italian Style Chicken Sausages (4 individual sausages)",
            "2 bell peppers, cut into slices",
            "half of an onion, cut into slices",

            "1/2 tablespoon Stonemill Roasted Garlic Herb Grill Seasoning",
            "olive oil, lemon juice, and salt",
            "4 Specially Selected Brioche Hot Dog Buns",
          ],
          instructions: [
            "Whisk aioli in a small bowl. Set aside.",

            "Toss peppers and onions with the garlic herb seasoning (or whatever other spices you want). Drizzle with enough oil so they won’t stick on the grill.",

            "Place sausages directly on the grill. Place peppers and onion slices in a grill basket or a cast iron pan on the grill. Grill both until you get nice grill marks and the veggies are soft. At the end of grilling time, add the brioche buns, cut side down, to get them toasty.",

            "Transfer peppers to a bowl and toss with lemon juice, more olive oil as needed, and salt and pepper to taste.",

            "Serve each grilled chicken sausage on a toasted bun with a scoop of grilled peppers and a swizzle of your aioli. YUM. At our house, extra aioli was requested for certain grown-ups for “dipping,” so just be prepared for that.",
          ],
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Spirali-2-1.jpg",
      name: "Vegetarian",
      description: `Eating more plant-forward meals is not only great for your body but great for the planet too! Whether you're a long-time vegetarian looking for some new inspiration or someone just trying to add a few more veggie-friendly options to their menu, here's the place to find what you're looking for.`,
      featured: `Creamy Garlic Sun-dried Tomato Pasta`,
      recipeDetails: [
        {
          firstTextFirstImg:
            "You are thisclose to enjoying Creamy Garlic Sun-Dried Tomato Pasta! Garlicky spirali noodles and tender sun-dried tomatoes in a creamy, luscious sauce with a heavy dusting of Parmesan cheese.",
          secondTextFirstImg: "",
          thirdTextFirstImg: "",
          firstImg: "https://pinchofyum.com/wp-content/uploads/Spirali-2-1.jpg",
          firstTextSecondImg:
            "ALERT ALERT ALERT! Only a small amount of time and a few ingredients stand between you and a skillet full of creamy, garlicky, flavorful, romantic, and dangerously good pasta. Tender sun-dried tomatoes, maybe some spinach, creamy sauce, bouncy noodles, and a heavy dusting of Parmesan. This is an urgent matter. I think you understand.",
          secondTextSecondImg:
            "A few important things for your review before you take a swim in this creamy, luscious pan of pasta:",
          thirdTextSecondImg:
            "First of all, can you ever go wrong with garlic, white wine, and cream in a sauce? Hint: no. It’s just a cheat code for greatness. It makes short ingredient lists everywhere very, very happy.",
          secondImg:
            "https://pinchofyum.com/wp-content/uploads/Spirali-1-3.jpg",
          firstYoutubeText: "",
          secondYoutubeTxt: "",
          youtubeDescription: "",
          youtubeLink: "",
          makingTime: "30 minutes",
          yeld: "2-4",
          makingDescription: `

          You are thisclose to enjoying Creamy Garlic Sun-Dried Tomato Pasta! Garlicky spirali noodles and tender sun-dried tomatoes in a creamy, luscious sauce with a heavy dusting of Parmesan cheese.
          `,
          ingredients: [
            "8 ounces DeLallo spirali pasta (okay, you don’t have to use spirali, but it is SO FUN)",
            "2 cloves garlic, minced",
            "1/4 cup DeLallo sun-dried tomatoes packed in oil, sliced or chopped",
            "about 1/3 cup dry white wine",
            "2/3 – 3/4 cup heavy cream",

            "up to 1/2 cup reserved pasta water",
            "salt and pepper to taste ",
            "1–2 tablespoons white vinegar or lemon juice",
            "a big bunch of chopped chives or parsley",
          ],
          instructions: [
            "Cook the pasta: Cook the pasta according to package directions.",

            "Sauté the good stuff: Heat a skillet over medium heat. Use a little bit of the oil from the sun-dried tomatoes to sauté the garlic and sun-dried tomatoes until soft and fragrant, 2-3 minutes. ",

            "Make the sauce: Add the wine; let it sizzle out and reduce so the flavor gets real good. Add the cream; bring to a simmer. Season with salt and pepper. ",

            "Finish: Stir in the cooked pasta, adding the reserved pasta water as needed to help coat the noodles in the sauce. Finish with chives and Parmesan and a top-up on your glass of wine. SO GOOD.",
          ],
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Socca-with-Whipped-Feta-3.jpg",
      name: "Healthy",
      description: `Maybe you're switching up some eating habits, maybe you're coming off a week of all cookies all the time, maybe you just have a bunch of kale to use up. Whatever the reason, here's the place to search all the healthy things!`,
      featured: `Soca With Wipped Feta And Tomato Salad`,
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
          ingredients: [
            "1 cup chickpea flour (affiliate link)",
            "2 tablespoons olive oil (and extra for the pan)",
            "3/4 teaspoon salt",
            "1 1/4 cups water",
            "2–3 cups cherry or grape tomatoes, halved",

            "1 cup cucumber slices (optional, but adds a nice crunch)",
            "1/4 cup olive oil ",
            "1–2 tablespoons white vinegar or lemon juice",
            "1 small clove garlic, grated or finely minced",
          ],
          instructions: [
            "Preheat oven to 450 degrees. While oven is preheating, mix up your tomato salad so it has a little time to sit together and get real yummy.",

            "Whisk all socca ingredients until smooth. Pour 1-2 tablespoons olive oil into a 10-inch cast iron skillet, and pop the skillet in the oven for 5 minutes to preheat. Pour half of the socca batter evenly into the pan and bake for 15-18 minutes, until golden around the edges. (Repeat with the second half of the batter.)",

            "While the socca is baking, blend the feta in a food processor or blender, or with a hand mixer, until smooth-ish. Add your cream cheese, yogurt, mascarpone, whatever you pick to help make the whole thing into a sort of fluffy, creamy sauce. Season with what you like – I love thyme, olive oil, and a little black pepper.",

            "Tear off chunks of hot, crispy socca to be served / dipped / spread / topped with whipped feta and a bunch of fresh, garlicky tomato salad.",
          ],
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Hawaiian-Chicken-Tacos-5.jpg",
      name: "Instant Pot",
      description: `Was there ever a more magical tool in the land?! Here are a bunch of our faves using our most beloved little kitchen helper.`,
      featured: `Instant Pot Hawaiian Chicken Tacos With Halapeno Ranch Slaw`,
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
          ingredients: [
            "1.25 lbs. boneless skinless chicken thighs",
            "2 cups fresh pineapple, finely chopped",
            "half of a red onion, minced",
            "3 cloves garlic, minced",
            "1 teaspoon chili powder",
            "1 teaspoon cumin",
            " 1 teaspoon salt",
            "1 tablespoon yellow mustard",
            "1/4 cup water",
          ],
          instructions: [
            "Prep: Preheat the oven to 475 degrees (broil setting).",

            "Instant Pot: Place all chicken ingredients in the Instant Pot. Cook on high pressure for 10 minutes (20 if frozen). Release the pressure and shred chicken directly in pot.",

            "Broil: Transfer shredded chicken to a baking sheet lined with foil. Broil for 10-15 minutes until browned. ",

            "Sauce: Pulse jalapeño ranch ingredients in a food processor until smooth. Toss some of the dressing with finely shredded cabbage to make a slaw.",
          ],
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Family-Style-Pitas-4.jpg",
      name: "Vegan",
      description: `This is the place to go for all the plant-based goodness. These recipes are keeping it vegan but still super satisfying and super delicious. Let's eat some plants!`,
      featured: `Sheet Pan Bbq Tofu`,
      recipeDetails: [
        {
          firstTextFirstImg: `Sheet Pan BBQ Tofu! BBQ-spice-crusted baked tofu that’s made in a snap. Serve it in bowls, add it to salads, or eat it straight off the pan!
          `,
          secondTextFirstImg: "",
          thirdTextFirstImg: "",
          firstImg:
            "https://pinchofyum.com/wp-content/uploads/BBQ-Tofu-Bowls-4.jpg",
          firstTextSecondImg: "This is tofu like you’ve never seen it before. ",
          secondTextSecondImg:
            "Like, tofu with a spice crust. (YES! THANK YOU!) Tofu that feels worthy of building a meal around. Tofu that you can eat off the pan as a snack.",
          thirdTextSecondImg:
            "This is sheet pan BBQ Tofu, and it is an end-of-summer, healthy eating lifesaver.",
          secondImg:
            "https://pinchofyum.com/wp-content/uploads/BBQ-Tofu-Bowls-1.jpg",
          firstYoutubeText: "",
          secondYoutubeTxt: "",
          youtubeDescription: "",
          youtubeLink: "",
          makingTime: "45 minutes",
          yeld: "4-6",
          makingDescription: `

          Sheet Pan BBQ Tofu! BBQ-spice-crusted baked tofu that’s made in a snap. Serve it in bowls, add it to salads, or eat it straight off the pan! YUM.
          `,
          ingredients: [
            "2 (16-ounce) packages extra firm tofu",
            "2 tablespoons cornstarch",
            "1/4 cup brown sugar",
            "1 tablespoon smoked paprika",
            "1 teaspoon chili powder",
            "1 teaspoon onion powder",
            "1 teaspoon garlic powder ",
            "2 teaspoons kosher salt ",
            "1 tablespoons olive oil",
          ],
          instructions: [
            "Preheat the oven to 425 degrees.",

            "Press the liquid out of the tofu – you can use a tofu press, or wrap it with a towel and place a heavy pan on top of it for 10-15 minutes. Cut into cubes.",

            "Mix the cornstarch, brown sugar, spices, and salt together. Toss cubed tofu *gently* with the spices to coat, being careful not to break the tofu. Transfer to a baking sheet and drizzle with just a tiny bit of olive oil so it doesn’t stick. Bake for 30-45 minutes, until the exterior is lightly golden and dry-ish to the touch.",

            "While the tofu is baking, prep your extras for the bowls (see notes for ideas). Arrange beautifully in a bowl, snap a pic for the ‘gram, and devour! ",
          ],
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Quinoa-Summer-Salad-with-Shrimp.jpg",
      name: "Meal Prep",
      description: `Meal prep gets big love from us because it's so great to not even have to THINK about what to cook every day. Spend a few hours getting everything prepped and then the rest of your week is made! Now your brain space can be filled with, well...all the other stuff.`,
      featured: `Summer Quinoa Salad Jars with Lemon Dill Dressing`,
      recipeDetails: [
        {
          firstTextFirstImg: `Summer Quinoa Salads with Lemon Dill Dressing! Hello shrimp, quinoa, tomato, cucumber, feta – my favorite healthy meal prep!
          `,
          secondTextFirstImg: "",
          thirdTextFirstImg: "",
          firstImg: `Summer Quinoa Salads with Lemon Dill Dressing! Hello shrimp, quinoa, tomato, cucumber, feta – my favorite healthy meal prep!
          `,
          firstTextSecondImg:
            "That would be enough, wouldn’t it? (I just ate it for lunch and I can assure you that it is and was more than enough.)",
          secondTextSecondImg: "BUT.",
          thirdTextSecondImg:
            "I like it when things are a little more fun, a little more convenient, a little more real-life-able. Which is why this post is actually called Summer Salad Jars.",
          secondImg:
            "https://pinchofyum.com/wp-content/uploads/Healthy-Summer-Salad-Jars.jpg",
          firstYoutubeText: "",
          secondYoutubeTxt: "",
          youtubeDescription: "",
          youtubeLink: "",
          makingTime: "30 minutes",
          yeld: "8 servings",
          makingDescription: `

          Summer Quinoa Salads with Lemon Dill Dressing! Hello shrimp, quinoa, tomato, cucumber, feta – my favorite healthy meal prep!
          `,
          ingredients: [
            "3/4 cup olive oil",
            "1/4 cup water",
            "2 tablespoons white vinegar",
            "1 clove garlic",

            "2 cups quinoa (or other pasta, quinoa, couscous, etc.)",
            "2 pints of grape tomatoes",
            "2 large cucumbers ",
            "1 cup feta cheese",
          ],
          instructions: [
            "Dressing: Blend all dressing ingredients together until smooth.",

            "Grains: Cook quinoa according to package directions. Set aside to cool.",

            "Build Your Beautiful Jars: In each jar, layer a little bit of dressing, tomatoes, quinoa, cucumbers, sun dried peppers, and feta. Store sealed jars in the fridge up to 4 days!",

            "Serve: When you’re ready to serve, empty the jar into a bowl. Stir to combine. Voila!",
          ],
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Summer-Soup-2.jpg",
      name: "Soup",
      description: `Soup is the beeeeest! Honestly, it's one of our favorite food groups. There is nothing quite like curling up with a steaming cozy bowl of soup slurped by the spoonful or devoured with crusty bread dips. Yes yes and yes.`,
      featured: `Clean Eating Instant Pot Summer Soup`,
      recipeDetails: [
        {
          firstTextFirstImg: `Clean Eating Instant Pot Summer Soup! The perfect blend of comforting and fresh for the season. Packed with all the fresh summer produce and super customizable to whatever you have on hand!
          `,
          secondTextFirstImg: "",
          thirdTextFirstImg: "",
          firstImg:
            "https://pinchofyum.com/wp-content/uploads/Summer-Soup-2.jpg",
          firstTextSecondImg: "Spring = warmer weather = eating less soup!",
          secondTextSecondImg: "That being said…",
          thirdTextSecondImg: "This spring soup = eating more soup.",
          secondImg:
            "It’s that perfect blend of comforting but also fresh-feeling that leaves you a) wanting to lick the bowl, and b) feeling really good about yourself when it’s later in the day and you remember back to all the veggies you ate for lunch. It’s LOADED TO THE MAX with veggies and whole grains and protein, and also big, yummy, Italian-style flavor.",
          firstYoutubeText: "",
          secondYoutubeTxt: "",
          youtubeDescription: "",
          youtubeLink: "",
          makingTime: "50 minutes",
          yeld: " 8 very generous servings (2 cups each) ",
          makingDescription:
            "It’s that perfect blend of comforting but also fresh-feeling that leaves you a) wanting to lick the bowl, and b) feeling really good about yourself when it’s later in the day and you remember back to all the veggies you ate for lunch. It’s LOADED TO THE MAX with veggies and whole grains and protein, and also big, yummy, Italian-style flavor.",
          ingredients: [
            "1 lb. chicken breasts",
            "1 28-ounce can crushed tomatoes",
            "4 carrots, peeled and chopped",
            "2 stalks celery, chopped",
            "3 cloves minced garlic",

            "1/2 cup farro (you can also use brown rice or small pasta)",
            " 6 cups chicken broth",
            "2 tablespoons olive oil",
            "1 teaspoon each basil and oregano",

            "Toppings: Parmesan, lemon juice, plain yogurt, fresh herbs, freshly ground pepper, etc.",

            "2–3 cups of fresh sweet corn kernels, cut off the cob",
          ],
          instructions: [
            "Place everything except the zucchini and sweet corn in the Instant Pot or pressure cooker. Set to high pressure for 20 minutes. Release the steam.",

            "Shred the chicken. Stir in the zucchini and sweet corn. Set to high pressure for another 5 minutes. Release the steam.",

            "Let the soup rest for a few minutes – it thickens up a bit as it cools. Season with more salt and pepper and whatever toppings you like. Aaand devour!",
          ],
        },
      ],
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Couscous-Salad-1-2.jpg",
      name: "Salads",
      description: `Traditional lettuce-chomping salads but also noodley salads, mayo-based salads, grain salads...so many ways to salad! We promise these recipes will have you feeling full and happy.`,
      featured: `Couscous Salad with Lime Basil Vinaigrette`,
      recipeDetails: [
        {
          firstTextFirstImg: `A bright, zippy, unexpectedly delicious couscous salad that’s packed with sweet potatoes, black beans, spinach, feta, and more – all tossed with a life-changing lime basil vinaigrette!
          `,
          secondTextFirstImg: "",
          thirdTextFirstImg: "",
          firstImg:
            "https://pinchofyum.com/wp-content/uploads/Couscous-Salad-1-2.jpg",
          firstTextSecondImg:
            "What a strange and delicious combination I’m about to feed you. ",
          secondTextSecondImg:
            "You think it might lean Mexican-inspired with the sweet potato black bean thing…. but then there’s feta and red onion… and some pistachios… and the lime basil vinaigrette is where things get pretty solidly quirky. ",
          thirdTextSecondImg:
            "I used to make this salad all the time way back in the day, featuring a bottle of pre-made dressing, because that’s what my trusty five ingredient Cooking Light cookbook recommended. I was youthful and new to cooking and I loved easy recipes (still true, actually). Now I’m less youthful, more opinionated about things like making your own dressing, and ready for the still-easy but slightly more grown up version of this salad. ",
          secondImg:
            "https://pinchofyum.com/wp-content/uploads/Couscous-Salad-3.jpg",
          firstYoutubeText: "",
          secondYoutubeTxt: "",
          youtubeDescription: "",
          youtubeLink: "",
          makingTime: "30 minutes",
          yeld: "6",
          makingDescription: `

          A bright, zippy, unexpectedly delicious couscous salad that’s packed with sweet potatoes, black beans, spinach, feta, and more – all tossed with a life-changing lime basil vinaigrette!
          `,
          ingredients: [
            "3/4 cup couscous",
            "1 cup water",
            "2 sweet potatoes, peeled and diced (about 3 cups)",
            "1 14-ounce can black beans, drained and rinsed",
            "2 cups baby spinach, cut into small pieces",
            "4 ounces crumbled feta cheese",
            " half a red onion, thinly sliced",
            "1 bunch of fresh basil (1/2 cup packed)",
            "1/2 cup olive oil",
            "1/2 teaspoon red pepper flakes",
            "1/4 to 1/2 cup water, if needed",
          ],
          instructions: [
            "Cook couscous in 1 cup water, according to package directions. Fluff with a fork and cool.",

            "Pulse all dressing ingredients in a food processor until smooth-ish.",

            "Place sweet potatoes in a skillet with about 1/2 cup water and a sprinkle of salt. Cover and simmer until fork-tender. Drain and set aside to cool.",

            "Toss all ingredients together with dressing, season with salt and pepper, and serve! (OR, store each ingredient individually for salads throughout the week.)",
          ],
        },
      ],
    },

    {
      icon: "https://pinchofyum.com/wp-content/uploads/Smash-burgers-2-2.jpg",
      name: "Burger",
      description:
        "Honestly, we love a sandwich any time of day, so we’ve got ideas for breakfast, lunch, dinner, or just sandwich o’clock here because you can never really go wrong with a bunch of delicious things.",
      featured: "The Ultimate Wild Burger",
      recipeDetails: [
        {
          firstTextFirstImg:
            "The famous Smash Burger! Deeply crisped, craggy, juicy, squashed patties covered with melty cheese, piled on a buttery bun, and topped with a dreamy zip of secret sauce. ",
          secondTextFirstImg: "",
          thirdTextFirstImg: "",
          firstImg:
            "https://pinchofyum.com/wp-content/uploads/Smash-burgers-1-2.jpg",
          firstTextSecondImg:
            "Oh, the smash burger. The deeply crisped, craggy, juicy, squashed patty. The drip-melt of the cheese. The pile of your burger essentials like bright sweet tomato, ruffly lettuce, fried onions if you are a star. The buttery toast of the brioche bun. The dreamy zip of the secret sauce. ",
          secondTextSecondImg:
            "Are you drooling? Crying? Screaming? Some combination of all three? Welp, us too. So, don your aprons for this one, folks (you’ll need it). This is an absolute burger game-changer.",
          thirdTextSecondImg: "",
          secondImg:
            "https://pinchofyum.com/wp-content/uploads/Smash-burgers-3-2.jpg",
          firstYoutubeText: "",
          secondYoutubeTxt: "",
          youtubeDescription: "",
          youtubeLink: "",
          makingTime: " 35 minutes",
          yeld: "4 burger patties",
          makingDescription:
            "The famous Smash Burger! Deeply crisped, craggy, juicy, squashed patties covered with melty cheese, piled on a buttery bun, and topped with a dreamy zip of secret sauce. ",
          ingredients: [
            "4 tablespoons butter",
            "1 tablespoon Worcestershire sauce",
            "a couple swishes of fish sauce (about 1 teaspoon)",
            "1 teaspoon smoked paprika",
          ],
          instructions: [
            "Mix the smash burger sauce in a small bowl. In a larger bowl, place the ground beef and pour the sauce over. Mix with your hands to get it well-distributed through the meat. Form into 4 balls. Place the balls in the fridge for 20-30 minutes while you prep everything else. You can even pop it in the freezer for a few minutes – you just want them to be pretty cold so the butter mixture doesn’t immediately melt out everywhere once you start cooking them.",

            "Butter the buns and toast them on your skillet or griddle until golden.",
            "Prep the toppings and house sauce (see notes).",
            "Cut a small piece of parchment paper that you’ll use on top of the burgers to prevent sticking.",
            "Place the parchment paper on top of each burger and then, using a heavy, flat tool, press the burgers down as flat as you can get them in one swift motion. They’ll be super sizzly and splattery, but they should make a nice, round, thin smash burger shape on the griddle. (The ideal tool for this is a cast iron grill press, but a flat spatula can work in a pinch). Cook for a few minutes and then flip and top with cheese right away. Leave them undisturbed for another 1-2 minutes to melt the cheese and get a max amount of flavorful browning on the back side.",
          ],
        },
      ],
    },
    // {
    //   icon: "https://pinchofyum.com/wp-content/uploads/Udon-2-800x800.jpg",
    //   name: "Pasta",
    //   description: "Black Papper Stir Fried Udon",
    //   recipeDetails: [
    //     {
    //       firstTextFirstImg: "",
    //       secondTextFirstImg: "",
    //       thirdTextFirstImg: "",
    //       firstImg: "",
    //       firstTextSecondImg: "",
    //       secondTextSecondImg: "",
    //       thirdTextSecondImg: "",
    //       secondImg: "",
    //       firstYoutubeText: "",
    //       secondYoutubeTxt: "",
    //       youtubeDescription: "",
    //       youtubeLink: "",
    //       makingTime: "",
    //       yeld: "",
    //       makingDescription: "",
    //       firstIngredient: "",
    //       secondIngredient: "",
    //       thirdIngredient: "",
    //       fifthIngredient: "",
    //       sixtIngredient: "",
    //       sevenIngredient: "",
    //       eigthIngrdient: " ",
    //       naineIngredient: "",
    //       tentIngredient: "",
    //       elevenIngredient: "",
    //       tweleveIngredient: "",
    //       thirtenIngredient: "",
    //       forteenIngredient: "",
    //       fifthIngredient: "",
    //       firstInstruction: "",

    //       secondInstruction: "",
    //       thirdInstruction: "",
    //       forthInstruction: "",
    //     },
    //   ],
    // },
    // {
    //   icon: "https://pinchofyum.com/wp-content/uploads/Homemade-Ramen-4-3-800x800.jpg",
    //   name: "Pasta",
    //   description: "Quick Homade Ramen",
    //   recipeDetails: [
    //     {
    //       firstTextFirstImg: "",
    //       secondTextFirstImg: "",
    //       thirdTextFirstImg: "",
    //       firstImg: "",
    //       firstTextSecondImg: "",
    //       secondTextSecondImg: "",
    //       thirdTextSecondImg: "",
    //       secondImg: "",
    //       firstYoutubeText: "",
    //       secondYoutubeTxt: "",
    //       youtubeDescription: "",
    //       youtubeLink: "",
    //       makingTime: "",
    //       yeld: "",
    //       makingDescription: "",
    //       firstIngredient: "",
    //       secondIngredient: "",
    //       thirdIngredient: "",
    //       fifthIngredient: "",
    //       sixtIngredient: "",
    //       sevenIngredient: "",
    //       eigthIngrdient: " ",
    //       naineIngredient: "",
    //       tentIngredient: "",
    //       elevenIngredient: "",
    //       tweleveIngredient: "",
    //       thirtenIngredient: "",
    //       forteenIngredient: "",
    //       fifthIngredient: "",
    //       firstInstruction: "",

    //       secondInstruction: "",
    //       thirdInstruction: "",
    //       forthInstruction: "",
    //     },
    //   ],
    // },
    // {
    //   icon: "https://pinchofyum.com/wp-content/uploads/Spicy-Sausage-Rigatoni-3-2-800x800.jpg",
    //   name: "Pasta",
    //   description: "Spicy Sausage Rigatoni",
    //   recipeDetails: [
    //     {
    //       firstTextFirstImg: "",
    //       secondTextFirstImg: "",
    //       thirdTextFirstImg: "",
    //       firstImg: "",
    //       firstTextSecondImg: "",
    //       secondTextSecondImg: "",
    //       thirdTextSecondImg: "",
    //       secondImg: "",
    //       firstYoutubeText: "",
    //       secondYoutubeTxt: "",
    //       youtubeDescription: "",
    //       youtubeLink: "",
    //       makingTime: "",
    //       yeld: "",
    //       makingDescription: "",
    //       firstIngredient: "",
    //       secondIngredient: "",
    //       thirdIngredient: "",
    //       fifthIngredient: "",
    //       sixtIngredient: "",
    //       sevenIngredient: "",
    //       eigthIngrdient: " ",
    //       naineIngredient: "",
    //       tentIngredient: "",
    //       elevenIngredient: "",
    //       tweleveIngredient: "",
    //       thirtenIngredient: "",
    //       forteenIngredient: "",
    //       fifthIngredient: "",
    //       firstInstruction: "",

    //       secondInstruction: "",
    //       thirdInstruction: "",
    //       forthInstruction: "",
    //     },
    //   ],
    // },
    // {
    //   icon: "https://pinchofyum.com/wp-content/uploads/white-wine-linguine-shrimp-3-800x800.jpg",
    //   name: "Pasta",
    //   description: "Garlic Butter White Wine Shrimp Linguine",
    //   recipeDetails: [
    //     {
    //       firstTextFirstImg: "",
    //       secondTextFirstImg: "",
    //       thirdTextFirstImg: "",
    //       firstImg: "",
    //       firstTextSecondImg: "",
    //       secondTextSecondImg: "",
    //       thirdTextSecondImg: "",
    //       secondImg: "",
    //       firstYoutubeText: "",
    //       secondYoutubeTxt: "",
    //       youtubeDescription: "",
    //       youtubeLink: "",
    //       makingTime: "",
    //       yeld: "",
    //       makingDescription: "",
    //       firstIngredient: "",
    //       secondIngredient: "",
    //       thirdIngredient: "",
    //       fifthIngredient: "",
    //       sixtIngredient: "",
    //       sevenIngredient: "",
    //       eigthIngrdient: " ",
    //       naineIngredient: "",
    //       tentIngredient: "",
    //       elevenIngredient: "",
    //       tweleveIngredient: "",
    //       thirtenIngredient: "",
    //       forteenIngredient: "",
    //       fifthIngredient: "",
    //       firstInstruction: "",

    //       secondInstruction: "",
    //       thirdInstruction: "",
    //       forthInstruction: "",
    //     },
    //   ],
    //   },
  ],
};

export default data;
