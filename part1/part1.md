## Part1a
---
**var declaration:**

1.  20
2.  20

**let declaration**

3. 20
4. It returns an error because "let" has block scope. The variable result will delete after the if else statement.

**const declaration**

5. Error, because it assign in line 5 so it can not be reassign.
6. Error because const has block scope.

## Part1b
---
1. It will print 3, the varule in "i" because the prices has length of 3 and i is a var so it has no block scope.
2. It will print 150 because the last loop discountedPrice = (300)*0.5 and since it is var it has no block scope.
3. It will print 150 because the last loop finalprice = (150*100)/100 and since it is var it has no block scope.
4. It will return a array of all the prices has been discount by 50%. Because the for loop will loop every signle element in prices and mutipliy them by 0.5 and round up then push it into the discounted array.
5. It will given an error because the let key word has a block scope. The varible i will deleted after the for loop end.
6. It will given an error because the let key word has a block scope. The varible discountedPrice will deleted after the for loop end.
7. print 150 because the finalprice is define outside of the for loop so it will hold the value it does not deleted the variable after the for loop.
8. It will return a array of all the prices has been discount by 50%. Because the for loop will loop every signle element in prices and mutipliy them by 0.5 and round up then push it into the discounted array. Since the array is created outside the for loop so it will has all the dicsounted prices.
9. It will given an error because the let key word has a block scope. The varible i will deleted after the for loop end.
10. It will print 3 because the variable is equal to the length of the prices, and the print statement is in side of the block.
11. It will return a array of all the prices has been discount by 50%. Since we use const key word we did not change the variable discounted we just store the value in to the array.           
12. A)student.name;

    B)student['Grad Year'];   

    C)student.greeting();

    D)student['Favorite Teacher'].name;

    E)student.courseLoad[0];
13. A)32  since integers map to their exact string representation
    
    B)1 because 3 is take in as integer

    C)3 because null is maps to 0

    D) 3null since integers map to their exact string representation

    E)4 since true maps to 1

    F)0 since false and null maps to 0

    G)3undefined since objects map to the string [object object]

    H)NaN because undefined becomes NaN

14. A)True because 2 is greater than 1
    
    B)False because the first char"2" is greater than first char"1"

    C)True becasue '2' is maps to integer

    D)False because it has different type

    E)False because true is maps to int 1

    F)True because Boolean(2) return true because 2 is not 0

15. === is strict equality comparison, which returns false for the values which are not of a similar type. == is cimparison operator, which transforms the operands having the smae type before comaprison.

17 The result will be [2,4,6].
    
    1. The modifyArray has two para one is array and callback is a function
    2. create a new array
    3. The loop will run 3 time and acces the array index.
    4. each time the we run callback it will run the function dosomething with number array[i] and double the number and then return
    5. the return value will be push in to the new array
    6. repeat step 4 and 5 3 time
    7. return the new array.

19 1
     
    4 
    
    3 
    
    2
    


