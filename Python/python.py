
def printRange(start, end):
	for n in range(start, end + 1):
		print n


# printRange(1,255);

def printIntsAndSum(start, end):
	sumSoFar = 0;
	for n in range(start, end + 1):
		sumSoFar += n
		print "Current Int is:", n, "- Currently the sum is:", sumSoFar

# printIntsAndSum(0, 25)

def findMaxofArray(inputArray):
	print max(inputArray)

# findMaxofArray([1,4,3])

def arrayWithOdds(start, end):
	for n in range(start, end + 1):
		if (n % 2 != 0):
			print n

# arrayWithOdds(1,255)

def greaterThanY(inputArray, Y):
	count = 0
	for n in inputArray:
		if (n > Y):
			count += 1;
	print count

# greaterThanY([1,2,3,4,5], 3)

def printMaxMinAverage(inputArray):
	print max(inputArray)
	print min(inputArray)
	print sum(inputArray)

# printMaxMinAverage([1,2,3,4,5])


def iterateThroughArray(inputArray):
	for n in inputArray:
		print n

# iterateThroughArray([1,2,3,4,5])

def squareTheValues(inputArray):
	for n in inputArray:
		print n * n

# squareTheValues([1,2,3,4,5])

def zeroOutNegativeNumbers(inputArray):
	for n in inputArray:
		if (n < 0):
			inputArray[n] = 0
	print inputArray

zeroOutNegativeNumbers([-2,-1,0,1,2])		
