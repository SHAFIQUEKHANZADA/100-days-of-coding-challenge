//Q:25
let alien_color = "green"
if (alien_color === "green") {
    console.log("You earned 5 points!")
}
alien_color = "red"
if (alien_color === "green") {
    console.log("You earned 10 points!") //Output: Empty
}
//Q:26
alien_color = "green"
if (alien_color === "green") {
    console.log("You earned 5 points!")
} else {
    console.log("You earned 10 points!")
}
alien_color = "yellow"
if (alien_color === "green") {
    console.log("You earned 5 points!")
} else {
    console.log("You earned 10 points!")
}
//Q:27
alien_color = "green" //You just earned 5 points
if (alien_color === "green") {
    console.log("You just earned 5 points!")
} else if (alien_color === "red") {
    console.log("You earned 10 points!")
} else if (alien_color === "yellow") {
    console.log("You just earned 15 points!")
}
alien_color = "red"    //You just earned 10 points
if (alien_color === "green") {
    console.log("You just earned 5 points!")
} else if (alien_color === "red") {
    console.log("You earned 10 points!")
} else if (alien_color === "yellow") {
    console.log("You just earned 15 points!")
}
alien_color = "yellow"    //You just earned 15 points
if (alien_color === "green") {
    console.log("You just earned 5 points!")
} else if (alien_color === "red") {
    console.log("You earned 10 points!")
} else if (alien_color === "yellow") {
    console.log("You just earned 15 points!")
}