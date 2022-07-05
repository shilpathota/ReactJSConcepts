const arr = [5,1,3,2,6];

//map,filter and reduce are higher order functions
//map is mapping each value to the function and returns an array
function double(x){
    return x*2;
}
const ouptut = arr.map(double);

const output2 = arr.map(x=>x.toString(2));

//filter is used to filter the array
const arrayval = [5, 1, 4,6,7];

function isOdd(x){
    return x%2 !== 0;
}
//filter all the odd values
const output3 = arrayval.filter(isOdd);
const output4 = arrayval.filter(x => x > 4);

//reduce - take all elments of array and find the single value
//sum or max
function findSum(arr){
    let sum = 0;
    for (let i=0;i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log(findSum(arr));
//same functionality using reduce
//first argument of reduce is function and second argument is initial value
//the function has 2 arguments which are accumulator and current
const ouput5 = arr.reduce(function (acc,curr){
    acc = acc + curr;
    return acc;
},0);

//find max value
const output6 = arr.reduce(function (max,curr){
    if(curr > max){
        max = curr;
    }
    return max;
},0);
