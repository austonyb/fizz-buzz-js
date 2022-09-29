//fizzbuzz

for (i = 0; i <= 50; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
        console.log("fizzbuzz")
    } else if (i % 5 === 0){
        console.log("buzz")
    } else if (i % 3 === 0){
        console.log("fizz")
    } else {
        console.log(i)
    }
  }

  //fibonacci

// let n1 = 0, n2 = 1, nextTerm = undefined;

// let number = 5

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }