function fibonacciGenerator (n){
 
  var fibList = [0];
  while (fibList.length <= n-1){
    if (n === 1){
      return fibList;
    } 
    else if (fibList.length < 2){
      fibList.push(1);
    } 
    else {
      fibList.push(fibList[fibList.length - 2] + fibList[fibList.length - 1]);
    }
  }
  return fibList;
}
var output = fibonacciGenerator(2);
console.log(output);
