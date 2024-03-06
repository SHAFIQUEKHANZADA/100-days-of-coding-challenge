//Changing guest list 

let guest_list1: string[] = ['zayan', 'aoun', 'talha']
guest_list1.forEach(guest_list1 => {
    console.log(`Dear ${guest_list1}, would you like to join me for dinner?`)
})

let unavailable = "talha"
console.log(`${unavailable} can't make it to dinner.`)

let new_guest = "hamdan"
guest_list1[guest_list1.indexOf(unavailable)] = new_guest


guest_list1.forEach(guest_list1 => {
    console.log(`Dear ${guest_list1}, would you like to join me for dinner?`)
})