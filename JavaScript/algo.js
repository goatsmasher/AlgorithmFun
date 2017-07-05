// **~~~~~~**
// Basic 13 Algorithms
// **~~~~~~**

function printRange(start, end) {
	while (start <= end) {
		console.log(start);
		start += 1;
	}
}

// printRange(1, 255);

function printIntsAndSum(start, end) {
	let sumSoFar = 0;
	while (start <= end) {
		sumSoFar += start;
		console.log(`Current Int: ${start} - Currenlty the total sum is ${sumSoFar}`);
		start += 1;
	}
}

// printIntsAndSum(0, 255);

function findMaxOfArray(inputArray) {
	let max = inputArray[0];
	let len = inputArray.length;
	for (let i = 1; i < len; i++) {
		if (inputArray[i] > max) {
			max = inputArray[i];
		}
	}
	console.log(max);
}

// findMaxOfArray([1, 4, 3]);

function sortThenFindMaxOfArray(inputArray) {
	inputArray.sort();
	console.log(inputArray[inputArray.length - 1]);
}
// sortThenFindMaxOfArray([1, 4, 3]);

function arrrayWithOdds(start, end) {
	for (let i = start; i <= end; i++) {
		if (i % 2 !== 0) console.log(i);
	}
}

// arrrayWithOdds(1, 255);

function greaterThanY(inputArray, Y) {
	let count = 0;
	inputArray.forEach(function (element) {
		if (element > Y) count += 1;
	}, this);
	console.log(count);
}

// greaterThanY([1, 2, 3, 4, 5], 3);

function printMaxMinAverage(inputArray) {
	let max = inputArray[0],
		min = inputArray[0],
		sum = 0;
	inputArray.forEach((element) => {
		if (element > max) max = element;
		if (element < min) min = element;
		sum += element;
	});
	console.log("Max:", max);
	console.log("Min:", min);
	console.log("Average:", sum / (inputArray.length - 1));
}

// printMaxMinAverage([1, 2, 3, 4, 5]);

function staircase(n) {
	var line = Array(n + 1).fill(" ");
	line[n] = "\n";
	for (var i = n - 1; i >= 0; i--) {
		line[i] = "#";
		process.stdout.write(line.join(""));
	}
}

// staircase(6);
function StairCaseRepeat(n) {
	var s = "";
	for (var i = 1; i <= n; i++) {
		s += " ".repeat(n - i) + "#".repeat(i) + "\n";
	}
	console.log(s);
}

// StairCaseRepeat(6);

function iterateThroughArray(inputArray) {
	for (var i = 0; i < inputArray.length; i++) {
		console.log(inputArray[i]);
	}
}

// iterateThroughArray([1, 2, 3, 4, 5]);

function squareTheValues(inputArray) {
	inputArray.map(element => {
		console.log(element * element);
	});
}

// squareTheValues([1, 2, 3, 4, 5]);

function zeroOutNegativeNumbers(inputArray) {
	for (let i = 0; i < inputArray.length; i++) {
		if (inputArray[i] < 0) {
			inputArray[i] = 0;
		}
	}
	console.log(inputArray);
}

// zeroOutNegativeNumbers([-2, -1, 0, 1, 2]); 

function returnAverageofUnsortedArray(inputArray) {
	let sum = 0;
	let len = inputArray.length;
	for (let i = 0; i < len; i++) {
		sum += inputArray[i];
	}
	console.log((sum / len).toPrecision(2));
}


// returnAverageofUnsortedArray([1, 6, 2, 8, 4, 9, 10]);

function balancePoint(inputArray) {
	for (let i = 1; i < inputArray.length; i++) {
		var leftTotal = 0,
			rightTotal = 0;
		inputArray.slice(0, i).map(element => { leftTotal += element; });
		inputArray.slice(i).map(element => { rightTotal += element; });
		if (leftTotal === rightTotal) return true;
	}
	return false;
}

// console.log(balancePoint([1, 2, 3, 4, 10]));
// console.log(balancePoint([1, 2, 4, 2, 1]));

function balanceIndex(inputArrary) {
	for (let i = 1; i < inputArrary.length; i++) {
		var balancePoint = i + 1,
			leftTotal = 0,
			rightTotal = 0;
		inputArrary.slice(0, balancePoint).map(element => leftTotal += element);
		inputArrary.slice(balancePoint + 1).map(element => rightTotal += element);
		if (leftTotal === rightTotal) return balancePoint;
	}
	return -1;
}

// console.log(balanceIndex([9, 9])); // => return -1
// console.log(balanceIndex([-2, 5, 7, 0, 3])); // => return 2 
