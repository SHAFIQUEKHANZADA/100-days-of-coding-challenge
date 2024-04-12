//Q:124
var obj = {
    name: "Shafique",
    makeFunc: function () {
        return this.name;
    }
};
console.log(obj.makeFunc());
//Q:125
var rect = {
    width: 5,
    length: 7,
    area: function () {
        return this.width * this.length;
    }
};
console.log(rect.area());
//Q:126
var myObj = {
    property: "Sir Zia Khan",
    outer: function () {
        var _this = this;
        console.log(this.property);
        var inner = function () {
            console.log(_this.property);
        };
        inner();
    }
};
myObj.outer();
