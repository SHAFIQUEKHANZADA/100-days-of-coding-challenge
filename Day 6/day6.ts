//Q:16
let guest_list: string[] = ["Zayan", "Tanzeel", "Aoun"];
console.log("Great news! I found a bigger dinner table")

guest_list.unshift("Talha")
guest_list.splice(guest_list.length / 2, 0, "Sandeed")
guest_list.push("Maaz")

guest_list.forEach(guest_list => {
    console.log(`Dear ${guest_list}, would you like to join me for dinner?`)
})
//Q:17
console.log("Unfortunetly, I can only invite two people for dinner.")

while (guest_list.length > 2) {
    let rev_guest = guest_list.pop()
    console.log(`Sorry ${rev_guest} i can't invite you to dinner.`)
}
guest_list.forEach(guest_list => {
    console.log(`Dear ${guest_list} you are still invited to dinner.`)
})
guest_list.splice(0, guest_list.length)
console.log(guest_list)

//Q:18
let fvtPlace: string[] = ["Kashmir", "switzerland", "Ukraine", "Austria"];

//In orignal order
console.log("Orignal order:", fvtPlace)

//In alphabatical order
let order_place: string[] = [...fvtPlace].sort();
console.log("Alphabatic order:", order_place)

// Show that the original array is still in its original order
console.log("Original Order (unchanged):", fvtPlace)

// in reverse alphabetical order
let rev_ord: string[] = [...fvtPlace].sort().reverse()
console.log("Reverse alphabetical order:", rev_ord)

// Show that the original array is still in its original order
console.log("Original Order (unchanged):", fvtPlace)

fvtPlace.reverse()
console.log("Reversed Order:", fvtPlace)

console.log([...fvtPlace].sort())
console.log([...fvtPlace].sort().reverse())