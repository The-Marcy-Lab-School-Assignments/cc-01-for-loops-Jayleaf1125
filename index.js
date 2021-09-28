//1
function countToFifty(){
  for(let i=1; i < 51; i++) {
      console.log(i);
  }
}

//2
function countFromOne(number){
  for(let i=1; i <= number; i++) {
      console.log(i);
  }
}

//3
function threeAndFiveInFifty(){
    for(let i=1; i <= 50; i++) {
      if(i % 3 === 0 || i % 5 === 0) {
          console.log(i);
      }
  }
}

//4
function threeAndFive(number){
  for(let i=1; i <= number; i++) {
      if(i % 3 === 0 || i % 5 === 0) {
          console.log(i);
      }
  }
}

// Bonus
function triple(number) {
    const listTriple = [];
    for(let i = 0; i < number.length;i++) {
        const num = number[i];
        const result = num * 3;
        
        listTriple.push(result);
    }
    return listTriple;
}

//Call
countToFifty();
countFromOne(5);
threeAndFiveInFifty();
threeAndFive(20);
console.log(triple([5, 20, 27, 36]));
