//Q:142
let pro = new Promise((accept, rejected) => {
    console.log("Promise pendding...");
    setTimeout(() => {
        console.log("Hello World!");
    }, 2000)
}) 
pro.then(x => console.log(x))

//Q:143
let check = new Promise ((a, r) => {
    setTimeout(() => {
        let shafique = true
        if (shafique) {
            console.log("Shafique is the student of GIAIC");
            return a(shafique)
        } else {
            console.log("Error");
            return r(shafique)
        }
    }, 4000)
})
check.then(a => console.log(a)).catch(err => console.log("You have an Error"))

//Q:144
let pro1 = Promise.resolve(5)
let pro2 = 30
let pro3 = new Promise<string>((resolve) => {
    setTimeout(resolve, 100, "foo")
})
Promise.all([pro1, pro2, pro3]).then((val) => {console.log(val)})