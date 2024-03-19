let price1 = [1000, 3000]
let price2 = [1500, 4500]
let combine = [...price1, ...price2].sort((a, b) => a - b)
console.log(combine);
