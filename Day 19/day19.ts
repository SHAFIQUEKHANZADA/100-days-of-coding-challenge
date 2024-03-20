//Q:55
let numbers = [5, 10, 15, 20, 25]
let double = numbers.map(numbers => numbers * 2)
console.log(double);

//Q:56
let mix = ["Hello", 14, true, 27, "world", false, "Have a good day!"]
let check_str = mix.filter(item => typeof item === "string")
console.log(check_str);

//Q:57
let grades = [84, 97, 45, 66]
let avg_grade = grades.reduce((total, grade) => total + grade, 0 / grades.length)
console.log(avg_grade);
