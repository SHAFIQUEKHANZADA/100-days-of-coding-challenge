let laptop = {
    make: "hp",
    model: "Windows 11 Pro 64",
    year: "2022",
    describe: function() {
        console.log(`Thi laptop is a ${this.year}, ${this.make}, ${this.model}.`);
        
    }
}
laptop.describe()