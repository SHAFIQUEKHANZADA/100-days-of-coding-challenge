function avg_score() {
    var score = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        score[_i] = arguments[_i];
    }
    var total = score.reduce(function (sum, score) { return sum + score; }, 0);
    return total / score.length;
}
console.log(avg_score(20, 40, 65, 12, 70));
