const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorreced = dogsJulia.slice();
  dogsJuliaCorreced.splice(0,1);
  dogsJuliaCorreced.splice(-2);
//   dogsJulia.slice(1,3);      
  const dogs = dogsJuliaCorreced.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog,i){
    if(dog >= 3){
        console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`);
    }else{
        console.log(`Dog number ${i+1} is still a puppy`);
    }
    
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
