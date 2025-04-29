1. At line 12, console.log would print out prices.length or "3", since the i would be incremented until it reaches the value of prices.length. 
2. At line 13, console.log would print out prices[2] * (1 - discount), or 150. 
3. At line 14, console.log would print out Math.round(150 *  100) / 100, since it would hold the value of the last iteration of the loop, at i = 2, where discountedPrice would 150.
4. This function wil return [50, 100, 150], since it just calculate the half price of each value in the array. 
5. At line 12, this console.log statement will return an error since we are trying to reference the variable "i" outside of its scope. 
6. At line 13, this console.log statement will return an error since we are trying to reference the variable "discountedPrice" outside of its scope, in the for loop.
7. At line 14, since finalPrice is in the scope, it will print out the last value pushed to the array, which in this case would be 150.
8. This function will return [50, 100, 150], since discounted would still be in the scope of the return statement.
9. At line 11, this would cause an error because the variable "i" would be referenced outside of its scope, since it exists in the scope of the loop.
10. At line 12, this console.log statement will print out the value of prices.length, which would be 3.
11. This function would return [50, 100, 150], even though discounted is a const, you can still push values to it.