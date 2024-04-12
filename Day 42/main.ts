//Q:124
const obj = {
    name: "Shafique",
    makeFunc: function () {
        return this.name;
    }
}
console.log(obj.makeFunc())
 
//Q:125
let rect = {
    width : 5,
    length: 7,
    area: function () {
        return this.width * this.length
    }
}
console.log(rect.area())

//Q:126
let myObj = {
    property: "Sir Zia Khan",
    outer: function () {
    console.log(this.property)
    
    const inner = () => {
        console.log(this.property)
    } 
    inner()
    }
}
myObj.outer()