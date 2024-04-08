//Q:112
let keyMap = new Map<string, string>()
keyMap.set("Pakistan", "Islamabad")
keyMap.set("Russia", "Mossco")
keyMap.set("Italy", "Rome")
console.log(keyMap)

//Q:113
let check = new Map<string, string>()
check.set("Iran", "Tehran")
check.set("canada", "Toranto")
check.set("UK", "London")

function chlog (check: Map<string, string>) {
    if (check.has("canada")) {
  console.log(`The capital of Canada is ${check.get("canada")}`);
} else {
    console.log("Canada is not in the Map.");
}
}
chlog(check)

//Q:114
let stdData = new Map<number, string>()
stdData.set(12, "talha")
stdData.set(13, "zayan")
stdData.set(14, "hamdan")

stdData.forEach((names, ID) => {
    console.log(`Student name: ${names}, Student ID: ${ID}`);
})