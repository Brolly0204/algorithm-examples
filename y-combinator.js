const makeFact = givenFact => n => {
  return n < 2 ? 1 : givenFact(n-1) * n
}



var makeRealFact = function (makeFact) {
  var tryFact = function (n) {
    var nextTryFact = makeFact(tryFact);
    return nextTryFact(n);
  };
  return makeFact(tryFact);
};

const fact = makeRealFact(makeFact)
console.log(fact(10).toString())