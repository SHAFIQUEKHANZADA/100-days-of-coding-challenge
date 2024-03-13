//Q:34 Pizzas
let fvt_pizza: string[] = ["Cheese", "BBQ Chicken", "Sicilian"]
for (let pizzas of fvt_pizza) {
    console.log(`I like ${pizzas} pizza.`)
} 
console.log("I really love pizza!")

//Q:35 Animals
let pet_animal: string[] = ["Dog", "Cat", "Lion"]
pet_animal.forEach(pet_animal => {
    console.log(`A ${pet_animal} would make a great pet.`)
})
console.log("But I always prefer cats.")

//Q:36 T-shirts
function make_shirt(size: string, message: string) {
    console.log(`The shirt size should be: ${size}, and must be printed with: ${message}`)
}
make_shirt("medium", "<\Let's code the world\>")