/*
2723. Add Two Promises
Easy
premium lock icon
Companies
Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
 

Example 1:

Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
Output: 7
Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
Example 2:

Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
Output: -2
Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.
 

Constraints:

promise1 and promise2 are promises that resolve with a number

*/

{

    const addTwoPromises = async function(promise1, promise2) {
     return Promise.all(arguments).then(val=> val.reduce((a,b)=> (a+b)))
};
}

{

    const addTwoPromisesFAST = async function (promise1, promise2){
        return  (await Promise.all([promise1, promise2]).then(([a,b])=> a+b))
    }
    
    let p1 =  new Promise(resolve => setTimeout(() => resolve(2), 1))
    let p2 = new Promise(resolve => setTimeout(() => resolve(5), 2))
    let x = addTwoPromisesFAST(p1,p2)
    console.log(x)
}



/*
Input
promise1 =
new Promise(resolve => setTimeout(() => resolve(2), 20))
promise2 =
new Promise(resolve => setTimeout(() => resolve(5), 60))
Output
7
Expected
7

*/

