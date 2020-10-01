//importing statistic
var Statistics = require('/Users/johnson/webScrapingNodeJS/node_modules/statistics.js');
//getting the file from json
var json = require('/Users/johnson/webScrapingNodeJS/x_dev/data/data-2020-09-29T21_03_31/data.json'); 
var numbers=[];
numbers=json.data
//declaring variables for caculation
let prices=[];
let sum=0;
//turning string to numbers
for(let i =0;i<numbers.length;i++){
    let number =numbers[i];
    number =number.slice(4,30)
    number =number.replace(/,/,"")
    number =parseFloat(number);
    prices[i]=number
}
//here comes the math that nobody loves 
var stats = new Statistics(prices)
var mean = stats.arithmeticMean(prices);
var median = stats.median(prices);
var max = stats.maximum(prices);
var min = stats.minimum(prices);
var stdDevAge = stats.standardDeviation(prices);
var excess = stats.excessKurtosis(prices)
console.log("----------------------------------------------------------------")
console.log("the mean of all prirces is " + mean)
console.log("the mean of all prirces is " + median)
console.log("the maximum of all prirces is " + max)
console.log("the minimum of all prirces is " + min)
console.log("the standardDivision of all prirces is " + stdDevAge)
console.log("I've forget what this means" + excess)
console.log("----------------------------------------------------------------")
/*
//caculating sum
for(let i =0;i<numbers.length;i++){
    sum = sum+prices[i]
}
console.log(sum)
//caculating mean
sum=sum/numbers.length
console.log("the average is " + sum)
*/