using System;
using System.Collections.Generic;

namespace _Algorithms
{
    class Program
    {
        static void Main(string[] args)
        {
			// Algorithm.printRange(1, 255);
			// Algorithm.printIntsAndSum(0, 25);
			int[] input = {1,2,3,4,5};
			// Algorithm.findMaxOfArray(input);
			// Algorithm.arrayWithOdds(1,255);
			// Algorithm.greaterThanY(input, 3);
			// Algorithm.iterateThroughArray(input);
			Algorithm.squareTheValues(input);
        }
    }
	class Algorithm {
		public static void printRange(int start, int end)
		{
			for (int i = start; i <= end; i++) 
			{
				System.Console.WriteLine(i);
			}
		}
		
		public static void printIntsAndSum(int start, int end)
		{
			int sumSoFar = 0;
			for (int i = start; i <= end; i++)
			{
				sumSoFar += i;
				System.Console.WriteLine("Current Int is: {0} - Currently the Sum is: {1}", i, sumSoFar);
			}
		}

		public static void findMaxOfArray(int[] inputArray) 
		{
			int max = inputArray[0];
			for (int i = 1; i < inputArray.Length; i++)
			{
				if (inputArray[i] > max)
				{
					max = inputArray[i];
				}
			}
			System.Console.WriteLine(max);	
		}

		public static int[] arrayWithOdds(int start, int end)
		{
			List<int> oddList = new List<int>();
			for (int i = start; i <= end; i++ ){
				if (i % 2 != 0)
				{
					oddList.Add(i);
				}
			}
			foreach (var item in oddList)	
			{
				System.Console.WriteLine(item);
			}
			int[] oddArray = oddList.ToArray();
			return oddArray;
		}

		public static void greaterThanY(int[] inputArray, int Y)
		{
			int count = 0;
			foreach (var item in inputArray)
			{
				if (item > Y)
				{
					count += 1;
				}
			}
			System.Console.WriteLine(count);
		}

		public static void iterateThroughArray(int[] inputArray)
		{
			for (int i = 0; i < inputArray.Length; i++)
			{
				System.Console.WriteLine(inputArray[i]);
			}
		}

		public static void squareTheValues(int[] inputArray)
		{
			foreach (var item in inputArray)
			{
				System.Console.WriteLine(item * item);
			}
		}
	}
}
