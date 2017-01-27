console.log('ready');
function getsum(x,y) {
    var sum = x + y;
    return sum
}

function bday(x,y) {
    if (x || y == 1) && (x || y == 26){
        console.log('How did you know?');
    }
    else {
        console.log('Just another day');
    }
}

function timesSix(){
    var i = 6
    while (i <= 60000){
        console.log(i);
        i+=6;
    }
}

function PrintAndCount() {
    var count = 0;
    for (var i = 512; i <= 4096; i++){
        if (i % 5 === 0){
            console.log(i);
            count++;
        }
    }
    console.log(count);
}

function CountingDojoWay(){
    for (var i = 1; i <= 100; i++){
        if (i % 10 === 0){
            console.log('CodingDojo');
        }
        else if (i % 5 === 0){
            console.log('Coding');
        }
        else {
            console.log(i);
        }
    }
}

function WhatDoYouKnow(incoming){
    console.log(incoming);
}

function CountdownFours(){
    var i = 2016;
    while (i >= 1) {
        console.log(i);
        i -= 4;
    }
}

function flexCount(lowNum, highNum, mult){
     for (var i = highNum; i >= lowNum; i--) {
         if (i % mult === 0){
             console.log(i);
     }
}

function Countdown(x){
    var arr = [];
    for (var i = x; i <= 0; i--){
        arr.push(i);
    }
    return(arr);
}

function PrintandReturn(x,y){
    var arr = [x,y];
    console.log(arr[0]);
    return arr[1];
}

function FirstPlugLength(arr){
    return (arr[0] + arr.length);
}

function valuesgreaterthansecond(arr){
    var count = 0
    for (var i = 2; i < arr.length; i++){
        console.log(arr[i]);
        count+=1
    }
    return count;
}
 
 function fitthefirstvalue(arr){
     if (arr[0] > arr.length){
         console.log('Too Big!');
        }
     else if (arr[0] < arr.length){
         console.log('Too Small!');
        }
        else {
            console.log('Just Right!');
        }
     }

function FtoC(f){
    var c = (f - 32) * 5/9;
    console.log(c);
}

function CtoF(c){
    var f = (9/5 * c) + 32;
    console.log(f);
}

function BiggieSize(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr
}

function PrintLowReturnHigh(arr){
    var min = arr[0];
    var max = arr[0];
    for (var i = 0; i < arr.length-1; i++){
        if (arr[i] < min){
            min = arr[i];
        }
        else if (arr[i] > max){
            max = arr[i];
        }
    }
    console.log(min, max);
}

function PrintOneReturnAnother(arr){
    console.log(arr[arr.length - 2]);
    for (var i = 0; i < arr.length-1; i++){
        if (arr[i] % 2 !== 0){
            return arr[i];
            break;
        }
    }
}

function DoubleVision(arr){
    var arrnew = [];
    for (var i = 0; i < arr.length; i++){
        arrnew.push(arr[i] * arr[i])
    }
    return arrnew;
    return arr;
}

function CountPositives(arr){
    var countPositives = 0
    for (var i = 0; i < arr.length; i++){
        if (arr[i] >= 0){
            countPositives = countPositives + 1;
        }
    }
    arr[arr.length-1] = countPositives;
    return arr;
}

function EvensandOdds(arr){
    for (var i = 0; i < arr.length-1; i++){
        if (arr[i] == arr[i+1] && arr[i] == arr[i+2] && arr[i] % 2 !== 0){
            console.log("That's Odd!");
        }
        else if (arr[i] == arr[i+1] && arr[i] == arr[i+2] && arr[i] % 2 === 0){
            console.log("Even more so!");
        }
    }
}


function Increments(arr){
    for (var i = 1; i < arr.length; i + 2){
        arr[i] = arr[i] + 1;
    }
    return arr;
}

function PreviousLengths(arr){

}

function AddSeventoMost(arr){
    var arrnew = [arr[0]];
    for (var i = 1; i < arr.length; i++){
        arrnew[i] = arr[i] + 7;
    }
    return arrnew;
    return arr;
}

function ReverseArray(arr){
    var newarr = [];
    for (var i = arr.length-1; i >= 0; i--){
        newarr.push(arr[i]);
    }
    arr = newarr;
    return arr;
}

function AlwaysHungry(arr){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == 'food'){
            console.log('yummy');
        }
        else {
            count++;
        }
    }
    if (count == arr.length) {
        console.log("I'm Hungry");
    }
}

function ScaleTheArray(arr,num){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * num;
    }
    return arr;
}

function myBigNum(x){
    console.log(Math.floor(x/100 % 10));
}
var quarters = 4
function randomChoice(){
    while (quarters > 0){
        var choice = prompt("Would you like to roll?");
        if (choice == "yes"){   
            var winner = 0;
            if (Math.random() <= .01){
                winner = Math.floor((Math.random() + 1) * 50);
                quarters += winner;
                console.log("You just won " + winner + " quarters!");
            }
            else {
                console.log("Sorry, not a winner");
                quarters--;
                console.log("You have " +quarters+ " left in your bank");
            }
        }
        else {
            console.log("Okay... well you can't play then :(");
            break;
        }
    }
    console.log("You don't have enough quarters");
}




1-100 chance to win
50-100 coins per win - use Math.random & Math.floor
If the user still has quarters, use Math.random to determine if user won
if they win, return the number of quarters won to the users pool
return message if all quarters have been used

function trappedRain(arr){
    if (arr.length <= 2){ 
        console.log(0); //checking to see if we can even collect rainwater based on length
    }
    var left = arr[0]; var right = arr[arr.length-1]; var rain = 0;
    var leftMax = arr[left]; var rightMax = arr[right];

    while (left < right){
        if (arr[left] < arr[right]){
            leftMax = Math.max(leftMax, arr[++left]); //we find the higher side and set it to leftMax
            rain += leftMax - arr[left]; //so that we properly subtract 'higher - lower' to find rain value
        }
        else {
            rightMax = Math.max(rightMax, arr[--right]);
            rain += rightMax-arr[right];
        }
    }
    console.log("Total rain collected is " + rain);
}
trappedRain([4,1,8,9])