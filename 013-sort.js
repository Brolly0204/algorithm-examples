const sortedByScoreAsc = students.sort( (a, b) => {
  return a.score - b.score
})

const sortedByScoreDesc = students.sort( (a, b) => {
  return b.score - a.score
})