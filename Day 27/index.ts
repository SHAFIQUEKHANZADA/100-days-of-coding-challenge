//Q:79
let car = {
    make : "Toyota",
    model : "Camry",
    year : 2015
}

//Q:80
car.color = "white";
car.year = 2021
console.log(car);

//Q:81
function make_obj (obj : object) {
    for(let property in obj) {
        console.log(`${property} : ${obj[property]}`);
        
    }
}
make_obj(
    {
        model : "Lx570",
        company : "Lexus",
        year : 2020,
        color : "Black"
    }
)