var laptop = {
    make: "hp",
    model: "Windows 11 Pro 64",
    year: "2022",
    describe: function () {
        console.log("Thi laptop is a ".concat(this.year, ", ").concat(this.make, ", ").concat(this.model, "."));
    }
};
laptop.describe();
