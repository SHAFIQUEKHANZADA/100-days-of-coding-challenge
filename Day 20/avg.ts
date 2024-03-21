function avg_score (...score: number[]): number {
    let total = score.reduce((sum, score)=> sum + score, 0)
    return total / score.length
}
console.log(avg_score(20,40,65,12,70))
