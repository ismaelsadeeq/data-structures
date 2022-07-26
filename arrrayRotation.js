function rotate(arr,d){
  let first = arr.slice(d);
  let second = arr.slice(0,d);
  return [...first,...second]
}

function reverseArr(arr,start,end){
  while(start < end){
    var temp = arr[start]
    arr[start] = arr[end];
    arr[end] = temp
    start++
    end--
  }
}
function rotate2(arr,d,n){
  if (d == 0) return;
  // in case the rotating factor is
  // greater than array length
  d = d % n;
  reverseArr(arr,0,d-1)
  reverseArr(arr,d,n-1);
  reverseArr(arr,0,n-1)
}

console.log(rotate2([1, 2, 3, 4, 5, 6, 7 ]))


//rotate an array by 1 
//store arr[arr.length-1] in a variable;
//shift all values of arr leftmost by 1 starting from end; 
function rotateArray1(arr){
  let temp = arr[arr.length-1];
  for(let i =arr.length-2;i>=0;i--){
    arr[i+1] = arr[i];
  }
  arr[0] = temp
  return arr
}

console.log(rotateArray1([1, 2, 3, 4, 5]))



function maxSumArrRotation(arr){

  var res = Number.MIN_VALUE;

  for(let i=0; i<arr.length; i++){
    if(i==0){
      let sum = 0;
      for(let i=0;i<arr.length;i++){
        sum += arr[i]*i
      }
      res = Math.max(res, sum)
    }else{
      let sum = 0
      newArr = rotate(arr,i)
      for(let i=0;i<newArr.length;i++){
        sum += newArr[i]*i
      }
      res = Math.max(res,sum)
    }
  }
  return res

}
function maxSumArr2(arr) {

  let currSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currSum+= arr[i]
  }

  let arrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    arrSum+= arr[i] * i
  }

  let res = arrSum
  for (let i = 1; i < arr.length; i++) {
    let nextVal = (arrSum - (currSum - arr[i-1])+ (arr[i-1] * (arr.length -1)))
    arrSum = nextVal; 
    res = Math.max(res,nextVal);
  }
  return res
}
//Algorithm.

function thereIsSum(arr,sum){
  if(arr.length<=1 || sum ===0){
    return false
  }
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = true
  }
  for(let i=0;i<arr.length;i++){
    let val = sum - arr[i];
    if(val !==arr[i] &&obj[val]){
      return true
    }
  }
  return false
  
}


function thereIsSum2(arr,sum){

  let s = new Set();
  for(let i=0;i<arr.length;i++){
    let temp = sum - arr[i];

    if(s.has(temp)){
      return true
    }
    s.add(arr[i]);
  }
  return false

}