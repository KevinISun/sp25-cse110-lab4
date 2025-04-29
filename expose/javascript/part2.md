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
12. A. student.name
    B. student['Grad Year'] 
    C. student.greeting()
    D. student['Favorite Teacher].name
    E. student.courseLoad[0]
13. A. '32', concatenates 2 to 3 since 3 is a string so 2 is converted to a string also.
    B. 1, since we have a minus sign, we typecast 3 to an int so we can do the arithmetic.
    C. 3, since null is converted to a number, 0, so 3 + 0
    D. '3null', since 3 is a '3' is a string, we do string concatenation
    E. 4, since we convert true to 1 and do the arithmetic
    F. 0, both are typecasted to 0, since addition converts it to integers
    G. '3undefined', since '3' is a string, we do string concatenation and typecast undefined into a string.
    H. NaN, since the minus sign tries to do arthimetic, it converts '3' into 3. However, since undefined is converted to NaN, the result will be NaN.
14. A. 
    B. 
    C. 
    D. 
    E.
    F.
15. 