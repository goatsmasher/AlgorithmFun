const isPrime = (num) => {
	const result = num < 4 ?
		true
		:
		num % 2 === 0 ||
			num % 3 === 0 ?
			false
			:
			true;
	return result;
};

const getFactorial = num => {
	if (num === 0) {
		return 1;
	}
	else {
		return num * getFactorial(num - 1);
	}
};

const fib = num => {
	if (num <= 1) {
		return num;
	}
	else {
		return fib(num - 1) + fib(num - 2);
	}
};

const isSorted = array => {
	let prev = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] < prev) {
			return false;
		}
		prev = array[i];
	}
	return true;
};

const reverseString = string => {
	let reversedString = "";
	for (let i = string.length - 1; i >= 0; i--) {
		reversedString += string[i];
	}
	return reversedString;
};


const isPalindrome = string => string.toLowerCase() === string.split("").reverse("").join("").toLowerCase();

