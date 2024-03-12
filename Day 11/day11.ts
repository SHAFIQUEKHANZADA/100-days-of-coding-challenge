//Q:31 No Users
let username: string[] = []
if(username.length === 0) {
    console.log("We need to find some users!")
}
//Q:32 Checking username
let current_user : string[] = ["user1","admin","user3","user4", "user5"]
let new_user: string[] = ["User1", "User6", "User7", "admin", "User9"]

new_user.forEach(newUser => {
    if (current_user.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} we need to enter a new username.`)
    } else {
        console.log(`${newUser} is available.`)
    }
})

//Q:33 Ordinal numbers
let numbers: number[] = [1,2,3,4,5,6,7,8,9];
for (let number of numbers) {
    let suffix: string;

    if (number ===1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = 'nd';
    } else if (number === 3) {
        suffix = 'rd';
    } else {
        suffix = 'th';
    }
    
console.log(`${number}${suffix}`);