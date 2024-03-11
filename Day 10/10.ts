//Q:28
let age: number = 20;

// If-else chain to determine the person's stage of life
if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.")
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else  {
    console.log("The person is an elder.");
}
//Q:29
let fvt_fruits: string[] = ["watermalon", "cherry", "graps"]

if(fvt_fruits.includes("watermalon")) {
    console.log("I really like Watermalon!")
}
if(fvt_fruits.includes("cherry")) {
    console.log("I really like Cherries!")
}
if(fvt_fruits.includes("graps")) {
    console.log("I really like Graps!")
}
//Q:30
let userNames: string[] = ["Admin", "Shafique", "Zayan", "Hamdan", "Talha"]
userNames.forEach(userNames => {
    if(userNames === "Admin") {
        console.log("Hello admin, would you like to see a status report?")
    } else {
        console.log(`Hello ${userNames}, thank you for logging in again.`)
    }
})