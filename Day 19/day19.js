//Q:55
var numbers = [5, 10, 15, 20, 25];
var double = numbers.map(function (numbers) { return numbers * 2; });
console.log(double);
//Q:56
var mix = ["Hello", 14, true, 27, "world", false, "Have a good day!"];
var check_str = mix.filter(function (item) { return typeof item === "string"; });
console.log(check_str);
//Q:57
var grades = [84, 97, 45, 66];
var avg_grade = grades.reduce(function (total, grade) { return total + grade; }, 0 / grades.length);
console.log(avg_grade);
