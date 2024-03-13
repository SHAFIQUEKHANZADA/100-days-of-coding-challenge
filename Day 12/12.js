//Q:34 Pizzas
var fvt_pizza = ["Cheese", "BBQ Chicken", "Sicilian"];
for (var _i = 0, fvt_pizza_1 = fvt_pizza; _i < fvt_pizza_1.length; _i++) {
    var pizzas = fvt_pizza_1[_i];
    console.log("I like ".concat(pizzas, " pizza."));
}
console.log("I really love pizza!");
//Q:35 Animals
var pet_animal = ["Dog", "Cat", "Lion"];
pet_animal.forEach(function (pet_animal) {
    console.log("A ".concat(pet_animal, " would make a great pet."));
});
console.log("But I always prefer cats.");
//Q:36 T-shirts
function make_shirt(size, message) {
    console.log("The shirt size should be: ".concat(size, ", and must be printed with: ").concat(message));
}
make_shirt("medium", "Let's code the world");
