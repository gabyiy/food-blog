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
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Elotes-Quinoa-Salad-2-840x1200.jpg",
      name: "Lunch",
      description: `Whether you're planning to meal prep for the week or you're looking for an amazing sandwich or salad to chomp on at your desk, we've gone through our recipes and gathered a bunch for lunch!`,
      featured: `elotee style quinoa salad`,
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Curry-Hummus-1-840x1200.jpg",
      name: " Snacks",
      description: `To be clear, we can make almost anything a snack around here. Spare buffalo chicken taco? Couple forkfuls of cold noodle salad from the fridge? Who put this homemade oreo here? But ok, we also have a whole slew of more traditional type snackables for you to choose from.`,
      featured: `churry hummus`,
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Avocado-Shrimp-Salad-840x1200.jpg",
      name: "Avocado",
      description: `Is there anything this buttery, nutritious, delectable little green guy doesn't improve?! Full of healthy fats and creamy texture, it makes every single thing it's smushed on, chunked on, or mixed into a whole bunch more delicious.`,
      featured: `super quick avocado shrimp salad`,
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Chicken-Tikka-Masala-Bowls-3-183x183.jpg",
      name: "quick and easy",
      description: `There's no tiiiiiiiiiiiiime! But is there ever? If you're feeling like you need something super quick and super easy, then you came to the right place. Let's get you eating, stat!`,
      featured: `cripsy chiken tikka bowls with mint sauce`,
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Sausage-and-Peppers-6-183x183.jpg",
      name: "dinner",
      description: `"What's for dinner?" Gah! That question! Whether it's coming from your own tired brain or a family full of hungry askers, let's help you get that question answered!`,
      featured: `griled sausage and peppers with garlic aioli`,
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
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Hawaiian-Chicken-Tacos-5-183x183.jpg",
      name: "instant post",
      description: `Was there ever a more magical tool in the land?! Here are a bunch of our faves using our most beloved little kitchen helper.`,
      featured: `instant pot hawaiian chicken tacos with halapeno ranch slaw`,
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/BBQ-Tofu-Bowls-4-183x183.jpg",
      name: "vegan",
      description: `This is the place to go for all the plant-based goodness. These recipes are keeping it vegan but still super satisfying and super delicious. Let's eat some plants!`,
      featured: `sheet pan bbq tofu`,
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Healthy-Summer-Salad-Jars-183x183.jpg",
      name: "meal prep",
      description: `Meal prep gets big love from us because it's so great to not even have to THINK about what to cook every day. Spend a few hours getting everything prepped and then the rest of your week is made! Now your brain space can be filled with, well...all the other stuff.`,
      featured: `summer quinoa jars with lemon dill dressing`,
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Summer-Soup-2-183x183.jpg",
      name: "soup",
      description: `Soup is the beeeeest! Honestly, it's one of our favorite food groups. There is nothing quite like curling up with a steaming cozy bowl of soup slurped by the spoonful or devoured with crusty bread dips. Yes yes and yes.`,
      featured: `clean eating instant pot  summer soup`,
    },
    {
      icon: "https://pinchofyum.com/wp-content/uploads/Couscous-Salad-1-3-183x183.jpg",
      name: "salads",
      description: `Traditional lettuce-chomping salads but also noodley salads, mayo-based salads, grain salads...so many ways to salad! We promise these recipes will have you feeling full and happy.`,
      featured: `couscous salad with lime basil vinaigrette`,
    },
  ],
};

export default data;
